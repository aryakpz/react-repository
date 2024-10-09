import React from "react";

type Highscoreprops = {
  students: {
    name: string;
    marks: {
      subject: string;
      mark: number;
    }[];
  }[];
};

const Highsubjecttotal: React.FC<Highscoreprops> = ({ students }) => {
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

  let highestSubject: string = "";
  let highestTotal: number = 0;

  for (const subject in subjectTotals) {
    if (subjectTotals[subject] > highestTotal) {
      highestTotal = subjectTotals[subject];
      highestSubject = subject;
    }
  }

  return (
    <p>
      <span> Highest Mark :</span> {highestSubject} : {highestTotal}
    </p>
  );
};

export default Highsubjecttotal;
