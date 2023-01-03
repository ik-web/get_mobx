import { observer } from "mobx-react-lite";
import React from "react";
import Layout from "../components/Layout";
import counterState from "../store/counter";

const Counter = () => {
  return (
    <Layout>
      <div className="counter">
        <h1 className="counter__count">
          <span>Count:</span>
          <span>{counterState.count}</span>
        </h1>

        <div className="counter__buttons">
          <button
            className="counter__button button"
            onClick={() => counterState.increment()}
          >
            +1
          </button>
          <button
            className="counter__button button"
            onClick={() => counterState.decrement()}
          >
            -1
          </button>
        </div>

        <div className="counter__buttons">
          <button
            className="counter__button button"
            onClick={() => counterState.plusTen()}
          >
            +10
          </button>
          <button
            className="counter__button button"
            onClick={() => counterState.minusTen()}
          >
            -10
          </button>
        </div>

        <div className="counter__buttons">
          <button
            className="counter__button button"
            onClick={() => counterState.plusHundred()}
          >
            +100
          </button>
          <button
            className="counter__button button"
            onClick={() => counterState.minusHundred()}
          >
            -100
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default observer(Counter);
