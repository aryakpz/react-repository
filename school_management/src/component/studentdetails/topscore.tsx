import React from "react";

interface ScorerDisplayProps {
  students: {
    name: string;
    marks: {
      subject: string;
      mark: number;
    }[];
  }[];
  subject: string;
  displayType: "top" | "low";
}

const TopscorerInSubject: React.FC<ScorerDisplayProps> = ({
  students,
  subject,
  displayType,
}) => {
  const initialScorer = {
    name: "",
    mark: displayType === "low" ? Infinity : 0,
  };

  const scorer = students.reduce((currentScorer, student) => {
    const markEntry = student.marks.find((mark) => mark.subject === subject);

    if (markEntry) {
      if (displayType === "top") {
        return markEntry.mark > currentScorer.mark
          ? { name: student.name, mark: markEntry.mark }
          : currentScorer;
      } else {
        return markEntry.mark < currentScorer.mark
          ? { name: student.name, mark: markEntry.mark }
          : currentScorer;
      }
    }
    return currentScorer;
  }, initialScorer);

  if (!scorer.name) return <p>No scorer found.</p>;

  return (
    <p>
      <span>
        {displayType === "top"
          ? `Highest score in ${subject}:`
          : `Lowest score in ${subject}:`}
      </span>{" "}
      {scorer.name} - {scorer.mark}
    </p>
  );
};

export default TopscorerInSubject;
