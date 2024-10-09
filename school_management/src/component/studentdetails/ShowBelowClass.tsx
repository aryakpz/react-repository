import React, { useEffect, useState } from "react";

type Student = {
  name: string;
  id: number;
  marks: {
    subject: string;
    mark: number;
  }[];
};

const BelowClassMajority: React.FC<{ students: Student[] }> = ({
  students,
}) => {
  const [studentsBelowAverage, setStudentsBelowAverage] = useState<Student[]>(
    []
  );

  useEffect(() => {
    findStudentsBelowAverage();
  }, [students]);

  const findStudentsBelowAverage = () => {
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
    Object.keys(subjectTotals).forEach((subject) => {
      subjectAverages[subject] =
        subjectTotals[subject].total / subjectTotals[subject].count;
    });

    const majorityThreshold = Math.ceil(
      Object.keys(subjectAverages).length / 2
    );
    const studentsBelowMajorityAverage = students.filter((student) => {
      const belowAverageCount = student.marks.filter(
        ({ subject, mark }) => mark < subjectAverages[subject]
      ).length;

      return belowAverageCount >= majorityThreshold;
    });

    setStudentsBelowAverage(studentsBelowMajorityAverage);
  };

  return (
    <p>
      <span>Below Majority </span>
      <ul>
        {studentsBelowAverage.length > 0 ? (
          studentsBelowAverage.map((student) => (
            <li key={student.id}>{student.name}</li>
          ))
        ) : (
          <li>No students .</li>
        )}
      </ul>
    </p>
  );
};

export default BelowClassMajority;
