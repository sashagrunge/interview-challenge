import React, { useContext } from "react";
import MenuItem from "./menu-item";
import { AppContext } from "../contexts/app.context";

const MenuItemPicker = (props) => {
  const { subMenuDispatch } = useContext(AppContext);

  if (!props.menuItems?.length) {
    return "";
  }

  return (
    <ul className="item-picker">
      {props.menuItems.map((item) => (
        <li
          className="item"
          key={item.id.toString()}
          onClick={() => subMenuDispatch({ type: "add", payload: item })}
        >
          <MenuItem menuItem={item}></MenuItem>
        </li>
      ))}
    </ul>
  );
};

export default MenuItemPicker;
