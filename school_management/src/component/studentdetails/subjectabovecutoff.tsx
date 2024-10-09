import React, { useEffect } from 'react';

type HighestPercentageSubjectProps = {
    students: {
        name: string;
        id: number;
        marks: {
            subject: string;
            mark: number;
        }[];
    }[];
    selectedMark: number; // Receive the selected mark
    setHighestPercentageSubjects: React.Dispatch<React.SetStateAction<{ subject: string; percentage: number }[]>>; // Prop for setting the highest percentage subjects
};

const HighestPercentageSubject: React.FC<HighestPercentageSubjectProps> = ({ students, selectedMark, setHighestPercentageSubjects }) => {
    
    useEffect(() => {
        const calculateHighestPercentageSubjects = () => {
            const subjectCounts: { [subject: string]: { aboveCount: number; totalCount: number } } = {};

            students.forEach(student => {
                student.marks.forEach(mark => {
                    if (!subjectCounts[mark.subject]) {
                        subjectCounts[mark.subject] = { aboveCount: 0, totalCount: 0 };
                    }

                    subjectCounts[mark.subject].totalCount++;

                    // Check if the mark is above the selected mark
                    if (mark.mark > selectedMark) {
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

            setHighestPercentageSubjects(subjectsWithHighestPercentage);
        };

        calculateHighestPercentageSubjects();
    }, [students, selectedMark, setHighestPercentageSubjects]); // Include selectedMark in the dependency array

    return null; // No need to render anything here
};

export default HighestPercentageSubject;
