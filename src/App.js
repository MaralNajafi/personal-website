import "./style/Reset.css";
import "./style/UtilityClasses.css";
import "./style/App.css";

function App() {
  return (
    <div class="container">
      <section class="header-section">
        <div class="inner-container">
          <header class="main-header d-flex jc-space-between ai-center">
            <h1>My website</h1>
            <nav class="main-nav">
              <ul class="d-flex ai-center">
                <li class="active">
                  <a href="#">home</a>
                </li>
                <li>
                  <a href="#">about</a>
                </li>
                <li>
                  <a href="#">contact</a>
                </li>
              </ul>
            </nav>
          </header>
          <div class="showcase d-grid">
            <div class="showcase__info">
              <div>
                <span>This is me</span>
                <h2>Maral Najafi</h2>
                <p class="my-position">front end developer</p>
                <p class="my-explanation">
                  Creating, using computer tools, has always been my number 1
                  passion. I was a senior business management student when I was
                  first introduced to front-end web development. A journey to
                  create, using computers' languages!
                </p>
                <button class="btn-primary">about me</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
