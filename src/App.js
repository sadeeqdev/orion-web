import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollTop";
import Home from "./pages/home/Home";
import Navbar from './components/navabar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  return (
   <BrowserRouter>
      <ScrollToTop>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer/>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
