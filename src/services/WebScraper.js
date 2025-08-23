const cheerio = require('cheerio');
const axios = require('axios');
const puppeteer = require('puppeteer');

class WebScraper {
  constructor() {
    this.axios = axios.create({
      timeout: 15000,
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123 Safari/537.36',
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      },
    });
  }

  /* ---------- public ---------- */
  async scrapePage(url, opts = {}) {
    const {
      selectors,
      waitTime = 0,
      extractImages = false,
      extractLinks = false,
      screenshot = false,
    } = opts;
    if (waitTime) await this.#delay(waitTime);

    let result = await this.#tryStatic(url, selectors);
    if (!result.ok) result = await this.#tryDynamic(url, selectors, screenshot);

    const $ = cheerio.load(result.html);
    result.meta = this.#extractMeta($);
    if (extractLinks) result.links = this.#extractLinks($, url);
    if (extractImages) result.images = this.#extractImages($, url);

    return result;
  }

  async scrapeMultiple(urls, opts) {
    const { batchSize = 5, ...rest } = opts;
    const out = [];
    for (let i = 0; i < urls.length; i += batchSize) {
      const slice = urls.slice(i, i + batchSize);
      const batch = await Promise.all(slice.map((u) => this.scrapePage(u, rest)));
      out.push(...batch);
      if (i + batchSize < urls.length) await this.#delay(1000);
    }
    return out;
  }

  /* ---------- private ---------- */
  async #tryStatic(url, selectors) {
    try {
      const { data, status } = await this.axios.get(url);
      const $ = cheerio.load(data);
      return {
        ok: true,
        method: 'static',
        url,
        statusCode: status,
        html: data,
        data: this.#applySelectors($, selectors),
        timestamp: new Date().toISOString(),
      };
    } catch (err) {
      return { ok: false };
    }
  }

  async #tryDynamic(url, selectors, screenshot) {
    const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
    const page = await browser.newPage();
    try {
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
      const html = await page.content();
      const data = await this.#extractFromPage(page, selectors);
      const shot = screenshot
        ? await page.screenshot({ fullPage: true, encoding: 'base64' })
        : null;
      return {
        ok: true,
        method: 'dynamic',
        url,
        statusCode: 200,
        html,
        data,
        screenshot: shot,
        timestamp: new Date().toISOString(),
      };
    } finally {
      await page.close();
      await browser.close();
    }
  }

  #applySelectors($, selectors = {}) {
    const out = {};
    for (const [k, sel] of Object.entries(selectors)) {
      const els = $(sel);
      out[k] = els.length === 1 ? els.text().trim() : els.map((_, el) => $(el).text().trim()).get();
    }
    return out;
  }

  async #extractFromPage(page, selectors = {}) {
    const out = {};
    for (const [k, sel] of Object.entries(selectors)) {
      const els = await page.$$(sel);
      if (els.length === 1) out[k] = await page.evaluate((el) => el.textContent.trim(), els[0]);
      else
        out[k] = await Promise.all(els.map((el) => page.evaluate((e) => e.textContent.trim(), el)));
    }
    return out;
  }

  #extractMeta($) {
    const meta = {};
    $(
      'meta[property^="og:"], meta[name^="twitter:"], meta[name="description"], meta[name="keywords"]'
    ).each((_, el) => {
      const key = $(el).attr('property') || $(el).attr('name');
      const val = $(el).attr('content');
      if (key && val) meta[key] = val;
    });
    return meta;
  }

  #extractLinks($, base) {
    const links = [];
    $('a[href]').each((_, el) => {
      try {
        const href = $(el).attr('href');
        const text = $(el).text().trim();
        const abs = new URL(href, base).href;
        links.push({ text, url: abs, internal: abs.includes(new URL(base).hostname) });
      } catch {}
    });
    return links;
  }

  #extractImages($, base) {
    const imgs = [];
    $('img[src]').each((_, el) => {
      try {
        const src = $(el).attr('src');
        imgs.push({ src: new URL(src, base).href, alt: $(el).attr('alt') || '' });
      } catch {}
    });
    return imgs;
  }

  async #delay(ms) {
    return new Promise((r) => setTimeout(r, ms));
  }
}

module.exports = WebScraper;
