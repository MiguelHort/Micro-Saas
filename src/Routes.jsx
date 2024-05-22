import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Home0 from './pages/Home0';
import Instagram from './pages/Instagram';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/0" element={<Home0 />} />
        <Route path="/Instagram" element={<Instagram />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
