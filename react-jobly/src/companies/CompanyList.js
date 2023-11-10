import { useEffect, useState } from "react";
import CompanyCard from "./CompanyCard";

/**
 * Presentation component, shows list of multiple companies
 *
 Props:
 - company, an object {"name": "Davis-Davis",
      "description": "Career participant difficult", "logoUrl": null
  }
 * CompanyPage -> CompanyList --> CompanyCard
 */
function CompanyList({ companies, showMore, showPrevious }) {
  let showButton = true;

  function handleClick() {
    showButton = showMore();
  }

  return (
    <div>
      {companies.map(comp => <CompanyCard key={comp.handle} company={comp} />)}
      {showButton && <button onClick={handleClick}>Show More</button>}
    </div>
  );
}

export default CompanyList;