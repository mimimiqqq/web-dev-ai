// 나스닥 100 시세 페이지용 작은 서버
// 브라우저는 CORS 때문에 api.nasdaq.com을 직접 부를 수 없어서, 이 서버가 대신 받아서 전달해 줌
// 실행: node stock-server.js  →  http://localhost:3000 접속

const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;
const NASDAQ_URL = "https://api.nasdaq.com/api/quote/list-type/nasdaq100";

const server = http.createServer(async (req, res) => {
  if (req.url === "/api/nasdaq100") {
    try {
      const response = await fetch(NASDAQ_URL, {
        headers: { "User-Agent": "Mozilla/5.0", Accept: "application/json" },
      });
      const text = await response.text();
      res.writeHead(response.status, { "Content-Type": "application/json; charset=utf-8" });
      res.end(text);
    } catch (err) {
      res.writeHead(502, { "Content-Type": "application/json; charset=utf-8" });
      res.end(JSON.stringify({ error: err.message }));
    }
    return;
  }

  if (req.url === "/" || req.url === "/index.html") {
    const html = fs.readFileSync(path.join(__dirname, "주식.html"));
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(html);
    return;
  }

  res.writeHead(404);
  res.end("Not found");
});

server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.log(`${PORT}번 포트를 이미 다른 프로그램이 쓰고 있어요.`);
    console.log(`서버가 이미 켜져 있다면 그냥 http://localhost:${PORT} 로 접속하세요.`);
  } else {
    console.error(err);
  }
  process.exit(1);
});

server.listen(PORT, () => {
  console.log(`나스닥 100 페이지: http://localhost:${PORT}`);
});
