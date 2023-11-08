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
 * - searchTerm: A string representing the user's search query ie 'Arnold'
 *
 * RoutesList -> CompanyPage -> CompanyList & SearchBar
 */
function CompanyPage() {
  const [companies, setCompanies] = useState(null);

  // TODO find a way to rerender without having searchTerm state
  // leverage companies to cause rerender, pull out fetch companies, run first time and on search

  // leverage companies array to know if we're loading or not
  // companies initially null

  useEffect(function getCompaniesWhenMounted() {
    fetchCompanies();
  }, []);

  async function fetchCompanies(term=null) {
    const companyArray = await JoblyApi.getCompanies(term);
    setCompanies( companyArray );
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