import React from "react";

type HighestPercentageProps = {
  students: {
    name: string;
    marks: {
      subject: string;
      mark: number;
    }[];
  }[];
};

const HighestPercentage: React.FC<HighestPercentageProps> = ({ students }) => {
  const highestPercentageStudents = students.reduce(
    (acc, student) => {
      const totalMarks = student.marks.reduce((sum, { mark }) => sum + mark, 0);
      const percentage = totalMarks / student.marks.length;

      if (percentage > acc.highest) {
        acc.highest = percentage;
        acc.names = [student.name];
      } else if (percentage === acc.highest) {
        acc.names.push(student.name);
      }

      return acc;
    },
    { highest: 0, names: [] as string[] }
  ).names;

  return (
    <div>
      <h3>Student :</h3>

      <ul>
        {highestPercentageStudents.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default HighestPercentage;
