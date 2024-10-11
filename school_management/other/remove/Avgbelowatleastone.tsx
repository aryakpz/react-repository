import React, { useEffect, useState } from "react";

type Student = {
  name: string;
  id: number;
  marks: {
    subject: string;
    mark: number;
  }[];
};

type PercentageBelowAverageInAnySubjectProps = {
  students: Student[];
  selectedStudent: string;
};

const AvgBelowAtleastOne: React.FC<PercentageBelowAverageInAnySubjectProps> = ({
  students,
  selectedStudent,
}) => {
  const [percentageBelowAverage, setPercentageBelowAverage] = useState<
    number | null
  >(null);

  useEffect(() => {
    if (students.length > 0 && selectedStudent) {
      calculatePercentageBelowAverage();
    }
  }, [students, selectedStudent]);

  const calculatePercentageBelowAverage = () => {
    // Find the specific student by name
    const specificStudent = students.find(
      (student) => student.name === selectedStudent
    );
    if (!specificStudent) return;

    // Step 1: Calculate the average marks of the specific student
    const totalMarks = specificStudent.marks.reduce(
      (sum, mark) => sum + mark.mark,
      0
    );
    const averageMarks = totalMarks / specificStudent.marks.length;

    // Step 2: Count how many students scored below the average in at least one subject
    let studentsBelowAverageCount = 0;

    students.forEach((student) => {
      if (student.name !== selectedStudent) {
        // Exclude the specific student
        const scoredBelowInAnySubject = student.marks.some(
          (mark) => mark.mark < averageMarks
        );
        if (scoredBelowInAnySubject) {
          studentsBelowAverageCount++;
        }
      }
    });

    // Step 3: Calculate the percentage of such students
    const percentage =
      (studentsBelowAverageCount / (students.length - 1)) * 100; // Exclude the specific student from the total count
    setPercentageBelowAverage(percentage);
  };

  return (
    <p>
      <span>Percentage of {selectedStudent}</span>
      <p>
        {percentageBelowAverage !== null
          ? `Percentage: ${percentageBelowAverage.toFixed(2)}%`
          : "No data available."}
      </p>
    </p>
  );
};

export default AvgBelowAtleastOne;
