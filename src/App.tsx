import { useEffect, useState } from "react";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar/Navbar";
import AboutSection from "./components/Screen/HomePage/AboutSection";
import HeroSection from "./components/Screen/HomePage/HeroSection";
import LoadingScreen from "./components/Screen/LoadingPage/LoadingPage";
import { Footer } from "./components/Footer/footer";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false); 
    }, 4500);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <main className="max-w-screen min-h-screen">
      {isLoading && <LoadingScreen />}
      <CustomCursor />
      <Navbar />
      <HeroSection isLoading={isLoading} />
      <AboutSection />
      <div className="h-[200vh] bg-white" />
      <Footer />
    </main>
  );
}
