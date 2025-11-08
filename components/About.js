export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <p className="lead">
            Freelance developer and data analyst helping businesses transform data into actionable insights and build scalable web applications.
          </p>
          
          <div className="value-props">
            <div className="value-prop">
              <h3>🤖 AI-Powered Solutions</h3>
              <p>Built traffic management systems with ML-based congestion prediction and computer vision applications using TensorFlow and OpenCV.</p>
            </div>
            <div className="value-prop">
              <h3>📊 Data-Driven Insights</h3>
              <p>Analyzed 100+ datasets using Python, SQL, and Excel. Created visualizations and ML models that improved decision-making processes.</p>
            </div>
            <div className="value-prop">
              <h3>⚡ Full-Stack Development</h3>
              <p>Delivered production-ready applications using React, Node.js, and cloud deployment. Specialized in combining AI with practical business solutions.</p>
            </div>
          </div>

          <div className="certifications">
            <h3>Certifications</h3>
            <div className="cert-list">
              <span className="cert">AWS Certified</span>
              <span className="cert">IBM Cognos Developer</span>
              <span className="cert">HackerRank Python</span>
              <span className="cert">OpenCV Bootcamp</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}