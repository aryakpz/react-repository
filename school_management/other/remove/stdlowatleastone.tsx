import React, { useEffect, useState } from "react";

type Student = {
  name: string;
  id: number;
  marks: {
    subject: string;
    mark: number;
  }[];
};

type LowestScorersProps = {
  students: Student[];
};

const StuLowAtlestOne: React.FC<LowestScorersProps> = ({ students }) => {
  const [lowestScorers, setLowestScorers] = useState<string[]>([]);

  useEffect(() => {
    if (students.length > 0) {
      findLowestScorers();
    }
  }, [students]);

  const findLowestScorers = () => {
    const subjectLowestScores: {
      [subject: string]: { score: number; students: string[] };
    } = {};

    students.forEach((student) => {
      student.marks.forEach((mark) => {
        const subject = mark.subject;
        const score = mark.mark;

        if (
          !subjectLowestScores[subject] ||
          score < subjectLowestScores[subject].score
        ) {
          subjectLowestScores[subject] = {
            score: score,
            students: [student.name],
          };
        } else if (score === subjectLowestScores[subject].score) {
          subjectLowestScores[subject].students.push(student.name);
        }
      });
    });

    const allLowestScorers = new Set<string>();
    Object.values(subjectLowestScores).forEach(({ students }) => {
      students.forEach((student) => allLowestScorers.add(student));
    });

    setLowestScorers(Array.from(allLowestScorers));
  };

  return (
    <div>
      <h3>Lowest Scorers:</h3>
      {lowestScorers.length > 0 ? (
        <ul>
          {lowestScorers.map((student) => (
            <li key={student}>{student}</li>
          ))}
        </ul>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default StuLowAtlestOne;
