import { hydrateRoot } from "react-dom/client";
import { createElement as h } from "react";
import App from "./App";

// 서버가 렌더링한 DOM을 React 이벤트/상태와 연결, DOM을 다시 만들지 않고 살리는 작업이므로 성능과 SEO에 유리
hydrateRoot(document.getElementById("root"), h(App));
