import React, { useContext } from "react";
import { AppContext } from "../contexts/app.context";
import MenuItem from "./menu-item";

const MenuPreview = () => {
  const { subMenuItems, subMenuDispatch } = useContext(AppContext);

  return (
    <div className="menu-preview-container">
      <h2>Menu preview</h2>
      {renderItems(subMenuItems, subMenuDispatch)}
    </div>
  );
};

const renderItems = (items, dispatch) => {
  if (!items?.length) {
    return "";
  }

  return (
    <ul className="menu-preview">
      {items.map((item) => (
        <li className="item" key={item.id.toString()}>
          <MenuItem menuItem={item}></MenuItem>
          <button
            type="button"
            className="remove-item"
            onClick={() => dispatch({ type: "remove", payload: item })}
          >
            x
          </button>
        </li>
      ))}
    </ul>
  );
};

export default MenuPreview;
