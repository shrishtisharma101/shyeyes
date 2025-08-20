import React from 'react'
import BannerSection from '../banner/BannerSection'
import MemberSection from '../members/MemberSection'
import AboutSection from '../about/AboutSection'
import WorkSection from '../works/WorkSection'
import StorySection from '../story/StorySection'
import GroupSection from '../group/GroupSection'
import ReviewSection from '../reviews/ReviewSection'
import AppSection from '../app/AppSection'


const Home = () => {
  return (
    <>
      <BannerSection />
        <MemberSection />
        <AboutSection />
        <WorkSection />
        <StorySection />
        <GroupSection />
        <ReviewSection />
        <AppSection />
    </>
  )
}

export default Home