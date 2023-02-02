import './App.css';
import Hero from './components/Hero';
import ImageGrid from './components/ImageGrid';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='content'>
      <Navbar />
      <Hero />
      <ImageGrid />
    </div>
  );
}

export default App;
