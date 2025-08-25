const fs = require('fs');
const path = require('path');

function resultToHtml(result) {
  let html = `<!DOCTYPE html><html><head><meta charset="utf-8"><title>Scrape Result</title></head><body>`;
  html += `<h1>Scrape Result for ${result.url || ''}</h1>`;
  if (result.error) {
    html += `<p style='color:red;'>Error: ${result.error}</p>`;
  } else {
    html += `<h2>Status: ${result.statusCode || ''}</h2>`;
    html += `<h3>Title: ${result.title || ''}</h3>`;
    html += `<h4>Meta</h4><pre>${JSON.stringify(result.meta, null, 2)}</pre>`;
    html += `<h4>Data</h4><pre>${JSON.stringify(result.data, null, 2)}</pre>`;
    html += `<h4>Timestamp</h4><pre>${result.timestamp || ''}</pre>`;
  }
  html += `</body></html>`;
  return html;
}

function writeHtmlFile(filename, htmlContent) {
  const outputDir = path.resolve(__dirname, '../../output');
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);
  const filePath = path.join(outputDir, filename);
  fs.writeFileSync(filePath, htmlContent, 'utf8');
  return filePath;
}

module.exports = { resultToHtml, writeHtmlFile };
