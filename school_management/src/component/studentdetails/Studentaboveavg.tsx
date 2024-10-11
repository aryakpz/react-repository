import React, { useEffect, useState } from "react";

type Student = {
  name: string;
  id: number;
  marks: {
    subject: string;
    mark: number;
  }[];
};

type StudentAverageProps = {
  students: Student[];
  displayType: "above" | "below";
};

const StudentAbvoeAndBelowAverage: React.FC<StudentAverageProps> = ({
  students,
  displayType,
}) => {
  const [filteredStudents, setFilteredStudents] = useState<Student[]>([]);

  useEffect(() => {
    findAverageStudents();
  }, [students]);

  const findAverageStudents = () => {
    if (!students.length) return;

    const totalMarksForClass = students.reduce((total, student) => {
      const studentTotal = student.marks.reduce(
        (sum, mark) => sum + mark.mark,
        0
      );
      return total + studentTotal;
    }, 0);

    const classAverageMarks = totalMarksForClass / students.length;
    const filtered = students.filter((student) => {
      const studentTotal = student.marks.reduce(
        (sum, mark) => sum + mark.mark,
        0
      );
      return displayType === "above"
        ? studentTotal > classAverageMarks
        : studentTotal < classAverageMarks;
    });

    setFilteredStudents(filtered);
  };

  return (
    <div>
      <span>
        {displayType === "above"
          ? "Students Above Average"
          : "Students Below Average"}
      </span>
      {filteredStudents.length > 0 ? (
        <ul>
          {filteredStudents.map((student) => (
            <li key={student.id}>{student.name}</li>
          ))}
        </ul>
      ) : (
        <p>No students</p>
      )}
    </div>
  );
};

export default StudentAbvoeAndBelowAverage;
