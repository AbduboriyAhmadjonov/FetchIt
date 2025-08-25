const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');

const app = express();
app.use(express.json());

app.post('/scrape', async (req, res) => {
  try {
    const { url, selectors } = req.body;
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'domcontentloaded' });

    const extractedData = {};
    for (let selector of selectors) {
      extractedData[selector] = await page.$$eval(selector, (els) =>
        els.map((el) => el.textContent.trim())
      );
    }

    await browser.close();
    res.json(extractedData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Simple scrape endpoint
app.post('/scrape-v1', async (req, res) => {
  try {
    const { url, selectors } = req.body;
    if (!url) return res.status(400).json({ error: 'URL required' });

    const { data } = await axios.get(url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9',
      },
    });
    const $ = cheerio.load(data);

    // Example: get page title & all links
    if (selectors && Array.isArray(selectors)) {
      const extractedData = {};
      selectors.forEach((selector) => {
        extractedData[selector] = $(selector)
          .map((_, el) => $(el).text())
          .get();
      });
      return res.json(extractedData);
    }

    // const title = $('title').text();
    // const links = [];
    // $('a').each((_, el) => {
    //   links.push($(el).attr('href'));
    // });

    // res.json({ title, links });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
