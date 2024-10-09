// TopScorerDisplay.tsx

import React from "react";

type TopScorerDisplayProps = {
  students: {
    name: string;
    marks: {
      subject: string;
      mark: number;
    }[];
  }[];
  subject: string;
};

const TopScorerDisplay: React.FC<TopScorerDisplayProps> = ({
  students,
  subject,
}) => {
  const highestScorer = students.reduce(
    (max, student) => {
      const marks = student.marks.find((mark) => mark.subject === subject);
      return marks && marks.mark > (max.mark || 0)
        ? { name: student.name, mark: marks.mark }
        : max;
    },
    { name: "", mark: 0 }
  );

  if (!highestScorer.name) return null;

  return (
    <p>
      <span>Highest score in {subject}:</span> {highestScorer.name} -{" "}
      {highestScorer.mark}
    </p>
  );
};

export default TopScorerDisplay;









