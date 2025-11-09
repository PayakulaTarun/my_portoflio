import { useState, useEffect } from 'react'
import ThreeScene from './ThreeScene'

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const roles = ['AI Engineer', 'Full-Stack Developer', 'Data Analyst', 'Freelance Consultant']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const smoothScroll = (e, target) => {
    e.preventDefault()
    const element = document.querySelector(target)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Payakula Tarun Chandra</h1>
            <h2>
              Freelance{' '}
              <span className="role-text">
                {roles[currentRole]}
              </span>
            </h2>
            <p>
              Transforming data into actionable insights and building scalable AI-powered solutions. 
              100+ datasets analyzed, production-ready applications delivered.
            </p>
            
            <div className="stats">
              <div className="stat">
                <span className="number" data-count="100">100+</span>
                <span className="label">Datasets Analyzed</span>
              </div>
              <div className="stat">
                <span className="number" data-count="80">80%</span>
                <span className="label">Task Automation</span>
              </div>
              <div className="stat">
                <span className="number" data-count="500">500+</span>
                <span className="label">LinkedIn Connections</span>
              </div>
              <div className="stat">
                <span className="number" data-count="758">758</span>
                <span className="label">Followers</span>
              </div>
            </div>

            <div className="cta-buttons">
              <a href="/resume.pdf" className="btn primary" download>
                <span>Download Resume</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                </svg>
              </a>
              <a href="#contact" className="btn secondary" onClick={(e) => smoothScroll(e, '#contact')}>
                <span>Hire Me</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
                </svg>
              </a>
            </div>

            <div className="social-links">
              <a href="https://www.linkedin.com/in/payakulatarunchandra" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://github.com/PayakulaTarun" target="_blank" rel="noopener noreferrer" title="GitHub">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="mailto:payakulatarunchandra@gmail.com" title="Email">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="hero-image">
            <ThreeScene />
            <img src="/profile-photo.jpeg" alt="Payakula Tarun Chandra" className="profile-img" />
          </div>
        </div>
      </div>
    </section>
  )
}