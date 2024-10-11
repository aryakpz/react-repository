import React from "react";

type lowestAverageDisplayProps = {
  students: {
    name: string;
    marks: {
      subject: string;
      mark: number;
    }[];
  }[];
};

const LowestAverageDisplay: React.FC<lowestAverageDisplayProps> = ({
  students,
}) => {
  const subjectTotals: {
    [key: string]: { totalMarks: number; count: number };
  } = {};

  students.forEach((student) => {
    student.marks.forEach((mark) => {
      if (!subjectTotals[mark.subject]) {
        subjectTotals[mark.subject] = { totalMarks: 0, count: 0 };
      }
      subjectTotals[mark.subject].totalMarks += mark.mark;
      subjectTotals[mark.subject].count++;
    });
  });

  let lowAvgSubject = "";
  let lowestAvg = Infinity;

  for (const subject in subjectTotals) {
    const avg =
      subjectTotals[subject].totalMarks / subjectTotals[subject].count;
    if (avg < lowestAvg) {
      lowestAvg = avg;
      lowAvgSubject = subject;
    }
  }

  return (
    <p>
      <span>Lowest Average:</span> {lowAvgSubject} (Average:{" "}
      {lowestAvg.toFixed(2)})
    </p>
  );
};

export default LowestAverageDisplay;
