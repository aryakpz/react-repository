import React, { useEffect, useState } from "react";

type Student = {
  name: string;
  id: number;
  marks: {
    subject: string;
    mark: number;
  }[];
};

type PercentageInSubjectProps = {
  students: Student[];
  displayType: "above" | "below";
};

const PercentageOfStudentAverageMark: React.FC<PercentageInSubjectProps> = ({
  students,
  displayType,
}) => {
  const [percentage, setPercentage] = useState<number | null>(null);

  useEffect(() => {
    if (students.length > 0) {
      calculatePercentage();
    }
  }, [students, displayType]);

  const calculatePercentage = () => {
    const subjectTotals: { [subject: string]: number } = {};
    const subjectCounts: { [subject: string]: number } = {};

    students.forEach((student) => {
      student.marks.forEach((mark) => {
        subjectTotals[mark.subject] =
          (subjectTotals[mark.subject] || 0) + mark.mark;
        subjectCounts[mark.subject] = (subjectCounts[mark.subject] || 0) + 1;
      });
    });

    const subjectAverages: { [subject: string]: number } = {};
    for (const subject in subjectTotals) {
      subjectAverages[subject] =
        subjectTotals[subject] / subjectCounts[subject];
    }

    let studentsCount = 0;

    students.forEach((student) => {
      const scoredInAtLeastOneSubject = student.marks.some((mark) =>
        displayType === "above"
          ? mark.mark > subjectAverages[mark.subject]
          : mark.mark < subjectAverages[mark.subject]
      );
      if (scoredInAtLeastOneSubject) {
        studentsCount++;
      }
    });
    const calculatedPercentage = (studentsCount / students.length) * 100;
    setPercentage(calculatedPercentage);
  };

  return (
    <p>
      <span>
        Percentage of Students {displayType === "above" ? "above" : "below"}{" "}
        average:
      </span>
      {percentage !== null ? (
        <p>{percentage.toFixed(2)}%</p>
      ) : (
        <p>No data available.</p>
      )}
    </p>
  );
};

export default PercentageOfStudentAverageMark;
