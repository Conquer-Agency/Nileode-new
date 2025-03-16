import CustomCursor from "./components/CustomCursor";
import HeroSection from "./components/Screen/HomePage/HeroSection";
import LoadingScreen from "./components/Screen/LoadingPage/LoadingPage";

export default function App() {
  return ( 
    <main className="w-screen h-screen">
      <HeroSection />
      <LoadingScreen />
      <CustomCursor />
    </main>
  );
}
