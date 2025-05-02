import React from 'react'
import HeroSection from './HeroSection'
import FeactureSection from './FeactureSection'
import DiscoverSection from './DiscoverSection'
import CallToActionSection from './CallToActionSection'
import FooterSection from './FooterSection'

const Landing = () => {
  return (
    <div className='bg-[#0d1117]'>
      <HeroSection/>
      <FeactureSection/>
      <DiscoverSection/>
      <CallToActionSection/>
      <FooterSection/>
    </div>
  )
}

export default Landing