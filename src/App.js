import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import FeaturedEvents from './components/FeaturedEvents';
import './global.css';
import Footer from './components/Footer';
//import logo from './assets/logo.png';


function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <FeaturedEvents />
      <Footer />
    </>
  );
}

export default App;
