export default function FloatingElements({ theme = 'default' }) {
  const getElements = () => {
    switch (theme) {
      case 'skills':
        return ['⚛️', '🐍', '💻', '🤖', '📊']
      case 'projects':
        return ['🚀', '⭐', '💡', '🔧', '📱']
      case 'about':
        return ['🎯', '💼', '🏆', '📈', '✨']
      case 'contact':
        return ['📧', '💬', '🤝', '📞', '🌐']
      case 'testimonials':
        return ['⭐', '👥', '💯', '🎉', '🏅']
      default:
        return ['◆', '●', '▲', '■', '◇']
    }
  }

  const elements = getElements()

  return (
    <div className="floating-elements">
      {elements.map((element, index) => (
        <div key={index} className="floating-element">
          <span style={{ fontSize: '2rem' }}>{element}</span>
        </div>
      ))}
    </div>
  )
}