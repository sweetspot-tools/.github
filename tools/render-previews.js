// Renders the front panel of each Fairy Tapes HTML preview to profile/images.
// Usage: serve a fairy-tapes checkout over HTTP (python3 -m http.server 8765 from its root), then
//   node tools/render-previews.js http://localhost:8765/
// Needs Playwright with Chromium, and Pillow (python3) to scale the images down.
const { chromium } = require('playwright');
const { execFileSync } = require('child_process');
const path = require('path');

const PREVIEWS = {
  'the-stripper': 'src/the-stripper/docs/mockups/stripper_rack.html',
  'pillow-talk': 'src/pillow-talk/docs/mockups/pillow_rack.html',
  'hotline': 'src/hotline/docs/mockups/hotline_rack.html',
  'deep-throat': 'src/deep-throat/docs/mockups/deep_throat_rack.html',
  'happy-ending': 'src/happy-ending/docs/mockups/happy_ending_rack.html',
};
const WIDTH = 1200;
const OUT = path.join(__dirname, '..', 'profile', 'images');

(async () => {
  const base = process.argv[2] || 'http://localhost:8765/';
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1100, height: 900 }, deviceScaleFactor: 2 });
  for (const [name, page] of Object.entries(PREVIEWS)) {
    const p = await ctx.newPage();
    await p.goto(base + page, { waitUntil: 'networkidle' });
    await p.evaluate(() => document.fonts.ready);
    await p.waitForTimeout(1500); // let the meters and the scope draw a few frames
    await p.addStyleTag({ content: '.bar{display:none!important}' });
    const panel = (await p.$('#ui')) || (await p.$('.stage svg'));
    const file = path.join(OUT, `fairy-tapes-${name}.png`);
    await panel.screenshot({ path: file });
    execFileSync('python3', ['-c',
      'import sys;from PIL import Image;f=sys.argv[1];w=int(sys.argv[2]);im=Image.open(f).convert("RGB");'
      + 'im.resize((w,round(im.height*w/im.width)),Image.LANCZOS).save(f,optimize=True)', file, String(WIDTH)]);
    console.log(file);
    await p.close();
  }
  await browser.close();
})();
