import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

export default function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-dark-card border border-dark-border rounded-xl mb-4 overflow-hidden hover:border-primary-500/50 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-primary-500/10 hover:-translate-y-1 group">
      <button
        className="w-full px-8 py-6 text-left flex justify-between items-center gap-4 hover:bg-dark-hover/50 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-gray-100 text-lg group-hover:text-primary-400 transition-colors">{question}</span>
        <FaChevronDown 
          className={`text-primary-500 transition-all duration-300 flex-shrink-0 text-xl ${
            isOpen ? 'rotate-180' : ''
          } group-hover:text-primary-400`}
        />
      </button>
      
      {isOpen && (
        <div className="px-8 pb-6 pt-2 text-gray-300 leading-relaxed border-t border-dark-border bg-dark-hover/30">
          {answer}
        </div>
      )}
    </div>
  );
}
