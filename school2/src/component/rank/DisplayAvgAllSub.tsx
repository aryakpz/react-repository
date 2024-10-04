
import React from "react";

type Avgprops = {
    students: {
        name: string;
        marks: {
            subject: string;
            mark: number;
        }[];
    }[];
};

const DisplayAvgAllSub: React.FC<Avgprops> = ({ students }) => {
    const subjectTotals: { 
        [key: string]: { totalMarks: number; count: number } } = {};

    students.forEach(student => {
        student.marks.forEach(mark => {
            const subject = mark.subject;

            if (!subjectTotals[subject]) {
                subjectTotals[subject] = { totalMarks: 0, count: 0 };
            }

            subjectTotals[subject].totalMarks += mark.mark;
            subjectTotals[subject].count += 1;
        });
    });


    const averages = Object.keys(subjectTotals).map(subject => {
        const { totalMarks, count } = subjectTotals[subject];
        const average = count > 0 ? totalMarks / count : 0;
        return (
            <li key={subject}>
                {subject}: {average.toFixed(2)}
            </li>
        );
    });

    return (
        <div>
            <p>Average Marks per Subject:</p>
            <ul>
                {averages}
            </ul>
        </div>
    );
};

export default DisplayAvgAllSub;
