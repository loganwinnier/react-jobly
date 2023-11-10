import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api";
import JobList from "../jobs/JobList";
import NotFoundPage from "../NotFoundPage";
import LoadingSpinner from "../LoadingSpinner";


/**
 * Renders company information and a JobList of the company's available jobs
 *
 * State:
 * - company, object {"name": "Davis", "description": "descn", "logoUrl": null}
 * - error, array [{error}, {error}, ...]
 *
 * RoutesList ---> CompanyDetailsPage ---> JobList
 */
function CompanyDetailsPage() {

  const [company, setCompany] = useState(null);
  const [error, setError] = useState([]);
  const { handle } = useParams();

  useEffect(function getCompanyWhenMounted() {
    async function fetchCompany() {
      try {
        const company = await JoblyApi.getCompany(handle);
        setCompany(company);
      }
      catch (err) {
        setError(err);
      }
    }
    fetchCompany();
  }, [handle]);


  if (error.length) return <NotFoundPage />;

  if (!company) return <h2><LoadingSpinner title="company" /></h2>;

  return (
    <div>
      <div style={{
        margin: "1em",
        backgroundColor: "wheat",
        borderRadius: "8px",
        width: "65vw",
      }}>
        <h4>{company.name}</h4>
        <p>{company.description}</p>
      </div>
      <JobList jobs={company.jobs} />
    </div>
  );

}

export default CompanyDetailsPage;;;