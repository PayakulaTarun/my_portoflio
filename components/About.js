export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <p className="lead">
            I'm a freelance developer and data analyst helping businesses transform data into actionable insights and build scalable web applications.
          </p>
          
          <div className="what-i-deliver">
            <h3>🎯 What I Deliver</h3>
            
            <div className="delivery-section">
              <h4>Full-Stack Web Applications</h4>
              <ul>
                <li>React, Node.js, MongoDB/PostgreSQL stack</li>
                <li>Responsive design and modern UI/UX</li>
                <li>Cloud deployment on AWS and Firebase</li>
                <li>RESTful APIs and microservices architecture</li>
              </ul>
            </div>
            
            <div className="delivery-section">
              <h4>AI-Powered Solutions</h4>
              <ul>
                <li>Python-based machine learning models</li>
                <li>TensorFlow and scikit-learn implementations</li>
                <li>Computer vision with OpenCV</li>
                <li>Natural Language Processing applications</li>
              </ul>
            </div>
            
            <div className="delivery-section">
              <h4>Data Analysis & Visualization</h4>
              <ul>
                <li>SQL query optimization and database design</li>
                <li>Python data analysis (Pandas, NumPy, Matplotlib)</li>
                <li>Excel automation and advanced analytics</li>
                <li>Interactive dashboards and business intelligence reports</li>
              </ul>
            </div>
            
            <div className="delivery-section">
              <h4>Machine Learning & Predictive Analytics</h4>
              <ul>
                <li>Predictive modeling and pattern recognition</li>
                <li>Explainable AI (SHAP) for model interpretability</li>
                <li>Automated data pipelines</li>
                <li>Cloud deployment of ML models</li>
              </ul>
            </div>
          </div>
          
          <div className="achievements-section">
            <h3>💼 Recent Achievements</h3>
            <ul>
              <li>Analyzed 100+ datasets across various industries</li>
              <li>Developed production-ready AI applications with real-world impact</li>
              <li>Specialized in combining artificial intelligence with practical business solutions</li>
              <li>Delivered automated workflows reducing manual tasks by up to 80%</li>
            </ul>
          </div>
          
          <div className="impact-section">
            <h3>🏆 Professional Impact</h3>
            <p>My work focuses on delivering measurable results: reducing operational costs, improving decision-making processes, and automating repetitive tasks to help businesses scale efficiently.</p>
          </div>

          <div className="open-to-work">
            <h3>🟢 Currently Open to Work</h3>
            <div className="work-status">
              <h4>Actively seeking opportunities as:</h4>
              <ul>
                <li>Data Analyst</li>
                <li>Python Developer / Python Engineer</li>
                <li>Full-Stack Developer</li>
                <li>Frontend Developer</li>
                <li>AI/ML Engineer (Freelance)</li>
              </ul>
              <p>Available for both full-time positions and freelance projects.</p>
            </div>
          </div>
          
          <div className="certifications">
            <h3>Certifications & Credentials</h3>
            <div className="cert-detailed">
              <div className="cert-item">
                <h4>HackerRank Software Development Intern</h4>
                <p className="cert-date">November 2024</p>
                <p>Credential ID: E0E5DE3A8F90</p>
                <p>Advanced SQL and database optimization expertise</p>
                <a href="https://www.hackerrank.com/certificates/e0e5de3a8f90" target="_blank" rel="noopener noreferrer" className="cert-link">View Credential</a>
              </div>
              
              <div className="cert-item">
                <h4>AWS Certified</h4>
                <p className="cert-date">October 2024</p>
                <p>Cloud architecture and deployment</p>
                <p>EC2, S3, Lambda, and serverless technologies</p>
              </div>
              
              <div className="cert-item">
                <h4>IBM Cognos Developer</h4>
                <p>Business Intelligence and Dashboard Development</p>
                <p>Data warehouse integration</p>
              </div>
              
              <div className="cert-item">
                <h4>HackerRank Python Certification</h4>
                <p>Advanced Python programming and problem-solving</p>
              </div>
              
              <div className="cert-item">
                <h4>OpenCV Computer Vision Bootcamp</h4>
                <p>Real-time image processing and ML model deployment</p>
              </div>
              
              <div className="cert-item">
                <h4>IBM SkillsBuild AI Agents</h4>
                <p>Generative AI and automation workflows</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}