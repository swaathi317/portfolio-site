import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Work from './pages/Work.js';
import Projects from './pages/Projects.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/experience" element={<Work />} />
          <Route path="/portfolio" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
