import React from "react";

type StudentAvgprops = {
  students: {
    name: string;
    marks: {
      subject: string;
      mark: number;
    }[];
  }[];
};

const StudenthighTotal: React.FC<StudentAvgprops> = ({ students }) => {
  const studentAverages: { name: string; totalMarks: number }[] = students.map(
    (student) => {
      const totalMarks = student.marks.reduce(
        (sum, mark) => sum + mark.mark,
        0
      );
      const averge = totalMarks / student.marks.length;
      return { name: student.name, totalMarks };
    }
  );

  const maxAverage = Math.max(
    ...studentAverages.map((student) => student.totalMarks)
  );

  const topScorer = studentAverages.find(
    (student) => student.totalMarks === maxAverage
  );

  if (topScorer) {
    return (
      <p>
        <span> Highest Total mark:</span> {topScorer.name} -{" "}
        {topScorer.totalMarks}
      </p>
    );
  }

  return null;
};

export default StudenthighTotal;
