import React from 'react';

type Student = {
    name: string;
    id: number;
    marks: {
        subject: string;
        mark: number;
    }[];
};

type CalculateHighestPercentageProps = {
    students: Student[];
    cutoffMark: number;
    onCalculate: (highestPercentageSubjects: { subject: string, percentage: number }[]) => void;
};

const CalculateHighestPercentage: React.FC<CalculateHighestPercentageProps> = ({ students, cutoffMark, onCalculate }) => {
    const calculate = () => {
        const subjectCounts: { [subject: string]: { aboveCount: number, totalCount: number } } = {};

        students.forEach(student => {
            student.marks.forEach(mark => {
                if (!subjectCounts[mark.subject]) {
                    subjectCounts[mark.subject] = { aboveCount: 0, totalCount: 0 };
                }

                subjectCounts[mark.subject].totalCount++;

                if (mark.mark > cutoffMark) {
                    subjectCounts[mark.subject].aboveCount++;
                }
            });
        });

        const subjectPercentages = Object.entries(subjectCounts).map(([subject, counts]) => ({
            subject,
            percentage: (counts.aboveCount / counts.totalCount) * 100,
        }));

        const highestPercentage = Math.max(...subjectPercentages.map(({ percentage }) => percentage));

        const subjectsWithHighestPercentage = subjectPercentages.filter(({ percentage }) => percentage === highestPercentage);

        onCalculate(subjectsWithHighestPercentage); // Send result back to parent
    };

    return (
        <div>
            <button onClick={calculate}>Find Subject</button>
        </div>
    );
};

export default CalculateHighestPercentage;
