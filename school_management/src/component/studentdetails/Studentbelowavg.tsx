import React, { useEffect, useState } from "react";

type Student = {
  name: string;
  id: number;
  marks: {
    subject: string;
    mark: number;
  }[];
};

const Studentbelowavg: React.FC<{ students: Student[] }> = ({ students }) => {
  const [belowAverageStudents, setBelowAverageStudents] = useState<Student[]>(
    []
  );

  useEffect(() => {
    findBelowClassAverageStudents();
  }, [students]);

  const findBelowClassAverageStudents = () => {
    if (!students.length) return;

    const totalMarksForClass = students.reduce((total, student) => {
      const studentTotal = student.marks.reduce(
        (sum, mark) => sum + mark.mark,
        0
      );
      return total + studentTotal;
    }, 0);

    const classAverageMarks = totalMarksForClass / students.length;

    const belowAverage = students.filter((student) => {
      const studentTotal = student.marks.reduce(
        (sum, mark) => sum + mark.mark,
        0
      );
      return studentTotal < classAverageMarks;
    });

    setBelowAverageStudents(belowAverage);
  };

  return (
    <p>
      <span>Students Below Average</span>

      <ul>
        {belowAverageStudents.map((student) => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
    </p>
  );
};

export default Studentbelowavg;
