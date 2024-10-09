import React from "react";

type LowsubjectmarkProps = {
  students: {
    name: string;
    marks: {
      subject: string;
      mark: number;
    }[];
  }[];
};

const Lowsubjectmark: React.FC<LowsubjectmarkProps> = ({ students }) => {
  const subjectMarks: { [key: string]: number } = {};

  students.forEach((student) => {
    student.marks.forEach(({ subject, mark }) => {
      subjectMarks[subject] = Math.max(subjectMarks[subject] || 0, mark);
    });
  });

  const lowestMark = Math.min(...Object.values(subjectMarks));

  const lowestMarkSubjects = Object.keys(subjectMarks).filter(
    (subject) => subjectMarks[subject] === lowestMark
  );

  return (
    <div>
      <h3>Lowest Marks:</h3>

      <p>
        {lowestMarkSubjects} - {lowestMark}
      </p>
    </div>
  );
};

export default Lowsubjectmark;
