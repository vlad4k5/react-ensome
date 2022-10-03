import React from 'react';
import Advantages from '../../components/Advantages/Advantages';
import Benefits from '../../components/Benefits/Benefits';
import Blog from '../../components/Blog/Blog';
import CompanyOverview from '../../components/CompanyOverview/CompanyOverview';
import Features from '../../components/Features/Features';

const Home = () => {
  return (
    <>
      <Benefits />
      <Advantages />
      <Features />
      <Blog />
      <CompanyOverview />
    </>
  );
};

export default Home;