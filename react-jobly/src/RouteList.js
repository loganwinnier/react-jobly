import React from "react";
import { Route, Routes } from 'react-router-dom';

import CompanyPage from './companies/CompanyPage';
import CompanyDetailsPage from './companies/CompanyDetailsPage';
import JobPage from "./jobs/JobPage";
import Homepage from "./Homepage";
import NotFoundPage from "./NotFoundPage";


/** Setup for Route components Routes
 *
 * App -> RouteList -> {CompanyPage, CompanyDetailsPage, JobPage, Homepage}
 */
function RouteList() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/jobs" element={<JobPage />} />
      <Route path="/companies" element={<CompanyPage />} />
      <Route path="/companies/:handle" element={<CompanyDetailsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default RouteList;