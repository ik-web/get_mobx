import React from "react";
import { observer } from "mobx-react-lite";

import Layout from "../components/Layout";
import counterState from "../store/counter";

const Counter = () => {
  const buttons = [
    { name: "+1", handleClick: () => counterState.increment() },
    { name: "-1", handleClick: () => counterState.decrement() },
    { name: "+10", handleClick: () => counterState.plusTen() },
    { name: "-10", handleClick: () => counterState.minusTen() },
    { name: "+100", handleClick: () => counterState.plusHundred() },
    { name: "-100", handleClick: () => counterState.minusHundred() },
  ];

  return (
    <Layout>
      <div className="counter">
        <h1 className="counter__count">
          <span>Count:</span>
          <span>{counterState.count}</span>
        </h1>

        <div className="counter__buttons">
          {buttons.map((button) => (
            <button
              key={button.name}
              className="counter__button button"
              onClick={button.handleClick}
            >
              {button.name}
            </button>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default observer(Counter);
