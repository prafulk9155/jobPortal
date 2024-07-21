import React from 'react';
import { Route, Routes } from 'react-router-dom';
import WelcomePage from '../../common/landing/Welcome';
import Signup from '../account/signup/Signup';
import Signin from '../account/singin/Signin';
import Layout from '../../common/layout/Layout';
import JobList from '../../JobPortal/candidate/JobList';
import JobPost from '../../JobPortal/recruiter/jobPost/JobPost';
import Form1stCandidate from '../form1st/form1stCandidate';
import Form1stRecruiter from '../form1st/form1stRecruiter';
import Form1stClient from '../form1st/form1stClient'



// import Dashboard from '../../dashboard/Dashboard'; // Example for a protected route

const AppRoutes = () => {
  return (
    <Routes>
      {/* Routes that don't use the common layout */}
      <Route path="/welcome" element={<WelcomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/form1stCandidate" element={<Form1stCandidate/>}  />
      <Route path= "/form1stRecruiter"  element={<Form1stRecruiter/>}/>
      <Route path= "/form1stClient" element={<Form1stClient/>} />
      
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
