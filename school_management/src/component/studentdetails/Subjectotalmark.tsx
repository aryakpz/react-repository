import React from "react";

type Mark = {
  subject: string;
  mark: number;
};

type Student = {
  name: string;
  marks: Mark[];
};

type CombinedMarksProps = {
  students: Student[];
  subject: string;
  displayType: "total" | "average";
};

const SubjectTotalmarkofstduent: React.FC<CombinedMarksProps> = ({
  students,
  subject,
  displayType,
}) => {
  let totalMarks = 0;
  let studentCount = 0;

  students.forEach((student) => {
    const markEntry = student.marks.find((mark) => mark.subject === subject);
    if (markEntry) {
      totalMarks += markEntry.mark;
      studentCount++;
    }
  });

  const averageMarks = studentCount > 0 ? totalMarks / studentCount : 0;

  return (
    <div>
      {displayType === "total" ? (
        <p>
          <span>Total marks of {subject}:</span> {totalMarks}
        </p>
      ) : (
        <p>
          <span>Average marks of {subject}:</span> {averageMarks.toFixed(2)}
        </p>
      )}
    </div>
  );
};

export default SubjectTotalmarkofstduent;
