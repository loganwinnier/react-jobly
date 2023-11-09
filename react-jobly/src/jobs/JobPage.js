import React, { useEffect, useState } from "react";
import JobList from "./JobList";
import SearchBar from "../SearchBar";
import JoblyApi from "../api";
import LoadingSpinner from "../LoadingSpinner";

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

  if (!jobs) return <LoadingSpinner title="Jobs" />;
  if (!jobs.length) return <h2>No Jobs Found</h2>;
  return (
    <div>
      <SearchBar search={fetchJobs} />
      <JobList jobs={jobs} />
    </div>
  );

}

export default JobPage;