import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Link: React.FC<LinkProps> = ({ href, children, className = '', onClick }) => {
  const handleClick = (e: React.MouseEvent) => {
    // Если есть обработчик onClick, выполняем его
    if (onClick) {
      onClick();
    }
  };

  return (
    <a
      href={href}
      className={`text-gray-800 hover:text-blue-600 transition-colors ${className}`}
      onClick={handleClick}  // Вызываем onClick, но не останавливаем переход
    >
      {children}
    </a>
  );
};

export default Link;
