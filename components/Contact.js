import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    budget: '',
    message: ''
  })
  
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const services = [
    { name: "AI/ML Development", price: "Starting at $2000", icon: "🤖" },
    { name: "Data Analysis & Visualization", price: "Starting at $800", icon: "📊" },
    { name: "Full-Stack Web Development", price: "Starting at $1500", icon: "💻" },
    { name: "Process Automation", price: "Starting at $1200", icon: "⚙️" },
    { name: "Consulting & Strategy", price: "Starting at $150/hour", icon: "💡" }
  ]

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value.length < 2 ? 'Name must be at least 2 characters' : ''
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return !emailRegex.test(value) ? 'Please enter a valid email address' : ''
      case 'service':
        return !value ? 'Please select a service' : ''
      case 'message':
        return value.length < 10 ? 'Message must be at least 10 characters' : ''
      default:
        return ''
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Validate all fields
    const newErrors = {}
    Object.keys(formData).forEach(key => {
      if (key !== 'budget') { // budget is optional
        const error = validateField(key, formData[key])
        if (error) newErrors[key] = error
      }
    })
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setIsSubmitting(false)
      return
    }
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success')
      setIsSubmitting(false)
      setFormData({ name: '', email: '', service: '', budget: '', message: '' })
      setErrors({})
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus(''), 5000)
    }, 2000)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    
    // Real-time validation
    if (errors[name]) {
      const error = validateField(name, value)
      setErrors({
        ...errors,
        [name]: error
      })
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    const error = validateField(name, value)
    setErrors({
      ...errors,
      [name]: error
    })
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Ready to Transform Your Business?</h2>
        <p className="section-subtitle">Let's discuss your project and create something amazing together</p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <h3>Available for Freelance Projects</h3>
              <p>Specializing in AI/ML implementation, data analysis, and full-stack development. Let's discuss how I can help your business grow.</p>
            </div>
            
            <div className="services-pricing">
              <h4>Services & Starting Rates</h4>
              {services.map((service, index) => (
                <div key={index} className="service-item">
                  <div className="service-info">
                    <span className="service-icon">{service.icon}</span>
                    <span className="service-name">{service.name}</span>
                  </div>
                  <span className="service-price">{service.price}</span>
                </div>
              ))}
            </div>

            <div className="contact-details">
              <h4>Get in Touch</h4>
              <div className="contact-item">
                <span className="icon">📧</span>
                <div className="contact-text">
                  <strong>Email</strong>
                  <span>payakulatarunchandra@gmail.com</span>
                </div>
              </div>
              <div className="contact-item">
                <span className="icon">📱</span>
                <div className="contact-text">
                  <strong>Phone</strong>
                  <span>+91 7337312325</span>
                </div>
              </div>
              <div className="contact-item">
                <span className="icon">📍</span>
                <div className="contact-text">
                  <strong>Location</strong>
                  <span>Vijayawada, Andhra Pradesh, India</span>
                </div>
              </div>
              <div className="contact-item">
                <span className="icon">⏰</span>
                <div className="contact-text">
                  <strong>Response Time</strong>
                  <span>Within 24 hours</span>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-header">
              <h4>Start Your Project</h4>
              <p>Fill out the form below and I'll get back to you within 24 hours</p>
            </div>
            
            {submitStatus === 'success' && (
              <div className="success-message">
                <span className="success-icon">✅</span>
                <p>Thank you! Your message has been sent successfully. I'll get back to you within 24 hours.</p>
              </div>
            )}
            
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input 
                type="text" 
                id="name"
                name="name"
                placeholder="Enter your full name" 
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.name ? 'error' : ''}
                required 
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input 
                type="email" 
                id="email"
                name="email"
                placeholder="Enter your email address" 
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.email ? 'error' : ''}
                required 
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="service">Service Required *</label>
              <select 
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.service ? 'error' : ''}
                required
              >
                <option value="">Select a service</option>
                <option value="ai-ml">AI/ML Development</option>
                <option value="data-analysis">Data Analysis & Visualization</option>
                <option value="web-development">Full-Stack Web Development</option>
                <option value="automation">Process Automation</option>
                <option value="consulting">Consulting & Strategy</option>
              </select>
              {errors.service && <span className="error-message">{errors.service}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="budget">Project Budget (Optional)</label>
              <input 
                type="text" 
                id="budget"
                name="budget"
                placeholder="e.g., $1000-$5000 or ₹50,000-₹2,00,000" 
                value={formData.budget}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Project Details *</label>
              <textarea 
                id="message"
                name="message"
                placeholder="Describe your project requirements, timeline, and any specific needs..." 
                rows="5" 
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.message ? 'error' : ''}
                required
              ></textarea>
              {errors.message && <span className="error-message">{errors.message}</span>}
              <div className="character-count">
                {formData.message.length}/500 characters
              </div>
            </div>
            
            <button 
              type="submit" 
              className={`btn primary submit-btn ${isSubmitting ? 'loading' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  Sending...
                </>
              ) : (
                <>
                  <span>Get Free Consultation</span>
                  <span className="btn-icon">→</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}