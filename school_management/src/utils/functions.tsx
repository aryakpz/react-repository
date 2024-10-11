// HelperComponents.tsx
import React from "react";

import { useEffect, useState } from "react";

type Mark = {
  subject: string;
  mark: number;
};

type Student = {
  name: string;
  id: number;
  marks: Mark[];
};
type displayType = string;

type StudentProps = {
  students: Student[];
  selectedStudent?: string;
  selectedSubject?: string;
  results?: number;
  displayType?: displayType;
};
export const TeacherDisplay: React.FC<{ teacherName: string }> = ({
  teacherName,
}) => (
  <div>
    <h4>Teacher Name: {teacherName}</h4>
  </div>
);

export const ClassnameDisplay: React.FC<{ className: string }> = ({
  className,
}) => (
  <div>
    <h4>Class Name: {className}</h4>
  </div>
);

export const ShowStudents: React.FC<{ students: Student[] }> = ({
  students,
}) => (
  <ul>
    {students.map((student) => (
      <li key={student.id}>{student.name}</li>
    ))}
  </ul>
);
export const ShowStudentswithId: React.FC<{ students: Student[] }> = ({
  students,
}) => (
  <ul>
    {students.map((student) => (
      <li key={student.id}>
        {student.name} - {student.id}
      </li>
    ))}
  </ul>
);

export const StudentSelection: React.FC<{
  students: { name: string; id: string }[];
  onSelectStudent: (name: string) => void;
  label: string;
}> = ({ students, onSelectStudent, label }) => (
  <div>
    <label>{label}</label>
    <select onChange={(e) => onSelectStudent(e.target.value)}>
      <option value="">Select a student</option>
      {students.map((student) => (
        <option key={student.id} value={student.name}>
          {student.name}
        </option>
      ))}
    </select>
  </div>
);

export const StudentDisplay: React.FC<{
  selectedStudent: string;
  selectedSubjects: Mark[];
  displayType: displayType;
}> = ({ selectedStudent, selectedSubjects, displayType }) => (
  <div>
    <h4>{selectedStudent}'s Marks:</h4>
    <ul>
      {selectedSubjects.map((mark, index) => (
        <li key={index}>
          {displayType === "subject"
            ? mark.subject
            : `${mark.subject}: ${mark.mark}`}
        </li>
      ))}
    </ul>
  </div>
);

export const AboveAtleastOne: React.FC<{ students: Student[] }> = ({
  students,
}) => {
  const calculatePercentage = (): number | null => {
    if (students.length === 0) return null;

    const subjectMarks: Record<string, { total: number; count: number }> = {};

    students.forEach((student) => {
      student.marks.forEach(({ subject, mark }) => {
        subjectMarks[subject] = subjectMarks[subject] || { total: 0, count: 0 };
        subjectMarks[subject].total += mark;
        subjectMarks[subject].count++;
      });
    });

    const averages = Object.fromEntries(
      Object.entries(subjectMarks).map(([subject, { total, count }]) => [
        subject,
        total / count,
      ])
    );

    const studentsAboveAverage = students.filter((student) =>
      student.marks.some(({ subject, mark }) => mark > averages[subject])
    );

    return (studentsAboveAverage.length / students.length) * 100;
  };

  const percentage = calculatePercentage();

  return (
    <div>
      <h4>
        Percentage of students scoring above average in at least one subject:
      </h4>
      {percentage !== null ? (
        <p>{percentage.toFixed(2)}%</p>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export const AboveAvgAllSub: React.FC<{ students: Student[] }> = ({
  students,
}) => {
  const [aboveAverageStudents, setAboveAverageStudents] = useState<Student[]>(
    []
  );

  useEffect(() => {
    const subjectAverages: Record<string, number> = {};

    students.forEach((student) => {
      student.marks.forEach(({ subject, mark }) => {
        subjectAverages[subject] = (subjectAverages[subject] || 0) + mark;
      });
    });

    const totalStudents = students.length;
    Object.keys(subjectAverages).forEach((subject) => {
      subjectAverages[subject] /= totalStudents;
    });

    const studentsAboveAverage = students.filter((student) =>
      student.marks.every(
        ({ subject, mark }) => mark > subjectAverages[subject]
      )
    );

    setAboveAverageStudents(studentsAboveAverage);
  }, [students]);

  return (
    <div>
      <h4>Students Above Average in All Subjects:</h4>
      <ul>
        {aboveAverageStudents.map((student) => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
    </div>
  );
};

export const LowestPercentageAboveAverage: React.FC<StudentProps> = ({
  students,
  selectedStudent,
}) => {
  const [lowestPercentageSubjects, setLowestPercentageSubjects] = useState<
    { subject: string; percentage: number }[]
  >([]);

  useEffect(() => {
    if (students.length && selectedStudent) {
      calculateLowestPercentageSubjects();
    }
  }, [students, selectedStudent]);

  const calculateLowestPercentageSubjects = () => {
    const specificStudent = students.find(
      (student) => student.name === selectedStudent
    );
    if (!specificStudent) return;

    const averageMarks =
      specificStudent.marks.reduce((sum, { mark }) => sum + mark, 0) /
      specificStudent.marks.length;

    const subjectCountAboveAverage = specificStudent.marks.reduce(
      (acc, { subject }) => {
        const count = students.filter((student) =>
          student.marks.find(
            (mark) => mark.subject === subject && mark.mark > averageMarks
          )
        ).length;
        acc[subject] = count;
        return acc;
      },
      {} as Record<string, number>
    );

    const totalStudents = students.length;
    const subjectPercentages = Object.entries(subjectCountAboveAverage).map(
      ([subject, count]) => ({
        subject,
        percentage: (count / totalStudents) * 100,
      })
    );

    const lowestPercentage = Math.min(
      ...subjectPercentages.map(({ percentage }) => percentage)
    );
    const subjectsWithLowestPercentage = subjectPercentages.filter(
      ({ percentage }) => percentage === lowestPercentage
    );

    setLowestPercentageSubjects(subjectsWithLowestPercentage);
  };

  return (
    <div>
      <h4>
        Subjects with Lowest Percentage Above Average for {selectedStudent}:
      </h4>
      {lowestPercentageSubjects.length > 0 ? (
        <ul>
          {lowestPercentageSubjects.map(({ subject, percentage }) => (
            <li key={subject}>
              {subject}: {percentage.toFixed(2)}%
            </li>
          ))}
        </ul>
      ) : (
        <p>No subjects.</p>
      )}
    </div>
  );
};

export const AboveMajority: React.FC<{ students: Student[] }> = ({
  students,
}) => {
  const calculateAboveAverageMajority = (): string[] => {
    if (students.length === 0) return [];

    const subjectTotals: Record<string, number> = {};
    const subjectAverages: Record<string, number> = {};

    students.forEach((student) => {
      student.marks.forEach(({ subject, mark }) => {
        subjectTotals[subject] = (subjectTotals[subject] || 0) + mark;
      });
    });

    for (const subject in subjectTotals) {
      subjectAverages[subject] = subjectTotals[subject] / students.length;
    }

    const aboveAverageStudents = students.filter((student) => {
      const subjectsAboveAverage = student.marks.filter(
        ({ subject, mark }) => mark > subjectAverages[subject]
      ).length;

      return subjectsAboveAverage > student.marks.length / 2;
    });

    return aboveAverageStudents.map((student) => student.name);
  };

  const aboveAverageStudents = calculateAboveAverageMajority();

  return (
    <div>
      <h4>Students Above Average in Majority:</h4>
      {aboveAverageStudents.length > 0 ? (
        <ul>
          {aboveAverageStudents.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      ) : (
        <p>No students.</p>
      )}
    </div>
  );
};

export const PercentageAboveSpecificInMajority: React.FC<StudentProps> = ({
  students,
  selectedStudent,
}) => {
  const calculatePercentageAboveMajority = (): number | null => {
    const specificStudent = students.find(
      (student) => student.name === selectedStudent
    );

    if (!specificStudent) return null;

    const totalSubjects = specificStudent.marks.length;
    const subjectAverages: Record<string, number> = Object.fromEntries(
      specificStudent.marks.map(({ subject, mark }) => [subject, mark])
    );

    const studentsAboveMajorityCount = students.filter((student) => {
      const subjectsAboveCount = student.marks.filter(
        ({ subject, mark }) => mark > subjectAverages[subject]
      ).length;

      return subjectsAboveCount > totalSubjects / 2;
    }).length;

    return (studentsAboveMajorityCount / students.length) * 100;
  };

  const percentageAboveMajority = calculatePercentageAboveMajority();

  return (
    <div>
      <h4>Percentage of Students Above {selectedStudent}:</h4>
      <p>
        {percentageAboveMajority !== null
          ? `Percentage: ${percentageAboveMajority.toFixed(2)}%`
          : "No data available."}
      </p>
    </div>
  );
};

export const StudentsAboveAverage: React.FC<StudentProps> = ({
  students,
  selectedStudent,
}) => {
  const [studentsAboveAverage, setStudentsAboveAverage] = useState<string[]>(
    []
  );

  useEffect(() => {
    if (students.length > 0 && selectedStudent) {
      setStudentsAboveAverage(findStudentsAboveAverage());
    }
  }, [students, selectedStudent]);

  const findStudentsAboveAverage = (): string[] => {
    const specificStudent = students.find(
      (student) => student.name === selectedStudent
    );

    if (!specificStudent) return [];

    const averageMarks =
      specificStudent.marks.reduce((sum, { mark }) => sum + mark, 0) /
      specificStudent.marks.length;

    return students
      .filter(
        (student) =>
          student.name !== selectedStudent &&
          student.marks.every(({ mark }) => mark > averageMarks)
      )
      .map(({ name }) => name);
  };

  return (
    <div>
      <span>Students scoring above {selectedStudent}: </span>
      {studentsAboveAverage.length > 0 ? (
        <ul>
          {studentsAboveAverage.map((studentName) => (
            <li key={studentName}>{studentName}</li>
          ))}
        </ul>
      ) : (
        <p>No students scored above average .</p>
      )}
    </div>
  );
};

export const AboveSubjectavg: React.FC<{ students: Student[] }> = ({
  students,
}) => {
  const [majorityAboveSubjects, setMajorityAboveSubjects] = useState<string[]>(
    []
  );

  useEffect(() => {
    const calculateSubjectAverages = () => {
      const totals: Record<string, number> = {};
      const counts: Record<string, number> = {};

      students.forEach(({ marks }) =>
        marks.forEach(({ subject, mark }) => {
          totals[subject] = (totals[subject] || 0) + mark;
          counts[subject] = (counts[subject] || 0) + 1;
        })
      );

      const majoritySubjects = Object.keys(totals).filter((subject) => {
        const average = totals[subject] / counts[subject];
        const countAboveAvg = students.filter((student) =>
          student.marks.some(
            (mark) => mark.subject === subject && mark.mark > average
          )
        ).length;
        return countAboveAvg > students.length / 2;
      });

      setMajorityAboveSubjects(majoritySubjects);
    };

    calculateSubjectAverages();
  }, [students]);

  return (
    <div>
      <span>Above Average Subjects:</span>
      {majorityAboveSubjects.length > 0 ? (
        <ul>
          {majorityAboveSubjects.map((subject) => (
            <li key={subject}>{subject}</li>
          ))}
        </ul>
      ) : (
        <p>No subjects found where the majority scored above average.</p>
      )}
    </div>
  );
};

export const SubjectsAboveAverage: React.FC<StudentProps> = ({
  students,
  selectedStudent,
}) => {
  const calculateSubjectsAboveAverage = (): {
    subject: string;
    average: number;
  }[] => {
    if (students.length === 0 || !selectedStudent) return [];

    const specificStudent = students.find(
      (student) => student.name === selectedStudent
    );
    if (!specificStudent) return [];

    const totalMarks = specificStudent.marks.reduce(
      (sum, { mark }) => sum + mark,
      0
    );
    const averageMarks = totalMarks / specificStudent.marks.length;

    const subjectTotals: Record<string, number[]> = {};
    students.forEach(({ marks }) => {
      marks.forEach(({ subject, mark }) => {
        if (!subjectTotals[subject]) {
          subjectTotals[subject] = [];
        }
        subjectTotals[subject].push(mark);
      });
    });

    const subjectAverages: Record<string, number> = {};
    for (const subject in subjectTotals) {
      const totalSubjectMarks = subjectTotals[subject].reduce(
        (sum, mark) => sum + mark,
        0
      );
      subjectAverages[subject] =
        totalSubjectMarks / subjectTotals[subject].length;
    }

    const aboveAverageSubjects = Object.entries(subjectAverages)
      .filter(([, average]) => average > averageMarks)
      .map(([subject, average]) => ({ subject, average }));

    return aboveAverageSubjects;
  };

  const subjectsAboveAverage = calculateSubjectsAboveAverage();

  return (
    <div>
      <span>Subjects with Average Marks for {selectedStudent}:</span>
      {subjectsAboveAverage.length > 0 ? (
        <ul>
          {subjectsAboveAverage.map(({ subject, average }) => (
            <li key={subject}>
              {subject}: {average.toFixed(2)}
            </li>
          ))}
        </ul>
      ) : (
        <p>No subjects found above average.</p>
      )}
    </div>
  );
};

export const AvgAboveAtLeastOne: React.FC<StudentProps> = ({
  students,
  selectedStudent,
}) => {
  const calculatePercentageAboveAverage = (): number | null => {
    if (students.length === 0 || !selectedStudent) return null;

    const specificStudent = students.find(
      (student) => student.name === selectedStudent
    );
    if (!specificStudent) return null;

    const averageMarks: Record<string, number> = {};

    specificStudent.marks.forEach(({ subject, mark }) => {
      averageMarks[subject] = mark;
    });

    let studentsAboveCount = 0;

    students.forEach((student) => {
      const scoredAbove = student.marks.some(
        ({ subject, mark }) => mark > (averageMarks[subject] || 0)
      );
      if (scoredAbove) {
        studentsAboveCount++;
      }
    });

    return (studentsAboveCount / students.length) * 100;
  };

  const percentageAboveAverage = calculatePercentageAboveAverage();

  return (
    <div>
      <span>Percentage of {selectedStudent}</span>
      <p>
        {percentageAboveAverage !== null
          ? `Percentage: ${percentageAboveAverage.toFixed(2)}%`
          : "No data available."}
      </p>
    </div>
  );
};

export const AvgBelowAtleastOne: React.FC<StudentProps> = ({
  students,
  selectedStudent,
}) => {
  const calculatePercentageBelowAverage = (): number | null => {
    if (students.length === 0 || !selectedStudent) return null;

    const specificStudent = students.find(
      (student) => student.name === selectedStudent
    );
    if (!specificStudent) return null;

    const totalMarks = specificStudent.marks.reduce(
      (sum, mark) => sum + mark.mark,
      0
    );
    const averageMarks = totalMarks / specificStudent.marks.length;

    let studentsBelowAverageCount = 0;

    students.forEach((student) => {
      if (student.name !== selectedStudent) {
        const scoredBelowInAnySubject = student.marks.some(
          (mark) => mark.mark < averageMarks
        );
        if (scoredBelowInAnySubject) {
          studentsBelowAverageCount++;
        }
      }
    });

    return (studentsBelowAverageCount / (students.length - 1)) * 100;
  };

  const percentageBelowAverage = calculatePercentageBelowAverage();

  return (
    <div>
      <span>Percentage of {selectedStudent}</span>
      <p>
        {percentageBelowAverage !== null
          ? `Percentage: ${percentageBelowAverage.toFixed(2)}%`
          : "No data available."}
      </p>
    </div>
  );
};

export const StudentAverage: React.FC<StudentProps> = ({
  students,
  selectedStudent,
}) => {
  const calculateAverage = (): number | null => {
    if (!selectedStudent || typeof selectedStudent !== "string") {
      return null;
    }

    const student = students.find(
      (stu) => stu.name.toLowerCase() === selectedStudent.toLowerCase()
    );

    if (!student) {
      return null;
    }

    return (
      student.marks.reduce((total, mark) => total + mark.mark, 0) /
      student.marks.length
    );
  };

  const average = calculateAverage();

  return (
    <div>
      {average !== null ? (
        <p>
          Average mark of {selectedStudent}: <span>{average.toFixed(2)}</span>
        </p>
      ) : (
        <p>No student.</p>
      )}
    </div>
  );
};
export const BelowAtleastOne: React.FC<{ students: Student[] }> = ({
  students,
}) => {
  const [percentage, setPercentage] = useState<number | null>(null);

  useEffect(() => {
    if (students.length > 0) {
      calculatePercentage();
    }
  }, [students]);

  const calculatePercentage = () => {
    const subjectMarks: {
      [subject: string]: { totalMarks: number; count: number };
    } = {};
    const studentCount = students.length;

    students.forEach((student) => {
      student.marks.forEach((mark) => {
        if (!subjectMarks[mark.subject]) {
          subjectMarks[mark.subject] = { totalMarks: 0, count: 0 };
        }
        subjectMarks[mark.subject].totalMarks += mark.mark;
        subjectMarks[mark.subject].count++;
      });
    });

    const subjectAverages: { [subject: string]: number } = {};
    Object.keys(subjectMarks).forEach((subject) => {
      subjectAverages[subject] =
        subjectMarks[subject].totalMarks / subjectMarks[subject].count;
    });
    let studentsBelowAverageInAtLeastOne = 0;

    students.forEach((student) => {
      const scoredBelowInOne = student.marks.some(
        (mark) => mark.mark < subjectAverages[mark.subject]
      );
      if (scoredBelowInOne) {
        studentsBelowAverageInAtLeastOne++;
      }
    });

    const percentageBelowInOne =
      (studentsBelowAverageInAtLeastOne / studentCount) * 100;

    setPercentage(percentageBelowInOne);
  };

  return (
    <div>
      <span>
        Percentage of students scoring below average in at least one subject:
      </span>
      {percentage !== null ? (
        <p>{percentage.toFixed(2)}%</p>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export const BelowAvgAllSub: React.FC<StudentProps> = ({ students }) => {
  const [belowAverageStudents, setBelowAverageStudents] = useState<Student[]>(
    []
  );

  useEffect(() => {
    const subjectAverages: Record<string, number> = {};

    students.forEach((student) => {
      student.marks.forEach(({ subject, mark }) => {
        subjectAverages[subject] = (subjectAverages[subject] || 0) + mark;
      });
    });

    Object.keys(subjectAverages).forEach((subject) => {
      subjectAverages[subject] /= students.length;
    });

    const belowAverage = students.filter((student) =>
      student.marks.every(
        ({ subject, mark }) => mark < subjectAverages[subject]
      )
    );

    setBelowAverageStudents(belowAverage);
  }, [students]);

  return (
    <div>
      <span>Below Average:</span>
      {belowAverageStudents.length > 0 ? (
        <ul>
          {belowAverageStudents.map((student) => (
            <li key={student.id}>{student.name}</li>
          ))}
        </ul>
      ) : (
        <p>No students below average.</p>
      )}
    </div>
  );
};

export const LowestPercentageBelowAverage: React.FC<StudentProps> = ({
  students,
  selectedStudent,
}) => {
  const [lowestPercentageSubjects, setLowestPercentageSubjects] = useState<
    { subject: string; percentage: number }[]
  >([]);

  useEffect(() => {
    if (students.length > 0 && selectedStudent) {
      calculateLowestPercentageSubjects();
    }
  }, [students, selectedStudent]);

  const calculateLowestPercentageSubjects = () => {
    const specificStudent = students.find(
      (student) => student.name === selectedStudent
    );
    if (!specificStudent) return;

    const averageMarks =
      specificStudent.marks.reduce((sum, { mark }) => sum + mark, 0) /
      specificStudent.marks.length;

    const subjectPercentages: Record<string, number> = {};

    students.forEach((student) => {
      student.marks.forEach(({ subject, mark }) => {
        if (!subjectPercentages[subject]) {
          subjectPercentages[subject] = 0;
        }
        if (mark < averageMarks) {
          subjectPercentages[subject]++;
        }
      });
    });

    const totalStudents = students.length;
    const subjectPercentagesResult = Object.entries(subjectPercentages).map(
      ([subject, count]) => ({
        subject,
        percentage: (count / totalStudents) * 100,
      })
    );

    const lowestPercentage = Math.min(
      ...subjectPercentagesResult.map(({ percentage }) => percentage)
    );
    const subjectsWithLowestPercentage = subjectPercentagesResult.filter(
      ({ percentage }) => percentage === lowestPercentage
    );

    setLowestPercentageSubjects(subjectsWithLowestPercentage);
  };

  return (
    <div>
      <span>Subjects with Lowest Percentage Below {selectedStudent}:</span>
      {lowestPercentageSubjects.length > 0 ? (
        <ul>
          {lowestPercentageSubjects.map(({ subject, percentage }) => (
            <li key={subject}>
              {subject}: {percentage.toFixed(2)}%
            </li>
          ))}
        </ul>
      ) : (
        <p>No subjects</p>
      )}
    </div>
  );
};

export const BelowMajority: React.FC<{ students: Student[] }> = ({
  students,
}) => {
  const [belowAverageMajorityStudents, setBelowAverageMajorityStudents] =
    useState<Student[]>([]);

  useEffect(() => {
    const calculateBelowAverageMajorityStudents = () => {
      const subjectTotals: Record<string, number> = {};
      const subjectAverages: Record<string, number> = {};

      students.forEach((student) => {
        student.marks.forEach(({ subject, mark }) => {
          subjectTotals[subject] = (subjectTotals[subject] || 0) + mark;
        });
      });

      Object.keys(subjectTotals).forEach((subject) => {
        subjectAverages[subject] = subjectTotals[subject] / students.length;
      });

      const belowAverageInMajority = students.filter((student) => {
        const belowAverageCount = student.marks.filter(
          ({ subject, mark }) => mark < subjectAverages[subject]
        ).length;
        return belowAverageCount > student.marks.length / 2;
      });

      setBelowAverageMajorityStudents(belowAverageInMajority);
    };

    calculateBelowAverageMajorityStudents();
  }, [students]);

  return (
    <div>
      <span>Below Average:</span>
      {belowAverageMajorityStudents.length > 0 ? (
        <ul>
          {belowAverageMajorityStudents.map((student) => (
            <li key={student.id}>{student.name}</li>
          ))}
        </ul>
      ) : (
        <p>No students.</p>
      )}
    </div>
  );
};

export const PercentageBelowSpecificInMajority: React.FC<StudentProps> = ({
  students,
  selectedStudent,
}) => {
  const [percentageBelowMajority, setPercentageBelowMajority] = useState<
    number | null
  >(null);

  useEffect(() => {
    if (students.length > 0 && selectedStudent) {
      calculatePercentageBelowMajority();
    }
  }, [students, selectedStudent]);

  const calculatePercentageBelowMajority = () => {
    const specificStudent = students.find(
      (student) => student.name === selectedStudent
    );
    if (!specificStudent) return;

    const totalSubjects = specificStudent.marks.length;
    const subjectMarks: Record<string, number> = {};

    specificStudent.marks.forEach(({ subject, mark }) => {
      subjectMarks[subject] = mark;
    });

    const studentsBelowMajorityCount = students.reduce((count, student) => {
      const subjectsBelowCount = student.marks.reduce(
        (belowCount, { subject, mark }) => {
          return mark < subjectMarks[subject] ? belowCount + 1 : belowCount;
        },
        0
      );

      return subjectsBelowCount > totalSubjects / 2 ? count + 1 : count;
    }, 0);

    const percentage = (studentsBelowMajorityCount / students.length) * 100;
    setPercentageBelowMajority(percentage);
  };

  return (
    <p>
      <span>Lowest percentage for {selectedStudent}</span>
      <p>
        {percentageBelowMajority !== null
          ? `Percentage: ${percentageBelowMajority.toFixed(2)}%`
          : "No data available."}
      </p>
    </p>
  );
};

export const StudentsBelowAverage: React.FC<StudentProps> = ({
  students,
  selectedStudent,
}) => {
  const [studentsBelowAverage, setStudentsBelowAverage] = useState<string[]>(
    []
  );

  useEffect(() => {
    if (students.length > 0 && selectedStudent) {
      findStudentsBelowAverage();
    }
  }, [students, selectedStudent]);

  const findStudentsBelowAverage = () => {
    const specificStudent = students.find(
      (student) => student.name === selectedStudent
    );
    if (!specificStudent) return;

    const averageMarks =
      specificStudent.marks.reduce((sum, { mark }) => sum + mark, 0) /
      specificStudent.marks.length;

    const belowAverageStudents = students
      .filter(
        (student) =>
          student.name !== selectedStudent &&
          student.marks.every(({ mark }) => mark < averageMarks)
      )
      .map((student) => student.name);

    setStudentsBelowAverage(belowAverageStudents);
  };

  return (
    <div>
      <h2>Students Scoring Below {selectedStudent}</h2>
      {studentsBelowAverage.length > 0 ? (
        <ul>
          {studentsBelowAverage.map((studentName) => (
            <li key={studentName}>{studentName}</li>
          ))}
        </ul>
      ) : (
        <p>No students scored below average in all subjects.</p>
      )}
    </div>
  );
};

export const CountStudentsAboveMark = (
  students: Student[],
  selectedSubject: string,
  selectedCutoff: number | null
): JSX.Element => {
  const countAboveMark = (subject: string, cutoffMark: number): number => {
    let count = 0;

    students.forEach((student) => {
      student.marks.forEach((mark) => {
        if (mark.subject === subject && mark.mark > cutoffMark) {
          count++;
        }
      });
    });

    return count;
  };

  if (selectedSubject && selectedCutoff !== null) {
    const count = countAboveMark(selectedSubject, selectedCutoff);
    return (
      <p>
        {count} Students score above {selectedCutoff} in {selectedSubject}
      </p>
    );
  } else {
    return <p>Please select both a subject and a cutoff mark.</p>;
  }
};

export const SubjectPercentageAboveCertainMark: React.FC<StudentProps> = ({
  students,
  results,
}) => {
  const calculateSubjectPercentages = (): {
    subject: string;
    percentage: number;
  }[] => {
    if (students.length === 0 || results === undefined) return [];

    const subjectCount: Record<string, { total: number; aboveMark: number }> =
      {};

    students.forEach((student) => {
      student.marks.forEach(({ subject, mark }) => {
        if (!subjectCount[subject]) {
          subjectCount[subject] = { total: 0, aboveMark: 0 };
        }

        subjectCount[subject].total++;
        if (mark > results) {
          subjectCount[subject].aboveMark++;
        }
      });
    });
    const subjectPercentages = Object.entries(subjectCount).map(
      ([subject, count]) => ({
        subject,
        percentage: (count.aboveMark / count.total) * 100,
      })
    );

    return subjectPercentages;
  };

  const subjectPercentages = calculateSubjectPercentages();

  const highestPercentageSubject = subjectPercentages.reduce(
    (highest, current) =>
      current.percentage > highest.percentage ? current : highest,
    { subject: "", percentage: 0 }
  );

  return (
    <div>
      <h4>Subject with Highest Percentage Above {results} Mark:</h4>
      {highestPercentageSubject.subject ? (
        <p>
          {highestPercentageSubject.subject}:{" "}
          {highestPercentageSubject.percentage.toFixed(2)}%
        </p>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export const SubjectPercentageBelowCertainMark: React.FC<StudentProps> = ({
  students,
  results,
}) => {
  const calculateSubjectPercentages = (): {
    subject: string;
    percentage: number;
  }[] => {
    if (students.length === 0 || results === undefined) return [];

    const subjectCount: Record<string, { total: number; belowMark: number }> =
      {};

    students.forEach((student) => {
      student.marks.forEach(({ subject, mark }) => {
        if (!subjectCount[subject]) {
          subjectCount[subject] = { total: 0, belowMark: 0 };
        }
        subjectCount[subject].total++;
        if (mark < results) {
          subjectCount[subject].belowMark++;
        }
      });
    });
    const subjectPercentages = Object.entries(subjectCount).map(
      ([subject, count]) => ({
        subject,
        percentage: (count.belowMark / count.total) * 100,
      })
    );

    return subjectPercentages;
  };

  const subjectPercentages = calculateSubjectPercentages();
  const highestPercentageSubject = subjectPercentages.reduce(
    (highest, current) =>
      current.percentage > highest.percentage ? current : highest,
    { subject: "", percentage: 0 }
  );

  return (
    <div>
      <h4>Subject(s) with Highest Percentage Below {results} Mark:</h4>
      {highestPercentageSubject.subject ? (
        <p>
          {highestPercentageSubject.subject}:{" "}
          {highestPercentageSubject.percentage.toFixed(2)}%
        </p>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export const SubjectLowPercentageAboveCertainMark: React.FC<StudentProps> = ({
  students,
  results,
}) => {
  const calculateSubjectPercentages = (): {
    subject: string;
    percentage: number;
  }[] => {
    if (students.length === 0 || results === undefined) return [];

    const subjectCount: Record<string, { total: number; aboveMark: number }> =
      {};

    students.forEach((student) => {
      student.marks.forEach(({ subject, mark }) => {
        if (!subjectCount[subject]) {
          subjectCount[subject] = { total: 0, aboveMark: 0 };
        }

        subjectCount[subject].total++;
        if (mark > results) {
          subjectCount[subject].aboveMark++;
        }
      });
    });
    const subjectPercentages = Object.entries(subjectCount).map(
      ([subject, count]) => ({
        subject,
        percentage: (count.aboveMark / count.total) * 100,
      })
    );

    return subjectPercentages;
  };

  const subjectPercentages = calculateSubjectPercentages();
  const lowestPercentageSubject = subjectPercentages.reduce(
    (lowest, current) =>
      current.percentage < lowest.percentage ? current : lowest,
    { subject: "", percentage: 100 }
  );

  return (
    <div>
      <h4>Subject(s) with Lowest Percentage Above {results} Mark:</h4>
      {lowestPercentageSubject.subject ? (
        <p>
          {lowestPercentageSubject.subject}:{" "}
          {lowestPercentageSubject.percentage.toFixed(2)}%
        </p>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export const SubjectLowPercentageBelowCertainMark: React.FC<StudentProps> = ({
  students,
  results,
}) => {
  const calculateSubjectPercentages = (): {
    subject: string;
    percentage: number;
  }[] => {
    if (students.length === 0 || results === undefined) return [];

    const subjectCount: Record<string, { total: number; belowMark: number }> =
      {};

    students.forEach((student) => {
      student.marks.forEach(({ subject, mark }) => {
        if (!subjectCount[subject]) {
          subjectCount[subject] = { total: 0, belowMark: 0 };
        }

        subjectCount[subject].total++;
        if (mark < results) {
          subjectCount[subject].belowMark++;
        }
      });
    });

    const subjectPercentages = Object.entries(subjectCount).map(
      ([subject, count]) => ({
        subject,
        percentage: (count.belowMark / count.total) * 100,
      })
    );

    return subjectPercentages;
  };

  const subjectPercentages = calculateSubjectPercentages();
  const lowestPercentageSubject = subjectPercentages.reduce(
    (lowest, current) =>
      current.percentage < lowest.percentage ? current : lowest,
    { subject: "", percentage: 100 }
  );

  return (
    <div>
      <h4>Subject(s) with Lowest Percentage Below {results} Mark:</h4>
      {lowestPercentageSubject.subject ? (
        <p>
          {lowestPercentageSubject.subject}:{" "}
          {lowestPercentageSubject.percentage.toFixed(2)}%
        </p>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};
