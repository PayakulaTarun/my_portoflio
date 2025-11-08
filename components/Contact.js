import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    budget: '',
    message: ''
  })

  const services = [
    { name: "AI/ML Development", price: "Starting at $2000" },
    { name: "Data Analysis & Visualization", price: "Starting at $800" },
    { name: "Full-Stack Web Development", price: "Starting at $1500" },
    { name: "Process Automation", price: "Starting at $1200" }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you! I\'ll get back to you within 24 hours.')
    setFormData({ name: '', email: '', service: '', budget: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Ready to Transform Your Business?</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Available for Freelance Projects</h3>
            <p>Specializing in AI/ML implementation, data analysis, and full-stack development. Let's discuss how I can help your business grow.</p>
            
            <div className="services-pricing">
              <h4>Services & Starting Rates</h4>
              {services.map((service, index) => (
                <div key={index} className="service-item">
                  <span className="service-name">{service.name}</span>
                  <span className="service-price">{service.price}</span>
                </div>
              ))}
            </div>

            <div className="contact-details">
              <div className="contact-item">
                <span className="icon">📧</span>
                <span>payakulatarunchandra@gmail.com</span>
              </div>
              <div className="contact-item">
                <span className="icon">📱</span>
                <span>+91 7337312325</span>
              </div>
              <div className="contact-item">
                <span className="icon">📍</span>
                <span>Vijayawada, Andhra Pradesh</span>
              </div>
            </div>
            
            <div className="availability-info">
              <h4>Availability Information</h4>
              <div className="availability-grid">
                <div className="availability-item">
                  <strong>Response Time:</strong> Within 24 hours
                </div>
                <div className="availability-item">
                  <strong>Time Zone:</strong> IST (Indian Standard Time)
                </div>
                <div className="availability-item">
                  <strong>Preferred Contact:</strong> Email for project inquiries, LinkedIn for networking
                </div>
                <div className="availability-item">
                  <strong>Availability:</strong> Monday - Saturday, 9 AM - 8 PM IST
                </div>
                <div className="availability-item">
                  <strong>Languages:</strong> English, Telugu, Hindi
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h4>Start Your Project</h4>
            <input 
              type="text" 
              name="name"
              placeholder="Your Name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
            <input 
              type="email" 
              name="email"
              placeholder="Your Email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
            <select 
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Select Service</option>
              <option value="ai-ml">AI/ML Development</option>
              <option value="data-analysis">Data Analysis</option>
              <option value="web-development">Web Development</option>
              <option value="automation">Process Automation</option>
            </select>
            <input 
              type="text" 
              name="budget"
              placeholder="Project Budget Range" 
              value={formData.budget}
              onChange={handleChange}
            />
            <textarea 
              name="message"
              placeholder="Describe your project requirements..." 
              rows="5" 
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="btn primary">Get Free Consultation</button>
          </form>
        </div>
      </div>
    </section>
  )
}