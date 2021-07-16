import React from "react";
import { jest } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { AppContext } from "../contexts/app.context";
import MenuSummary from "./menu-summary";

const SubMenuItemsMock = [
  {
    id: 1001,
    name: "Kale Caesar Pasta, Turmeric Satay Broccoli & Lemon Cashew Greens",
    dietaries: ["v", "ve", "df", "gf", "n!"],
  },
  {
    id: 1002,
    name: "Hake & Smoky Chickpeas, Brown Rice & Quinoa, Roasted Roots",
    dietaries: ["gf", "df", "rsf"],
  },
  {
    id: 1003,
    name: "Dill & Swiss Chard Potato Cakes, Summer Tabbouleh & Roasted Roots",
    dietaries: ["gf", "df", "v", "ve", "n!"],
  },
];

// Example test
describe("MenuSummary tests", () => {
  it("display correct number of sub-menu items", () => {
    render(
      <AppContext.Provider
        value={{ subMenuItems: SubMenuItemsMock, subMenuDispatch: jest.fn() }}
      >
        <MenuSummary />
      </AppContext.Provider>
    );
    expect(screen.getByText("3 items")).toBeInTheDocument();
  });
});
