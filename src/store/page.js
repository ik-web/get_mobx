import { makeAutoObservable } from "mobx";

class Page {
  currentPagePath = "/counter";

  constructor() {
    makeAutoObservable(this);
  }

  setCurrentPage(path) {
    if (this.currentPagePath !== path) {
      this.currentPagePath = path;
    }
  }
}

export default new Page();
