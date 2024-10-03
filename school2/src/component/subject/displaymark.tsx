import React from 'react';
type StudentDisplayProps = {
    selectedStudent: string | null;
    selectedSubjects: { subject: string; mark: number }[];
};

const StudentmarkDisplay: React.FC<StudentDisplayProps> = ({ selectedStudent, selectedSubjects }) => {
    return (
        <div>
            {selectedStudent && (
                <div>
                    <h3>marks of {selectedStudent}:</h3>
                    {selectedSubjects.length > 0 ? (
                        <ul>
                            {selectedSubjects.map((subj, index) => (
                                <li key={index}>
                                    {subj.subject}- {subj.mark}
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

export default StudentmarkDisplay;
