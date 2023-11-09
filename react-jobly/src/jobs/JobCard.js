import React from "react";

/**
 * Presentation component, shows info about a single company
 *
 Props:
 - job, an object {"title": "Dog Energy Worker", "salary": 100000, Equity: 0.2,
                 companyHandle: "dogelectric", companyName: "Dog Electric"}
 * JobList --> JobCard
 */

function JobCard({ job }) {
  const salary = new Intl.NumberFormat().format(job.salary);
  return (
    <div style={{
      border: "2px solid black",
      margin: "1em",
      backgroundColor: "tan"
    }}>
      <h4>{job.title}</h4>
      <p>{job.companyName}</p>
      <p>{job.salary ? `Salary: $${ salary }` : "No Salary Listed"}</p>
      <p>{job.equity ? `Equity: ${ (job.equity * 200).toFixed(1) }%` : "No Equity Listed"}</p>
    </div>
  );

}

export default JobCard;