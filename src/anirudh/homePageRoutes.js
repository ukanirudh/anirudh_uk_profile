import React from 'react'
import ProfileHome from './ProfileComponents'
import About from './ProfileComponents/About'
import Resume from './ProfileComponents/Resume'
import Footer from './ProfileComponents/components/Footer'

const HomePageRoutes = () => {
  return (
    <>
      <ProfileHome />
      <About />
      <Resume />
      <Footer showLinks />
    </>
  )
}


export default HomePageRoutes;
