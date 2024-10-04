

import React from "react";

type LowPercentageProps = {
    students: {
        name: string;
        marks: {
            subject: string;
            mark: number;
        }[];
    }[];
};

const LowestPercentage: React.FC<LowPercentageProps> = ({ students }) => {
    
    const { lowest, names: lowestPercentageStudents } = students.reduce(
        (acc, student) => {
            const totalMarks = student.marks.reduce((sum, { mark }) => sum + mark, 0);
            const percentage = totalMarks / student.marks.length;

            if (percentage < acc.lowest) {
                acc.lowest = percentage;
                acc.names = [student.name];
            } else if (percentage === acc.lowest) {
                acc.names.push(student.name);
            }

            return acc;
        },
        { lowest: Infinity, names: [] as string[] } // Initialize lowest to Infinity
    );

    return (
        <div>
            <h3>Students:</h3>
            {lowestPercentageStudents.length > 0 ? (
                <ul>
                    {lowestPercentageStudents.map((name, index) => (
                        <li key={index}>{name}</li>
                    ))}
                </ul>
            ) : (
                <p>No students found.</p>
            )}
        </div>
    );
};

export default LowestPercentage;
