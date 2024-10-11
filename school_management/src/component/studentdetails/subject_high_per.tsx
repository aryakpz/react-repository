import React from "react";

type Student = {
  name: string;
  marks: {
    subject: string;
    mark: number;
  }[];
};

type SubjectPercentageProps = {
  students: Student[];
  displayType: "highest" | "lowest";
};

const SubjectPercentage: React.FC<SubjectPercentageProps> = ({
  students,
  displayType,
}) => {
  const subjectTotals: Record<string, { totalMarks: number; count: number }> =
    {};

  students.forEach(({ marks }) => {
    marks.forEach(({ subject, mark }) => {
      if (!subjectTotals[subject]) {
        subjectTotals[subject] = { totalMarks: 0, count: 0 };
      }
      subjectTotals[subject].totalMarks += mark;
      subjectTotals[subject].count++;
    });
  });

  let extremePercentage = displayType === "highest" ? 0 : Infinity;
  const percentageSubjects: string[] = [];

  for (const subject in subjectTotals) {
    const average =
      subjectTotals[subject].totalMarks / subjectTotals[subject].count;

    if (displayType === "highest") {
      if (average > extremePercentage) {
        extremePercentage = average;
        percentageSubjects.length = 0;
        percentageSubjects.push(subject);
      } else if (average === extremePercentage) {
        percentageSubjects.push(subject);
      }
    } else if (displayType === "lowest") {
      if (average < extremePercentage) {
        extremePercentage = average;
        percentageSubjects.length = 0;
        percentageSubjects.push(subject);
      } else if (average === extremePercentage) {
        percentageSubjects.push(subject);
      }
    }
  }

  return (
    <div>
      <h3>
        {displayType === "highest"
          ? "Subjects with Highest Percentage:"
          : "Subjects with Lowest Percentage:"}
      </h3>

      <ul>
        {percentageSubjects.map((subject, index) => (
          <li key={index}>{subject}</li>
        ))}
      </ul>
    </div>
  );
};

export default SubjectPercentage;
