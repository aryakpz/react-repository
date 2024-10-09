import React, { useEffect, useState } from "react";

type Student = {
  name: string;
  id: number;
  marks: {
    subject: string;
    mark: number;
  }[];
};

type LowestPercentageAboveAverageProps = {
  students: Student[];
  selectedStudent: string;
};

const LowestPercentageAboveAverage: React.FC<
  LowestPercentageAboveAverageProps
> = ({ students, selectedStudent }) => {
  const [lowestPercentageSubjects, setLowestPercentageSubjects] = useState<
    { subject: string; percentage: number }[]
  >([]);

  useEffect(() => {
    if (students.length > 0 && selectedStudent) {
      calculateLowestPercentageSubjects();
    }
  }, [students, selectedStudent]);

  const calculateLowestPercentageSubjects = () => {
    const specificStudent = students.find(
      (student) => student.name === selectedStudent
    );
    if (!specificStudent) return;

    const totalMarks = specificStudent.marks.reduce(
      (sum, mark) => sum + mark.mark,
      0
    );
    const averageMarks = totalMarks / specificStudent.marks.length;

    const subjectPercentages: { [subject: string]: number } = {};

    students.forEach((student) => {
      student.marks.forEach((mark) => {
        if (mark.subject in subjectPercentages) {
          if (mark.mark > averageMarks) {
            subjectPercentages[mark.subject] =
              (subjectPercentages[mark.subject] || 0) + 1;
          }
        } else {
          subjectPercentages[mark.subject] = mark.mark > averageMarks ? 1 : 0;
        }
      });
    });

    const subjectPercentagesResult: { subject: string; percentage: number }[] =
      [];
    for (const subject in subjectPercentages) {
      const percentage = (subjectPercentages[subject] / students.length) * 100;
      subjectPercentagesResult.push({ subject, percentage });
    }

    const lowestPercentage = Math.min(
      ...subjectPercentagesResult.map((sub) => sub.percentage)
    );
    const subjectsWithLowestPercentage = subjectPercentagesResult.filter(
      ({ percentage }) => percentage === lowestPercentage
    );

    setLowestPercentageSubjects(subjectsWithLowestPercentage);
  };

  return (
    <p>
      <span>Subjects abovw low peecentage of {selectedStudent}</span>
      {lowestPercentageSubjects.length > 0 ? (
        <ul>
          {lowestPercentageSubjects.map(({ subject, percentage }) => (
            <li key={subject}>
              {subject}: {percentage.toFixed(2)}%
            </li>
          ))}
        </ul>
      ) : (
        <p>No subjects.</p>
      )}
    </p>
  );
};

export default LowestPercentageAboveAverage;
