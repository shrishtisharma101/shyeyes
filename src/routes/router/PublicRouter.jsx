import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../pages/header/Header'
import Footer from '../../components/common/Footer'
import LottieAnimations from '../../components/common/LottieAnimations'
import SuspenseWrapper from '../../components/common/SuspenseWrapper'

const PublicRouter = () => {
  return (
   <>
      {/* <Preloader /> */}
      {/* <LottieAnimations /> */}
      <Header />
      <SuspenseWrapper>
        <Outlet />
      </SuspenseWrapper>

      <Footer />
    </>
  )
}

export default PublicRouter