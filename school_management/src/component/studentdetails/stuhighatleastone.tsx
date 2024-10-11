import React, { useEffect, useState } from "react";

type Mark = {
  subject: string;
  mark: number;
};

type Student = {
  name: string;
  id: number;
  marks: Mark[];
};

type ScorerType = "highest" | "lowest";

type ScorersProps = {
  students: Student[];
  displayType: ScorerType;
};

const StduentMarkAtleastOne: React.FC<ScorersProps> = ({
  students,
  displayType,
}) => {
  const [scorers, setScorers] = useState<string[]>([]);

  useEffect(() => {
    if (students.length > 0) {
      findScorers();
    }
  }, [students]);

  const findScorers = () => {
    const subjectScores: {
      [subject: string]: { score: number; students: string[] };
    } = {};

    students.forEach((student) => {
      student.marks.forEach((mark) => {
        const subject = mark.subject;
        const score = mark.mark;

        if (!subjectScores[subject]) {
          subjectScores[subject] = { score: score, students: [student.name] };
        } else {
          if (
            (displayType === "highest" &&
              score > subjectScores[subject].score) ||
            (displayType === "lowest" && score < subjectScores[subject].score)
          ) {
            subjectScores[subject] = { score: score, students: [student.name] };
          } else if (score === subjectScores[subject].score) {
            subjectScores[subject].students.push(student.name);
          }
        }
      });
    });

    const allScorers = new Set<string>();
    Object.values(subjectScores).forEach(({ students }) => {
      students.forEach((student) => allScorers.add(student));
    });

    setScorers(Array.from(allScorers));
  };

  return (
    <div>
      <h3>
        {displayType === "highest" ? "Highest Scorers:" : "Lowest Scorers:"}
      </h3>
      {scorers.length > 0 ? (
        <ul>
          {scorers.map((student) => (
            <li key={student}>{student}</li>
          ))}
        </ul>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default StduentMarkAtleastOne;
