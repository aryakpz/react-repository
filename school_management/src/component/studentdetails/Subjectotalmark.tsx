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

const SubTotalMarks: React.FC<SubAverageMarksProps> = ({
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

  return (
    <div>
      <p>
        <span>Total marks of {subject}:</span> {totalMarks}
      </p>
    </div>
  );
};

export default SubTotalMarks;
