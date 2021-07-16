import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { AppContext } from "./contexts/app.context";

global.fetch = jest
  .fn()
  .mockImplementation(() =>
    Promise.resolve({ json: () => Promise.resolve({ items: [] }) })
  );

// Example test
describe("App tests", () => {
  it("renders a message", () => {
    render(
      <AppContext.Provider
        value={{ subMenuItems: [], subMenuDispatch: jest.fn() }}
      >
        <App />
      </AppContext.Provider>
    );
    expect(screen.getByText("0 items")).toBeInTheDocument();
  });
});
