const { launch } = require('puppeteer');
const { minify } = require('html-minifier-terser');
const cheerio = require('cheerio');
const fs = require('fs');
const { resultToHtml, writeHtmlFile } = require('./src/utils/htmlWriter');

const URL = process.argv[2];
if (!URL) throw new Error('Usage: node fullsite.js <url>');

(async () => {
  const browser = await launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();

  // 1. Collect network JSON
  const apiCalls = [];
  page.on('response', async (res) => {
    try {
      const json = await res.json();
      apiCalls.push({ url: res.url(), json });
    } catch {
      /* ignore */
    }
  });

  // 2. Go to page & infinite scroll
  await page.goto(URL, { waitUntil: 'networkidle2', timeout: 30_000 });
  await page.evaluate(async () => {
    let last = 0;
    while (true) {
      window.scrollTo(0, document.body.scrollHeight);
      await new Promise((r) => setTimeout(r, 1000));
      const h = document.body.scrollHeight;
      if (h === last) break;
      last = h;
    }
  });

  // 3. Grab final DOM
  const fullHtml = await page.content();
  const minHtml = await minify(fullHtml, {
    collapseWhitespace: true,
    removeComments: true,
    removeScriptComments: true,
    removeRedundantAttributes: true,
    removeStyleLinkTypeAttributes: true,
    removeTagWhitespace: true,
    minifyCSS: true,
    minifyJS: true,
  });

  // 4. Cheerio extras
  // const $ = cheerio.load(fullHtml);
  // const meta = {
  //   title: $('title').text().trim(),
  //   description: $('meta[name="description"]').attr('content'),
  // };
  // const links = $('a[href]')
  //   .map((_, a) => ({
  //     text: $(a).text().trim(),
  //     href: $(a).attr('href'),
  //   }))
  //   .get();
  // const images = $('img[src]')
  //   .map((_, img) => ({
  //     src: $(img).attr('src'),
  //     alt: $(img).attr('alt') || '',
  //   }))
  //   .get();

  // 5. Output

  // const html = resultToHtml(minHtml);
  const file = writeHtmlFile(`scrape_${Date.now()}.html`, fullHtml);
  // const result = { url: URL, meta, cleanHtml: minHtml, links, images, apiCalls };
  // res.json({ ...result, htmlFile: file });

  // console.log(JSON.stringify(out, null, 2));

  // fs.writeFileSync('result.json', JSON.stringify(result, null, 2));
  await browser.close();
})();
