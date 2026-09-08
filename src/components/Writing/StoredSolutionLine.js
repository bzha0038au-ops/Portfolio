import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Particle from "../Particle";

function StoredSolutionLine() {
  return (
    <Container fluid className="writing-section">
      <Particle />
      <Container className="writing-article">
        <Row>
          <Col md={12}>
            <p className="writing-back">
              <Link to="/writing">&larr; Writing</Link>
            </p>

            <h1 className="writing-title">
              The proof was already there, and I threw it away
            </h1>
            <p className="writing-dek">
              A hint button in a puzzle game went from a three-second search that
              usually found nothing to a three-millisecond lookup that always
              finds something. The fix was not a faster search.
            </p>
            <p className="writing-meta">
              XO Escape &middot; Cocos Creator 3.8 &middot; TypeScript
            </p>

            <h2>The button was not doing its job</h2>
            <p>
              XO Escape is a puzzle game where you drag pieces to complete runs
              and clear the board. It has a HINT button, and the contract that
              name implies is that pressing it shows you a move that leads
              somewhere.
            </p>
            <p>
              I benchmarked what it actually did.{" "}
              <code>npm run bench:hint 10 3000</code> gives the planner three
              seconds of thinking per board &mdash; far longer than any player
              will sit and wait. On the twenty-seven boards from level 34
              onward, it found a route to the end on <strong>three</strong>. The
              other twenty-four fell through to the fallback tier: &ldquo;a move
              a competent player would make.&rdquo; That is honest, and it is not
              guidance. The button was named HINT and was mostly offering a
              nudge.
            </p>

            <h2>Three fixes that all failed the same way</h2>
            <p>
              I tried three things before this one. They are all written up in
              the project log, and they have one thing in common: every one of
              them was an attempt to make <em>the search</em> better. Better
              ordering, better pruning, a bigger budget. None of them moved the
              number meaningfully, because the search was not the part that was
              wrong.
            </p>

            <h2>The observation that mattered</h2>
            <p>
              Boards in this game are generated, not hand-authored. Nothing ships
              until a scripted player has actually cleared it &mdash; that
              playout is how the generator knows a board is solvable at all.
            </p>
            <p className="writing-pull">
              Every shipped board was already proved clearable by playing it out,
              and then the proof was thrown away.
            </p>
            <p>
              The runtime was being asked to rediscover, in three seconds and
              usually failing, something the build had already found and
              discarded. Keeping it costs about a kilobyte per board.
            </p>

            <h2>Storing a clear in four characters a move</h2>
            <p>
              <code>SolutionLine.ts</code> encodes a clear as four characters per
              move, with base-36 coordinates:
            </p>
            <pre className="writing-code">
{`d x y dir     a drag: the piece at (x, y) steps one cell along dir
e x y code    an escape: the run whose low end is (x, y),
              on axis code >> 1, read as kind code & 1`}
            </pre>
            <p>
              Two details are load-bearing. The <em>kind</em> has to be recorded
              because a wildcard belongs to neither kind until a run claims it,
              so &ldquo;the run through this cell&rdquo; has no answer without
              it. And escapes that a drag sets off are deliberately{" "}
              <em>not</em> recorded: a drag clears whatever run it completed, in
              the playout and in the model alike, so writing them down would mean
              the two pieces of code had to agree twice instead of once.
            </p>
            <p>
              The solver keeps the moves of the same run that par came from, so
              par and the route are one fact rather than two &mdash; the number
              the player is asked to beat and the line that reaches it.
            </p>

            <h2>What happens when the player ignores the hint</h2>
            <p>
              A stored line only helps while the player is standing on it. Press
              HINT, play the suggested move, press it again: the rest of the line
              is the plan, free. Play something of your own and the stored line
              no longer describes your board.
            </p>
            <p>
              The recovery is a bounded breadth-first search &mdash; but for a
              much smaller question than the one the planner was failing at:
            </p>
            <p className="writing-pull">
              A clear has one target, the empty board, hundreds of moves away. A
              rejoin has every board the stored line passes through as a target,
              and the player is usually one or two moves off one of them, because
              that is how they got there.
            </p>
            <p>
              That asymmetry is the whole reason this is cheap. The budget is six
              thousand positions, which is not a search in the sense the planner
              was. A board it fails from is remembered, so a hopeless rejoin is
              not attempted again on every frame, and the level carries a total
              planning budget so a board nobody can plan for stops costing
              battery.
            </p>

            <h2>The numbers</h2>
            <p>
              L45 is the board nothing could ever plan for. Before, three seconds
              of thinking and no line. After:
            </p>
            <p className="writing-result">3005&nbsp;ms and no answer &rarr; 3&nbsp;ms and an answer</p>
            <p>
              The planner cleared three of the last twenty-seven boards. A stored
              line clears all of them, because it was not found at runtime at
              all.
            </p>

            <h2>The validator paid for itself immediately</h2>
            <p>
              The line is written by the solver and read by the game model &mdash;
              two pieces of code, one on-disk format. So{" "}
              <code>build-solutions</code> reads every line back through the
              model before keeping it, and rejects any that does not end on an
              empty board.
            </p>
            <p>
              The first run rejected two boards out of six. The cause was real:
              the scripted player will happily trade a piece with a neighbour
              holding exactly the same thing, which leaves the board as it found
              it. The model refuses a move that changes nothing &mdash; a hint
              pointing at one would walk the player in a circle &mdash; so the
              line broke there. Those drags are no longer recorded.
            </p>
            <p>
              A round-trip check between a writer and a reader is cheap to build
              and finds the class of bug that is worst to ship: the two halves
              disagreeing about a format they both think they understand.
            </p>

            <h2>A payoff I did not expect</h2>
            <p>
              Par was much looser than anyone knew. Because the line is now
              measured rather than reported, and because storing a route is worth
              a wider search than merely grading one, the recorded clears came in
              far shorter than the shipped pars: <strong>L45 from 284 drags to
              102</strong>, S-STAR from 80 to 60. Par is now taken from the
              stored line&rsquo;s own drag count, so the two cannot drift apart,
              and a test asserts it.
            </p>

            <h2>What generalises</h2>
            <p>
              The reusable part is not the encoding. It is the question worth
              asking when a runtime search is too slow:
            </p>
            <p className="writing-pull">
              Has something else already computed this answer and thrown it away?
            </p>
            <p>
              Build steps, validators, test fixtures and content generators all
              routinely prove things and then discard the proof, because their
              job was the verdict and not the working. When the runtime needs that
              working, moving the computation is usually a better trade than
              optimising it &mdash; a kilobyte on disk against three seconds of a
              player&rsquo;s attention, and a thousandfold difference in the worst
              case.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default StoredSolutionLine;
