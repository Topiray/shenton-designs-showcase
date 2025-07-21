import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link as RouterLink } from "react-router-dom";
import Lottie from "lottie-react";
import { Switch } from "@/components/ui/switch";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lottieData, setLottieData] = useState<any>(null);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fetch the correct Lottie logo when darkMode changes
  useEffect(() => {
    const logoPath = darkMode ? "/lottie-logo-white.json" : "/lottie-logo-clean.json";
    fetch(logoPath)
      .then((res) => res.json())
      .then((data) => setLottieData(data));
  }, [darkMode]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl ultra:max-w-[1800px] mx-auto px-6 lg:px-8 ultra:px-16">
        <div className="flex items-center justify-between h-20" style={{ minHeight: '80px' }}>
          {/* Logo */}
          <RouterLink to="/" className="flex items-baseline h-12 hover:opacity-80 transition-opacity flex-shrink-0" style={{ paddingLeft: 0, marginLeft: 0 }}>
            {lottieData && (
              <Lottie
                animationData={lottieData}
                loop
                autoplay
                style={{ height: '2.2rem', maxWidth: '110px', display: 'block' }}
              />
            )}
          </RouterLink>

          {/* Dark Mode Toggle */}
          <div className="flex items-center">
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              className={`ml-4 flex h-8 w-8 items-center justify-center rounded-full border transition-colors bg-transparent
                ${darkMode ? 'border-white/20' : 'border-black/20'}`}
            >
              {darkMode ? (
                <Moon color="#fff" fill="#fff" size={18} />
              ) : (
                <Sun color="#000" fill="#000" size={18} />
              )}
            </button>
          </div>

          {/* Mobile menu button (hidden, since no nav links) */}
        </div>
      </div>
    </header>
  );
};

export default Header;