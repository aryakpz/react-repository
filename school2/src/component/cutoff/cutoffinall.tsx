import React, { useState } from 'react';


type CutoffInAllProps = {
    students: {
        name: string;
        marks: {
            subject: string;
            mark: number;
        }[];
    }[];
};

const CutoffInAll: React.FC<CutoffInAllProps> = ({ students }) => {
    const [cutoff, setCutoff] = useState<number | ''>(''); 

  
    const handleCutoffSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCutoff(Number(event.target.value)); 
    };

    const studentsAboveCutoff = students.filter(student =>
        student.marks.every(mark => mark.mark > (cutoff || 0))
    );
    
    return (  
        <div>
            <label>
                Select Cutoff Mark: 
                <select value={cutoff} onChange={handleCutoffSelection}>
                    <option value="">Select Cutoff Mark</option>
                    {Array.from({ length: 101 }, (_, index) => (
                        <option key={index} value={index}>{index}</option>
                    ))}
                </select>
            </label>
            <p>Students scoring above the cutoff:</p>
            <ul>
                {studentsAboveCutoff.map(student => (
                    <li key={student.name}>{student.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default CutoffInAll;
