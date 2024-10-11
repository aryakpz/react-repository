import React from "react";

interface StudentDisplayProps {
  className: string;
}

const CLassnameDisplay: React.FC<StudentDisplayProps> = ({ className }) => {
  return (
    <div>
      <h4>Class Name: {className}</h4>
    </div>
  );
};

export default CLassnameDisplay;
