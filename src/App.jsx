import './styles/App.css';
import Header from './layout/Header';
import Footer from './sections/Footer';
import Hero from './sections/Hero';
import Services from './sections/Services';
import AboutUs from 'sections/AboutUs';
import Team from 'sections/Team';
import ContactUs from 'sections/ConactUs';
import BuildingsSection from 'sections/BuildingsSection';

function App() {
  return (

    <div className="App">
      <Header />
      <main className="app-main">
        <Hero />
        <AboutUs />
        <Services />
        <BuildingsSection />
        <Team />
        <ContactUs />
      </main>
      <Footer />
    </div>

  );
}

export default App;
