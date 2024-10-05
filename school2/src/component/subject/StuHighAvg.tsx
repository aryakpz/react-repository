import React from "react";

type StudentAvgprops = {
    students: {
        name: string;
        marks: {
            subject: string;
            mark: number;
        }[];
    }[];
};

const Studenthighavg: React.FC<StudentAvgprops> = ({ students }) => {
    
    const studentAverages: { name: string; average: number }[] = students.map(student => {
        const totalMarks = student.marks.reduce((sum, mark) => sum + mark.mark, 0);
        const average = totalMarks / student.marks.length; 
        return { name: student.name, average };
    });

    const maxAverage = Math.max(...studentAverages.map(student => student.average));

    const topScorer = studentAverages.find(student => student.average === maxAverage);


    if (topScorer) {
        return (
            <p>
               <span> Highest Average:</span> {topScorer.name} - {topScorer.average.toFixed(2)}
            </p>
        );
    }

  
    return null;
};

export default Studenthighavg;
