import React from "react";
import { Link } from "react-router-dom";

/**
 * Presentation component, shows info about a single company
 *
 Props:
 - company, an object {"name": "Davis-Davis",
      "description": "Career participant difficult", "logoUrl": null
  }
 * CompanyList --> CompanyCard
 */
function CompanyCard({ company }) {

  return (
    <Link to={`/companies/${ company.handle }`}>
      <div style={{
        border: "2px solid black",
        margin: "1em",
        backgroundColor: "tan"
      }}>
        <h4>{company.name}</h4>
        {company.logoUrl && <img
          src={`./${ company.logoUrl }`}
          width="50px"
          alt={`${ company.name } logo`} />}

        <p>{company.description}</p>
      </div>
    </Link>
  );

}

export default CompanyCard;