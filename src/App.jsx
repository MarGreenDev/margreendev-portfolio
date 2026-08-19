import { useTranslation } from "react-i18next"
import Nav from "./components/nav";
import Sidebar from "./components/sidebar";

function App() {
  const { t, i18n } = useTranslation();

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
            <p>https://welcome-to-my-portfolio.dev</p>
          </div>

          <div className="language">
            <button onClick={switchLanguage}>
              <img src="language.svg" alt="language" />
              <p>{i18n.language === "en" ? "NL" : "EN"}</p>
            </button>
          </div>
        </div>
      </header>

      <Nav />

      <div className="browser-body">

        <div className="browser-content">

          < Sidebar />

          <main>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quibusdam ipsam cum voluptatem itaque ea quo repudiandae praesentium assumenda optio soluta nulla dolorum quaerat corporis ut, corrupti a aliquam velit.</p>
          </main>
        </div>

        <footer>
          footer
        </footer>
      </div>
    </div>
  )
}

export default App