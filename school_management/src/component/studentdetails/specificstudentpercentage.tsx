import React, { useEffect, useState } from "react";

type Student = {
  name: string;
  id: number;
  marks: {
    subject: string;
    mark: number;
  }[];
};

type PercentageProps = {
  students: Student[];
  selectedStudent: string;
  displayType: "above" | "below";
};

const PercentageAboveAndBelowAvgMarkInSubejct: React.FC<PercentageProps> = ({
  students,
  selectedStudent,
  displayType,
}) => {
  const [percentages, setPercentages] = useState<
    { subject: string; percentage: number }[]
  >([]);

  useEffect(() => {
    if (students.length > 0 && selectedStudent) {
      calculatePercentages();
    }
  }, [students, selectedStudent, displayType]);

  const calculatePercentages = () => {
    const specificStudent = students.find(
      (student) => student.name === selectedStudent
    );
    if (!specificStudent) return;

    const subjectTotals: {
      [subject: string]: { total: number; count: number };
    } = {};

    students.forEach((student) => {
      student.marks.forEach((mark) => {
        if (!subjectTotals[mark.subject]) {
          subjectTotals[mark.subject] = { total: 0, count: 0 };
        }
        subjectTotals[mark.subject].total += mark.mark;
        subjectTotals[mark.subject].count++;
      });
    });

    const averages: { [subject: string]: number } = {};
    specificStudent.marks.forEach((mark) => {
      if (subjectTotals[mark.subject]) {
        averages[mark.subject] = mark.mark;
      }
    });
    const calculatedPercentages: { subject: string; percentage: number }[] = [];

    for (const subject in averages) {
      const studentMark = averages[subject];
      let studentCount = 0;

      students.forEach((student) => {
        const mark = student.marks.find((m) => m.subject === subject);
        if (
          (displayType === "above" && mark && mark.mark > studentMark) ||
          (displayType === "below" && mark && mark.mark < studentMark)
        ) {
          studentCount++;
        }
      });

      const percentage = (studentCount / students.length) * 100;
      calculatedPercentages.push({ subject, percentage });
    }

    setPercentages(calculatedPercentages);
  };

  return (
    <p>
      <span>
        {displayType === "above"
          ? `Percentage of students scoring above ${selectedStudent}`
          : `Percentage of students scoring below ${selectedStudent}`}
      </span>
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

export default PercentageAboveAndBelowAvgMarkInSubejct;
