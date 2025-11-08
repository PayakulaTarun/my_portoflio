export default function Insights() {
  return (
    <section className="insights" id="insights">
      <div className="container">
        <h2>Recent Insights & Articles</h2>
        
        <div className="insights-content">
          <div className="insight-card">
            <h3>🚀 The AI Revolution is Here – And It's Transforming Everything</h3>
            <p className="publish-date">Published: November 2025</p>
            
            <p className="insight-description">
              Exploring the latest developments in AI including Google DeepMind's cancer therapy breakthrough, 
              Gemini 2.5 Computer Use model, Tesla's Optimus updates, and how 71% of Indian workforce is 
              embracing AI for problem-solving and career planning.
            </p>
            
            <div className="key-topics">
              <strong>Key topics:</strong> Google DeepMind, AI in Healthcare, Tesla Optimus, Meta AI Models, Future of Work
            </div>
            
            <a href="https://www.linkedin.com/in/payakulatarunchandra" target="_blank" rel="noopener noreferrer" className="btn secondary">
              Read on LinkedIn
            </a>
          </div>
        </div>
        
        <div className="insights-cta">
          <p><em>Want to discuss AI trends or collaborate on projects? Let's connect!</em></p>
        </div>
      </div>
    </section>
  )
}