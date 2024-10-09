import React from 'react';

type TopScorerDisplayProps ={
    students: {
        name: string;
        marks: {
            subject: string;
            mark: number;
        }[];
    }[];
}

const TopScorerstudent: React.FC<TopScorerDisplayProps> = ({ students }) => {
    const topScorer = students.reduce(
        (topStudent, student) => {
            const totalMarks = student.marks.reduce((sum, mark) => sum + mark.mark, 0);
            return totalMarks > topStudent.total ? { name: student.name, total: totalMarks } : topStudent;
        },
        { name: '', total: 0 }
    );

    return (
        <p>
            <span>Top Scorer: </span> {topScorer.name} - {topScorer.total} Marks
        </p>
    );
};

export default TopScorerstudent;
