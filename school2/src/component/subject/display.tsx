import React from 'react';
type StudentDisplayProps = {
    selectedStudent: string | null;
    selectedSubjects: { subject: string; mark: number }[];
};

const StudentDisplay: React.FC<StudentDisplayProps> = ({ selectedStudent, selectedSubjects }) => {
    return (
        <div>
            {selectedStudent && (
                <div>
                    <h3>Subjects of {selectedStudent}:</h3>
                    {selectedSubjects.length > 0 ? (
                        <ul>
                            {selectedSubjects.map((subj, index) => (
                                <li key={index}>
                                    {subj.subject}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No subjects found for this student.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default StudentDisplay;
