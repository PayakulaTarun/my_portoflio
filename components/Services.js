export default function Services() {
  const services = [
    {
      icon: "🤖",
      title: "AI & Machine Learning Development",
      description: "Custom ML model development and training, Computer vision applications (OpenCV, MediaPipe), Natural Language Processing (NLP) solutions, Predictive analytics and forecasting, Model deployment and optimization",
      price: "Starting at $2000"
    },
    {
      icon: "📊",
      title: "Data Analysis & Business Intelligence",
      description: "SQL database design and optimization, Python data analysis (Pandas, NumPy), Interactive dashboards and visualizations, Statistical analysis and reporting, Data pipeline automation",
      price: "Starting at $800"
    },
    {
      icon: "💻",
      title: "Full-Stack Web Development",
      description: "React.js frontend applications, Node.js backend APIs, MongoDB/PostgreSQL database design, Cloud deployment (AWS, Firebase), Progressive Web Apps (PWAs)",
      price: "Starting at $1500"
    },
    {
      icon: "⚡",
      title: "Process Automation & Integration",
      description: "AI-powered workflow automation, Email and communication automation, API integrations and webhooks, Database management systems, Cloud infrastructure setup",
      price: "Starting at $1200"
    },
    {
      icon: "🎯",
      title: "Additional Services",
      description: "Public speaking and technical presentations, Cloud application architecture, Database development and migration, Web design and UI/UX implementation",
      price: "Custom Quote"
    }
  ]

  return (
    <section className="services" id="services">
      <div className="container">
        <h2>Professional Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-price">{service.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}