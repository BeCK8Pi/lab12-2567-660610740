import { ThemeContext } from "@contexts/ThemeContext";
import { LangContext } from "@contexts/LangContext";
import { useContext } from "react";

export const Detail = () => {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LangContext);
  return (
    <div>
      <p className="text-center" style={{ color: theme.fgColor }}>
        {/* tip: Get information from "theme" variable to determine 
    which theme is currently selected */}
        {theme.name==="light"?lang.detail.lightActivated:lang.detail.darkActivated}
      </p>
    </div>
  );
};

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