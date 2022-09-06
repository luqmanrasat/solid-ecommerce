/* @refresh reload */
import { render } from "solid-js/web";
import { Router, useRoutes } from "@solidjs/router";

import "./index.css";
import routes from "./routes";
import Nav from "./components/Nav";

const Routes = useRoutes(routes)

render(
  () => (
    <Router>
      <Nav />
      <Routes />
    </Router>
  ),
  document.getElementById("root") as HTMLElement
);
