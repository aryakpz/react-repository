import React from 'react';

interface StudentDisplayProps {
    className: string;
}

const StudentDisplay: React.FC<StudentDisplayProps> = ({ className }) => {
    return (
        <div >
            <h4>Class Name: {className}</h4>
        </div>
    );
};

export default StudentDisplay;
