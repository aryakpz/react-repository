// TopScorerDisplay.tsx
import React from "react";

interface TopScorerDisplayProps {
  students: {
    name: string;
    marks: {
      subject: string;
      mark: number;
    }[];
  }[];
  subject: string;
}

const LowScorerDisplay: React.FC<TopScorerDisplayProps> = ({
  students,
  subject,
}) => {
  const lowscore = students.reduce(
    (min, student) => {
      const marks = student.marks.find((mark) => mark.subject === subject);
      return marks && (min.mark === 0 || marks.mark < min.mark)
        ? { name: student.name, mark: marks.mark }
        : min;
    },
    { name: "", mark: 0 }
  );

  return (
    <p>
      <span>Lowest score in {subject}:</span> {lowscore.name} - {lowscore.mark}
    </p>
  );
};

export default LowScorerDisplay;
