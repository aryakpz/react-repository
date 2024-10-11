import React from "react";

type Student = {
  name: string;
  id: number;
  marks: {
    subject: string;
    mark: number;
  }[];
};

type ShowMarksProps = {
  students: Student[];
  displayType: "total" | "average";
};

const MarkofEachsubject: React.FC<ShowMarksProps> = ({
  students,
  displayType,
}) => {
  const calculateTotalMarks = (marks: { subject: string; mark: number }[]) => {
    return marks.reduce((total, current) => total + current.mark, 0);
  };

  const calculateAverageMarks = (
    marks: { subject: string; mark: number }[]
  ) => {
    const totalMarks = calculateTotalMarks(marks);
    return marks.length > 0 ? totalMarks / marks.length : 0;
  };

  return (
    <div>
      <span>{displayType === "total" ? "Total Marks" : "Average Marks"}</span>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name}:{" "}
            {displayType === "total"
              ? calculateTotalMarks(student.marks)
              : calculateAverageMarks(student.marks).toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MarkofEachsubject;
