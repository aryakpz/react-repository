import React, { useEffect, useState } from "react";
import './details.css';
import HighestPercentageSubject from "../component/cutoff/subjectabovecutoff";

type ClassData = {
    name: string;
    teacherName: string;
    students: {
        name: string;
        id: number;
        marks: {
            subject: string;
            mark: number;            
        }[];
    }[];     
};
                
export const Details: React.FC = () => {
    const [classObj, setClassObj] = useState<ClassData | null>(null);
    const [selectedMark, setSelectedMark] = useState<number>(0);
    const [highestPercentageSubjects, setHighestPercentageSubjects] = useState<{ subject: string, percentage: number }[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/classdata.json');
            const data = await response.json();
            setClassObj(data);
        };
        fetchData();
    }, []);  
    

    // Marks available for selection
    const marks = [0, 50, 60, 70, 80, 90, 100]; // Example marks

    const handleMarkChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedMark(parseFloat(e.target.value)); // Update the selected mark from the select box
    };

    return (
        <div className="classsec">
            <div className="datasec">
                <div className="questionsec">
                    {/* Select box to choose the mark */}
                    <label htmlFor="marks">Select Mark:</label>
                    <select id="marks" value={selectedMark} onChange={handleMarkChange}>
                        {marks.map(mark => (
                            <option >

                            </option>
                        ))}
                    </select>
                </div>

                <div className="answersec">
                    {classObj && classObj.students.length > 0 && (
                        <HighestPercentageSubject
                            students={classObj.students}
                            selectedMark={selectedMark} // Pass the selected mark to the HighestPercentageSubject
                            setHighestPercentageSubjects={setHighestPercentageSubjects} // Pass the setter function
                        />
                    )}
                    {/* Display the results */}
                    {highestPercentageSubjects.length > 0 && (
                        <ul>
                            {highestPercentageSubjects.map(({ subject, percentage }) => (
                                <li key={subject}>
                                    {subject}: {percentage.toFixed(2)}%
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};       