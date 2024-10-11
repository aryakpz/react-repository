import React, { useEffect, useState } from "react";

type Student = {
  name: string;
  id: number;
  marks: {
    subject: string;
    mark: number;
  }[];
};

type SubjectsAboveAverageProps = {
  students: Student[];
  selectedStudent: string;
};

const SubjectsAboveAverage: React.FC<SubjectsAboveAverageProps> = ({
  students,
  selectedStudent,
}) => {
  const [subjectsAboveAverage, setSubjectsAboveAverage] = useState<
    { subject: string; average: number }[]
  >([]);

  useEffect(() => {
    if (students.length > 0 && selectedStudent) {
      findSubjectsAboveAverage();
    }
  }, [students, selectedStudent]);

  const findSubjectsAboveAverage = () => {
    const specificStudent = students.find(
      (student) => student.name === selectedStudent
    );
    if (!specificStudent) return;

    const totalMarks = specificStudent.marks.reduce(
      (sum, mark) => sum + mark.mark,
      0
    );
    const averageMarks = totalMarks / specificStudent.marks.length;

    const subjectTotals: { [subject: string]: number[] } = {};
    students.forEach((student) => {
      student.marks.forEach((mark) => {
        if (!subjectTotals[mark.subject]) {
          subjectTotals[mark.subject] = [];
        }
        subjectTotals[mark.subject].push(mark.mark);
      });
    });

    const subjectAverages: { [subject: string]: number } = {};
    for (const subject in subjectTotals) {
      const totalSubjectMarks = subjectTotals[subject].reduce(
        (sum, mark) => sum + mark,
        0
      );
      subjectAverages[subject] =
        totalSubjectMarks / subjectTotals[subject].length;
    }

    const aboveAverageSubjects = Object.entries(subjectAverages)
      .filter(([_, average]) => average > averageMarks)
      .map(([subject, average]) => ({ subject, average }));

    setSubjectsAboveAverage(aboveAverageSubjects);
  };

  return (
    <p>
      <span>Subjects with Average Marks {selectedStudent}</span>
      {subjectsAboveAverage.length > 0 ? (
        <ul>
          {subjectsAboveAverage.map(({ subject, average }) => (
            <li key={subject}>
              {subject}: {average.toFixed(2)}
            </li>
          ))}
        </ul>
      ) : (
        <p>No subject</p>
      )}
    </p>
  );
};

export default SubjectsAboveAverage;
