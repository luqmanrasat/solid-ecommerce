/* @refresh reload */
import { render } from "solid-js/web";
import { Router, useRoutes } from "@solidjs/router";
import { ErrorBoundary } from "solid-js";

import "./index.css";
import routes from "./routes";
import Nav from "./components/Nav";

const Routes = useRoutes(routes)

render(
  () => (
    <Router>
      <ErrorBoundary fallback={err => err}>
        <Nav />
        <Routes />
      </ErrorBoundary>
    </Router>
  ),
  document.getElementById("root") as HTMLElement
);
