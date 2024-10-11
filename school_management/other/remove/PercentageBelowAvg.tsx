import React, { useEffect, useState } from "react";

type Student = {
  name: string;
  id: number;
  marks: {
    subject: string;
    mark: number;
  }[];
};

const PercentageBelowAvg: React.FC<{ students: Student[] }> = ({
  students,
}) => {
  const [percentages, setPercentages] = useState<
    { subject: string; percentage: number }[]
  >([]);

  useEffect(() => {
    calculatePercentagesBelowAverage();
  }, [students]);

  const calculatePercentagesBelowAverage = () => {
    if (!students.length) return;

    const subjectTotals: {
      [subject: string]: { total: number; count: number };
    } = {};
    students.forEach((student) => {
      student.marks.forEach(({ subject, mark }) => {
        if (!subjectTotals[subject]) {
          subjectTotals[subject] = { total: 0, count: 0 };
        }
        subjectTotals[subject].total += mark;
        subjectTotals[subject].count += 1;
      });
    });

    const subjectAverages: { [subject: string]: number } = {};
    for (const subject in subjectTotals) {
      subjectAverages[subject] =
        subjectTotals[subject].total / subjectTotals[subject].count;
    }

    const belowAveragePercentages: { subject: string; percentage: number }[] =
      [];
    for (const subject in subjectAverages) {
      const belowAverageCount = students.filter((student) =>
        student.marks.some(
          (mark) =>
            mark.subject === subject && mark.mark < subjectAverages[subject]
        )
      ).length;

      const percentage = (belowAverageCount / students.length) * 100;

      belowAveragePercentages.push({ subject, percentage });
    }

    setPercentages(belowAveragePercentages);
  };

  return (
    <p>
      <span>Percentage of Students below average</span>
      <ul>
        {percentages.map(({ subject, percentage }) => (
          <li key={subject}>
            {subject}: {percentage.toFixed(2)}%
          </li>
        ))}
      </ul>
    </p>
  );
};

export default PercentageBelowAvg;
