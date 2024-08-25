import React from 'react';

type CardProps = {
  title?: string;
  children: React.ReactNode;
  className?: string;
};

const Card: React.FC<CardProps> = ({ title, children, className }) => {
  return (
    <div className={`bg-card text-card-foreground p-4 rounded-lg shadow-lg ${className}`}>
      {title && <h3 className="text-lg font-bold mb-2">{title}</h3>}
      <div>{children}</div>
    </div>
  );
};

export default Card;
