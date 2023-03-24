import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Stock from './pages/Stock';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">

      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/stocks/:symbol" element={<Stock/>}/>
        <Route path="/stocks" element={<Dashboard/>}/>


      </Routes>
      
    </div>
  );
}

export default App;
