import React from "react";

// Define the props type
type ScorerDisplayProps = {
  students: {
    name: string;
    marks: {
      subject: string;
      mark: number;
    }[];
  }[];
  displayType: "top" | "low"; // Type to specify if we want the top or low scorer
};

const TopScorerstudent: React.FC<ScorerDisplayProps> = ({
  students,
  displayType,
}) => {
  const initialScorer = {
    name: "",
    total: displayType === "low" ? Infinity : -Infinity,
  };

  const scorer = students.reduce((currentScorer, student) => {
    const totalMarks = student.marks.reduce((sum, mark) => sum + mark.mark, 0);

    if (displayType === "top") {
      return totalMarks > currentScorer.total
        ? { name: student.name, total: totalMarks }
        : currentScorer;
    } else {
      // Low scorer
      return totalMarks < currentScorer.total
        ? { name: student.name, total: totalMarks }
        : currentScorer;
    }
  }, initialScorer);

  return (
    <p>
      <span>{displayType === "top" ? "Top Scorer: " : "Lowest Scorer: "}</span>
      {scorer.name} - {scorer.total} Marks
    </p>
  );
};

export default TopScorerstudent;
