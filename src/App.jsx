import './styles/App.css';
import Header from './layout/Header';
import Footer from './sections/Footer';
import Hero from './sections/Hero';
import Services from './sections/Services';
import AboutUs from 'sections/AboutUs';
import Team from 'sections/Team';

function App() {
  return (

      <div className="App">
        <Header />
        <main className="app-main">
            <Hero />
            <AboutUs/>
            <Services />
            <Team />
        </main>
        <Footer />
      </div>

  );
}

export default App;
