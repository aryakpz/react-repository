import React, { useEffect, useState } from "react";

type Student = {
  name: string;
  id: number;
  marks: {
    subject: string;
    mark: number;
  }[];
};

type AboveAveragePercentageProps = {
  students: Student[];
  selectedStudent: string;
};

const Specificstudentpercentage: React.FC<AboveAveragePercentageProps> = ({
  students,
  selectedStudent,
}) => {
  const [aboveAveragePercentages, setAboveAveragePercentages] = useState<
    { subject: string; percentage: number }[]
  >([]);

  useEffect(() => {
    if (students.length > 0 && selectedStudent) {
      calculateAboveAveragePercentages();
    }
  }, [students, selectedStudent]);

  const calculateAboveAveragePercentages = () => {
    const specificStudent = students.find(
      (student) => student.name === selectedStudent
    );
    if (!specificStudent) return;

    const subjectTotals: {
      [subject: string]: { total: number; count: number };
    } = {};

    // Step 1: Calculate total marks and counts for each subject
    students.forEach((student) => {
      student.marks.forEach((mark) => {
        if (!subjectTotals[mark.subject]) {
          subjectTotals[mark.subject] = { total: 0, count: 0 };
        }
        subjectTotals[mark.subject].total += mark.mark;
        subjectTotals[mark.subject].count++;
      });
    });

    // Step 2: Calculate average marks for the specific student
    const averages: { [subject: string]: number } = {};
    specificStudent.marks.forEach((mark) => {
      if (subjectTotals[mark.subject]) {
        averages[mark.subject] = mark.mark; // average for the specific student
      }
    });

    // Step 3: Calculate the percentage of students scoring above the average marks
    const percentages: { subject: string; percentage: number }[] = [];

    for (const subject in averages) {
      const averageMark = averages[subject];
      let studentsAboveCount = 0;

      students.forEach((student) => {
        const studentMark = student.marks.find((m) => m.subject === subject);
        if (studentMark && studentMark.mark > averageMark) {
          studentsAboveCount++;
        }
      });

      const percentage = (studentsAboveCount / students.length) * 100;
      percentages.push({ subject, percentage });
    }

    setAboveAveragePercentages(percentages);
  };

  return (
    <p>
      <span>Percentage of {selectedStudent}</span>
      <ul>
        {aboveAveragePercentages.map(({ subject, percentage }) => (
          <li key={subject}>
            {subject}: {percentage.toFixed(2)}%
          </li>
        ))}
      </ul>
    </p>
  );
};

export default Specificstudentpercentage;
