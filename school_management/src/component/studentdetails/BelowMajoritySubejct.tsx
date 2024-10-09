import React, { useEffect, useState } from "react";

type Student = {
  name: string;
  id: number;
  marks: {
    subject: string;
    mark: number;
  }[];
};

type PercentageBelowSpecificInMajorityProps = {
  students: Student[];
  selectedStudent: string;
};

const PercentageBelowSpecificInMajority: React.FC<
  PercentageBelowSpecificInMajorityProps
> = ({ students, selectedStudent }) => {
  const [percentageBelowMajority, setPercentageBelowMajority] = useState<
    number | null
  >(null);

  useEffect(() => {
    if (students.length > 0 && selectedStudent) {
      calculatePercentageBelowMajority();
    }
  }, [students, selectedStudent]);

  const calculatePercentageBelowMajority = () => {
    const specificStudent = students.find(
      (student) => student.name === selectedStudent
    );
    if (!specificStudent) return;

    const totalSubjects = specificStudent.marks.length;
    const subjectAverages: { [subject: string]: number } = {};

    specificStudent.marks.forEach((mark) => {
      subjectAverages[mark.subject] = mark.mark;
    });

    let studentsBelowMajorityCount = 0;

    students.forEach((student) => {
      let subjectsBelowCount = 0;

      student.marks.forEach((mark) => {
        if (mark.mark < subjectAverages[mark.subject]) {
          subjectsBelowCount++;
        }
      });

      if (subjectsBelowCount > totalSubjects / 2) {
        studentsBelowMajorityCount++;
      }
    });

    const percentage = (studentsBelowMajorityCount / students.length) * 100;
    setPercentageBelowMajority(percentage);
  };

  return (
    <p>
      <span>Lowest percentage {selectedStudent}</span>
      <p>
        {percentageBelowMajority !== null
          ? `Percentage: ${percentageBelowMajority.toFixed(2)}%`
          : "No data available."}
      </p>
    </p>
  );
};

export default PercentageBelowSpecificInMajority;
