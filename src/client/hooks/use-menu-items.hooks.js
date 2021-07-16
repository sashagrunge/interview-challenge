import { useEffect, useState } from "react";
import { Environment } from "../environment";

const useMenuItems = () => {
  const [searchName, setSearchName] = useState("");
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    getMenuItems(searchName).then((items) => {
      setMenuItems(items);
    });
  }, [searchName]);

  return {
    menuItems,
    setSearchName,
  };
};

const getMenuItems = (name) => {
  const nameParam = name ? `?name=${encodeURIComponent(name)}` : "";
  const url = Environment.apiEndPoint + "items" + nameParam;

  return fetch(url)
    .then((data) => data.json())
    .then((json) => json.items);
};

export default useMenuItems;
