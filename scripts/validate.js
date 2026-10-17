/**
 * Project Validator and Linter Script
 * Validates syntax, links, accessibility rules, placeholders, and antislop compliance.
 */
const fs = require('fs');
const path = require('path');

let errors = 0;
let warnings = 0;

function reportPass(message) {
  console.log(`[PASS] ${message}`);
}

function reportFail(message) {
  console.error(`[FAIL] ${message}`);
  errors++;
}

function reportWarn(message) {
  console.warn(`[WARN] ${message}`);
  warnings++;
}

console.log('--- Starting HOME CLEANING Codebase Validation ---\n');

// 1. Check for forbidden em dash (R-02)
const filesToCheck = ['index.html', 'css/style.css', 'js/main.js'];
filesToCheck.forEach(file => {
  const filePath = path.join(__dirname, '..', file);
  if (!fs.existsSync(filePath)) {
    reportFail(`File not found: ${file}`);
    return;
  }
  const content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('—')) {
    reportFail(`Forbidden em dash (—) found in ${file}! Use comma, period, colon, or parentheses instead.`);
  } else {
    reportPass(`No forbidden em dash character in ${file}`);
  }
});

// 2. Validate index.html structure
const htmlPath = path.join(__dirname, '..', 'index.html');
const html = fs.readFileSync(htmlPath, 'utf8');

if (!html.includes('<!DOCTYPE html>')) {
  reportFail('index.html missing <!DOCTYPE html>');
} else {
  reportPass('HTML5 DOCTYPE present');
}

if (!html.includes('<html lang="id">')) {
  reportFail('index.html must have lang="id"');
} else {
  reportPass('Language set to lang="id"');
}

if (!html.includes('<title>HOME CLEANING | Cleaning Service di Buleleng, Bali</title>')) {
  reportFail('Title does not match required format');
} else {
  reportPass('Title is properly defined and descriptive');
}

if (!html.includes('meta name="description"')) {
  reportFail('Meta description missing');
} else {
  reportPass('Meta description present');
}

// 3. Check JSON-LD Structured Data
const jsonLdMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
if (jsonLdMatch && jsonLdMatch[1]) {
  try {
    const data = JSON.parse(jsonLdMatch[1]);
    if (data.name === 'HOME CLEANING' && data.telephone === '+6282245758655') {
      reportPass('JSON-LD structured data valid and contains correct business details');
    } else {
      reportWarn('JSON-LD structured data parsed but check properties');
    }
  } catch (e) {
    reportFail(`JSON-LD structured data contains invalid JSON: ${e.message}`);
  }
} else {
  reportFail('JSON-LD structured data not found');
}

// 4. Check Internal Anchor Links
const anchorMatches = [...html.matchAll(/href="(#[\w-]+)"/g)].map(m => m[1]);
const uniqueAnchors = [...new Set(anchorMatches)];
uniqueAnchors.forEach(anchor => {
  const id = anchor.substring(1);
  if (html.includes(`id="${id}"`)) {
    reportPass(`Internal link target ${anchor} exists in page`);
  } else {
    reportFail(`Dead anchor link! Destination ${anchor} does not exist in HTML (R-24 violation)`);
  }
});

// 5. Check WhatsApp URL formatting
const waMatches = [...html.matchAll(/href="(https:\/\/wa\.me\/[^"]+)"/g)].map(m => m[1]);
if (waMatches.length >= 4) {
  let waValid = true;
  waMatches.forEach(url => {
    if (!url.startsWith('https://wa.me/6282245758655')) {
      reportFail(`WhatsApp link does not use correct format: ${url}`);
      waValid = false;
    }
  });
  if (waValid) {
    reportPass(`All ${waMatches.length} WhatsApp links correctly formatted with +62 country code`);
  }
} else {
  reportWarn(`Found only ${waMatches.length} WhatsApp links`);
}

// 6. Check Phone link
if (html.includes('href="tel:+6282245758655"')) {
  reportPass('Telephone links correctly formatted with tel:+6282245758655');
} else {
  reportFail('Telephone link tel:+6282245758655 missing');
}

// 7. Check Image Placeholders (R-23 & R-38)
const placeholderLabels = [
  '[HERO IMAGE : PETUGAS HOME CLEANING SEDANG MEMBERSIHKAN RUANGAN]',
  '[IMAGE PLACEHOLDER : PEMBERSIHAN AREA RUMAH TINGGAL]',
  '[IMAGE PLACEHOLDER : DETAIL PENGERJAAN DEEP CLEANING]',
  '[IMAGE PLACEHOLDER : PEMBERSIHAN DAPUR & KAMAR MANDI]',
  '[IMAGE PLACEHOLDER : PEMBERSIHAN TEMPAT USAHA & RUANG KERJA]',
  '[IMAGE PLACEHOLDER : DETAIL PEMBERSIHAN PERMUKAAN / DEEP CLEANING]',
  '[IMAGE PLACEHOLDER : LIVING ROOM CLEANING : RUANG KELUARGA BERSIH]',
  '[IMAGE PLACEHOLDER : DAPUR BERSIH : AREA MEJA & KABINET]',
  '[IMAGE PLACEHOLDER : SANITASI KAMAR MANDI : LANTAI & DINDING]',
  '[IMAGE PLACEHOLDER : DETAIL PERMUKAAN & SUDUT RUANGAN]',
  '[IMAGE PLACEHOLDER : TIM HOME CLEANING / SUASANA KERJA]'
];

let allPlaceholdersFound = true;
placeholderLabels.forEach(label => {
  if (html.includes(label)) {
    reportPass(`Required image placeholder present: ${label.substring(0, 45)}...`);
  } else {
    reportFail(`Missing required placeholder label: ${label}`);
    allPlaceholdersFound = false;
  }
});

// 8. Validate JS file syntax
try {
  const jsContent = fs.readFileSync(path.join(__dirname, '..', 'js/main.js'), 'utf8');
  new Function(jsContent);
  reportPass('js/main.js syntax parsed successfully');
} catch (e) {
  reportFail(`js/main.js syntax error: ${e.message}`);
}

console.log('\n--- Validation Summary ---');
console.log(`Errors: ${errors}, Warnings: ${warnings}`);
if (errors > 0) {
  console.error('\nFAILED: Please resolve errors above.\n');
  process.exit(1);
} else {
  console.log('\nSUCCESS: All tests and linters passed perfectly!\n');
  process.exit(0);
}
