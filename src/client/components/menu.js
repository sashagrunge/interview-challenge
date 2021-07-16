import React from "react";
import MenuItemPicker from "./menu-item-picker";
import useMenuItems from "../hooks/use-menu-items.hooks";

const Menu = () => {
  const { menuItems, setSearchName } = useMenuItems();

  return (
    <div className="menu">
      <div className="filters">
        <input
          className="form-control"
          placeholder="Name"
          onChange={(event) => setSearchName(event.target.value?.trim())}
        />
      </div>
      <MenuItemPicker menuItems={menuItems}></MenuItemPicker>
    </div>
  );
};

export default Menu;
