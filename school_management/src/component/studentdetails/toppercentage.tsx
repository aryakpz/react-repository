import React from "react";

type Mark = {
  subject: string;
  mark: number;
};

type Student = {
  name: string;
  marks: Mark[];
};

type TopOrLowestScorerProps = {
  students: Student[];
  subject: string;
  displayType: "highest" | "lowest";
};

const PercentageInSubject: React.FC<TopOrLowestScorerProps> = ({
  students,
  subject,
  displayType,
}) => {
  const maxMark = 100;

  const scorer = students.reduce(
    (acc, student) => {
      const marks = student.marks.find((mark) => mark.subject === subject);
      if (marks) {
        const percentage = (marks.mark / maxMark) * 100;

        if (displayType === "highest") {
          if (percentage > acc.percentage) {
            return { names: [student.name], percentage };
          } else if (percentage === acc.percentage) {
            acc.names.push(student.name);
          }
        } else if (displayType === "lowest") {
          if (acc.percentage === null || percentage < acc.percentage) {
            return { names: [student.name], percentage };
          } else if (percentage === acc.percentage) {
            acc.names.push(student.name);
          }
        }
      }
      return acc;
    },
    {
      names: [] as string[],
      percentage: displayType === "highest" ? 0 : Infinity,
    }
  );

  if (scorer.names.length === 0) {
    return <p>No students found for the subject {subject}.</p>;
  }

  return (
    <div>
      <h3>
        {displayType === "highest"
          ? `Highest Percentage in ${subject}:`
          : `Lowest Percentage in ${subject}:`}
      </h3>
      <p>
        {scorer.names.join(", ")} - {scorer.percentage.toFixed(2)}%
      </p>
    </div>
  );
};

export default PercentageInSubject;
