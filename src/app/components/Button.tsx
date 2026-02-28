import { ReactNode } from 'react';
import { Link } from 'react-router';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  to?: string;
  onClick?: () => void;
  className?: string;
}

export function Button({ children, variant = 'primary', to, onClick, className = '' }: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-xl font-medium transition-all duration-300 inline-flex items-center justify-center';
  
  const variants = {
    primary: 'bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105',
    secondary: 'bg-gradient-to-r from-[#00bcd4] to-[#2196f3] text-white hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105',
    outline: 'border-2 border-[#667eea] text-[#667eea] hover:bg-gradient-to-r hover:from-[#667eea] hover:to-[#764ba2] hover:text-white hover:border-transparent'
  };

  const buttonClass = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={buttonClass}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClass}>
      {children}
    </button>
  );
}
