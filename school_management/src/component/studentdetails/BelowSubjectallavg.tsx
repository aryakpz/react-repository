import React, { useEffect, useState } from "react";

type Student = {
  name: string;
  id: number;
  marks: {
    subject: string;
    mark: number;
  }[];
};

type ClassData = {
  students: Student[];
};

const BelowSubjectavg: React.FC<{ students: Student[] }> = ({ students }) => {
  const [majorityBelowSubjects, setMajorityBelowSubjects] = useState<string[]>(
    []
  );

  useEffect(() => {
    const calculateSubjectAverages = () => {
      const totals: { [subject: string]: number } = {};
      const counts: { [subject: string]: number } = {};

      students.forEach((student) =>
        student.marks.forEach((mark) => {
          totals[mark.subject] = (totals[mark.subject] || 0) + mark.mark;
          counts[mark.subject] = (counts[mark.subject] || 0) + 1;
        })
      );

      const subjectsBelowAvg: { [subject: string]: number } = {};
      students.forEach((student) =>
        student.marks.forEach((mark) => {
          const avg = totals[mark.subject] / counts[mark.subject];
          if (mark.mark < avg) {
            subjectsBelowAvg[mark.subject] =
              (subjectsBelowAvg[mark.subject] || 0) + 1;
          }
        })
      );

      const majoritySubjects = Object.keys(subjectsBelowAvg).filter(
        (subject) => subjectsBelowAvg[subject] > students.length / 2
      );

      setMajorityBelowSubjects(majoritySubjects);
    };

    calculateSubjectAverages();
  }, [students]);

  return (
    <p>
      <span>Below Average:</span>
      {majorityBelowSubjects.length > 0 ? (
        <ul>
          {majorityBelowSubjects.map((subject) => (
            <li key={subject}>{subject}</li>
          ))}
        </ul>
      ) : (
        <p>No subjects .</p>
      )}
    </p>
  );
};

export default BelowSubjectavg;
