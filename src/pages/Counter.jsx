import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useLocation } from "react-router-dom";

import Layout from "../components/Layout";
import counterState from "../store/counter";
import pageState from "../store/page";

const Counter = () => {
  const pagePath = useLocation().pathname;

  useEffect(() => {
    pageState.setCurrentPagePath(pagePath)
  }, []);

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
