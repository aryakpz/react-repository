import React, { useEffect, useState } from "react";

type Student = {
  name: string;
  id: number;
  marks: {
    subject: string;
    mark: number;
  }[];
};

type PercentageType = "high" | "low";

type PercentageSubject = {
  subject: string;
  percentage: number;
};

type StudentPercentageProps = {
  students: Student[];
  selectedStudent: string;
  type: PercentageType;
};
const StudentPercentageHigh: React.FC<StudentPercentageProps> = ({
  students,
  selectedStudent,
  type,
}) => {
  const [percentageSubject, setPercentageSubject] =
    useState<PercentageSubject | null>(null);

  useEffect(() => {
    if (students.length > 0 && selectedStudent) {
      calculatePercentageSubject();
    }
  }, [students, selectedStudent]);

  const calculatePercentageSubject = () => {
    const specificStudent = students.find(
      (student) => student.name === selectedStudent
    );
    if (!specificStudent) return;

    let bestSubject: PercentageSubject | null = null;

    specificStudent.marks.forEach((mark) => {
      let relevantCount = 0;
      let totalCount = 0;

      students.forEach((student) => {
        const studentMarkForSubject = student.marks.find(
          (m) => m.subject === mark.subject
        );

        if (studentMarkForSubject) {
          totalCount++; // Count this student for this subject

          // Increment the count based on the type
          const isHigher = studentMarkForSubject.mark > mark.mark;
          const isLower = studentMarkForSubject.mark < mark.mark;

          if (type === "high" && isHigher) {
            relevantCount++;
          } else if (type === "low" && isLower) {
            relevantCount++;
          }
        }
      });

      // Calculate percentage if there are students with marks in the subject
      if (totalCount > 0) {
        const percentage = (relevantCount / totalCount) * 100;

        // Determine if this subject is the best one based on the type
        if (
          bestSubject === null ||
          (type === "high" && percentage > bestSubject.percentage) ||
          (type === "low" && percentage < bestSubject.percentage)
        ) {
          bestSubject = { subject: mark.subject, percentage };
        }
      }
    });

    setPercentageSubject(bestSubject);
  };

  return (
    <div>
      <h4>
        {type === "high" ? "Highest" : "Lowest"} Percentage for{" "}
        {selectedStudent}
      </h4>
      <ul>
        {percentageSubject ? (
          <li>
            {percentageSubject.subject}:{" "}
            {percentageSubject.percentage.toFixed(2)}%
          </li>
        ) : (
          <li>No data available</li>
        )}
      </ul>
    </div>
  );
};

export default StudentPercentageHigh;
