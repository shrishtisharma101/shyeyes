import './assets/css/animate.css';
import './assets/css/bootstrap.min.css';
import './assets/css/icofont.min.css';
import './assets/css/swiper.min.css';
import './assets/css/style.css';
import '../src/pages/profile/Profile.css';

// import Preloader from './pages/preloader/Preloader';
import Header from './pages/header/Header';
import LottieAnimations from './components/common/LottieAnimations';
import BannerSection from './pages/banner/BannerSection';
import MemberSection from './pages/members/MemberSection';
import AboutSection from './pages/about/AboutSection';
import WorkSection from './pages/works/WorkSection';
import StorySection from './pages/story/StorySection';
import GroupSection from './pages/group/GroupSection';
import ReviewSection from './pages/reviews/ReviewSection';
import AppSection from './pages/app/AppSection';
import Footer from './components/common/Footer';
import Profile from './pages/profile/Profile';
function App() {
  return (
 
      <>
        {/* <Preloader /> */}
        <LottieAnimations />
        <Header />
        <Profile/>
        <BannerSection />
        <MemberSection />
        <AboutSection />
        <WorkSection />
        <StorySection />
        <GroupSection />
        <ReviewSection />
        <AppSection />
        <Footer />
      </>
   
  );
}

export default App;