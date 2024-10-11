import React, { useEffect, useState } from "react";

type Student = {
  name: string;
  id: number;
  marks: {
    subject: string;
    mark: number;
  }[];
};

type PercentageCheckType = "above" | "below";

interface PercentageProps {
  students: Student[];
  displayType: PercentageCheckType;
}

const AboveAndBelowSubjectAveragemark: React.FC<PercentageProps> = ({
  students,
  displayType,
}) => {
  const [subjectPercentages, setSubjectPercentages] = useState<{
    [subject: string]: number;
  }>({});

  useEffect(() => {
    if (students.length > 0) {
      calculatePercentage();
    }
  }, [students]);

  const calculatePercentage = () => {
    const subjectMarks: {
      [subject: string]: { totalMarks: number; count: number };
    } = {};
    const studentCount = students.length;

    students.forEach((student) => {
      student.marks.forEach((mark) => {
        if (!subjectMarks[mark.subject]) {
          subjectMarks[mark.subject] = { totalMarks: 0, count: 0 };
        }
        subjectMarks[mark.subject].totalMarks += mark.mark;
        subjectMarks[mark.subject].count++;
      });
    });

    const subjectAverages: { [subject: string]: number } = {};
    Object.keys(subjectMarks).forEach((subject) => {
      subjectAverages[subject] =
        subjectMarks[subject].totalMarks / subjectMarks[subject].count;
    });

    const percentages: { [subject: string]: number } = {};
    Object.keys(subjectAverages).forEach((subject) => {
      let count = 0;

      students.forEach((student) => {
        const studentMark = student.marks.find(
          (mark) => mark.subject === subject
        )?.mark;

        if (
          displayType === "above" &&
          studentMark &&
          studentMark > subjectAverages[subject]
        ) {
          count++;
        } else if (
          displayType === "below" &&
          studentMark &&
          studentMark < subjectAverages[subject]
        ) {
          count++;
        }
      });

      percentages[subject] = (count / studentCount) * 100;
    });

    setSubjectPercentages(percentages);
  };

  return (
    <div>
      <h4>
        Percentage of Students Scoring{" "}
        {displayType === "above" ? "Above" : "Below"} Class Average in Each
        Subject
      </h4>
      {Object.keys(subjectPercentages).length > 0 ? (
        <ul>
          {Object.entries(subjectPercentages).map(([subject, percentage]) => (
            <li key={subject}>
              {subject}: {percentage.toFixed(2)}%
            </li>
          ))}
        </ul>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default AboveAndBelowSubjectAveragemark;
