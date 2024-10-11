import React from "react";

type AverageDisplayProps = {
  students: {
    name: string;
    marks: {
      subject: string;
      mark: number;
    }[];
  }[];
  displayType: "highest" | "lowest";
};

const HighestAverageStudent: React.FC<AverageDisplayProps> = ({
  students,
  displayType,
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

  let avgSubject = "";
  let avgValue = displayType === "highest" ? 0 : Infinity;

  for (const subject in subjectTotals) {
    const avg =
      subjectTotals[subject].totalMarks / subjectTotals[subject].count;
    if (
      (displayType === "highest" && avg > avgValue) ||
      (displayType === "lowest" && avg < avgValue)
    ) {
      avgValue = avg;
      avgSubject = subject;
    }
  }

  return (
    <p>
      <span>
        {displayType === "highest" ? "Highest Average:" : "Lowest Average:"}
      </span>{" "}
      {avgSubject} (Average: {avgValue.toFixed(2)})
    </p>
  );
};

export default HighestAverageStudent;
