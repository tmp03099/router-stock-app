import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Stock from './pages/Stock';
import Dashboard from './pages/Dashboard';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">

      <NavBar/>
      
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
