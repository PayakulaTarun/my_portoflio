export default function Skills() {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      skills: [
        { name: "Python", level: 95 },
        { name: "TensorFlow", level: 85 },
        { name: "OpenCV", level: 90 },
        { name: "Scikit-learn", level: 88 },
        { name: "Pandas/NumPy", level: 92 },
        { name: "SHAP (Explainable AI)", level: 80 }
      ],
      icon: "🤖"
    },
    {
      title: "Full-Stack Development",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "JavaScript", level: 88 },
        { name: "MongoDB", level: 82 },
        { name: "PostgreSQL", level: 85 },
        { name: "AWS", level: 80 }
      ],
      icon: "💻"
    },
    {
      title: "Data Analysis",
      skills: [
        { name: "SQL", level: 90 },
        { name: "Excel", level: 85 },
        { name: "Matplotlib/Seaborn", level: 88 },
        { name: "Data Visualization", level: 90 },
        { name: "Statistical Analysis", level: 85 },
        { name: "Business Intelligence", level: 82 }
      ],
      icon: "📊"
    }
  ]

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2>Technical Expertise</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="category-header">
                <span className="icon">{category.icon}</span>
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
                        style={{ width: `${skill.level}%` }}
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