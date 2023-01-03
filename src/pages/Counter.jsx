import { observer } from "mobx-react-lite";
import React from "react";
import Layout from "../components/Layout";
import counter from "../store/counter";

const Counter = () => {
  return (
    <Layout>
      <div className="counter">
        <h1 className="counter__count">
          <span>Count:</span>
          <span>{counter.count}</span>
        </h1>

        <div className="counter__buttons">
          <button
            className="counter__button"
            onClick={() => counter.increment()}
          >
            +1
          </button>
          <button
            className="counter__button"
            onClick={() => counter.decrement()}
          >
            -1
          </button>
        </div>

        <div className="counter__buttons">
          <button className="counter__button" onClick={() => counter.plusTen()}>
            +10
          </button>
          <button
            className="counter__button"
            onClick={() => counter.minusTen()}
          >
            -10
          </button>
        </div>

        <div className="counter__buttons">
          <button
            className="counter__button"
            onClick={() => counter.plusHundred()}
          >
            +100
          </button>
          <button
            className="counter__button"
            onClick={() => counter.minusHundred()}
          >
            -100
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default observer(Counter);
