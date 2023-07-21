import React from 'react'
import Header from '../components/block/Header'
import Hero from '../components/static/Hero'
import First from '../components/reUse/First'
import { Second } from '../components/reUse/Second'
import Third from '../components/reUse/Third'
import Fourth from '../components/reUse/Fourth'

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <First />
      <Second />
      <Third />
      <Fourth />
    </div>
  )
}

export default LandingPage