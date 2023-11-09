import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api";
import JobList from "../jobs/JobList";


/**
 * Renders company information and a JobList of the company's available jobs
 *
 * State:
 * - company, object {"name": "Davis", "description": "descn", "logoUrl": null}
 *
 * RoutesList ---> CompanyDetailsPage ---> JobList
 */
function CompanyDetailsPage() {

  const [company, setCompany] = useState(null);
  const { handle } = useParams();

  useEffect(function getCompanyWhenMounted() {
    async function fetchCompany() {
      // TODO: try catch
      // new errors state []
      // update state with errs in catch
      // show 404 component or string for now

      const company = await JoblyApi.getCompany(handle);
      setCompany(company);
    }
    fetchCompany();
  }, []);


  if (!company) return <h2>Loading Company...</h2>;
  // TODO: return errors maybe

  return (
    <div>
      <div style={{
        margin: "1em",
        backgroundColor: "goldenrod",
        borderRadius: "8px",
      }}>
        <h4>{company.name}</h4>
        <p>{company.description}</p>
      </div>
      <JobList jobs={company.jobs} />
    </div>
  );

}

export default CompanyDetailsPage;