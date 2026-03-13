import React from 'react'
import Hero from '../components/home/Hero'
import ServicesPreview from '../components/home/ServicesPreview'
import PortfolioPreview from '../components/home/PortfolioPreview'
import Testimonials from '../components/home/Testimonials'
import CTASection from '../components/home/CTASection'
import HeroStory from '../components/home/HeroStory'
import PoolColumn from '../components/home/PoolColumn'
import ClientTestimonials from '../components/home/ClientTestimonials'

const Home = () => {
  return (
    <>
      <Hero />
      <HeroStory/>
      <ServicesPreview />
      <PoolColumn/>
      {/* <PortfolioPreview /> */}
      <Testimonials />
      <ClientTestimonials/>
      <CTASection />
    </>
  )
}

export default Home