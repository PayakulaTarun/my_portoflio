export default function Projects() {
  const projects = [
    {
      title: "AI Traffic Management System",
      description: "Real-time traffic monitoring with ML-based congestion prediction and emergency vehicle detection. Reduced traffic delays by 30% in pilot testing.",
      impact: "30% reduction in traffic delays",
      tech: ["Python", "TensorFlow", "OpenCV", "React", "Node.js"],
      category: "AI/ML",
      featured: true
    },
    {
      title: "Gmail Automation AI Agent",
      description: "Automated workflow optimization system that reduced manual email tasks by 80%. Smart categorization and response suggestions using NLP.",
      impact: "80% reduction in manual tasks",
      tech: ["Python", "NLP", "Gmail API", "Machine Learning"],
      category: "Automation",
      featured: true
    },
    {
      title: "Computer Vision Applications",
      description: "Built gesture tracking and air drawing applications using MediaPipe and OpenCV. Real-time hand detection with 95% accuracy.",
      impact: "95% detection accuracy",
      tech: ["Python", "OpenCV", "MediaPipe", "Computer Vision"],
      category: "AI/ML",
      featured: false
    },
    {
      title: "Smart Retail Inventory System",
      description: "Intelligent inventory management with predictive analytics for stock optimization. Reduced overstock by 25% for retail clients.",
      impact: "25% reduction in overstock",
      tech: ["Python", "Machine Learning", "SQL", "Dashboard"],
      category: "Business Intelligence",
      featured: false
    }
  ]

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className={`project-card ${project.featured ? 'featured' : ''}`}>
              <div className="project-header">
                <span className="category">{project.category}</span>
                {project.featured && <span className="featured-badge">Featured</span>}
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="impact">
                <strong>Impact:</strong> {project.impact}
              </div>
              <div className="tech-stack">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}