

import React, { useEffect, useState } from "react";
import './details.css';
import MarkSelection from "../component/cutoff/markselection";

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
    const [displayType, setDisplayType] = useState<'mark' | null>(null);
    const [highestPercentageSubjects, setHighestPercentageSubjects] = useState<{ subject: string, percentage: number }[]>([]);
    const [highestPercentageSubjectsBelow, setHighestPercentageSubjectsBelow] = useState<{ subject: string, percentage: number }[]>([]);
                    
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/classdata.json');
            const data = await response.json();
            setClassObj(data);
        };

        fetchData();

    }, []);

    const calculateHighestPercentageSubjectsAbove = (mark: number) => {
        if (!classObj) return;

        const subjectScores: { [key: string]: { total: number; aboveMarkCount: number } } = {};

        classObj.students.forEach(student => {
            student.marks.forEach(({ subject, mark: studentMark }) => {
                if (!subjectScores[subject]) {
                    subjectScores[subject] = { total: 0, aboveMarkCount: 0 };
                }
                subjectScores[subject].total += 1;
                if (studentMark > mark) {
                    subjectScores[subject].aboveMarkCount += 1;
                }
            });
        });
           

        const percentages = Object.entries(subjectScores).map(([subject, scores]) => {
            const percentage = (scores.aboveMarkCount / scores.total) * 100;
            return { subject, percentage };
        });


        const maxPercentage = Math.max(...percentages.map(item => item.percentage));
        const highestSubjects = percentages.filter(item => item.percentage === maxPercentage);

        setHighestPercentageSubjects(highestSubjects);
    };



    const calculateHighestPercentageSubjectsBelow = (mark: number) => {
        if (!classObj) return;

        const subjectScores: { [key: string]: { total: number; belowMarkCount: number } } = {};


        classObj.students.forEach(student => {
            student.marks.forEach(({ subject, mark: studentMark }) => {
                if (!subjectScores[subject]) {
                    subjectScores[subject] = { total: 0, belowMarkCount: 0 };
                }
                subjectScores[subject].total += 1;
                if (studentMark < mark) {
                    subjectScores[subject].belowMarkCount += 1;
                }
            });
        });


        const percentages = Object.entries(subjectScores).map(([subject, scores]) => {
            const percentage = (scores.belowMarkCount / scores.total) * 100;
            return { subject, percentage };
        });


        const maxPercentage = Math.max(...percentages.map(item => item.percentage));
        const highestSubjectsBelow = percentages.filter(item => item.percentage === maxPercentage);

        setHighestPercentageSubjectsBelow(highestSubjectsBelow);
    };

    const handleMarkChange = (mark: number) => {
        setSelectedMark(mark);
        calculateHighestPercentageSubjectsAbove(mark);
        calculateHighestPercentageSubjectsBelow(mark);
        setDisplayType('mark');
    };

    return (
        <div className="classsec">
            <div className="datasec">
                <div className="questionsec">
                    {
                        classObj && (
                            <MarkSelection onMarkChange={handleMarkChange} />
                        )
                    }  
                </div>
                <div className="answersec">

                    {/* {displayType === 'mark' && highestPercentageSubjects.length > 0 && (
                        <>
                            <h2>Subjects with Highest Percentage of Students Scoring Above {selectedMark}:</h2>
                            <ul>
                                {highestPercentageSubjects.map((subjectInfo, index) => (
                                    <li key={index}>{subjectInfo.subject}: {subjectInfo.percentage.toFixed(2)}%</li>
                                ))}
                            </ul>
                        </>
                    )} */}
                      

                    {displayType === 'mark' && highestPercentageSubjectsBelow.length > 0 && (
                        <p>
                            <span>Subjects with Highest Percentage of Students Scoring Below {selectedMark}:</span>
                            <ul>
                                {highestPercentageSubjectsBelow.map((subjectInfo, index) => (
                                    <li key={index}>{subjectInfo.subject}: {subjectInfo.percentage.toFixed(2)}%</li>
                                ))}
                            </ul>
                        </p>
                    )} 

                    {/* {displayType === 'mark' && highestPercentageSubjects.length === 0 && (
                        <p>No subjects found with students scoring above {selectedMark}.</p>
                    )} */} 

                          
                    {displayType === 'mark' && highestPercentageSubjectsBelow.length === 0 && (
                        <p>No subjects found with students scoring below {selectedMark}.</p>
                    )}

                </div>
            </div>
        </div>
    );
};
