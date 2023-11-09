import React, { useEffect, useState } from "react";
import CompanyList from "./CompanyList";
import SearchBar from "../SearchBar";
import JoblyApi from "../api";
import LoadingSpinner from "../LoadingSpinner";

/**
 * Logic component for companies route
 * Renders a CompanyList of all companies, unless search filters are used
 * Then it renders a CompanyList of companies which match the search filters
 * Also renders a SearchBar component
 *
 * State:
 * - companies: A array of company objects Like: [{company}, {company}] *
 *
 * RoutesList -> CompanyPage -> {CompanyList & SearchBar}
 */
function CompanyPage() {
  const [companies, setCompanies] = useState(null);

  useEffect(function getCompaniesWhenMounted() {
    fetchCompanies();
  }, []);

  async function fetchCompanies(term) {
    const companyArray = await JoblyApi.getCompanies(term);
    setCompanies(companyArray);
  };

  if (!companies) return <LoadingSpinner title={"companies"} />;
  if (!companies.length) return <h2>No Companies Found</h2>;
  return (
    <div>
      <SearchBar search={fetchCompanies} />
      <CompanyList companies={companies} />
    </div>
  );

}

export default CompanyPage;;