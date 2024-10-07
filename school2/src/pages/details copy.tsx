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
  
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/classdata.json');
            const data = await response.json();
            setClassObj(data);
        };
        fetchData();
    }, []);

    const handleMarkChange = (mark: number,type:'mark',label:string) => {
        setSelectedMark(mark);
        setDisplayType(type);
    };

    return (
        <div className="classsec">
            <div className="datasec">
                <div className="questionsec">
                   {classObj && (         
                    <MarkSelection onMarkChange={(label)=>handleMarkChange("mark",label)}
                    label ="marks"/>
                   )}  
                </div>     
                <div className="answersec">
               
                </div>
            </div>
        </div>
    );
};
