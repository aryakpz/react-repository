import React, { useState } from 'react';


type Student = {
    name: string;
    marks: {
        subject: string;
        mark: number;
    }[];
};

type CountStudentsBelowMarkProps = {
    students: Student[];
    setSelectedAnswer: React.Dispatch<React.SetStateAction<JSX.Element | null>>;
};

const CountStudentsBelowMark: React.FC<CountStudentsBelowMarkProps> = ({ students, setSelectedAnswer }) => {
    const [selectedSubject, setSelectedSubject] = useState<string>('');
    const [selectedCutoff, setSelectedCutoff] = useState<number | null>(null);

    const countBelowMark = (subject: string, cutoffMark: number): number => {
        let count = 0;

        students.forEach(student => {
            student.marks.forEach(mark => {
                if (mark.subject === subject && mark.mark < cutoffMark) {
                    count++;
                }
            });
        });

        return count;
    };

    return (
        <p>
            Display the count of students below the Cutoff Mark:
            <div>
                <select onChange={(e) => setSelectedSubject(e.target.value)}>
                    <option value="">Select Subject</option>
                    {students
                        .flatMap(student => student.marks.map(mark => mark.subject)) 
                        .filter((subject, index, self) => self.indexOf(subject) === index) 
                        .map((subject, index) => (
                            <option key={index} value={subject}>{subject}</option>
                        ))}
                </select>

                <select onChange={(e) => setSelectedCutoff(Number(e.target.value))}>
                    <option value="">Select Cutoff Mark</option>
                    {Array.from({ length: 101 }, (_, index) => index).map(mark => (
                        <option key={mark} value={mark}>{mark}</option>
                    ))}
                </select>

                <button
                    onClick={() => {
                        if (selectedSubject && selectedCutoff !== null) {
                            const count = countBelowMark(selectedSubject, selectedCutoff);
                            setSelectedAnswer(<p> {count} students  {selectedCutoff} in {selectedSubject}: </p>);
                        } else {
                            setSelectedAnswer(<p>Please select both </p>);
                        }
                    }} >
                    Get Count
                </button>
            </div>
        </p>
    );
};

export default CountStudentsBelowMark;
