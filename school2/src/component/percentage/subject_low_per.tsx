import React from "react";

type LowestSubjectPercentageProps = {
    students:
    {
        name: string;
        marks: {
            subject: string;
            mark: number;
        }[];
    }[];
}



const LowestSubjectPercentage: React.FC<LowestSubjectPercentageProps> = ({ students }) => {
  
    const subjectTotals: Record<string, { totalMarks: number; count: number }> = {};

    students.forEach(student => {
        student.marks.forEach(({ subject, mark }) => {
            if (!subjectTotals[subject]) {
                subjectTotals[subject] = { totalMarks: 0, count: 0 };
            }
            subjectTotals[subject].totalMarks += mark;
            subjectTotals[subject].count++;
        });
    });

    let lowestPercentage = Infinity; 
    const lowestPercentageSubjects: string[] = [];

    for (const subject in subjectTotals) {
        const average = subjectTotals[subject].totalMarks / subjectTotals[subject].count;

        if (average < lowestPercentage) {
            lowestPercentage = average;
            lowestPercentageSubjects.length = 0; 
            lowestPercentageSubjects.push(subject);
        } else if (average === lowestPercentage) {
            lowestPercentageSubjects.push(subject);
        }
    }

    return (
        <div>
            <h3> Lowest Percentage:</h3>
            {lowestPercentageSubjects.length > 0 ? (
                <ul>
                    {lowestPercentageSubjects.map((subject, index) => (
                        <li key={index}>{subject}</li>
                    ))}
                </ul>
            ) : (
                <p>No subjects found.</p>
            )}
        </div>
    );
};


export default LowestSubjectPercentage;
