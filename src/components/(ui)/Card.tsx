import React from 'react';

type CardProps = {
  title?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

const Card: React.FC<CardProps> = ({ title, icon, children, className }) => {
  return (
    <div className={`bg-card text-card-foreground p-4 rounded-lg shadow-lg ${className}`}>
      {icon && <div className="mb-3 text-2xl">{icon}</div>}
      {title && <h3 className="text-lg font-bold mb-2">{title}</h3>}
      <div>{children}</div>
    </div>
  );
};

export default Card;
