import React from "react";

interface TeacherDisplayProps {
  teacherName: string;
}

const TeacherDisplay: React.FC<TeacherDisplayProps> = ({ teacherName }) => {
  return (
    <div>
      <h4>Teacher Name: {teacherName}</h4>
    </div>
  );
};

export default TeacherDisplay;
