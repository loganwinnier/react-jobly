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
  const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
  const r = randomBetween(50, 150);
  const g = randomBetween(50, 150);
  const b = randomBetween(100, 200);

  return (
    <div className='card' style={{ backgroundColor: `rgb(${ r }, ${ g }, ${ b })` }}>
      <h4 className="card-title">{job.title}</h4>
      <p className="card-text">{job.companyName}</p>
      <p className="card-text">{job.salary ? `Salary: $${ salary }` : "No Salary Listed"}</p>
      <p className="card-text">{job.equity ? `Equity: ${ (job.equity * 200).toFixed(1) }%` : "No Equity Listed"}</p>
    </div>
  );

}

export default JobCard;