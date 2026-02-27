const fs = require("fs");
const path = require("path");

const localeRoot = path.join(__dirname, "..", "src", "locales");
const languages = ["en", "zh", "de", "fr", "ar", "ru", "hi"];
const translationFile = "translation.json";

function flattenKeys(obj, prefix = "") {
  return Object.entries(obj).flatMap(([key, value]) => {
    const nextKey = prefix ? `${prefix}.${key}` : key;
    if (value && typeof value === "object" && !Array.isArray(value)) {
      return flattenKeys(value, nextKey);
    }
    return [nextKey];
  });
}

function loadTranslations(language) {
  const filePath = path.join(localeRoot, language, translationFile);
  const raw = fs.readFileSync(filePath, "utf8");
  return JSON.parse(raw);
}

function diffKeys(baseKeys, targetKeys) {
  const targetSet = new Set(targetKeys);
  const baseSet = new Set(baseKeys);
  const missing = baseKeys.filter((key) => !targetSet.has(key));
  const extra = targetKeys.filter((key) => !baseSet.has(key));
  return { missing, extra };
}

const baselineLanguage = "en";
const baselineKeys = flattenKeys(loadTranslations(baselineLanguage)).sort();
let hasMismatch = false;

languages.forEach((language) => {
  const keys = flattenKeys(loadTranslations(language)).sort();
  const { missing, extra } = diffKeys(baselineKeys, keys);

  if (missing.length || extra.length) {
    hasMismatch = true;
    console.error(`\n[${language}] locale key mismatch detected`);
    if (missing.length) {
      console.error("  Missing keys:");
      missing.forEach((key) => console.error(`    - ${key}`));
    }
    if (extra.length) {
      console.error("  Extra keys:");
      extra.forEach((key) => console.error(`    - ${key}`));
    }
  }
});

if (hasMismatch) {
  process.exit(1);
}

console.log("All locale files have matching translation keys.");
