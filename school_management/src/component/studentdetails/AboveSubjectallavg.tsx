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

type CheckType = "above" | "below";

const SubjectAverageChecker: React.FC<{
  students: Student[];
  checkType: CheckType;
}> = ({ students, checkType }) => {
  const [majoritySubjects, setMajoritySubjects] = useState<string[]>([]);

  useEffect(() => {
    const calculateSubjectAverages = () => {
      const totals: { [subject: string]: number } = {};
      const counts: { [subject: string]: number } = {};

      // Step 1: Calculate total marks and count for each subject
      students.forEach((student) =>
        student.marks.forEach((mark) => {
          totals[mark.subject] = (totals[mark.subject] || 0) + mark.mark;
          counts[mark.subject] = (counts[mark.subject] || 0) + 1;
        })
      );

      const subjectsByComparison: { [subject: string]: number } = {};

      // Step 2: Calculate if students are above/below average based on checkType
      students.forEach((student) =>
        student.marks.forEach((mark) => {
          const avg = totals[mark.subject] / counts[mark.subject];
          if (
            (checkType === "above" && mark.mark > avg) ||
            (checkType === "below" && mark.mark < avg)
          ) {
            subjectsByComparison[mark.subject] =
              (subjectsByComparison[mark.subject] || 0) + 1;
          }
        })
      );

      // Step 3: Filter subjects where the majority scored above/below average
      const majoritySubjects = Object.keys(subjectsByComparison).filter(
        (subject) => subjectsByComparison[subject] > students.length / 2
      );

      setMajoritySubjects(majoritySubjects);
    };

    calculateSubjectAverages();
  }, [students, checkType]);

  return (
    <p>
      <span>{checkType === "above" ? "Above Average:" : "Below Average:"}</span>
      {majoritySubjects.length > 0 ? (
        <ul>
          {majoritySubjects.map((subject) => (
            <li key={subject}>{subject}</li>
          ))}
        </ul>
      ) : (
        <p>No subjects found where the majority scored {checkType} average.</p>
      )}
    </p>
  );
};

export default SubjectAverageChecker;
