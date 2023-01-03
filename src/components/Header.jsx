import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="container">
        <div className="header__inner">
          <h2 className="header__logo">{`<< Get MobX >>`}</h2>

          <nav className="header__nav">
            <button
              className="header__button button"
              onClick={() => navigate("/counter")}
            >
              Counter
            </button>

            <button
              className="header__button button"
              onClick={() => navigate("/todos")}
            >
              Todo list
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
