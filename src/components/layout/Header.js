import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <h1 className="header-title">oceń lek</h1>
      </Link>
      {/* logowanie */}
    </header>
  );
};

export default Header;
