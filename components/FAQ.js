import { useState } from 'react'

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState(null)

  const faqs = [
    {
      question: "What's your typical project timeline?",
      answer: "Small projects (dashboards, automation): 1-2 weeks. Medium projects (ML models, web apps): 3-6 weeks. Large projects (full systems): 2-3 months."
    },
    {
      question: "Do you work with international clients?",
      answer: "Yes! I work with clients globally and am flexible with time zones."
    },
    {
      question: "What's your payment structure?",
      answer: "50% upfront, 50% upon completion. Milestone-based payments for larger projects."
    },
    {
      question: "Do you provide post-launch support?",
      answer: "Yes, 30 days of free support included. Extended maintenance plans available."
    },
    {
      question: "Can you work with existing code/systems?",
      answer: "Absolutely! I can integrate with or improve existing applications."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <section className="faq" id="faq">
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openFAQ === index ? 'open' : ''}`}>
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <h3>Q: {faq.question}</h3>
                <span className="faq-toggle">{openFAQ === index ? '−' : '+'}</span>
              </div>
              {openFAQ === index && (
                <div className="faq-answer">
                  <p>A: {faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}