import React, { useEffect, useState } from "react";
import JobList from "./JobList";
import SearchBar from "../SearchBar";
import JoblyApi from "../api";

/**
 * Logic component for jobs route
 * Renders a JobList of all jobs, unless search filters are used
 * Then it renders a JobList of jobs which match the search filters
 * Also renders a SearchBar component
 *
 * State:
 * - jobs: A array of job objects Like: [{job}, {job}]
 *
 *
 * RoutesList -> JobPage -> JobList & SearchBar
 */
function JobPage() {
  const [jobs, setJobs] = useState(null);

  useEffect(function getJobsWhenMounted() {
    fetchJobs();
  }, []);

  async function fetchJobs(term = null) {
    const jobArray = await JoblyApi.getJobs(term);
    setJobs(jobArray);
  };

  if (!jobs) return <h2>Loading jobs...</h2>;
  // TODO: loading spinner component
  // TODO: if companies.length = 0 message
  return (
    <div>
      <SearchBar search={fetchJobs} />
      <JobList jobs={jobs} />
    </div>
  );

}

export default JobPage;