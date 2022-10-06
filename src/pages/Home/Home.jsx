import React from 'react'
import Advantages from '../../components/Advantages/Advantages'
import Benefits from '../../components/Benefits/Benefits'
import Blog from '../../components/Blog/Blog'
import CompanyOverview from '../../components/CompanyOverview/CompanyOverview'
import CompanyReviews from '../../components/CompanyReviews/CompanyReviews'
import ContactUs from '../../components/ContactUs/ContactUs'
import Features from '../../components/Features/Features'
import SubscribeSection from '../../components/SubscribeSection/SubscribeSection'

const Home = () => {
  return (
    <>
      <Benefits />
      <Advantages />
      <Features />
      <Blog />
      <CompanyReviews />
      <CompanyOverview />
      <ContactUs />
      <SubscribeSection />
    </>
  )
}

export default Home