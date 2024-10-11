import React from "react";

type Student = {
  name: string;
  marks: {
    subject: string;
    mark: number;
  }[];
};

type CombinedDisplayProps = {
  students: Student[];
  displayType: "total" | "average";
};

const DisplaymarkofAllSubject: React.FC<CombinedDisplayProps> = ({
  students,
  displayType,
}) => {
  const subjectData: {
    [key: string]: { totalMarks: number; count: number };
  } = {};

  students.forEach((student) => {
    student.marks.forEach((mark) => {
      const subject = mark.subject;

      if (!subjectData[subject]) {
        subjectData[subject] = { totalMarks: 0, count: 0 };
      }

      subjectData[subject].totalMarks += mark.mark;
      subjectData[subject].count += 1;
    });
  });

  const results = Object.keys(subjectData).map((subject) => {
    const { totalMarks, count } = subjectData[subject];
    const result =
      displayType === "average" && count > 0 ? totalMarks / count : totalMarks;

    return (
      <li key={subject}>
        {subject}: {displayType === "average" ? result.toFixed(2) : result}
      </li>
    );
  });

  return (
    <div>
      <span>
        {displayType === "average"
          ? "Average Marks per Subject:"
          : "Total Marks per Subject:"}
      </span>
      <ul>{results}</ul>
    </div>
  );
};

export default DisplaymarkofAllSubject;
