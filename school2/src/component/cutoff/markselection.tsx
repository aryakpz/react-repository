

import React, { useState } from 'react';

const MarkSelection: React.FC<{ onMarkChange: (mark: number) => void }> = ({ onMarkChange }) => {
    const [inputMark, setInputMark] = useState<number>(0);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        setInputMark(value);
        onMarkChange(value); 
    };

    return (
        <div>
            <h2>Select a Mark</h2>
            <input
                type="number"
                value={inputMark}
                onChange={handleInputChange}
                placeholder="Enter a mark"
            />
        </div>
    );
};

export default MarkSelection;
