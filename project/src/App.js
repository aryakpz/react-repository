import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Work from './components/work';
import Testimonial from './components/testimonial';
import Contact from './components/contact';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home/>
        <About/>
        <Work/>
        <Testimonial/>
        <Contact/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
    