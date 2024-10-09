import React from "react";

type overallavgprops = {
  students: {
    name: string;
    marks: {
      subject: string;
      mark: number;
    }[];
  }[];
};

const Dispoverall: React.FC<overallavgprops> = ({ students }) => {
  let totalMarks = 0;
  let totalCount = 0;

  students.forEach((student) => {
    student.marks.forEach((mark) => {
      totalMarks += mark.mark;
      totalCount++;
    });
  });

  const overallAverage = totalCount > 0 ? totalMarks / totalCount : 0;

  return (
    <p>
      <span>Overall average marks :</span>
      {overallAverage}
    </p>
  );
};

export default Dispoverall;
