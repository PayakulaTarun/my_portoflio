export default function Process() {
  const processSteps = [
    {
      step: "1",
      title: "Discovery & Consultation",
      subtitle: "(Free)",
      description: "Understanding your business needs, goals, and technical requirements"
    },
    {
      step: "2",
      title: "Proposal & Planning",
      subtitle: "(1-2 days)",
      description: "Detailed project scope, timeline, and cost estimation"
    },
    {
      step: "3",
      title: "Development & Updates",
      subtitle: "(Weekly check-ins)",
      description: "Iterative development with regular progress updates and feedback loops"
    },
    {
      step: "4",
      title: "Testing & Refinement",
      subtitle: "(Included)",
      description: "Quality assurance, bug fixes, and performance optimization"
    },
    {
      step: "5",
      title: "Deployment & Support",
      subtitle: "(30 days free)",
      description: "Cloud deployment, documentation, and post-launch support"
    },
    {
      step: "6",
      title: "Maintenance",
      subtitle: "(Optional)",
      description: "Ongoing updates, feature additions, and technical support"
    }
  ]

  return (
    <section className="process" id="process">
      <div className="container">
        <h2>My Work Process</h2>
        <div className="process-grid">
          {processSteps.map((process, index) => (
            <div key={index} className="process-step">
              <div className="step-number">{process.step}</div>
              <h3>{process.title}</h3>
              <p className="step-subtitle">{process.subtitle}</p>
              <p className="step-description">{process.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}