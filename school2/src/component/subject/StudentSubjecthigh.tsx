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
    selectedStudent: Student | null; 
    selectedSubjects: string[]; 
};

const Studentsubjecthigh: React.FC<StudentsubjecthighProps> = ({
    selectedStudent,
    selectedSubjects,
}) => {

    const getHighestPercentage = () => {
        if (!selectedStudent) return null;

        const totalMarks = selectedSubjects.reduce((acc, subject) => {
            const mark = selectedStudent.marks.find(m => m.subject === subject);
            return mark ? acc + mark.mark : acc; 
        }, 0);

        const percentage = (totalMarks / (selectedSubjects.length * 100)) * 100; 
        return percentage.toFixed(2); 
    };

    const highestPercentage = getHighestPercentage();

    return (
        <div>
            <h3>
                {selectedStudent ? `${selectedStudent.name}'s Highest Percentage` : 'No Student Selected'}
            </h3>
          
                <p>Highest Percentage: {highestPercentage}%</p>
           
        </div>
    );
};

export default Studentsubjecthigh;
