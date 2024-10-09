import React, { useEffect, useState } from 'react';

type Student = {
    name: string;
    id: number;
    marks: {
        subject: string;
        mark: number;
    }[];
};

type AboveAverageAtLeastOneSubjectProps = {
    students: Student[];
    selectedStudent: string; 
};

const AvgAboveAtLeastOne: React.FC<AboveAverageAtLeastOneSubjectProps> = ({ students, selectedStudent }) => {
    const [percentageAboveAverage, setPercentageAboveAverage] = useState<number | null>(null);

    useEffect(() => {
        if (students.length > 0 && selectedStudent) {
            calculatePercentageAboveAverage();
        }
    }, [students, selectedStudent]);

    const calculatePercentageAboveAverage = () => {
        const specificStudent = students.find(student => student.name === selectedStudent);
        if (!specificStudent) return;

        const averageMarks: { [subject: string]: number } = {};
        const subjectCount: { [subject: string]: number } = {};

        // Calculate the average marks for the specific student in each subject
        specificStudent.marks.forEach(mark => {
            averageMarks[mark.subject] = mark.mark; // Store the average (which is the student's mark)
            subjectCount[mark.subject] = (subjectCount[mark.subject] || 0) + 1;
        });

        let studentsAboveCount = 0;

        // Check how many students scored above the specific student's average in at least one subject
        students.forEach(student => {
            let scoredAbove = false;

            student.marks.forEach(mark => {
                if (averageMarks[mark.subject] !== undefined && mark.mark > averageMarks[mark.subject]) {
                    scoredAbove = true;
                }
            });

            if (scoredAbove) {
                studentsAboveCount++;
            }
        });

        const percentage = (studentsAboveCount / students.length) * 100;
        setPercentageAboveAverage(percentage);
    };

    return (
        <p>
            <span>Percentage of {selectedStudent}</span>
            <p>
                {percentageAboveAverage !== null
                    ? `Percentage: ${percentageAboveAverage.toFixed(2)}%`
                    : 'No data available.'}
            </p>
        </p>
    );
};

export default AvgAboveAtLeastOne;
