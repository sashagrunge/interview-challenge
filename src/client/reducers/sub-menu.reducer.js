export const SubMenuReducer = (state, action) => {
  if (!action.payload) {
    return state;
  }

  switch (action.type) {
    case "add":
      return state.find((item) => item.id === action.payload.id)
        ? state
        : [...state, action.payload];
    case "remove":
      return state.find((item) => item.id === action.payload.id)
        ? state.filter((item) => item.id !== action.payload.id)
        : state;
    default:
      return state;
  }
};

export default SubMenuReducer;
