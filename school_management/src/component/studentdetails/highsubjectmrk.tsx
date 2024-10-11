import React from "react";

type Student = {
  name: string;
  marks: {
    subject: string;
    mark: number;
  }[];
};

type CombinedSubjectTotalProps = {
  students: Student[];
  displayType: "highest" | "lowest";
};

const SubejctMarksDisplay: React.FC<CombinedSubjectTotalProps> = ({
  students,
  displayType,
}) => {
  const subjectTotals: { [key: string]: number } = {};

  students.forEach((student) => {
    student.marks.forEach((mark) => {
      const subject = mark.subject;
      if (!subjectTotals[subject]) {
        subjectTotals[subject] = 0;
      }
      subjectTotals[subject] += mark.mark;
    });
  });

  let resultSubject: string = "";
  let resultTotal: number = displayType === "highest" ? 0 : Infinity;

  for (const subject in subjectTotals) {
    const total = subjectTotals[subject];
    if (
      (displayType === "highest" && total > resultTotal) ||
      (displayType === "lowest" && total < resultTotal)
    ) {
      resultTotal = total;
      resultSubject = subject;
    }
  }

  return (
    <p>
      <span>
        {displayType === "highest" ? "Highest Mark:" : "Lowest Mark:"}
      </span>
      {resultSubject}: {resultTotal}
    </p>
  );
};

export default SubejctMarksDisplay;
