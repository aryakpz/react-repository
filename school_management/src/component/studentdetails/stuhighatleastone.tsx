import React, { useEffect, useState } from "react";

type Student = {
  name: string;
  id: number;
  marks: {
    subject: string;
    mark: number;
  }[];
};

type HighestScorersProps = {
  students: Student[];
};

const StuHighAtleastOne: React.FC<HighestScorersProps> = ({ students }) => {
  const [highestScorers, setHighestScorers] = useState<string[]>([]);

  useEffect(() => {
    if (students.length > 0) {
      findHighestScorers();
    }
  }, [students]);

  const findHighestScorers = () => {
    const subjectHighestScores: {
      [subject: string]: { score: number; students: string[] };
    } = {};

    // Step 1: Iterate through students to find the highest score for each subject
    students.forEach((student) => {
      student.marks.forEach((mark) => {
        const subject = mark.subject;
        const score = mark.mark;

        // Check if this is the highest score for the subject
        if (
          !subjectHighestScores[subject] ||
          score > subjectHighestScores[subject].score
        ) {
          subjectHighestScores[subject] = {
            score: score,
            students: [student.name],
          };
        } else if (score === subjectHighestScores[subject].score) {
          subjectHighestScores[subject].students.push(student.name);
        }
      });
    });

    // Step 2: Collect all students who are highest scorers in any subject
    const allHighestScorers = new Set<string>();
    Object.values(subjectHighestScores).forEach(({ students }) => {
      students.forEach((student) => allHighestScorers.add(student));
    });

    // Update the state with the highest scorers
    setHighestScorers(Array.from(allHighestScorers));
  };

  return (
    <div>
      <h3>Highest Scorers:</h3>
      {highestScorers.length > 0 ? (
        <ul>
          {highestScorers.map((student) => (
            <li key={student}>{student}</li>
          ))}
        </ul>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default StuHighAtleastOne;
