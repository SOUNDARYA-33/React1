import React from "react";
import "../component/css/header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="logo">Frontend Technology</h1>
      <nav className="nav">
        <a href="#hero">Home</a>
        <a href="#blogs">Languages</a>
        <a href="#footer">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
