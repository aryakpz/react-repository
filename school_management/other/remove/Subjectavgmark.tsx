import React from "react";

type Mark = {
  subject: string;
  mark: number;
};

type Student = {
  name: string;
  marks: Mark[];
};

type SubAverageMarksProps = {
  students: Student[];
  subject: string;
};

const SubAverageMarks: React.FC<SubAverageMarksProps> = ({
  students,
  subject,
}) => {
  let totalMarks = 0;
  let studentCount = 0;

  students.forEach((student) => {
    const markEntry = student.marks.find((mark) => mark.subject === subject);
    if (markEntry) {
      totalMarks += markEntry.mark;
      studentCount++;
    }
  });

  const average = studentCount > 0 ? totalMarks / studentCount : 0;

  return (
    <div>
      <p>
        <span>Average marks of {subject}:</span> {average.toFixed(2)}
      </p>
    </div>
  );
};

export default SubAverageMarks;
