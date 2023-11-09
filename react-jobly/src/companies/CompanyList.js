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
function CompanyList({ companies }) {
  return (
    <div>
      {companies.map(comp => <CompanyCard key={comp.handle} company={comp} />)}
    </div>
  );
}

export default CompanyList;