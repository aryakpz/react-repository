import React, { useEffect, useState } from "react";

type Student = {
  name: string;
  id: number;
  marks: {
    subject: string;
    mark: number;
  }[];
};

type LowestPercentageBelowAverageProps = {
  students: Student[];
  selectedStudent: string;
};

const LowestPercentageBelowAverage: React.FC<
  LowestPercentageBelowAverageProps
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
    // Step 1: Find the specific student by name
    const specificStudent = students.find(
      (student) => student.name === selectedStudent
    );
    if (!specificStudent) return;

    // Step 2: Calculate the average marks of the specific student
    const totalMarks = specificStudent.marks.reduce(
      (sum, mark) => sum + mark.mark,
      0
    );
    const averageMarks = totalMarks / specificStudent.marks.length;

    const subjectPercentages: { [subject: string]: number } = {};

    // Step 3: Calculate the percentage of students scoring below the average for each subject
    students.forEach((student) => {
      student.marks.forEach((mark) => {
        // Only consider the subject marks that are part of the specific student’s marks
        if (mark.subject in subjectPercentages) {
          // Count how many scored below the average of the specific student
          if (mark.mark < averageMarks) {
            subjectPercentages[mark.subject] =
              (subjectPercentages[mark.subject] || 0) + 1;
          }
        } else {
          // Initialize if it is the first student to have a mark in this subject
          subjectPercentages[mark.subject] = mark.mark < averageMarks ? 1 : 0;
        }
      });
    });

    // Step 4: Calculate the percentage for each subject
    const subjectPercentagesResult: { subject: string; percentage: number }[] =
      [];
    for (const subject in subjectPercentages) {
      const percentage = (subjectPercentages[subject] / students.length) * 100;
      subjectPercentagesResult.push({ subject, percentage });
    }

    // Step 5: Find the subject(s) with the lowest percentage
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
      <span>Subjects with Lowest Percentage Below {selectedStudent}</span>
      {lowestPercentageSubjects.length > 0 ? (
        <ul>
          {lowestPercentageSubjects.map(({ subject, percentage }) => (
            <li key={subject}>
              {subject}: {percentage.toFixed(2)}%
            </li>
          ))}
        </ul>
      ) : (
        <p>No subjects</p>
      )}
    </p>
  );
};

export default LowestPercentageBelowAverage;
