import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollTop";
import Home from "./pages/home/Home";
// import Navbar from './components/navabar/Navbar';
// import Footer from './components/footer/Footer';
import TokenClaim from './pages/tokenClaim/TokenClaim';
import Dashboard from './pages/dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/home" element={<Home />} />
          <Route path="/tokenclaim" element={<TokenClaim />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        {/* <Footer/> */}
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
