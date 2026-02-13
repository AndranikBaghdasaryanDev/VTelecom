import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Dashboard } from "./pages/dashboard";


export default function App() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    // Ստուգում ենք, եթե նախկինում ընտրվել է թեմա
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
    // Ամենագլխավոր div-ին տալիս ենք 'dark' class-ը, եթե theme === 'dark'
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="bg-[#f8f9fa] dark:bg-[#222736] min-h-screen text-[#495057] dark:text-[#adb5bd]">
        <Header theme={theme} onThemeChange={toggleTheme} />
        <Dashboard />
      </div>
    </div>
  );
}