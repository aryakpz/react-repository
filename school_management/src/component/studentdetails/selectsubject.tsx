import React from 'react';

type SubjectSelectionProps = {
    subjects: string[];
    onSelectSubject: (subject: string, label: string) => void;
    label: string;
};

const SubjectSelection: React.FC<SubjectSelectionProps> = ({ subjects, onSelectSubject, label }) => {
    return (
        <p>
            <label>{label}</label>
            <div>
            <select onChange={(e) => onSelectSubject(e.target.value, label)}>
                <option value="">Select Subject</option>
                {subjects.map((subject, index) => (
                    <option key={index} value={subject}>
                        {subject}
                    </option>
                ))}
            </select>
        </div>
        </p>
    );
};

export default SubjectSelection;
