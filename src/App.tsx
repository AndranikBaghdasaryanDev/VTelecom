import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Dashboard } from "./pages/dashboard";


export default function App() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark";
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = (mode: "light" | "dark") => {
    setTheme(mode);
    localStorage.setItem("theme", mode);
  };

  return (
    <div>
      <div className=" min-h-screen text-[#495057]">
        <Header theme={theme} onThemeChange={toggleTheme} />
        <Dashboard theme={theme} />
      </div>
    </div>
  );
}