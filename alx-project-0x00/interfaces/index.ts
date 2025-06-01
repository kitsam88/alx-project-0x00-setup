// interfaces/index.tsx

// Interface for Pill component props
export interface PillProps {
    title: string;
  }
  
  // Interface for Button component props
  export interface ButtonProps {
    title: string;
    styles?: 'small' | 'medium' | 'large'; // Define sizes for the button
    shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full'; // Define shapes for the button
  }
  