import { makeAutoObservable } from "mobx";

class Page {
  currentPagePath = "";

  constructor() {
    makeAutoObservable(this);
  }

  setCurrentPagePath(path) {
    if (this.currentPagePath !== path) {
      this.currentPagePath = path;
    }
  }
}

export default new Page();
