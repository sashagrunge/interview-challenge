import SubMenuReducer from "./sub-menu.reducer";

const StateMock = [
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
];

describe("SubMenuReducer tests", () => {
  it("add item to submenu", () => {
    const newState = SubMenuReducer(StateMock, {
      type: "add",
      payload: {
        id: 1003,
        name: "Dill & Swiss Chard Potato Cakes, Summer Tabbouleh & Roasted Roots",
        dietaries: ["gf", "df", "v", "ve", "n!"],
      },
    });

    expect(newState).not.toBe(StateMock);
    expect(newState.length).toEqual(3);
  });

  it("do not add duplicate item to submenu", () => {
    const newState = SubMenuReducer(StateMock, {
      type: "add",
      payload: {
        id: 1001,
        name: "Kale Caesar Pasta, Turmeric Satay Broccoli & Lemon Cashew Greens",
        dietaries: ["v", "ve", "df", "gf", "n!"],
      },
    });

    expect(newState).toBe(StateMock);
  });

  it("remove item from submenu", () => {
    const newState = SubMenuReducer(StateMock, {
      type: "remove",
      payload: {
        id: 1001,
        name: "Kale Caesar Pasta, Turmeric Satay Broccoli & Lemon Cashew Greens",
        dietaries: ["v", "ve", "df", "gf", "n!"],
      },
    });

    expect(newState).not.toBe(StateMock);
    expect(newState.length).toBe(1);
  });
});
