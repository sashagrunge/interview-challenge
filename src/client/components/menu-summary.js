import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts/app.context";

const MenuSummary = () => {
  const [itemCount, setItemCount] = useState();
  const [dietaryCounts, setDietaryCounts] = useState({});
  const { subMenuItems } = useContext(AppContext);

  useEffect(() => {
    setItemCount(subMenuItems?.length);
  }, [subMenuItems]);

  useEffect(() => {
    const counts = subMenuItems
      .reduce(
        (totalDietaries, item) => (
          totalDietaries.push(...item.dietaries), totalDietaries
        ),
        []
      )
      .reduce(
        (counts, dietary) => (
          (counts[dietary] = (counts[dietary] || 0) + 1), counts
        ),
        {}
      );
    setDietaryCounts(counts);
  }, [subMenuItems]);

  return (
    <div className="menu-summary">
      <div className="container">
        <div className="row">
          <div className="col-6 menu-summary-left">
            <span>{itemCount} items</span>
          </div>
          <div className="col-6 menu-summary-right">
            {Object.keys(dietaryCounts).map((dietary) => (
              <React.Fragment key={dietary}>
                {dietaryCounts[dietary]}x{" "}
                <span className="dietary">{dietary}</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuSummary;
