import fastify from "fastify";
import fastifyStatic from "@fastify/static";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path, { dirname } from "node:path";
import { renderToString } from "react-dom/server";
import { createElement as h } from "react";

import App from "./App.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const shell = readFileSync(path.join(__dirname, "dist", "index.html"), "utf8");

const app = fastify();

app.register(fastifyStatic, {
  root: path.join(__dirname, "dist"),
  prefix: "/",
});

const parts = shell.split("<!--ROOT-->");

/**
 * SSR로 React App을 문자열로 렌더링한 뒤, index.html을 <!--Root--> 기준으로 앞/뒤로 나눠 그 사이에 React HTML을 삽입해 클라이언트로 스트리밍한다.
 */
app.get("/", (req, res) => {
  res.raw.write(parts[0]);
  const reactApp = renderToString(h(App));
  res.raw.write(reactApp);
  res.raw.write(parts[1]);
  res.raw.end();
});

app.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
