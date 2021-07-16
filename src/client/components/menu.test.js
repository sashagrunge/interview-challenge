import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Menu from "./menu";
import { AppContext } from "../contexts/app.context";

global.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    json: () => Promise.resolve({ items: [] }),
  })
);

describe("Menu tests", () => {
  it("filter menu items", () => {
    const { container } = render(
      <AppContext.Provider
        value={{ subMenuItems: [], subMenuDispatch: jest.fn() }}
      >
        <Menu />
      </AppContext.Provider>
    );
    const filterInput = container.querySelector("input");
    fireEvent.change(filterInput, { target: { value: "pasta" } });

    expect(global.fetch.mock.calls.length).toEqual(2);
  });
});
