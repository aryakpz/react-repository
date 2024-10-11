import React from "react";

type Student = {
  name: string;
  marks: {
    subject: string;
    mark: number;
  }[];
};

type OverallDisplayProps = {
  students: Student[];
  displayType: "average" | "total";
};

const Displayoverallmark: React.FC<OverallDisplayProps> = ({
  students,
  displayType,
}) => {
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
      <span>
        {displayType === "average"
          ? "Overall average marks:"
          : "Overall total marks:"}
      </span>{" "}
      {displayType === "average" ? overallAverage.toFixed(2) : totalMarks}
    </p>
  );
};

export default Displayoverallmark;
