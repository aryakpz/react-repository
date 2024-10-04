import React, { useState } from 'react';

type CountStudentsAboveMarkProps = {
    students:{
    name: string;
    marks: {
        subject: string;
        mark: number;
    }[];
   

}[];
 setSelectedAnswer: React.Dispatch<React.SetStateAction<JSX.Element | null>>;

}
const CountStudentsAboveMark: React.FC<CountStudentsAboveMarkProps> = ({ students, setSelectedAnswer }) => {
    const [selectedSubject, setSelectedSubject] = useState<string>('');
    const [selectedCutoff, setSelectedCutoff] = useState<number | null>(null);

    const countAboveMark = (subject: string, cutoffMark: number): number => {
        let count = 0;

        students.forEach(student => {
            student.marks.forEach(mark => {
                if (mark.subject === subject && mark.mark > cutoffMark) {
                    count++;
                }
            });
        });

        return count;
    };

    return (
        <p>
            Display the count of students above the Cutoff Mark:
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
                            const count = countAboveMark(selectedSubject, selectedCutoff);
                            setSelectedAnswer(<p>{count} Students  Score{selectedCutoff} above in {selectedSubject} </p>);
                        } else {
                            setSelectedAnswer(<p>Please select both</p>);
                        }
                    }} >
                    Get Count
                </button>
            </div>
        </p>
    );
};

export default CountStudentsAboveMark;
