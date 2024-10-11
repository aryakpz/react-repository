import React, { useEffect, useState } from "react";

type Student = {
  name: string;
  id: number;
  marks: {
    subject: string;
    mark: number;
  }[];
};

type SubjectMarkConditionProps = {
  students: Student[];
  mark: number;
  condition: "above" | "below";
};

const SubjectsBasedOnCertainMark: React.FC<SubjectMarkConditionProps> = ({
  students,
  mark,
  condition,
}) => {
  const [subjects, setSubjects] = useState<string[]>([]);

  useEffect(() => {
    if (students.length > 0) {
      findSubjectsByMarkCondition();
    }
  }, [students, mark, condition]);

  const findSubjectsByMarkCondition = () => {
    const subjectMarks: { [subject: string]: number[] } = {};

    students.forEach((student) => {
      student.marks.forEach((mark) => {
        if (!subjectMarks[mark.subject]) {
          subjectMarks[mark.subject] = [];
        }
        subjectMarks[mark.subject].push(mark.mark);
      });
    });

    const filteredSubjects = Object.entries(subjectMarks)
      .filter(([subject, marks]) => {
        return condition === "above"
          ? marks.every((m) => m > mark)
          : marks.every((m) => m < mark);
      })
      .map(([subject]) => subject);

    setSubjects(filteredSubjects);
  };

  return (
    <div>
      <p>
        Subjects where all students scored {condition} {mark}:
      </p>
      {subjects.length > 0 ? (
        <ul>
          {subjects.map((subject) => (
            <li key={subject}>{subject}</li>
          ))}
        </ul>
      ) : (
        <p>No subjects found.</p>
      )}
    </div>
  );
};

export default SubjectsBasedOnCertainMark;
