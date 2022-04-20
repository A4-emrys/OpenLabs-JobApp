import React from 'react';
import LandingPage from './LandingPageComponents/LandingPage';
import JobsAndInternsContainer from './JobsContainer/JobsAndInternsContainer';

export const JobApp = () => {
  return (
    <div>
        <LandingPage />
        <JobsAndInternsContainer />
    </div>
  )
}

export default JobApp;