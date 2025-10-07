/**
 * 빌드 스크립트
 *
 * React 컴포넌트를 서버에서 정적 HTML로 렌더링하고,
 * 템플릿에 삽입해 dist/에 결과물을 생성하는 SSG 빌드 파이프라인이다.
 *
 */

import { renderToStaticMarkup } from "react-dom/server";
import { createElement as h } from "react";
import {
  readFileSync,
  writeFileSync,
  existsSync,
  mkdirSync,
  readdirSync,
  unlinkSync,
} from "node:fs";
import { fileURLToPath } from "node:url";
import path, { dirname } from "node:path";
import App from "./App.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const distPath = path.join(__dirname, "dist");

// HTML 파일을 읽어온다 (이 파일엔 렌더링된 앱이 출력될 자리표시자가 있다)
const shell = readFileSync(path.join(__dirname, "index.html"), "utf-8");

// React 컴포넌트를 정적 HTML 문자열로 렌더링한다
const app = renderToStaticMarkup(h(App));
// index.html에서 <!-- ROOT --> 자리표시자를 찾아 렌더링된 HTML로 치환한다
const html = shell.replace("<!-- ROOT -->", app);

// dist 디렉토리가 존재하지 않으면 생성한다
if (!existsSync(distPath)) {
  mkdirSync(distPath);
} else {
  // dist 디렉토리가 존재하면 모든 파일을 삭제한다
  const files = readdirSync(distPath);

  for (const file of files) {
    unlinkSync(path.join(distPath, file));
  }
}

// dist/index.html 파일을 생성하고 치환된 HTML로 채운다
writeFileSync(path.join(distPath, "index.html"), html);
