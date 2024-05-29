import React from 'react'
import Payment from '../components/Payment'
import Reviews from '../components/Reviews'
import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'

const LandingPage = () => {
  return (
    <>
    <Navbar />
    <Hero />
      <Payment/>
      <Reviews/>
    </>
  )
}

export default LandingPage
