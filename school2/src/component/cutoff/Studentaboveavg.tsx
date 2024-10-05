import React, { useEffect, useState } from 'react';

type Student = {
    name: string;
    id: number;
    marks: {
        subject: string;
        mark: number;
    }[];
};

const Studentaboveavg: React.FC<{ students: Student[] }> = ({ students }) => {
    const [aboveAverageStudents, setAboveAverageStudents] = useState<Student[]>([]);

    useEffect(() => {
        findAboveClassAverageStudents();
    }, [students]);

    const findAboveClassAverageStudents = () => {
        if (!students.length) return;

        const totalMarksForClass = students.reduce((total, student) => {
            const studentTotal = student.marks.reduce((sum, mark) => sum + mark.mark, 0);
            return total + studentTotal;
        }, 0);

        const classAverageMarks = totalMarksForClass / students.length;

        const aboveAverage = students.filter(student => {
            const studentTotal = student.marks.reduce((sum, mark) => sum + mark.mark, 0);
            return studentTotal > classAverageMarks;
        });

        setAboveAverageStudents(aboveAverage);
    };

    return (
        <p>
            <span>Students Above Average</span>
            {aboveAverageStudents.length > 0 ? (
                <ul>
                    {aboveAverageStudents.map(student => (
                        <li key={student.id}>{student.name}</li>
                    ))}
                </ul>
            ) : (
                <p>No students </p>
            )}
        </p>
    );
};

export default Studentaboveavg;
