import React, { useContext, useState } from "react";
import "./style.css";

export const themes = {
  light: {
    color: "#555555",
    background: "#eeeeee"
  },
  dark: {
    color: "#eeeeee",
    background: "#222222"
  },
  vaporwave: {
    color: "#ffffff",
    background: "#ff71ce"
  }
};

export const ThemeContext = React.createContext({
  theme: themes.light,
  updateTheme: () => {}
});

export default function App() {
  const [currentTheme, setCurrentTheme] = useState(themes.light);

  return (
    <div className="App">
      <h1>React Context</h1>

      <ThemeContext.Provider
        value={{ theme: currentTheme, updateTheme: setCurrentTheme }}
      >
        <h2>Con componente tipo función y useContext</h2>

        <MyNewButton onClick={() => setCurrentTheme(themes.dark)}>
          Dark Theme
        </MyNewButton>

        <MyNewButton onClick={() => setCurrentTheme(themes.vaporwave)}>
          Vaporwave Theme
        </MyNewButton>

        <MyNewButton>Light Theme</MyNewButton>
      </ThemeContext.Provider>
    </div>
  );
}


const MyNewButton = (props) => {
  const { theme, updateTheme } = useContext(ThemeContext);

  const style = {
    backgroundColor: theme.background,
    color: theme.color,
    border: "1px solid",
    borderRadius: 5
  };

  const updateLightTheme = () => {
    updateTheme(themes.light);
  };

  const onClick = props.handleClick || updateLightTheme;

  return <button onClick={onClick} {...props} style={style} />;
};