// components/Button.tsx
import React from 'react';

type ButtonProps = {
  text: string;
  onClick: () => void;
  style?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, style }) => {
  return <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${style}`}  onClick={onClick}>{text}</button>;
};

export default Button;
