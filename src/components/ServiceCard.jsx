export default function ServiceCard({ icon, title, description, outcomes }) {
  return (
    <div className="relative bg-dark-card border-2 border-dark-border hover:border-primary-500 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/30 hover:-translate-y-2 group overflow-hidden rounded-xl">
      {/* Orange accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-orange-500" />
      
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
      
      {/* Subtle animated glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/20 to-orange-500/20 rounded-xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
      
      <div className="relative p-8">
        <div className="text-5xl mb-6 text-primary-500 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
          {icon}
        </div>
        
        <h3 className="text-2xl font-bold mb-4 text-gray-100 group-hover:text-primary-400 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-300 mb-6 leading-relaxed">
          {description}
        </p>
        
        {outcomes && outcomes.length > 0 && (
          <ul className="space-y-3">
            {outcomes.map((outcome, index) => (
              <li key={index} className="text-gray-400 text-sm flex items-start gap-3 group-hover:text-gray-300 transition-colors duration-300">
                <span className="text-primary-500 mt-1 flex-shrink-0 text-lg group-hover:text-primary-400 transition-colors">✓</span>
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
