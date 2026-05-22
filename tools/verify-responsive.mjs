import { chromium } from "playwright-core";

const edgePath = "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe";
const root = "C:/Users/samam/Desktop/DEVELOPER/K.K. DANNY ENTERPRISE";

const targets = [
  { name: "login-mobile", url: "http://localhost:3000/admin/login", width: 390, height: 900 },
  { name: "dashboard-mobile", url: "http://localhost:3000/admin", width: 390, height: 900 },
  { name: "login-desktop", url: "http://localhost:3000/admin/login", width: 1440, height: 1000 },
  { name: "dashboard-desktop", url: "http://localhost:3000/admin", width: 1440, height: 1000 }
];

const browser = await chromium.launch({
  executablePath: edgePath,
  headless: true,
  args: ["--no-sandbox", "--disable-gpu", "--disable-dev-shm-usage"]
});

const results = [];

for (const target of targets) {
  const page = await browser.newPage({
    viewport: { width: target.width, height: target.height },
    deviceScaleFactor: 1
  });
  const consoleErrors = [];

  page.on("console", (message) => {
    if (message.type() === "error") {
      consoleErrors.push(message.text());
    }
  });

  await page.goto(target.url, { waitUntil: "networkidle", timeout: 30000 });

  const metrics = await page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
    bodyScrollWidth: document.body.scrollWidth,
    title: document.title,
    h1: document.querySelector("h1")?.textContent ?? "",
    imageCount: document.images.length
  }));

  await page.screenshot({
    path: `${root}/pw-${target.name}.png`,
    fullPage: false
  });

  results.push({
    name: target.name,
    viewport: `${target.width}x${target.height}`,
    metrics,
    hasHorizontalOverflow:
      metrics.scrollWidth > metrics.clientWidth || metrics.bodyScrollWidth > metrics.clientWidth,
    consoleErrors: consoleErrors.slice(0, 5)
  });

  await page.close();
}

await browser.close();

console.log(JSON.stringify(results, null, 2));
