import { useEffect, useRef, useState } from 'react'

export default function Skills() {
  const skillsRef = useRef(null)
  const [animated, setAnimated] = useState(false)
  const [visibleSkills, setVisibleSkills] = useState(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            setAnimated(true)
            const progressBars = entry.target.querySelectorAll('.skill-progress')
            progressBars.forEach((bar, index) => {
              setTimeout(() => {
                const width = bar.dataset.width
                bar.style.width = width + '%'
              }, index * 100)
            })
          }
        })
      },
      { threshold: 0.3 }
    )

    if (skillsRef.current) {
      observer.observe(skillsRef.current)
    }

    return () => observer.disconnect()
  }, [animated])

  const skillCategories = [
    {
      title: "AI & Machine Learning",
      skills: [
        { name: "Python", level: 95 },
        { name: "TensorFlow/PyTorch", level: 88 },
        { name: "OpenCV", level: 90 },
        { name: "Scikit-learn", level: 92 },
        { name: "Pandas/NumPy", level: 95 },
        { name: "SHAP (Explainable AI)", level: 82 }
      ],
      icon: "🤖"
    },
    {
      title: "Full-Stack Development",
      skills: [
        { name: "React.js/Next.js", level: 90 },
        { name: "Node.js/Express", level: 85 },
        { name: "JavaScript/TypeScript", level: 88 },
        { name: "MongoDB/PostgreSQL", level: 83 },
        { name: "REST APIs", level: 87 },
        { name: "AWS/Cloud Services", level: 80 }
      ],
      icon: "💻"
    },
    {
      title: "Data Analysis & Visualization",
      skills: [
        { name: "SQL (Advanced)", level: 92 },
        { name: "Excel/Google Sheets", level: 88 },
        { name: "Matplotlib/Seaborn", level: 90 },
        { name: "Plotly/Dash", level: 85 },
        { name: "Statistical Analysis", level: 87 },
        { name: "Business Intelligence", level: 83 }
      ],
      icon: "📊"
    },
    {
      title: "Development Tools",
      skills: [
        { name: "Git/GitHub", level: 93 },
        { name: "Docker/Containerization", level: 82 },
        { name: "Jupyter/VS Code", level: 95 },
        { name: "Linux/Terminal", level: 85 },
        { name: "CI/CD Pipelines", level: 78 }
      ],
      icon: "🛠️"
    }
  ]

  return (
    <section className="skills" id="skills" ref={skillsRef}>
      <div className="container">
        <h2>Technical Expertise</h2>
        <p className="section-subtitle">Comprehensive skill set across AI/ML, full-stack development, and data analysis</p>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="category-header">
                <div className="icon-wrapper">
                  <span className="icon">{category.icon}</span>
                </div>
                <h3>{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        data-width={skill.level}
                        style={{ 
                          width: animated ? `${skill.level}%` : '0%',
                          background: skill.level >= 90 ? 'var(--gradient-primary)' : 
                                    skill.level >= 80 ? 'linear-gradient(90deg, #10b981, #059669)' :
                                    'linear-gradient(90deg, #f59e0b, #d97706)'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}