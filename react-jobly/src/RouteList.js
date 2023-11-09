import React, { useContext } from "react";
import { Route, Routes } from 'react-router-dom';

import CompanyPage from './companies/CompanyPage';
import CompanyDetailsPage from './companies/CompanyDetailsPage';
import JobPage from "./jobs/JobPage";
import Homepage from "./Homepage";
import NotFoundPage from "./NotFoundPage";
import ProfileForm from "./auth/ProfileForm";
import RegisterForm from "./auth/RegisterForm";
import LoginForm from "./auth/LoginForm";
import userContext from "./userContext";


/** Setup for Route components Routes
 *
 * Props:
 * - login function
 * - register function
 * - update function
 *
 * App -> RouteList -> {CompanyPage, CompanyDetailsPage, JobPage, Homepage}
 */
function RouteList({ register, login, update }) {

  const user = useContext(userContext);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/profile" element={<ProfileForm update={update} />} />
      <Route path="/jobs" element={<JobPage />} />
      <Route path="/companies" element={<CompanyPage />} />
      <Route path="/companies/:handle" element={<CompanyDetailsPage />} />
      <Route path="/signup" element={<RegisterForm register={register} />} />
      <Route path="/login" element={<LoginForm login={login} />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default RouteList;