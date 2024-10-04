import React from "react";

type Mark = {
    subject: string;
    mark: number;
};

type Student = {
    name: string;
    marks: Mark[];
};

type StudentsubjecthighProps = {
    selectedStudent: Student | null; // The selected student object
    selectedSubjects: string[]; // Array of subjects to be considered
};

const Studentsubjecthigh: React.FC<StudentsubjecthighProps> = ({
    selectedStudent,
    selectedSubjects,
}) => {
    // Function to find the highest percentage in the selected subjects
    const getHighestPercentage = () => {
        if (!selectedStudent) return null; // Return null if no student is selected

        const totalMarks = selectedSubjects.reduce((acc, subject) => {
            const mark = selectedStudent.marks.find(m => m.subject === subject);
            return mark ? acc + mark.mark : acc; // Sum the marks for selected subjects
        }, 0);

        const percentage = (totalMarks / (selectedSubjects.length * 100)) * 100; // Assuming max marks per subject is 100
        return percentage.toFixed(2); // Return percentage with 2 decimal places
    };

    const highestPercentage = getHighestPercentage();

    return (
        <div>
            <h3>
                {selectedStudent ? `${selectedStudent.name}'s Highest Percentage` : 'No Student Selected'}
            </h3>
            {highestPercentage !== null ? (
                <p>Highest Percentage: {highestPercentage}%</p>
            ) : (
                <p>No subjects selected or no marks available.</p>
            )}
        </div>
    );
};

export default Studentsubjecthigh;
