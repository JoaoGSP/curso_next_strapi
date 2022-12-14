import React from "react";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="navBar">
      <div className="container">
        <Link href="/">
          <a className="title">Home Link</a>
        </Link>
        <ul>
          <li>
            <Link href="/posts">
              <a>All Posts</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
