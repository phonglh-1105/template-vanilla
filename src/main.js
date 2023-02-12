import { render, router, useEffect, useState } from "./lib";
import About from "./pages/about";
import HomePage from "./pages/home";

const app = document.querySelector("#app");

router.on("/", () => render(HomePage, app));
router.on("/about", () => render(About, app));
router.resolve();
