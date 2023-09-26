import {useEffect} from "react";
import AppRouter from "./Router/AppRouter";
import { Layout } from "./styles/Layout";
import GlobalStyle from "./styles/GlobalStyle";
import {RecoilRoot} from "recoil";

function App() {
    function setScreenSize() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    }
    useEffect(() => {
        setScreenSize();
    });

  return (
      <RecoilRoot>
          <Layout>
              <GlobalStyle />
              <AppRouter />
          </Layout>
      </RecoilRoot>

  );
}

export default App;
