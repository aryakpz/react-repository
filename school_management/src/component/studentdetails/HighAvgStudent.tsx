import React, { useEffect, useState } from "react";

type Student = {
  name: string;
  id: number;
  marks: {
    subject: string;
    mark: number;
  }[];
};

type PercentageSubjectProps = {
  students: Student[];
  selectedStudent: string;
  displayType: "highest" | "lowest";
};

const SubjectPercentageInAverageofStudent: React.FC<PercentageSubjectProps> = ({
  students,
  selectedStudent,
  displayType,
}) => {
  const [percentageSubjects, setPercentageSubjects] = useState<
    { subject: string; percentage: number }[]
  >([]);

  useEffect(() => {
    if (students.length > 0 && selectedStudent) {
      calculatePercentageSubjects();
    }
  }, [students, selectedStudent]);

  const calculatePercentageSubjects = () => {
    const specificStudent = students.find(
      (student) => student.name === selectedStudent
    );
    if (!specificStudent) return;

    const totalMarks = specificStudent.marks.reduce(
      (sum, mark) => sum + mark.mark,
      0
    );
    const averageMarks = totalMarks / specificStudent.marks.length;

    const subjectPercentages: { [subject: string]: number } = {};

    students.forEach((student) => {
      student.marks.forEach((mark) => {
        if (mark.subject in subjectPercentages) {
          if (
            (displayType === "highest" && mark.mark > averageMarks) ||
            (displayType === "lowest" && mark.mark < averageMarks)
          ) {
            subjectPercentages[mark.subject] =
              (subjectPercentages[mark.subject] || 0) + 1;
          }
        } else {
          subjectPercentages[mark.subject] =
            (displayType === "highest" && mark.mark > averageMarks) ||
            (displayType === "lowest" && mark.mark < averageMarks)
              ? 1
              : 0;
        }
      });
    });

    const subjectPercentagesResult: { subject: string; percentage: number }[] =
      [];
    for (const subject in subjectPercentages) {
      const percentage = (subjectPercentages[subject] / students.length) * 100;
      subjectPercentagesResult.push({ subject, percentage });
    }

    const targetPercentage =
      displayType === "highest"
        ? Math.max(...subjectPercentagesResult.map((sub) => sub.percentage))
        : Math.min(...subjectPercentagesResult.map((sub) => sub.percentage));

    const filteredSubjects = subjectPercentagesResult.filter(
      ({ percentage }) => percentage === targetPercentage
    );

    setPercentageSubjects(filteredSubjects);
  };

  return (
    <p>
      <span>
        Subjects with {displayType === "highest" ? "Highest" : "Lowest"}{" "}
        Percentage for {selectedStudent}
      </span>
      {percentageSubjects.length > 0 ? (
        <ul>
          {percentageSubjects.map(({ subject, percentage }) => (
            <li key={subject}>
              {subject}: {percentage.toFixed(2)}%
            </li>
          ))}
        </ul>
      ) : (
        <p>No subjects found.</p>
      )}
    </p>
  );
};

export default SubjectPercentageInAverageofStudent;
