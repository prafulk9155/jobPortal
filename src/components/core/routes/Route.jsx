import React from 'react';
import { Route, Routes } from 'react-router-dom';
import WelcomePage from '../../common/landing/Welcome';
import Signin from '../account/signin/signin';
import Layout from '../../common/layout/Layout';
import JobList from '../../JobPortal/candidate/JobList';
import JobPost from '../../JobPortal/recruiter/jobPost/JobPost';




// import Dashboard from '../../dashboard/Dashboard'; // Example for a protected route

const AppRoutes = () => {
  return (
    <Routes>
      {/* Routes that don't use the common layout */}
      <Route path="/welcome" element={<WelcomePage />} />
      <Route path="/signin" element={<Signin />} />
     
      
      {/* Routes that use the common layout */}
      <Route element={<Layout />}>
      <Route path ="/candidate/job-list" element ={ <JobList />} />
      <Route path ="/recruiter/job-post" element ={ <JobPost />} />
      </Route>
      
  
      <Route path="*" element={<WelcomePage />} />
    </Routes>
  );
};

export default AppRoutes;
