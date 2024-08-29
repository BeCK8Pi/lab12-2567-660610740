import { LangContext } from "@contexts/LangContext";
import { ThemeContext } from "@contexts/ThemeContext";
import { useContext } from "react";

export default function Controller() {
  const { toggleTheme, setDarkTheme, setLightTheme } = useContext(ThemeContext);
  const { lang, toggleLang } = useContext(LangContext);
  return (
    <div className="d-flex justify-content-center gap-2">
      <button className="btn btn-secondary" onClick={setLightTheme}>
        {/* Please update this text so it shows in EN or TH */}
        {lang.buttons.setLightTheme}
      </button>
      <button className="btn btn-dark" onClick={setDarkTheme}>
        {/* Please update this text so it shows in EN or TH */}
        {lang.buttons.setDarkTheme}
      </button>
      <button className="btn btn-primary" onClick={toggleTheme}>
        {/* Please update this text so it shows in EN or TH */}
        {lang.buttons.toggleTheme}
      </button>
      <button className="btn btn-danger" onClick={toggleLang}>
        {/* Please update this text so it shows in EN or TH */}
        {lang.buttons.toggleLang}
      </button>
    </div>
  );
}

/* 
const THEMES = {
    LIGHT: {
      name: "light",
      bgColor: "white",
      fgColor: "black",
    },
    DARK: {
      name: "dark",
      bgColor: "black",
      fgColor: "white",
    },
  };

const LANGS = {
    EN: {
      name: "en",
      header: "A simple useContext Example",
      detail: {
        lightActivated: "light theme activated",
        darkActivated: "dark theme activated",
      },
      buttons: {
        setLightTheme: "Light",
        setDarkTheme: "Dark",
        toggleTheme: "Toggle Theme",
        toggleLang: "Toggle Language",
      },
    },
    TH: {
      name: "th",
      header: "ตัวอย่างเว็บไซท์ useContext อย่างง่าย",
      detail: {
        lightActivated: "กำลังใช้ธีมไลท์",
        darkActivated: "กำลังใช้ธีมดาร์ค",
      },
      buttons: {
        setLightTheme: "ธีมไลท์",
        setDarkTheme: "ธีมดาร์ค",
        toggleTheme: "สลับธีม",
        toggleLang: "สลับภาษา",
      },
    },
  }; */