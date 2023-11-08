import React from "react";
import { Route, Routes } from 'react-router-dom';

import CompaniesPage from './companies/CompaniesPage';
import CompanyDetailsPage from './companies/CompanyDetailsPage';
import JobsPage from "./JobsPage";
import Homepage from "./Homepage";


//TODO:DOCSTRING
function RouteList() {
  return (
    // TODO: put paths before elements
    // TODO: add asterisk fallback & Not found component
    <Routes>
      <Route element={<CompaniesPage />} path="/companies" />
      <Route element={<CompanyDetailsPage />} path="/company/:handle" />
      <Route element={<JobsPage />} path="/jobs" />
      <Route element={<Homepage />} path="/" />
    </Routes>
  );
}

export default RouteList;