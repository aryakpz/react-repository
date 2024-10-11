import React from "react";

type StudentListDisplayProps = {
  students: { name: string }[];
};

const StudentListDisplay: React.FC<StudentListDisplayProps> = ({
  students,
}) => {
  return (
    <div>
      <h4>Student Names:</h4>
      <ul>
        {students.map((student, index) => (
          <li key={index}>{student.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default StudentListDisplay;
