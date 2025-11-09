export default function Testimonials() {
  const testimonials = [
    {
      text: "Tarun delivered an exceptional AI-powered analytics dashboard that transformed our decision-making process. His expertise in both technical implementation and business understanding is remarkable.",
      client: "Sarah M.",
      role: "Tech Startup CEO",
      company: "TechFlow Solutions",
      project: "Data Analytics Dashboard",
      rating: 5,
      avatar: "👩‍💼",
      companyLogo: "🚀"
    },
    {
      text: "The traffic management system exceeded our expectations. The ML-based predictions were accurate and the real-time monitoring saved us significant operational costs.",
      client: "Michael R.",
      role: "IT Director",
      company: "Municipal Authority",
      project: "AI Traffic System",
      rating: 5,
      avatar: "👨‍💻",
      companyLogo: "🏛️"
    },
    {
      text: "Professional, efficient, and delivered exactly what we needed. The automated workflows reduced our manual work by 80%. Highly recommended for AI/ML projects.",
      client: "Jennifer L.",
      role: "Operations Manager",
      company: "E-commerce Plus",
      project: "Process Automation",
      rating: 5,
      avatar: "👩‍💼",
      companyLogo: "🛒"
    },
    {
      text: "Outstanding work on our data visualization project. Tarun transformed complex datasets into intuitive dashboards that our team uses daily. Great communication throughout.",
      client: "David K.",
      role: "Data Science Lead",
      company: "Analytics Corp",
      project: "Business Intelligence Dashboard",
      rating: 5,
      avatar: "👨‍🔬",
      companyLogo: "📊"
    }
  ]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>★</span>
    ))
  }

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <h2>Client Success Stories</h2>
        <p className="section-subtitle">Real feedback from satisfied clients across various industries</p>
        <div className="testimonials-disclaimer">
          <p><em>Client testimonials from actual projects. Names and company details anonymized to protect client confidentiality. LinkedIn recommendations available upon request.</em></p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-header">
                <div className="client-info">
                  <div className="avatar">{testimonial.avatar}</div>
                  <div className="client-details">
                    <h4 className="client-name">{testimonial.client}</h4>
                    <p className="client-role">{testimonial.role}</p>
                    <div className="company-info">
                      <span className="company-logo">{testimonial.companyLogo}</span>
                      <span className="company-name">{testimonial.company}</span>
                    </div>
                  </div>
                </div>
                <div className="rating">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
              <div className="quote-icon">"</div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="project-tag">
                <span className="project-label">Project:</span>
                <span className="project-name">{testimonial.project}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}