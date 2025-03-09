import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Announcements from './components/Announcements';

function App() {
  return (
    <div>
      <Header/>

      <HeroSection/>
      <Announcements/>

      <AboutUs/>

      <Footer/>
    </div>
  );
}

export default App;
