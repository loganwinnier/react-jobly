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
function JobList({ jobs, shown, showMore, showPrevious }) {

  const someJobs = jobs.slice(shown[0], shown[1]);

  return (
    <div>
      {someJobs.map(job => <JobCard key={job.id} job={job} />)}
      {(shown[0] > 0) && <button onClick={showPrevious}>Show Prev</button>}
      {shown[1] < jobs.length && <button onClick={showMore}>Show More</button>}
    </div>
  );
}

export default JobList;