import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../pages/header/Header'
import Footer from '../../components/common/Footer'
import LottieAnimations from '../../components/common/LottieAnimations'
import SuspenseWrapper from '../../components/common/SuspenseWrapper'

const PublicRouter = () => {
  const hideFooterRoutes = ["/chat", "/login", "/register",  "/payment"];
  const shouldHideLayout = hideFooterRoutes.includes(location.pathname);

  return (
   <>
      {/* <Preloader /> */}
      <LottieAnimations />
      {!shouldHideLayout && <Header />}
      <SuspenseWrapper>
        <Outlet />
      </SuspenseWrapper>

     {!shouldHideLayout && <Footer />}
    </>
  )
}

export default PublicRouter