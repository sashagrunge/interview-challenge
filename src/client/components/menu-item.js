import React from "react";

const MenuItem = (props) => {
  return props.menuItem ? (
    <div className="app-menu-item">
      <h2>{props.menuItem.name}</h2>
      {renderDietary(props.menuItem.dietaries)}
    </div>
  ) : (
    ""
  );
};

const renderDietary = (dietaries) => {
  if (!dietaries?.length) {
    return;
  }

  return (
    <p>
      {dietaries.map((dietary, index) => (
        <span className="dietary" key={index}>
          {dietary}
        </span>
      ))}
    </p>
  );
};

export default MenuItem;
