const express = require('express');
const router = express.Router();
const WebScraper = require('../services/WebScraper');
const { resultToHtml, writeHtmlFile } = require('../utils/htmlWriter'); // keep your util

const scraper = new WebScraper();

router.get('/', (req, res) =>
  res.json({
    name: 'Web Scraping API',
    version: '2.0',
    endpoints: {
      'POST /scrape': 'single URL',
      'POST /scrape/multiple': 'array of URLs',
      'POST /scrape/batch': 'array of task objects',
    },
  })
);

router.get('/health', (req, res) => res.json({ status: 'ok', uptime: process.uptime() }));

router.post('/scrape', async (req, res) => {
  const { url, selectors, waitTime, extractImages, extractLinks, screenshot } = req.body;
  if (!url) return res.status(400).json({ error: 'URL required' });
  try {
    new URL(url);
  } catch {
    return res.status(400).json({ error: 'Bad URL' });
  }

  const result = await scraper.scrapePage(url, {
    selectors,
    waitTime,
    extractImages,
    extractLinks,
    screenshot,
  });
  const html = resultToHtml(result);
  const file = writeHtmlFile(`scrape_${Date.now()}.html`, html);
  res.json({ ...result, htmlFile: file });
});

router.post('/scrape/multiple', async (req, res) => {
  const { urls, batchSize = 5, ...rest } = req.body;
  if (!Array.isArray(urls) || urls.length > 50)
    return res.status(400).json({ error: 'Bad or too many URLs' });

  const results = await scraper.scrapeMultiple(urls, { batchSize, ...rest });
  const files = results.map((r, i) => {
    const html = resultToHtml(r);
    return writeHtmlFile(`multi_${i}_${Date.now()}.html`, html);
  });

  res.json({
    total: urls.length,
    successful: results.filter((r) => !r.error).length,
    results: results.map((r, i) => ({ ...r, htmlFile: files[i] })),
  });
});

router.post('/scrape/batch', async (req, res) => {
  const { tasks } = req.body;
  if (!Array.isArray(tasks) || tasks.length > 20)
    return res.status(400).json({ error: 'Bad or too many tasks' });

  const results = [];
  for (const t of tasks) {
    const { url, ...opts } = t;
    if (!url) {
      results.push({ error: 'missing url' });
      continue;
    }
    results.push(await scraper.scrapePage(url, opts));
  }

  const files = results.map((r, i) => {
    const html = resultToHtml(r);
    return writeHtmlFile(`batch_${i}_${Date.now()}.html`, html);
  });

  res.json({
    total: tasks.length,
    successful: results.filter((r) => !r.error).length,
    results: results.map((r, i) => ({ ...r, htmlFile: files[i] })),
  });
});

module.exports = router;
