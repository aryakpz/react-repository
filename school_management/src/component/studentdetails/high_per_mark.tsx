import React from "react";

type Student = {
  name: string;
  marks: {
    subject: string;
    mark: number;
  }[];
};

type PercentageProps = {
  students: Student[];
  displayType: "highest" | "lowest";
};

const StudentmarkPercentage: React.FC<PercentageProps> = ({
  students,
  displayType,
}) => {
  const result = students.reduce(
    (acc, student) => {
      const totalMarks = student.marks.reduce((sum, { mark }) => sum + mark, 0);
      const percentage = totalMarks / student.marks.length;

      if (displayType === "highest") {
        if (percentage > acc.highest) {
          acc.highest = percentage;
          acc.names = [student.name];
        } else if (percentage === acc.highest) {
          acc.names.push(student.name);
        }
      } else if (displayType === "lowest") {
        if (percentage < acc.lowest) {
          acc.lowest = percentage;
          acc.names = [student.name];
        } else if (percentage === acc.lowest) {
          acc.names.push(student.name);
        }
      }

      return acc;
    },
    { highest: 0, lowest: Infinity, names: [] as string[] }
  );

  const namesToDisplay =
    displayType === "highest" ? result.names : result.names;

  return (
    <div>
      <h3>
        {displayType === "highest"
          ? "Students with Highest Percentage:"
          : "Students with Lowest Percentage:"}
      </h3>
      <ul>
        {namesToDisplay.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default StudentmarkPercentage;
