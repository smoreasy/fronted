import {useEffect} from "react";
import AppRouter from "./Router/AppRouter";
import { Layout } from "./styles/Layout";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
    function setScreenSize() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    }
    useEffect(() => {
        setScreenSize();
    });

  return (
      <Layout>
          <GlobalStyle />
          <AppRouter />
      </Layout>
  );
}

export default App;
