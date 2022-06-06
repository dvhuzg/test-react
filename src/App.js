import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyles";
import { LightTheme } from "./components/Themes";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
// Components
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import WorkPage from "./components/WorkPage";
import MySkillsPage from "./components/MySkillsPage";
import { useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";
import SoundBar from "./subComponents/SoundBar";
function App() {
  const location = useLocation();
  return (
    <div>
      <GlobalStyle />

      <ThemeProvider theme={LightTheme}>
        <SoundBar />
        <AnimatePresence>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={Main} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/blog" component={BlogPage} />
            <Route exact path="/work" component={WorkPage} />
            <Route exact path="/skills" component={MySkillsPage} />
          </Switch>
        </AnimatePresence>
      </ThemeProvider>
    </div>
  );
}

export default App;
