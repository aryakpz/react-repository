import React from "react";

type Mark = {
  subject: string;
  mark: number;
};

type Student = {
  name: string;
  marks: Mark[];
};

type TopScorerDisplayProps = {
  students: Student[];
  subject: string;
};

const Toppercentagestudent: React.FC<TopScorerDisplayProps> = ({
  students,
  subject,
}) => {
  const maxMark = 100;

  const highestScorer = students.reduce(
    (acc, student) => {
      const marks = student.marks.find((mark) => mark.subject === subject);
      if (marks) {
        const percentage = (marks.mark / maxMark) * 100;

        if (percentage > acc.percentage) {
          return { names: [student.name], percentage };
        } else if (percentage === acc.percentage) {
          acc.names.push(student.name);
        }
      }
      return acc;
    },
    { names: [] as string[], percentage: 0 }
  );

  if (highestScorer.names.length === 0) return null;

  return (
    <div>
      <h3>Highest Percentage in {subject}:</h3>
      <p>
        {highestScorer.names} - {highestScorer.percentage.toFixed(2)}%
      </p>
    </div>
  );
};

export default Toppercentagestudent;
