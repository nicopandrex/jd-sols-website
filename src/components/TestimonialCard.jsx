export default function TestimonialCard({ name, business, rating, text }) {
  return (
    <div className="relative bg-dark-card border border-dark-border rounded-xl p-6 transition-all duration-300 shadow-lg h-full">
      <div className="relative">
        <div className="flex gap-1 mb-4">
          {[...Array(rating)].map((_, i) => (
            <span key={i} className="text-primary-500 text-xl">★</span>
          ))}
        </div>
        
        <p className="text-gray-300 mb-5 leading-relaxed italic">
          "{text}"
        </p>
        
        <div className="border-t border-dark-border pt-4">
          <p className="font-bold text-gray-100">{name}</p>
          <p className="text-primary-400 text-sm mt-1">{business}</p>
        </div>
      </div>
    </div>
  );
}
