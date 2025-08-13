const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom web applications built with modern technologies",
      icon: "💻",
      features: ["React", "Vue", "Angular", "Next.js"]
    },
    {
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces",
      icon: "🎨",
      features: ["Figma", "Adobe XD", "Sketch", "Prototyping"]
    },
    {
      title: "Mobile Development",
      description: "Cross-platform mobile applications",
      icon: "📱",
      features: ["React Native", "Flutter", "Ionic", "PWA"]
    },
    {
      title: "API Development",
      description: "RESTful APIs and GraphQL endpoints",
      icon: "🔧",
      features: ["Node.js", "Express", "Django", "FastAPI"]
    }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Our Services</h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, idx) => (
                  <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
