import React, { useEffect, useState } from "react";

type Student = {
  name: string;
  id: number;
  marks: {
    subject: string;
    mark: number;
  }[];
};

const BelowAtleastOne: React.FC<{ students: Student[] }> = ({ students }) => {
  const [percentage, setPercentage] = useState<number | null>(null);

  useEffect(() => {
    if (students.length > 0) {
      calculatePercentage();
    }
  }, [students]);

  const calculatePercentage = () => {
    const subjectMarks: {
      [subject: string]: { totalMarks: number; count: number };
    } = {};
    const studentCount = students.length;

    students.forEach((student) => {
      student.marks.forEach((mark) => {
        if (!subjectMarks[mark.subject]) {
          subjectMarks[mark.subject] = { totalMarks: 0, count: 0 };
        }
        subjectMarks[mark.subject].totalMarks += mark.mark;
        subjectMarks[mark.subject].count++;
      });
    });

    const subjectAverages: { [subject: string]: number } = {};
    Object.keys(subjectMarks).forEach((subject) => {
      subjectAverages[subject] =
        subjectMarks[subject].totalMarks / subjectMarks[subject].count;
    });

    let studentsBelowAverageInAtLeastOne = 0;

    students.forEach((student) => {
      const scoredBelowInOne = student.marks.some(
        (mark) => mark.mark < subjectAverages[mark.subject]
      );
      if (scoredBelowInOne) {
        studentsBelowAverageInAtLeastOne++;
      }
    });
    const percentageBelowInOne =
      (studentsBelowAverageInAtLeastOne / studentCount) * 100;

    setPercentage(percentageBelowInOne);
  };

  return (
    <p>
      <span>Percentage </span>
      {percentage !== null ? (
        <p>{percentage.toFixed(2)}%</p>
      ) : (
        <p>No data available.</p>
      )}
    </p>
  );
};

export default BelowAtleastOne;
