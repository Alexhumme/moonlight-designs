import Header from './layout/Header';
import Footer from './sections/Footer';
import Hero from './sections/Hero';
import './styles/App.css';

function App() {
  return (
    <div className="App">
        <Header />
        <main className="app-main">
          <Hero />
        </main>
        <Footer/>
    </div>
  );
}

export default App;
