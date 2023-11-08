import React from "react";
import { Route, Routes } from 'react-router-dom';

import CompanyPage from './companies/CompanyPage';
import CompanyDetailsPage from './companies/CompanyDetailsPage';
import JobPage from "./JobPage";
import Homepage from "./Homepage";


/** Setup for Route components Routes 
 * 
 * 
 * App -> RouteList -> CompanyPage, CompanyDetailsPage,  JobPage, Homepage
 */
function RouteList() {
  return (
    <Routes>
      <Route path="/companies" element={<CompanyPage />} />
      <Route path="/company/:handle" element={<CompanyDetailsPage />} />
      <Route path="/jobs" element={<JobPage />} />
      <Route path="/" element={<Homepage />} />
      <Route path="*" element={<h2>Not Found</h2>} />
    </Routes>
  );
}

export default RouteList;