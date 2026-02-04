import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Homepage/Homepage";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";



export default function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />

      </Routes>
      <Footer/>
    </Router>
  );
}
