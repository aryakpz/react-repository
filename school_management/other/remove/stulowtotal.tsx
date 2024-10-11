import React from "react";

type StduentLowprops = {
  students: {
    name: string;
    marks: {
      subject: string;
      mark: number;
    }[];
  }[];
};

const StudentlowTotal: React.FC<StduentLowprops> = ({ students }) => {
  const studentAverages: { name: string; totalMarks: number }[] = students.map(
    (student) => {
      const totalMarks = student.marks.reduce(
        (sum, mark) => sum + mark.mark,
        0
      );
      const average = totalMarks / student.marks.length;
      return { name: student.name, totalMarks };
    }
  );

  const minAverage = Math.min(
    ...studentAverages.map((student) => student.totalMarks)
  );

  const lowScorer = studentAverages.find(
    (student) => student.totalMarks === minAverage
  );

  if (lowScorer) {
    return (
      <p>
        <span> Lowest Total mark:</span> {lowScorer.name} -{" "}
        {lowScorer.totalMarks}
      </p>
    );
  }
  return null;
};
export default StudentlowTotal;
