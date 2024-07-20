import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import SingIn from './pages/SingIn';
import SingUp from './pages/SingUp';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sing-in" element={<SingIn />} />
        <Route path="/sing-up" element={<SingUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}
