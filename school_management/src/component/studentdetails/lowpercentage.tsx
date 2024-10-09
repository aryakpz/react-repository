import React from "react";

type Mark = {
  subject: string;
  mark: number;
};

type Student = {
  name: string;
  marks: Mark[];
};

type LowestPercentageStudentProps = {
  students: Student[];
  subject: string;
};

const LowestPercentageStudent: React.FC<LowestPercentageStudentProps> = ({
  students,
  subject,
}) => {
  const maxMark = 100;

  const lowestScorer = students.reduce(
    (acc, student) => {
      const marks = student.marks.find((mark) => mark.subject === subject);
      if (marks) {
        const percentage = (marks.mark / maxMark) * 100;

        if (acc.percentage === null || percentage < acc.percentage) {
          return { names: [student.name], percentage };
        } else if (percentage === acc.percentage) {
          acc.names.push(student.name);
        }
      }
      return acc;
    },
    { names: [] as string[], percentage: null as number | null }
  );

  if (lowestScorer.names.length === 0)
    return <p>No students found for the subject {subject}.</p>;

  return (
    <div>
      <h3>Lowest Percentage :</h3>
      <p>
        {lowestScorer.names} - {lowestScorer.percentage?.toFixed(2)}%
      </p>
    </div>
  );
};

export default LowestPercentageStudent;
