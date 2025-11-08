export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Tarun Chandra</h3>
            <p>Freelance AI Engineer & Full-Stack Developer</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/payakulatarunchandra" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/PayakulaTarun" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="mailto:payakulatarunchandra@gmail.com">Email</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>AI/ML Development</li>
              <li>Data Analysis</li>
              <li>Web Development</li>
              <li>Process Automation</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <p>📧 payakulatarunchandra@gmail.com</p>
            <p>📱 +91 7337312325</p>
            <p>📍 Vijayawada, Andhra Pradesh</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-links">
            <a href="#home" className="back-to-top">Back to Top ↑</a>
            <span className="footer-separator">|</span>
            <span>Last Updated: November 2025</span>
          </div>
          <p>&copy; 2024 Payakula Tarun Chandra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}