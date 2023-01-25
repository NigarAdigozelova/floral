import React from 'react'
import EventPrice from '../components/EventPrice/EventPrice'
import FlowerPricing from '../components/FlowerPricing/FlowerPricing'
import HeroSection from '../components/HeroSection/HeroSection'
import Mission from '../components/Mission/Mission'
import Team from '../components/Team/Team'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <Mission/>
      <FlowerPricing/>
      <EventPrice/>
      <Team/>
    </div>
  )
}

export default Home