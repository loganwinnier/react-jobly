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
function CompanyList({ companies, showMore, showPrevious, shown }) {

  const someCompanies = companies.slice(shown[0], shown[1]);

  return (
    <div>
      {someCompanies.map(comp => <CompanyCard key={comp.handle} company={comp} />)}
      {!(shown[0] === 0) && <button onClick={showPrevious}>Show Prev</button>}
      {shown[1] < companies.length && <button onClick={showMore}>Show More</button>}
    </div>
  );
}

export default CompanyList;