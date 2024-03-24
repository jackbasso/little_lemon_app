import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header>
      <section>
        <div>
          <h2>Little Lemon</h2>
          <h3>Edmonton</h3>
          <p>
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </p>
          <Link to="/">
            <button aria-label="On Click">Reserve Table</button>
          </Link>
        </div>
      </section>
    </header>
  );
}

export default Header;
