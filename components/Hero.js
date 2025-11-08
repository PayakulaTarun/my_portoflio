import { useState, useEffect } from 'react'

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const roles = ['AI Engineer', 'Full-Stack Developer', 'Data Analyst', 'Freelance Consultant']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Payakula Tarun Chandra</h1>
            <h2>Freelance <span className="role-text">{roles[currentRole]}</span></h2>
            <p>Transforming data into actionable insights and building scalable AI-powered solutions. 100+ datasets analyzed, production-ready applications delivered.</p>
            
            <div className="stats">
              <div className="stat">
                <span className="number">100+</span>
                <span className="label">Datasets Analyzed</span>
              </div>
              <div className="stat">
                <span className="number">80%</span>
                <span className="label">Task Automation</span>
              </div>
              <div className="stat">
                <span className="number">2+</span>
                <span className="label">Years Experience</span>
              </div>
            </div>

            <div className="cta-buttons">
              <a href="/resume.pdf" className="btn primary" download>Download Resume</a>
              <a href="#contact" className="btn secondary">Hire Me</a>
            </div>

            <div className="social-links">
              <a href="https://www.linkedin.com/in/payakulatarunchandra" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/PayakulaTarun" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="mailto:payakulatarunchandra@gmail.com">Email</a>
            </div>
          </div>
          
          <div className="hero-image">
            <img src="/profile-photo.jpeg" alt="Payakula Tarun Chandra" className="profile-img" />
          </div>
        </div>
      </div>
    </section>
  )
}