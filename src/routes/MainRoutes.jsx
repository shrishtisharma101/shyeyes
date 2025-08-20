import React, { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PublicRouter from "./router/PublicRouter";



// Lazy imports
const Home = lazy(() => import("../pages/home/Home"));
// const AboutSection = lazy(() => import("../pages/about/AboutSection"));
const AboutUs = lazy(() => import("../pages/about/AboutUs"));
const Profile =lazy(()=> import("../pages/profile/Profile"));
const ContactSection =lazy(()=>import("../pages/contact/ContactSection"));
const LoginSection = lazy(()=>import("../pages/login/LoginSection"));
const RegisterForm =lazy(()=>import( "../pages/register/RegisterForm"));
const MembershipPlans = lazy(() => import("../pages/pricing/MembershipPlan"));
const ProfilePage = lazy(() => import("../pages/profile/ProfilePage"));
const ChatInterface = lazy(() => import("../components/chats/ChatInterface"));
const PaymentPage = lazy(() => import("../pages/payment/PaymentPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicRouter />,
    children: [
     {
        index: true,
        element: <Home />
      },
      {
        path: "/about",
        element: 
            <AboutUs />
      },
      {

        path: "/profile2",
        element: 
            <Profile />
      },
      {
        path: "/contact",
        element: 
            <ContactSection />
      },
      {
        path: "/login",
        element: 
            <LoginSection />
      },
      {
        path: "/register",
        element: 
            <RegisterForm />
      },
     {
      path:"/pricing-plan",
      element:<MembershipPlans/>,
     },
    {
      path:"/profile",
      element:<ProfilePage/>,
     },
     {
      path:"/chat",
      element:<ChatInterface/>,
     },
     {
      path:"/payment",
      element:<PaymentPage/>,
     },
    ],
  },
]);

export default function MainRoutes() {
  return <RouterProvider router={router} />;
}
