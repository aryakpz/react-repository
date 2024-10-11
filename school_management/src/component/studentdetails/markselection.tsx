import React, { useState } from "react";

type MarkSelectionProps = {
  onSelectmark: (mark: number) => void;
};

const MarkSelection: React.FC<MarkSelectionProps> = ({ onSelectmark }) => {
  const [selectedMark, setSelectedMark] = useState<number>(1);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const mark = parseInt(e.target.value);
    setSelectedMark(mark);
    onSelectmark(mark);
  };

  return (
    <div>
      <h4>Select a certain Mark</h4>
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
