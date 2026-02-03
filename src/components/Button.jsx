
import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  variant = 'primary',
  className = '',
  ...props
}) {
  const baseStyles = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center';

  const variants = {
    primary: 'bg-primary-500 hover:bg-primary-600 text-white shadow-lg shadow-primary-500/20 hover:shadow-2xl hover:shadow-primary-500/40 hover:-translate-y-0.5 transform',
    secondary: 'bg-dark-card text-gray-100 border-2 border-dark-border hover:border-primary-500 hover:bg-dark-hover shadow-md hover:shadow-xl hover:shadow-primary-500/10 hover:-translate-y-0.5 transform',
    outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white shadow-md hover:shadow-xl hover:shadow-primary-500/30 hover:-translate-y-0.5 transform',
    ghost: 'text-gray-300 hover:text-primary-500 hover:bg-dark-card',
    cta: 'bg-primary-500 hover:bg-primary-600 text-white shadow-xl shadow-primary-500/30 hover:shadow-2xl hover:shadow-primary-500/50 hover:scale-[1.02] transform font-bold text-lg ring-2 ring-primary-500/20 hover:ring-primary-500/40',
  };

  if (to) {
    return (
      <Link
        to={to}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
