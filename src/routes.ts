import { lazy } from "solid-js";

export default [
  {
    path: "/",
    component: lazy(() => import("./pages/Home")),
  },
  {
    path: "/about",
    component: lazy(() => import("./pages/About")),
  },
  {
    path: "*",
    component: lazy(() => import("./pages/NotFound")),
  },
];
