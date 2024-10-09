import React from "react";
type Student = {
  name: string;
  id: number;
};

type showStudentprop = {
  students: Student[];
};

const showStudentId: React.FC<showStudentprop> = ({ students }) => {
  return (
    <p>
      <span>Students IDs:</span>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} - {student.id}
          </li>
        ))}
      </ul>
    </p>
  );
};

export default showStudentId;
