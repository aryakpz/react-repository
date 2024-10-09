import React from "react";

type LowScorerDisplayProps = {
  students: {
    name: string;
    marks: {
      subject: string;
      mark: number;
    }[];
  }[];
};

const LowScorerstudent: React.FC<LowScorerDisplayProps> = ({ students }) => {
  const lowScorer = students.reduce(
    (lowStudent, student) => {
      const totalMarks = student.marks.reduce(
        (sum, mark) => sum + mark.mark,
        0
      );
      return totalMarks < lowStudent.total || lowStudent.total === 0
        ? { name: student.name, total: totalMarks }
        : lowStudent;
    },
    { name: "", total: 0 }
  );

  return (
    <p>
      <span>Lowest Scorer: </span> {lowScorer.name} - {lowScorer.total}
    </p>
  );
};

export default LowScorerstudent;
