import React from "react";

type Student = {
  name: string;
  marks: {
    subject: string;
    mark: number;
  }[];
};

type StudentAvgProps = {
  students: Student[];
  displayType: "highest" | "lowest";
};

const StudentAveragescore: React.FC<StudentAvgProps> = ({
  students,
  displayType,
}) => {
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

  let resultStudent: { name: string; average: number } | undefined;

  if (displayType === "highest") {
    const maxAverage = Math.max(
      ...studentAverages.map((student) => student.average)
    );
    resultStudent = studentAverages.find(
      (student) => student.average === maxAverage
    );
  } else if (displayType === "lowest") {
    const minAverage = Math.min(
      ...studentAverages.map((student) => student.average)
    );
    resultStudent = studentAverages.find(
      (student) => student.average === minAverage
    );
  }

  if (resultStudent) {
    return (
      <p>
        <span>
          {displayType === "highest" ? "Highest Average:" : "Lowest Average:"}
        </span>
        {resultStudent.name} - {resultStudent.average.toFixed(2)}
      </p>
    );
  }

  return null;
};

export default StudentAveragescore;
