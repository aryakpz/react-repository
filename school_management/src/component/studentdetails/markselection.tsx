import React, { useState } from "react";

interface MarkSelectionProps {
  onMarkChange: (mark: number) => void;
}

const MarkSelection: React.FC<MarkSelectionProps> = ({ onMarkChange }) => {
  const [selectedMark, setSelectedMark] = useState<number>(1);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const mark = parseInt(e.target.value);
    setSelectedMark(mark);
    onMarkChange(mark);
  };

  return (
    <div>
      <h2>Select a Mark</h2>
      <select value={selectedMark} onChange={handleSelectChange}>
        {Array.from({ length: 100 }, (_, index) => (
          <option key={index + 1} value={index + 1}>
            {index + 1}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MarkSelection;
