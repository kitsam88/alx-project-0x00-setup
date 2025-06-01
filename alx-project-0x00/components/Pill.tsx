const Pill: React.FC<{ title: string }> = ({ title }) => {
    return <div className="bg-blue-500 text-white rounded-full px-3 py-1">{title}</div>;
  };
  
  export default Pill;
  