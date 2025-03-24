import { Route, Routes } from "react-router-dom"
import CustomCursor from "./components/CustomCursor"
import Footer from "./components/Navbar/footer"
import Navbar from "./components/Navbar/Navbar"
import HomePage from "./components/Screen/HomePage/HomePage"
import AboutPage from "./components/Screen/AboutPage/AboutPage"
import ContactPage from "./components/Screen/ContactPage/ContactPage"
import ServicePage from "./components/Screen/ServicePage/ServicePage"

const App = () => {
  return (
    <>
      <Navbar />
      <CustomCursor />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
        
      </Routes>
      <Footer />
    </>
  );
}

export default App