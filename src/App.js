import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollTop";
import Home from "./pages/home/Home";

function App() {
  return (
   <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
