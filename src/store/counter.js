import { makeAutoObservable } from "mobx";

class Counter {
  count = 0;

  constructor() {
    makeAutoObservable(this);
  };

  increment() {
    this.count += 1;
  };

  decrement() {
    if (this.count > 0) {
      this.count -= 1;
    };
  };

  plusTen() {
    this.count += 10;
  };

  minusTen() {
    if (this.count > 10) {
      this.count -= 10;
    };
  };

  plusHundred() {
    this.count += 100;
  };

  minusHundred() {
    if (this.count > 100) {
      this.count -= 100;
    };
  };
};

export default new Counter();
