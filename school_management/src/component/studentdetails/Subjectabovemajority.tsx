import React, { useEffect, useState } from "react";

type Student = {
  name: string;
  id: number;
  marks: {
    subject: string;
    mark: number;
  }[];
};

type displayType = "above" | "below";

const SubjectMajorityAvgClassAverage: React.FC<{
  students: Student[];
  displayType: displayType;
}> = ({ students, displayType }) => {
  const [subjects, setSubjects] = useState<string[]>([]);

  useEffect(() => {
    findSubjectsByMajority();
  }, [students]);

  const findSubjectsByMajority = () => {
    const subjectTotals: {
      [subject: string]: { total: number; count: number };
    } = {};

    students.forEach((student) => {
      student.marks.forEach(({ subject, mark }) => {
        if (!subjectTotals[subject]) {
          subjectTotals[subject] = { total: 0, count: 0 };
        }
        subjectTotals[subject].total += mark;
        subjectTotals[subject].count += 1;
      });
    });

    const subjectAverages: { [subject: string]: number } = {};
    Object.keys(subjectTotals).forEach((subject) => {
      subjectAverages[subject] =
        subjectTotals[subject].total / subjectTotals[subject].count;
    });

    const subjectCounts: { [subject: string]: number } = {};
    Object.keys(subjectAverages).forEach((subject) => {
      subjectCounts[subject] = students.filter((student) =>
        student.marks.find((mark) =>
          displayType === "above"
            ? mark.subject === subject && mark.mark > subjectAverages[subject]
            : mark.subject === subject && mark.mark < subjectAverages[subject]
        )
      ).length;
    });

    const majorityThreshold = Math.ceil(students.length / 2);

    const subjectsWithMajority = Object.keys(subjectCounts).filter(
      (subject) => subjectCounts[subject] >= majorityThreshold
    );

    setSubjects(subjectsWithMajority);
  };

  return (
    <div>
      <p>
        <span>
          {displayType === "above"
            ? "Subjects with Above Majority"
            : "Subjects with Below Majority"}
        </span>
      </p>
      {subjects.length > 0 ? (
        <ul>
          {subjects.map((subject) => (
            <li key={subject}>{subject}</li>
          ))}
        </ul>
      ) : (
        <p>No subjects</p>
      )}
    </div>
  );
};

export default SubjectMajorityAvgClassAverage;
