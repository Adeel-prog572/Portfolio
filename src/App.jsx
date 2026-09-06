
function App() {
  return (
    <>
      <header className="navbar">
        <div className="logo">
          Adeel<span> Ashraf</span>
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="hire-btn">
          Hire Me
        </a>
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="small-title">HELLO, I'M ADEEL</p>

            <h1>
              Frontend Developer
              <br />
              <span>Building for the web.</span>
            </h1>

            <p className="hero-description">
              I build modern, responsive and user-friendly websites
              using HTML, CSS, JavaScript and React.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="main-btn">
                View Projects
              </a>

              <a href="#contact" className="outline-btn">
                Contact Me
              </a>
            </div>

            <div className="availability">
              <span className="dot"></span>
              Available for opportunities
            </div>
          </div>

          <div className="hero-visual">
            <div className="profile-card">
              <div className="profile-circle">
                <span>&lt;/&gt;</span>
              </div>

              <h3>Frontend Developer</h3>
              <p>React • JavaScript • CSS</p>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <div className="section-title">
            <span>01</span>
            <p>ABOUT ME</p>
          </div>

          <div className="about-grid">
            <h2>
              I turn ideas into
              <span> digital experiences.</span>
            </h2>

            <div className="about-content">
              <p>
                I'm a frontend developer focused on creating clean,
                responsive and modern websites.
              </p>

              <p>
                I enjoy learning new technologies, solving problems and
                turning designs into functional web applications.
              </p>

              <div className="about-stats">
                <div>
                  <strong>03+</strong>
                  <span>Projects</span>
                </div>

                <div>
                  <strong>04</strong>
                  <span>Core Skills</span>
                </div>

                <div>
                  <strong>100%</strong>
                  <span>Passion</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section skills-section">
          <div className="section-title">
            <span>02</span>
            <p>SKILLS</p>
          </div>

          <h2 className="section-heading">
            Technologies I <span>work with.</span>
          </h2>

          <div className="skills-grid">
            <div className="skill">
              <span>01</span>
              <h3>HTML5</h3>
              <p>Semantic and accessible website structure.</p>
            </div>

            <div className="skill">
              <span>02</span>
              <h3>CSS3</h3>
              <p>Responsive layouts and modern visual design.</p>
            </div>

            <div className="skill">
              <span>03</span>
              <h3>JavaScript</h3>
              <p>Interactive and dynamic web applications.</p>
            </div>

            <div className="skill">
              <span>04</span>
              <h3>React</h3>
              <p>Reusable components and modern interfaces.</p>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <div className="section-title">
            <span>03</span>
            <p>PROJECTS</p>
          </div>
          

          <div className="projects-header">
            <h2>
              Selected <span>work.</span>
            </h2>

            <p>
              Some projects I've built while developing my frontend
              development skills.
            </p>
          </div>

          <div className="projects-grid">
            <a
  href=" https://adeel-prog572.github.io/calculator-app/"
  target="_blank"
  rel="noopener noreferrer"
  className="project"
>
              <div className="project-top">
                <span>01</span>
                <span className="arrow">↗</span>
              </div>

              <div>
                <p className="project-category">JAVASCRIPT</p>
                <h3>Calculator App</h3>

                <p className="project-description">
                  A clean calculator application with interactive
                  operations and a responsive interface.
                </p>
              </div>

              <div className="tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>
              </a>
            

              <a
  href=" https://adeel-prog572.github.io/weather-app/"
  target="_blank"
  rel="noopener noreferrer"
  className="project"
>
              <div className="project-top">
                <span>02</span>
                <span className="arrow">↗</span>
              </div>

              <div>
                <p className="project-category">JAVASCRIPT</p>
                <h3>Weather App</h3>

                <p className="project-description">
                  A modern weather application with a clean interface
                  for displaying weather information.
                </p>
              </div>

              <div className="tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>
            </a>

            <article className="project">
              <div className="project-top">
                <span>03</span>
                <span className="arrow">↗</span>
              </div>

              <div>
                <p className="project-category">REACT</p>
                <h3>Portfolio Website</h3>

                <p className="project-description">
                  A responsive personal portfolio built with React to
                  showcase skills and projects.
                </p>
              </div>

              <div className="tags">
                <span>React</span>
                <span>Vite</span>
                <span>CSS</span>
              </div>
            </article>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact">
          <p className="small-title">04 — CONTACT</p>

          <h2>
            Let's build something
            <span> great together.</span>
          </h2>

          <p>
            Have a project or opportunity in mind? I'd love to hear
            about it.
          </p>

          <a href="mailto:adeelashraf9981@gmail.com" className="main-btn">
            Get In Touch →
          </a>
        </section>
      </main>

      <footer>
        <div className="logo">
          Adeel<span>.</span>
        </div>

        <p>© 2026 Adeel. All rights reserved.</p>

        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  )
}

export default App
