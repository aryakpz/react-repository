import React, { useEffect, useState } from "react";

type Student = {
  name: string;
  id: number;
  marks: {
    subject: string;
    mark: number;
  }[];
};

type PercentageAboveSpecificInMajorityProps = {
  students: Student[];
  selectedStudent: string;
};

const PercentageAboveSpecificInMajority: React.FC<
  PercentageAboveSpecificInMajorityProps
> = ({ students, selectedStudent }) => {
  const [percentageAboveMajority, setPercentageAboveMajority] = useState<
    number | null
  >(null);

  useEffect(() => {
    if (students.length > 0 && selectedStudent) {
      calculatePercentageAboveMajority();
    }
  }, [students, selectedStudent]);

  const calculatePercentageAboveMajority = () => {
    const specificStudent = students.find(
      (student) => student.name === selectedStudent
    );
    if (!specificStudent) return;

    const totalSubjects = specificStudent.marks.length;
    const subjectAverages: { [subject: string]: number } = {};

    specificStudent.marks.forEach((mark) => {
      subjectAverages[mark.subject] = mark.mark;
    });

    let studentsAboveMajorityCount = 0;

    students.forEach((student) => {
      let subjectsAboveCount = 0;

      student.marks.forEach((mark) => {
        if (mark.mark > subjectAverages[mark.subject]) {
          subjectsAboveCount++;
        }
      });

      if (subjectsAboveCount > totalSubjects / 2) {
        studentsAboveMajorityCount++;
      }
    });

    const percentage = (studentsAboveMajorityCount / students.length) * 100;
    setPercentageAboveMajority(percentage);
  };

  return (
    <p>
      <span>Percentage of Students</span>
      <p>
        {percentageAboveMajority !== null
          ? `Percentage: ${percentageAboveMajority.toFixed(2)}%`
          : "No data available."}
      </p>
    </p>
  );
};

export default PercentageAboveSpecificInMajority;
