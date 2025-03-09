import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Announcements from './components/Announcements';
import UpcomingEvents from './components/UpcomingEvents';
import CallToAction from './components/CallToAction';

function App() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <Announcements/>
      <UpcomingEvents/>
      <CallToAction/>
      <AboutUs/>
      <Footer/>
    </div>
  );
}

export default App;
