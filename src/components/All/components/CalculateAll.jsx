import React from "react";
import AllCalculator from "./AllCalculator";
import { mtnPrices, vodaPrices } from "../..//shared/utilities/Prices"; // Import prices from the shared file

const CalculateAll = () => {
  return (
    <div>
      <AllCalculator mtnPrices={mtnPrices} vodaPrices={vodaPrices} />
    </div>
  );
};

export default CalculateAll;
