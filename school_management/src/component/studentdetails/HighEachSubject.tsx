import React, { useEffect, useState } from "react";

type Student = {
  name: string;
  id: number;
  marks: {
    subject: string;
    mark: number;
  }[];
};

const HighEachSubject: React.FC<{ students: Student[] }> = ({ students }) => {
  const [topScorers, setTopScorers] = useState<
    { subject: string; studentNames: string[]; mark: number }[]
  >([]);

  useEffect(() => {
    findTopScorers();
  }, [students]);

  const findTopScorers = () => {
    if (!students.length) return;

    const subjectTopScorers: {
      [subject: string]: { maxMark: number; students: Set<string> };
    } = {};

    students.forEach((student) => {
      student.marks.forEach(({ subject, mark }) => {
        if (!subjectTopScorers[subject]) {
          subjectTopScorers[subject] = {
            maxMark: mark,
            students: new Set([student.name]),
          };
        } else {
          const subjectData = subjectTopScorers[subject];
          if (mark > subjectData.maxMark) {
            subjectData.maxMark = mark;
            subjectData.students = new Set([student.name]);
          } else if (mark === subjectData.maxMark) {
            subjectData.students.add(student.name);
          }
        }
      });
    });

    const topScorersArray = Object.keys(subjectTopScorers).map((subject) => ({
      subject,
      mark: subjectTopScorers[subject].maxMark,
      studentNames: Array.from(subjectTopScorers[subject].students),
    }));

    setTopScorers(topScorersArray);
  };

  return (
    <p>
      <span>Highest Scorers </span>
      <ul>
        {topScorers.map(({ subject, studentNames, mark }) => (
          <li key={subject}>
            <strong>{subject}:</strong> {studentNames} - {mark}
          </li>
        ))}
      </ul>
    </p>
  );
};

export default HighEachSubject;
