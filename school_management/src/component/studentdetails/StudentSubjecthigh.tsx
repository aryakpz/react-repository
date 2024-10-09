import React, { useEffect, useState } from "react";

type Student = {
  name: string;
  id: number;
  marks: {
    subject: string;
    mark: number;
  }[];
};

type HighestPercentageSubjectProps = {
  students: Student[];
  selectedStudent: string;
};

const StudentPercentageHigh: React.FC<HighestPercentageSubjectProps> = ({
  students,
  selectedStudent,
}) => {
  const [highestPercentageSubjects, setHighestPercentageSubjects] = useState<
    { subject: string; percentage: number }[]
  >([]);

  useEffect(() => {
    if (students.length > 0 && selectedStudent) {
      calculateHighestPercentageSubjects();
    }
  }, [students, selectedStudent]);

  const calculateHighestPercentageSubjects = () => {
    const specificStudent = students.find(
      (student) => student.name === selectedStudent
    );
    if (!specificStudent) return;

    const subjectPercentages: { [subject: string]: number } = {};

    specificStudent.marks.forEach((mark) => {
      let studentsAboveCount = 0;

      students.forEach((student) => {
        const studentMarkForSubject = student.marks.find(
          (m) => m.subject === mark.subject
        );
        if (studentMarkForSubject && studentMarkForSubject.mark > mark.mark) {
          studentsAboveCount++;
        }
      });

      const percentage = (studentsAboveCount / students.length) * 100;
      subjectPercentages[mark.subject] = percentage;
    });

    const highestPercentage = Math.max(...Object.values(subjectPercentages));
    const subjectsWithHighestPercentage = Object.entries(subjectPercentages)
      .filter(([_, percentage]) => percentage === highestPercentage)
      .map(([subject, percentage]) => ({ subject, percentage }));

    setHighestPercentageSubjects(subjectsWithHighestPercentage);
  };

  return (
    <p>
      <span>Highest Percentage{selectedStudent}</span>

      <ul>
        {highestPercentageSubjects.map(({ subject, percentage }) => (
          <li key={subject}>
            {subject}: {percentage.toFixed(2)}%
          </li>
        ))}
      </ul>
    </p>
  );
};

export default StudentPercentageHigh;
