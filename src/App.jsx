import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import LoadingScreen from "./components/LoadingScreen.jsx";
import Home from "./pages/Home.jsx";

const App = () => {
  const [loading, setLoading] = useState(true);

  // Brief loading overlay to create a polished entry.
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-base-100 text-base-900 transition-colors duration-500 dark:bg-base-900 dark:text-base-100">
      <LoadingScreen isVisible={loading} />
      <ScrollProgress />
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
