import React, { useEffect, useState } from "react";
import CompanyList from "./CompanyList";
import SearchBar from "../SearchBar";
import JoblyApi from "../api";
/**
 * Logic component for companies route
 *
 * State: 
 * - companies: A array of company objects Like: [{company}, {company}] and loading status
 * 
 * RoutesList -> CompanyPage -> CompanyList
 */
function CompanyPage() {
  const [companies, setCompanies] = useState({
    data: [],
    loading: true
  });
  const [searchTerm, setSearchTerm] = useState(null);

  useEffect(function getCompaniesWhenMounted() {
    async function fetchCompanies(searchTerm) {
      const companyArray = await JoblyApi.getCompanies();
      setCompanies({
        data: companyArray,
        isLoading: false
      });
    };
    fetchCompanies();
  }, [searchTerm]);

  function search(term) {
    setCompanies({
      data: null,
      isLoading: true,
    });
    setSearchTerm(term);
  }

  if (companies.loading) return <h2>Loading Companies...</h2>;

  return (
    <div>
      <SearchBar search={search} />
      <CompanyList companies={companies.data} />
    </div>
  );

}

export default CompanyPage;