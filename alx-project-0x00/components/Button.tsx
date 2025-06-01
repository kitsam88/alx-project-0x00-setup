// components/Button.tsx

import React from "react";
import { ButtonProps } from "@/interfaces";

// Define the Button component with props for title, styles, and shape
const Button: React.FC<ButtonProps> = ({ title, styles = 'medium', shape = 'rounded-md' }) => {
  // Dynamically create className based on 'styles' and 'shape' props
  const buttonClassNames = `px-4 py-2 font-medium focus:outline-none ${
    styles === 'small' ? 'text-sm' :
    styles === 'large' ? 'text-lg' :
    'text-base'
  } ${shape === 'rounded-sm' ? 'rounded-sm' :
    shape === 'rounded-md' ? 'rounded-md' :
    'rounded-full'
  } bg-blue-500 hover:bg-blue-700 text-white`;

  return (
    <button className={buttonClassNames}>
      {title}
    </button>
  );
};

export default Button;
