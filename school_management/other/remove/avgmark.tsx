import React from "react";

type StudentAverageProps = {
  students: {
    name: string;
    id: number;
    marks: {
      subject: string;
      mark: number;
    }[];
  }[];
  selectedStudent: string;
};

const StudentAverage: React.FC<StudentAverageProps> = ({
  students,
  selectedStudent,
}) => {
  const student = students.find(
    (stu) => stu.name.toLowerCase() === selectedStudent.toLowerCase()
  );

  if (!student) {
    return <p>No student found.</p>;
  }

  const average =
    student.marks.reduce((total, mark) => total + mark.mark, 0) /
    student.marks.length;

  return (
    <p>
      Average mark of {selectedStudent}: <span>{average.toFixed(2)}</span>
    </p>
  );
};

export default StudentAverage;
