import React from 'react';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'destructive' | 'link';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: "submit"|"reset"|"button";
};

const Button: React.FC<ButtonProps> = ({ variant = 'primary', size = 'md', onClick, children, className, type }) => {
  const baseStyles = 'rounded px-4 py-2 font-semibold transition-colors duration-300';
  const variantStyles = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90',
    destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
    link: 'text-primary underline hover:text-primary/80'
  };
  const sizeStyles = {
    sm: 'text-sm py-1 px-2',
    md: 'text-base py-2 px-4',
    lg: 'text-lg py-3 px-6'
  };

  return (
    <button
      onClick={onClick}
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
