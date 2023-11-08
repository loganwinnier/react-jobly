import React from "react";

/**
 * Presentation component, shows info about a single company
 *
 Props:
 - company, an object {"name": "Davis-Davis",
      "description": "Career participant difficult", "logoUrl": null
	}
 * CompanyList --> CompanyCard
 */
function CompanyCard({company}) {

  return (
    <div>
      <h4>{company.name}</h4>
      <img src={`/${company.logoUrl}`}></img>
      <p>{company.description}</p>
    </div>
  );

}

export default CompanyCard;