import { Link } from "@solidjs/router";
import { Component } from "solid-js";

const Nav: Component = () => {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </nav>
  );
};

export default Nav;
