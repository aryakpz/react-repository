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

const AboveMajority: React.FC<{ students: Student[] }> = ({ students }) => {
  const [aboveAverageMajorityStudents, setAboveAverageMajorityStudents] =
    useState<Student[]>([]);

  useEffect(() => {
    const findAboveAverageInMajorityStudents = () => {
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

      const aboveAverageInMajority = students.filter((student) => {
        const subjectsAboveAverage = student.marks.filter(
          (mark) => mark.mark > subjectAverages[mark.subject]
        ).length;

        return subjectsAboveAverage > student.marks.length / 2;
      });

      setAboveAverageMajorityStudents(aboveAverageInMajority);
    };

    findAboveAverageInMajorityStudents();
  }, [students]);

  return (
    <p>
      <span>Above Average in Majority:</span>
      {aboveAverageMajorityStudents.length > 0 ? (
        <ul>
          {aboveAverageMajorityStudents.map((student) => (
            <li key={student.id}>{student.name}</li>
          ))}
        </ul>
      ) : (
        <p>No students .</p>
      )}
    </p>
  );
};

export default AboveMajority;
