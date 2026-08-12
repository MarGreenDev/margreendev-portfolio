

function App() {
  return (
    <div className="browser">
      <header className="browser-bar">

        <h1>margreen.dev</h1>

        <div className="search-lang">

          <div className="arrow-buttons">
            <div className="arrow">←</div>
            <div className="arrow">→</div>
          </div>

          <div className="search-bar">
            <p>Welcome to my portfolio!</p>
          </div>

          <div className="language">
            <img src="language.svg" alt="language" />
            <p>NL</p> {/* will be button ig */}
          </div>
        </div>
      </header>

      <div className="browser-content">
        <h1>welcome</h1>
        <p>my cool portfolio</p>
      </div>

    </div>
  )
}

export default App