import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Instagram from './pages/Instagram';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Instagram" element={<Instagram />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
