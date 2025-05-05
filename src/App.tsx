import React, { useState, useEffect } from "react";
import ThemeToggler from "./commoComponents/MuiSwitch";

const App = () => {
  const [isDark, setIsDark] = useState(false);

  const handleTheme = (e) => {
    setIsDark(e);
    const mode = e ? "dark" : "light";
    localStorage.setItem("data-theme", mode);
    document.body.setAttribute("data-theme", mode);
  };
  useEffect(() => {
    const mode = localStorage.getItem("data-theme") || "light";
    setIsDark(mode === "dark");
    document.body.setAttribute("data-theme", mode);
  }, []);
  return (
    <div className="App">
      <ThemeToggler onChange={handleTheme} checked={isDark} />
    </div>
  );
};

export default App;
