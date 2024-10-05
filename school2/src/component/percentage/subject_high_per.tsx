import React from "react";

type  HighestSubjectPercentageProps={
students:
 {
    name: string;
    marks: {
        subject: string;
        mark: number;
    }[];
}[];
}

const HighestSubjectPercentage: React.FC<HighestSubjectPercentageProps> = ({ students }) => {

    const subjectTotals: Record<string, { totalMarks: number; count: number }> = {};

    
    students.forEach(({ marks }) => {
        marks.forEach(({ subject, mark }) => {
            if (!subjectTotals[subject]) {
                subjectTotals[subject] = { totalMarks: 0, count: 0 };
            }
            subjectTotals[subject].totalMarks += mark;
            subjectTotals[subject].count++;
        });
    });

    
    let highestPercentage = 0;
    const highestPercentageSubjects: string[] = [];

    for (const subject in subjectTotals) {
        const average = subjectTotals[subject].totalMarks / subjectTotals[subject].count;

        if (average > highestPercentage) {
            highestPercentage = average;
            highestPercentageSubjects.length = 0;
            highestPercentageSubjects.push(subject);
        } else if (average === highestPercentage) {
            highestPercentageSubjects.push(subject);
        }
    }

    return (
        <div>
            <h3>Highest Percentage:</h3>
           
                <ul>
                    {highestPercentageSubjects.map((subject, index) => (
                        <li key={index}>{subject}</li>
                    ))}
                </ul>
          
        </div>
    );
};

export default HighestSubjectPercentage;
