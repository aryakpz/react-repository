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

const Studentlowavg: React.FC<StduentLowprops> = ({ students }) => {
  const studentAverages: { name: string; average: number }[] = students.map(
    (student) => {
      const totalMarks = student.marks.reduce(
        (sum, mark) => sum + mark.mark,
        0
      );
      const average = totalMarks / student.marks.length;
      return { name: student.name, average };
    }
  );

  const minAverage = Math.min(
    ...studentAverages.map((student) => student.average)
  );

  const lowScorer = studentAverages.find(
    (student) => student.average === minAverage
  );

  if (lowScorer) {
    return (
      <p>
        <span> Lowest Average:</span> {lowScorer.name} -{" "}
        {lowScorer.average.toFixed(2)}
      </p>
    );
  }
  return null;
};
export default Studentlowavg;
