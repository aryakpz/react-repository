import React, { useState, useEffect } from "react";

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

const BelowMajority: React.FC<{ students: Student[] }> = ({ students }) => {
  const [belowAverageMajorityStudents, setBelowAverageMajorityStudents] =
    useState<Student[]>([]);

  useEffect(() => {
    const findBelowAverageInMajorityStudents = () => {
      const subjectTotals: { [subject: string]: number } = {};
      const subjectAverages: { [subject: string]: number } = {};

      students.forEach((student) => {
        student.marks.forEach((mark) => {
          subjectTotals[mark.subject] =
            (subjectTotals[mark.subject] || 0) + mark.mark;
        });
      });

      for (const subject in subjectTotals) {
        subjectAverages[subject] = subjectTotals[subject] / students.length;
      }

      const belowAverageInMajority = students.filter((student) => {
        const subjectsBelowAverage = student.marks.filter(
          (mark) => mark.mark < subjectAverages[mark.subject]
        ).length;

        return subjectsBelowAverage > student.marks.length / 2;
      });

      setBelowAverageMajorityStudents(belowAverageInMajority);
    };

    findBelowAverageInMajorityStudents();
  }, [students]);

  return (
    <p>
      <span> Below Average:</span>
      {belowAverageMajorityStudents.length > 0 ? (
        <ul>
          {belowAverageMajorityStudents.map((student) => (
            <li key={student.id}>{student.name}</li>
          ))}
        </ul>
      ) : (
        <p>No students .</p>
      )}
    </p>
  );
};

export default BelowMajority;
