import React, { useState } from "react";
import JobCard from "./JobCard";

/**
 * Presentation component, shows list of multiple jobs
 *
 Props:
 - jobs, an array of jobs [{"title": "Volleyball Player",
                            "salary": 100000, Equity: 0.2}, ...]
 * JobPage -> JobList --> JobCard
 */
function JobList({ jobs }) {
  return (
    <div>
      {jobs.map(job => <JobCard key={job.id} job={job} />)}
    </div>
  );
}

export default JobList;