import React from 'react'
import Header from '../components/block/Header'
import Hero from '../components/static/Hero'
import First from '../components/reUse/First'
import { Second } from '../components/reUse/Second'
import Third from '../components/reUse/Third'

const LandingPage = () => {
  return (
    <div>
      {/* <Header /> */}
      <Hero />
      <First />
      <Second />
      <Third />
    </div>
  )
}

export default LandingPage