import React from "react";
import { Link } from "react-router-dom";
import './companyCard.css';

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
    <Link className='link' to={`/companies/${ company.handle }`}>
      <div className='card display-card'>
        <h4 className="card-title">{company.name}</h4>
        {company.logoUrl && <img className='logo'
          src={`./${ company.logoUrl }`}
          width="50px"
          alt={`${ company.name } logo`} />}

        <p className="card-text">{company.description}</p>
      </div>
    </Link >
  );

}

export default CompanyCard;