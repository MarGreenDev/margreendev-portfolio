import { useTranslation } from "react-i18next"

function App() {
  const { t, i18n } = useTranslation();

  const switchLanguage = () => {
    const newLanguage = i18n.language === "en" ? "nl" : "en";
    i18n.changeLanguage(newLanguage);
  }

  return (
    <main className="browser">
      <header className="browser-bar">

        <h1>margreen.dev | Marylou Groeneveld</h1>

        <div className="search-lang">

          <div className="arrow-buttons">
            <div className="arrow">←</div>
            <div className="arrow">→</div>
          </div>

          <div className="search-bar">
            <img src="lock.svg" alt="lock" />
            <p>https:://welcome-to-my-portfolio.dev</p>
          </div>

          <div className="language">
            <button onClick={switchLanguage}>
              <img src="language.svg" alt="language" />
              {i18n.language === "en" ? "NL" : "EN"}
            </button> {/* will be button ig */}
          </div>
        </div>
      </header>

      <div className="browser-content">
        <aside>
          <h2>{t("sidebar.title")}</h2>
          <p>{t("sidebar.description")}</p>

        </aside>
      </div>



    </main>
  )
}

export default App