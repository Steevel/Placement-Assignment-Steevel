import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import AppTheme from "../Colors";

const HeroSection = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  const [themeColor, setThemeColor] = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}`,
        textAlign: "center",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Context API theme toggler</h1>
      <p>This is a nice paragraph</p>
      <button
        onClick={() => {
          setThemeColor(themeColor === "light" ? "dark" : "light");
        }}
        style={{
          backgroundColor: "#26ae60",
          padding: "10px 150px",
          fontSize: "20px",
          color: "#fff",
          border: `${currentTheme.border}`,
        }}
      >
        {theme === "light" ? "Turn On Dark Mode" : "Turn On Light Mode"}
      </button>
    </div>
  );
};

export default HeroSection;
