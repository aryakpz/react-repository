import React, { useEffect, useState } from "react";

type Student = {
  name: string;
  id: number;
  marks: {
    subject: string;
    mark: number;
  }[];
};

type displayType = "high" | "low";

const MarkofSubejct: React.FC<{
  students: Student[];
  displayType: displayType;
}> = ({ students, displayType }) => {
  const [scorers, setScorers] = useState<
    { subject: string; studentNames: string[]; mark: number }[]
  >([]);

  useEffect(() => {
    if (displayType === "high") {
      findTopScorers();
    } else {
      findLowestScorers();
    }
  }, [students, displayType]);

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

    setScorers(topScorersArray);
  };

  const findLowestScorers = () => {
    if (!students.length) return;

    const subjectLowestScorers: {
      [subject: string]: { minMark: number; students: Set<string> };
    } = {};

    students.forEach((student) => {
      student.marks.forEach(({ subject, mark }) => {
        if (!subjectLowestScorers[subject]) {
          subjectLowestScorers[subject] = {
            minMark: mark,
            students: new Set([student.name]),
          };
        } else {
          const subjectData = subjectLowestScorers[subject];
          if (mark < subjectData.minMark) {
            subjectData.minMark = mark;
            subjectData.students = new Set([student.name]);
          } else if (mark === subjectData.minMark) {
            subjectData.students.add(student.name);
          }
        }
      });
    });

    const lowestScorersArray = Object.keys(subjectLowestScorers).map(
      (subject) => ({
        subject,
        mark: subjectLowestScorers[subject].minMark,
        studentNames: Array.from(subjectLowestScorers[subject].students),
      })
    );

    setScorers(lowestScorersArray);
  };

  return (
    <div>
      <span>
        {displayType === "high" ? "Highest Scorers" : "Lowest Scorers"}
      </span>
      <ul>
        {scorers.map(({ subject, studentNames, mark }) => (
          <li key={subject}>
            <strong>{subject}:</strong> {studentNames.join(", ")} - {mark}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MarkofSubejct;
