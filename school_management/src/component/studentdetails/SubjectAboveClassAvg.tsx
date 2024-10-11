import React, { useEffect, useState } from "react";

type Student = {
  name: string;
  id: number;
  marks: {
    subject: string;
    mark: number;
  }[];
};

type SubjectAverageProps = {
  students: Student[];
  displayType: "above" | "below";
};

const SubjectAboveAndBelowClassAvgMark: React.FC<SubjectAverageProps> = ({
  students,
  displayType,
}) => {
  const [subjects, setSubjects] = useState<string[]>([]);

  useEffect(() => {
    findSubjectsBasedOnClassAverage();
  }, [students]);

  const findSubjectsBasedOnClassAverage = () => {
    if (students.length === 0) return;

    let totalClassMarks = 0;
    let totalMarksCount = 0;

    // Calculate total class marks and count
    students.forEach((student) => {
      student.marks.forEach((mark) => {
        totalClassMarks += mark.mark;
        totalMarksCount++;
      });
    });

    const classAverageMarks = totalClassMarks / totalMarksCount;

    const subjectMarks: {
      [subject: string]: { totalMarks: number; count: number };
    } = {};

    // Aggregate marks per subject
    students.forEach((student) => {
      student.marks.forEach((mark) => {
        if (!subjectMarks[mark.subject]) {
          subjectMarks[mark.subject] = { totalMarks: 0, count: 0 };
        }
        subjectMarks[mark.subject].totalMarks += mark.mark;
        subjectMarks[mark.subject].count += 1;
      });
    });

    // Filter subjects based on checkType
    const filteredSubjects = Object.keys(subjectMarks).filter((subject) => {
      const subjectAverage =
        subjectMarks[subject].totalMarks / subjectMarks[subject].count;
      return displayType === "above"
        ? subjectAverage > classAverageMarks
        : subjectAverage < classAverageMarks;
    });

    setSubjects(filteredSubjects);
  };

  return (
    <div>
      <span>
        {displayType === "above"
          ? "Subjects Above Average"
          : "Subjects Below Average"}
      </span>
      {subjects.length > 0 ? (
        <ul>
          {subjects.map((subject) => (
            <li key={subject}>{subject}</li>
          ))}
        </ul>
      ) : (
        <p>No subjects.</p>
      )}
    </div>
  );
};

export default SubjectAboveAndBelowClassAvgMark;
