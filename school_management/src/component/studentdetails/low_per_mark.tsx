import React from "react";

type LowPercentageProps = {
  students: {
    name: string;
    marks: {
      subject: string;
      mark: number;
    }[];
  }[];
};

const LowestPercentage: React.FC<LowPercentageProps> = ({ students }) => {
  const { lowest, names: lowestPercentageStudents } = students.reduce(
    (acc, student) => {
      const totalMarks = student.marks.reduce((sum, { mark }) => sum + mark, 0);
      const percentage = totalMarks / student.marks.length;

      if (percentage < acc.lowest) {
        acc.lowest = percentage;
        acc.names = [student.name];
      } else if (percentage === acc.lowest) {
        acc.names.push(student.name);
      }

      return acc;
    },
    { lowest: Infinity, names: [] as string[] }
  );

  return (
    <div>
      <h3>Students:</h3>

      <ul>
        {lowestPercentageStudents.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default LowestPercentage;
