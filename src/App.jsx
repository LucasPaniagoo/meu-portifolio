import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./themes/light";
import EstilosGlobais from "./Componentes/EstilosGlobais";
import { darkTheme } from "./themes/dark";
import Header from "./Componentes/Header";
import Banner from "./Componentes/Banner";
import Tecnologias from "./Componentes/Tecnologias";
import Main from "./Componentes/Main";
import Footer from "./Componentes/Footer";


function App() {
  const [isDarkTheme, setisDarkTheme] = useState(true);

  return (
    <>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <EstilosGlobais />
        <Header setisDarkTheme={setisDarkTheme} isDarkTheme={isDarkTheme}/>
        <Banner />
        <Tecnologias />
        <Main />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App
