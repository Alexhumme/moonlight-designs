import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './layout/Header';
import Footer from './sections/Footer';
import Hero from './sections/Hero';
import Services from './sections/Services';
import './styles/App.css';

function App() {
  return (
   <Router>
      <div className="App">
        <Header />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/servicios" element={<Services />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
