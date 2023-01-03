import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navLinks = [
    { name: "Counter", path: "/counter" },
    { name: "Todo list", path: "/todos" },
  ];

  return (
    <div className="header">
      <div className="container">
        <div className="header__inner">
          <NavLink to="/">
            <h2 className="header__logo">{`<< Get MobX >>`}</h2>
          </NavLink>

          <nav className="header__nav">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "header__link button isActive"
                    : "header__link button"
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
