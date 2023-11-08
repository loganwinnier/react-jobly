import React, { useEffect, useState } from "react";
import CompanyList from "./CompanyList";
import SearchBar from "../SearchBar";
import JoblyApi from "../api";

/**
 * Logic component for companies route
 * Renders a CompanyList of all companies, unless search filters are used
 * Then it renders a CompanyList of companies which match the search filters
 * Also renders a SearchBar component
 *
 * State:
 * - companies: A array of company objects Like: [{company}, {company}] and loading status
 * 
 *
 * RoutesList -> CompanyPage -> CompanyList & SearchBar
 */
function CompanyPage() {
  const [companies, setCompanies] = useState(null);

  useEffect(function getCompaniesWhenMounted() {
    fetchCompanies();
  }, []);

  async function fetchCompanies(term = null) {
    const companyArray = await JoblyApi.getCompanies(term);
    setCompanies(companyArray);
  };

  function search(term) {
    fetchCompanies(term);
  }

  if (!companies) return <h2>Loading Companies...</h2>;

  return (
    <div>
      <SearchBar search={search} />
      <CompanyList companies={companies} />
    </div>
  );

}

export default CompanyPage;