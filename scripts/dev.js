const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const dev = true;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const port = process.env.NEXT_PUBLIC_PORT || 5000;

  // Obtemos o tempo de início
  const startTime = process.hrtime();

  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port, (err) => {
    if (err) throw err;
    const nextVersion = require("next/package.json").version;

    // Calculamos o tempo decorrido
    const elapsedTime = process.hrtime(startTime);
    const elapsedMilliseconds =
      elapsedTime[0] * 1000 + elapsedTime[1] / 1000000;

    console.log(`\x1b[34m ▲ Next.js ${nextVersion}\x1b[0m`);
    console.log(` - Local:        http://localhost:${port}`);
    console.log(` - Environments: .env.local`);
    console.log(``);
    console.log(`\x1b[32m✓\x1b[0m Starting...`);
    console.log(`\x1b[32m✓\x1b[0m Ready in ${elapsedMilliseconds.toFixed(1)}s`);
  });
});
