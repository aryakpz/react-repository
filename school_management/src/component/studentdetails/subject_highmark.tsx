import React from "react";

type HighsubjectmarkProps = {
  students: {
    name: string;
    marks: {
      subject: string;
      mark: number;
    }[];
  }[];
};

const Highsubjectmark: React.FC<HighsubjectmarkProps> = ({ students }) => {
  const subjectMarks: { [key: string]: number } = {};

  students.forEach((student) => {
    student.marks.forEach(({ subject, mark }) => {
      subjectMarks[subject] = Math.max(subjectMarks[subject] || 0, mark);
    });
  });

  const highestMark = Math.max(...Object.values(subjectMarks));

  const highestMarkSubjects = Object.keys(subjectMarks).filter(
    (subject) => subjectMarks[subject] === highestMark
  );

  return (
    <div>
      <h3>Highest Marks:</h3>

      <p>
        {highestMarkSubjects} - {highestMark}
      </p>
    </div>
  );
};

export default Highsubjectmark;
