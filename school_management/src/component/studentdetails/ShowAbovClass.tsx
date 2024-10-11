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

const AverageMarkInMajoritySubject: React.FC<{
  students: Student[];
  displayType: displayType;
}> = ({ students, displayType }) => {
  const [majorityStudents, setMajorityStudents] = useState<Student[]>([]);

  useEffect(() => {
    findMajorityStudents();
  }, [students]);

  const findMajorityStudents = () => {
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

    const majorityCount = Math.ceil(Object.keys(subjectAverages).length / 2);
    const filteredStudents = students.filter((student) => {
      const belowAverageCount = student.marks.filter(
        ({ subject, mark }) => mark < subjectAverages[subject]
      ).length;

      if (displayType === "above") {
        return belowAverageCount < majorityCount;
      } else {
        return belowAverageCount >= majorityCount;
      }
    });

    setMajorityStudents(filteredStudents);
  };

  return (
    <div>
      <p>
        <span>
          {displayType === "above" ? "Above Majority" : "Below Majority"}
        </span>
      </p>
      <ul>
        {majorityStudents.length > 0 ? (
          majorityStudents.map((student) => (
            <li key={student.id}>{student.name}</li>
          ))
        ) : (
          <li>No students.</li>
        )}
      </ul>
    </div>
  );
};

export default AverageMarkInMajoritySubject;
