import React from "react";

/**
 * Presentation component, shows info about a single company
 *
 Props:
 - job, an object {"title": "Dog Energy Worker", "salary": 100000, Equity: 0.2,
                 companyHandle: "dogelectric", companyName: "Dog Electric"}
 * JobList --> JobCard
 */
// TODO: format salary
// TODO: only display equity / salary if they exist
function JobCard({ job }) {
  return (
    <div style={{
      border: "2px solid black",
      margin: "1em",
      backgroundColor: "tan"
    }}>
      <h4>{job.title}</h4>
      <p>{job.companyName}</p>
      <p>Salary: {job.salary}</p>
      <p>Equity: {job.equity}</p>
    </div>
  );

}

export default JobCard;