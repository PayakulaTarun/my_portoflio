export default function Testimonials() {
  const testimonials = [
    {
      text: "Tarun delivered an exceptional AI-powered analytics dashboard that transformed our decision-making process. His expertise in both technical implementation and business understanding is remarkable.",
      client: "Tech Startup CEO",
      project: "Data Analytics Dashboard"
    },
    {
      text: "The traffic management system exceeded our expectations. The ML-based predictions were accurate and the real-time monitoring saved us significant operational costs.",
      client: "Municipal Authority",
      project: "AI Traffic System"
    },
    {
      text: "Professional, efficient, and delivered exactly what we needed. The automated workflows reduced our manual work by 80%. Highly recommended for AI/ML projects.",
      client: "E-commerce Company",
      project: "Process Automation"
    }
  ]

  return (
    <section className="testimonials">
      <div className="container">
        <h2>Client Success Stories</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="quote-icon">"</div>
              <p>{testimonial.text}</p>
              <div className="testimonial-footer">
                <strong>{testimonial.client}</strong>
                <span>{testimonial.project}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}