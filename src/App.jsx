import { useTranslation } from "react-i18next"
import { useState } from "react";
import Nav from "./components/nav";
import Sidebar from "./components/sidebar";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import SidebarButton from "./components/sidebarButton";


function App() {
  const { t, i18n } = useTranslation();

  const [activePage, setActivePage] = useState("about");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const switchLanguage = () => {
    const newLanguage = i18n.language === "en" ? "nl" : "en";
    i18n.changeLanguage(newLanguage);
  }

  return (
    <div className="browser">
      <header className="browser-bar">

        <h1>margreen.dev | Marylou Groeneveld</h1>

        <div className="search-lang">

          <div className="arrow-buttons">
            <div className="arrow">←</div>
            <div className="arrow">→</div>
          </div>

          <div className="search-bar">
            <img src="lock.svg" alt="lock" />
            <p>https://margreen.dev/{activePage}</p>
          </div>

          <div className="language">
            <button onClick={switchLanguage}>
              <img src="language.svg" alt="language" />
              <p>{i18n.language === "en" ? "NL" : "EN"}</p>
            </button>
          </div>
        </div>
      </header>

      <div className="mobile-bar">
        <SidebarButton isOpen={sidebarOpen}
          onClick={() => setSidebarOpen(!sidebarOpen)} />
        <Nav setActivePage={setActivePage}
          activePage={activePage} />
      </div>

      <div className="browser-body">

        <div className="browser-content">

          < Sidebar isOpen={sidebarOpen} />

          <main>
            {activePage === "about" && <About />}
            {activePage === "projects" && <Projects />}
            {activePage === "contact" && <Contact />}
          </main>
        </div>

        <footer>
          <p>{t("footer.text")}</p>
        </footer>
      </div>
    </div>
  )
}

export default App