import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./themes/light";
import EstilosGlobais from "./Componentes/EstilosGlobais";
import { darkTheme } from "./themes/dark";
import Header from "./Componentes/Header";
import Banner from "./Componentes/Banner";
import Tecnologias from "./Componentes/Tecnologias";
import Main from "./Componentes/Main";


function App() {
  const [isDarkTheme, setisDarkTheme] = useState(false);

  return (
    <>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <EstilosGlobais />
        <Header setisDarkTheme={setisDarkTheme} isDarkTheme={isDarkTheme}/>
        <Banner />
        <Tecnologias />
        <Main />
      </ThemeProvider>
    </>
  )
}

export default App
