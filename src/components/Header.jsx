import classNames from "classnames";
import React from "react";
import { useNavigate } from "react-router-dom";
import pageState from "../store/page";


const Header = () => {
  const navigate = useNavigate();
  const buttons = [
    { name: "Counter", path: "/counter" },
    { name: "Todo list", path: "/todos" },
  ];

  const handleNavigate = (path) => {
    navigate(path);
    pageState.setCurrentPage(path);
  }

  return (
    <div className="header">
      <div className="container">
        <div className="header__inner">
          <h2 className="header__logo">{`<< Get MobX >>`}</h2>

          <nav className="header__nav">
            {buttons.map((button) => (
              <button
                key={button.name}
                className={classNames("header__button button", {
                  isActive: button.path === pageState.currentPagePath,
                })}

                onClick={() => handleNavigate(button.path)}
              >
                {button.name}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
