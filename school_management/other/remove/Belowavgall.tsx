import React, { useState, useEffect } from "react";

type Student = {
  name: string;
  id: number;
  marks: {
    subject: string;
    mark: number;
  }[];
};

type ClassData = {
  students: Student[];
};

const BelowAvgAllSub: React.FC<{ students: Student[] }> = ({ students }) => {
  const [belowAverageStudents, setBelowAverageStudents] = useState<Student[]>(
    []
  );

  useEffect(() => {
    const findBelowAverageStudents = () => {
      const subjectTotals: { [subject: string]: number } = {};
      const subjectAverages: { [subject: string]: number } = {};

      students.forEach((student) => {
        student.marks.forEach((mark) => {
          subjectTotals[mark.subject] =
            (subjectTotals[mark.subject] || 0) + mark.mark;
        });
      });

      for (const subject in subjectTotals) {
        subjectAverages[subject] = subjectTotals[subject] / students.length;
      }

      const belowAverage = students.filter((student) =>
        student.marks.every(
          (mark) => mark.mark <= subjectAverages[mark.subject]
        )
      );

      setBelowAverageStudents(belowAverage);
    };

    findBelowAverageStudents();
  }, [students]);

  return (
    <p>
      <span> Below Average :</span>
      {belowAverageStudents.length > 0 ? (
        <ul>
          {belowAverageStudents.map((student) => (
            <li key={student.id}>{student.name}</li>
          ))}
        </ul>
      ) : (
        <p> not students</p>
      )}
    </p>
  );
};

export default BelowAvgAllSub;
