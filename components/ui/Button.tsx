import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'icon';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  className = '', 
  variant = 'primary', 
  size = 'md', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tropical-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  
  const variants = {
    primary: "bg-tropical-500 text-white hover:bg-tropical-600 shadow-sm",
    secondary: "bg-sand-500 text-dark-900 hover:bg-sand-600 shadow-sm",
    outline: "border border-input bg-background hover:bg-gray-100 hover:text-accent-foreground",
    ghost: "hover:bg-gray-100 hover:text-accent-foreground",
  };

  const sizes = {
    sm: "h-9 rounded-md px-3",
    md: "h-10 px-4 py-2",
    lg: "h-11 rounded-md px-8 text-lg",
    icon: "h-10 w-10",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};
