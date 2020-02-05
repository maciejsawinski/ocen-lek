import React from "react";
import { Link } from "react-router-dom";

import LanguageChange from "./LanguageChange";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <h1 className="header-title">oceń lek</h1>
      </Link>
      <div className="header-buttons">
        <LanguageChange />
      </div>
    </header>
  );
};

export default Header;
