import React from "react";
import "./App.css";
import Menu from "./components/menu";
import MenuPreview from "./components/menu-preview";
import MenuSummary from "./components/menu-summary";
import AppContextProvider from "./contexts/app.context";

export default () => (
<AppContextProvider>
  <div className="wrapper">
    <MenuSummary></MenuSummary>
    <div className="container menu-builder">
      <div className="row">
        <div className="col-4">
          <Menu></Menu>
        </div>
        <div className="col-8">
          <MenuPreview></MenuPreview>
        </div>
      </div>
    </div>
  </div>
  </AppContextProvider>
);
