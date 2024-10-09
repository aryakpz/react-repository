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

const AboveAvgAllSub: React.FC<{ students: Student[] }> = ({ students }) => {
  const [aboveAverageStudents, setAboveAverageStudents] = useState<Student[]>(
    []
  );

  useEffect(() => {
    findAboveAverageStudents();
  }, [students]);

  const findAboveAverageStudents = () => {
    const subjectAverages: { [subject: string]: number } = {};

    students.forEach((student) => {
      student.marks.forEach((mark) => {
        if (!subjectAverages[mark.subject]) {
          subjectAverages[mark.subject] = 0;
        }
        subjectAverages[mark.subject] += mark.mark;
      });
    });

    Object.keys(subjectAverages).forEach((subject) => {
      subjectAverages[subject] /= students.length;
    });

    const studentsAboveAverage = students.filter((student) => {
      return student.marks.every(
        (mark) => mark.mark > subjectAverages[mark.subject]
      );
    });

    setAboveAverageStudents(studentsAboveAverage);
  };

  return (
    <p>
      <span> Above Average</span>

      <ul>
        {aboveAverageStudents.map((student) => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
    </p>
  );
};

export default AboveAvgAllSub;
