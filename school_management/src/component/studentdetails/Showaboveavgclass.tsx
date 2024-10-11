import React, { useEffect, useState } from "react";

type Student = {
  name: string;
  id: number;
  marks: {
    subject: string;
    mark: number;
  }[];
};

type displayType = "above" | "below";

const ClassAverageInallSubject: React.FC<{
  students: Student[];
  displayType: displayType;
}> = ({ students, displayType }) => {
  const [averageStudents, setAverageStudents] = useState<Student[]>([]);

  useEffect(() => {
    findStudentsByAverage();
  }, [students]);

  const findStudentsByAverage = () => {
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

    const filteredStudents = students.filter((student) =>
      student.marks.every(({ subject, mark }) =>
        displayType === "above"
          ? mark > subjectAverages[subject]
          : mark < subjectAverages[subject]
      )
    );

    setAverageStudents(filteredStudents);
  };

  return (
    <div>
      <p>
        <span>
          {displayType === "above" ? "Above Average" : "Below Average"}
        </span>
      </p>
      <ul>
        {averageStudents.length > 0 ? (
          averageStudents.map((student) => (
            <li key={student.id}>{student.name}</li>
          ))
        ) : (
          <li>No students.</li>
        )}
      </ul>
    </div>
  );
};

export default ClassAverageInallSubject;
