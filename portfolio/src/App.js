import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav id="navbar" class="nav">
        <ul class="nav-list">
          <li>
            <a href="#welcome-section">About</a>
          </li>
          <li>
            <a href="#projects">Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <section id="welcome-section" class="welcome-section">
        <h1>Hey, I am Tom Kelly.</h1>
        <p>A current Graduate Test Analyst learning technical skills.</p>
      </section>

      <section id="projects" class="projects-section">
        <h2 class="projects-section-header">These are some of my projects</h2>

        <div class="projects-grid">
          <a
            href="https://tom-kelly25.github.io/Random-Quote-Machine/"
            target="_blank"
            class="project project-tile"
          >
            <img class="project-image" src="" alt="project" />
            <p class="project-title">
              <span class="code">&lt;</span>
              Random Quote Machine
              <span class="code">&#47;&gt;</span>
            </p>
          </a>
          <a
            href="https://tom-kelly25.github.io/Markdown-Previewer/"
            target="_blank"
            class="project project-tile"
          >
            <img class="project-image" src="" alt="project" />
            <p class="project-title">
              <span class="code">&lt;</span>
              Markdown Previewer
              <span class="code">&#47;&gt;</span>
            </p>
          </a>
          <a
            href="https://tom-kelly25.github.io/JavaScript-Calculator/"
            target="_blank"
            class="project project-tile"
          >
            <img class="project-image" src="" alt="project" />
            <p class="project-title">
              <span class="code">&lt;</span>
              JavaScript Calculator
              <span class="code">&#47;&gt;</span>
            </p>
          </a>
          <a
            href="https://tom-kelly25.github.io/Drum-Machine/"
            target="_blank"
            class="project project-tile"
          >
            <img class="project-image" src="" alt="project" />
            <p class="project-title">
              <span class="code">&lt;</span>
              Drum Machine
              <span class="code">&#47;&gt;</span>
            </p>
          </a>
          <a
            href="https://tom-kelly25.github.io/25plus5-Clock/"
            target="_blank"
            class="project project-tile"
          >
            <img class="project-image" src="" alt="project" />
            <p class="project-title">
              <span class="code">&lt;</span>
              25 plus 5 Clock
              <span class="code">&#47;&gt;</span>
            </p>
          </a>
        </div>
        <a
          href="https://github.com/tom-kelly25"
          class="btn btn-show-all"
          target="_blank"
        >
          See more<i class="fas fa-chevron-right"></i>
        </a>
      </section>

      <section id="contact" class="contact-section">
        <div class="contact-section-header">
          <h2>Let's work together...</h2>
          <p>Any feedback or advice is greatly appreciated.</p>
        </div>
        <div class="contact-links">
          <a
            id="profile-link"
            href="https://github.com/tom-kelly25"
            target="_blank"
            class="btn contact-details"
          >
            <i class="fab fa-github"></i> GitHub
          </a>
          <a href="mailto:tomkelly2547@gmail.com" class="btn contact-details">
            <i class="fas fa-at"></i> Send a email
          </a>
          <a href="tel:07728884405" class="btn contact-details">
            <i class="fas fa-mobile-alt"></i> Call me
          </a>
        </div>
      </section>

      <footer>
        <p>Thank you for viewing :D</p>
      </footer>
    </div>
  );
}

export default App;
