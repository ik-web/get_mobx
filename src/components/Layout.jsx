import React from "react";

import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />

      <div className="container">
        <div className="content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
