import { useEffect, useState } from "react";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar/Navbar";
import AboutSection from "./components/Screen/HomePage/AboutSection";
import HeroSection from "./components/Screen/HomePage/HeroSection";
import LoadingScreen from "./components/Screen/LoadingPage/LoadingPage";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false); // Hide preloader & show animations after 7.5s
    }, 7500);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <main className="max-w-screen min-h-screen">
      {isLoading && <LoadingScreen />}
      <Navbar />
      <HeroSection isLoading={isLoading} />
      <AboutSection />
      <CustomCursor />
    </main>
  );
}
