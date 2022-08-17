import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollTop";
import Home from "./pages/home/Home";
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import TokenClaim from './pages/tokenClaim/TokenClaim';
import Dashboard from './pages/dashboard/Dashboard';
import { useEffect, useState } from 'react';
import Live from './pages/live/Live';
import Upcoming from './pages/upcoming/Upcoming';
import AOS from 'aos';
import "aos/dist/aos.css";

function App() {

    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);

  const [showNavbar, setShowNavbar] = useState('')

  const handleNavbar = (payload) => {
    setShowNavbar(payload)
  }

  return (
    <BrowserRouter>
      <ScrollToTop>
        {showNavbar &&  <Navbar /> }
        <Routes>
          <Route path="/" element={<Home handleNavbar={handleNavbar} />} />
          <Route path="/home" element={<Home handleNavbar={handleNavbar} />} />
          <Route path="/tokenclaim" element={<TokenClaim handleNavbar={handleNavbar} />} />
          <Route path="/dashboard" element={<Dashboard handleNavbar={handleNavbar} />} >
            <Route index element={<Live/>} />
            <Route path="live" element={<Live/>} />
            <Route path="upcoming" element={<Upcoming/>} />
          </Route>
        </Routes>
        { showNavbar && <Footer/> }
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
