
import classDetails from '../data/classdata.json'

//========================================================= class name & teacher name 1,2

export const getClassName = (key: 'name' | 'teacher') => {
  if (key === 'name')
    return `class name : ${classDetails.name}`;
  else
    return `Techer name : ${classDetails.teacherName}`;
};

//========================================================= student names & name with id 3,4

export const getStudentsName = (key: 'name' | 'id') => {
  let result: string[] = [];

  classDetails.students.map((student) => {
    if (key === "name")
      result.push(`${student.name}`)
    else result.push(`${student.name} - ${student.id}`)
  })
  return result.join(',');
};

//========================================================= subject &  mark of a specific student 5,6

export const getSubject = (selectedStudent: string | null, key: "subject" | "mark") => {
  const student = classDetails.students.find((s) => s.name === selectedStudent);
  if (!student)
    return "Student not found";
  let result: string[] = []
  student.marks.map((mark, index) => {
    if (key === "subject")
      result.push(`${mark.subject}`)
    else result.push(`${mark.subject} - ${mark.mark}`)
  })
  return result.join(',')
};

//========================================================= total and average mark of specific subject 7,8

export const getTotalandAverage = (selectedStudent: string | null, key: "total" | "average") => {

  const student = classDetails.students.find((s) => s.name === selectedStudent);
  if (!student) {
    return "Student not found";
  }
  const marks = student.marks.map((mark) => mark.mark);
  const totalMarks = marks.reduce((acc, curr) => acc + curr, 0);
  const average = totalMarks / marks.length;
  if (key === 'total')
    return `Total marks for ${selectedStudent}:${totalMarks} `
  return `Average marks for ${selectedStudent}: ${average.toFixed(2)} `;
};

//=========================================================== total and average mark of a specific student 9,10

export const getAverageandTotalSubject = (subject: string, key: 'total' | 'average') => {
  const totalMarks = classDetails.students.reduce((acc, student) => {
    const subjectMark = student.marks.find((mark) => mark.subject === subject);
    return subjectMark ? acc + subjectMark.mark : acc;
  }, 0);
  const Students = classDetails.students.filter((student) =>
    student.marks.some((mark) => mark.subject === subject)
  ).length;

  const average = totalMarks / Students;
  if (key === 'total')
    return `Average Marks for ${subject} : ${totalMarks} `
  return `Average marks for ${subject}: ${average.toFixed(2)} `;
};

//============================================================= high and low  mark studentt  in a specific subject 11,12

export const getStudentWithHighandLowMarkInSubject = (subject: string, key: "high" | "low") => {
  let highestStudent = null;
  let lowestStudent = null;
  let highestMark = -Infinity;
  let lowestMark = Infinity;

  classDetails.students.forEach((student) => {
    const subjectMark = student.marks.find((mark) => mark.subject === subject);
    if (subjectMark) {

      if (subjectMark.mark > highestMark) {
        highestMark = subjectMark.mark;
        highestStudent = student.name;
      }

      if (subjectMark.mark < lowestMark) {
        lowestMark = subjectMark.mark;
        lowestStudent = student.name;
      }
    }
  });
  if (key === 'high')
    return highestStudent
  return lowestStudent

};

//============================================================= high and low  total mark studentt  in a specific subject 13,14 & 25,26

export const getHighestAndLowestTotalMarks = (key: 'high' | 'low') => {
  let highestStudent = {
    name: "",
    totalMarks: -Infinity
  };
  let lowestStudent = {
    name: "",
    totalMarks: Infinity
  };

  classDetails.students.forEach(({ name, marks }) => {
    const totalMarks = marks.reduce((sum, { mark }) => sum + mark, 0);

    if (totalMarks > highestStudent.totalMarks) {
      highestStudent = { name, totalMarks };
    }

    if (totalMarks < lowestStudent.totalMarks) {
      lowestStudent = { name, totalMarks };
    }
  });


  return key === 'high'
    ? `Highest: ${highestStudent.name} with total marks: ${highestStudent.totalMarks} `
    : `Lowest: ${lowestStudent.name} with total marks: ${lowestStudent.totalMarks} `;
};

//============================================================= high and low  average mark subject 15,16 & 21,22

export const getHighestAndLowestAverageMarks = (key: "high" | "low" | "hightotal" | "lowtotal") => {

  const subjectTotals: { [key: string]: number[] } = {};

  classDetails.students.forEach(({ marks }) => {
    marks.forEach(({ subject, mark }) => {
      if (!subjectTotals[subject]) subjectTotals[subject] = [];
      subjectTotals[subject].push(mark)
    });
  });

  let highestSubject = { name: "", average: -Infinity };
  let lowestSubject = { name: "", average: Infinity };
  let highesttotal = { name: "", total: -Infinity };
  let lowsettotal = { name: "", total: Infinity }

  for (const [subject, marks] of Object.entries(subjectTotals)) {
    const total = marks.reduce((sum, mark) => sum + mark, 0)
    const average = total / marks.length;


    if (average > highestSubject.average) {
      highestSubject = { name: subject, average };
    }
    if (average < lowestSubject.average) {
      lowestSubject = { name: subject, average };
    }
    if (total > highesttotal.total) {
      highesttotal = { name: subject, total };
    }
    if (total < lowsettotal.total) {
      lowsettotal = { name: subject, total };
    }
  }
  if (key === 'high')
    return (highestSubject.name)
  else if (key === "low")
    return lowestSubject.name
  else if (key === "hightotal")
    return (highesttotal.name)
  else return lowsettotal.name


};
//=============================================================  overall avg and total 17,18

export const getOverallTotalandAverage = (key: 'total' | 'average') => {
  let totalMarks = 0;
  let totalSubjects = 0;

  classDetails.students.forEach(({ marks }) => {
    marks.forEach(({ mark }) => {
      totalMarks += mark;
      totalSubjects += 1;
    });
  });
  const averageMarks = totalSubjects > 0 ? totalMarks / totalSubjects : 0;
  if (key === 'total')
    return `Overall Total Marks: ${totalMarks} `
  return `Overall Average Marks: ${averageMarks.toFixed(2)} `
};

//=============================================================  average and total mark of each subject 19,20

export const getSubjectMarksTotalandAverage = (key: "total" | "average") => {

  const subjectTotals: { [key: string]: { total: number; count: number } } = {};
  classDetails.students.forEach((student) => {
    student.marks.forEach((mark) => {
      if (!subjectTotals[mark.subject]) {
        subjectTotals[mark.subject] = { total: 0, count: 0 };
      }
      subjectTotals[mark.subject].total += mark.mark;
      subjectTotals[mark.subject].count += 1;
    });
  });
  const result: string[] = []
  for (const subject in subjectTotals) {
    const { total, count } = subjectTotals[subject];
    const average = total / count;
    if (key === "total")
      result.push(` ${subject} - ${total}`)
    else result.push(` ${average.toFixed(2)}`)
  }
  return result.join(',')
};



//================================================================= student with highest and lowest average  mark 23,24

export const getHighestAndLowestAveragemarkStudent = (key: "high" | "low" | "totalhigh" | "totallow") => {
  const studentAverages = classDetails.students.map((student) => {
    const totalMarks = student.marks.reduce((sum, { mark }) => sum + mark, 0);
    const average = student.marks.length ? totalMarks / student.marks.length : 0;
    return { name: student.name, average };
  });

  const highestAverage = Math.max(...studentAverages.map(({ average }) => average));
  const lowestAverage = Math.min(...studentAverages.map(({ average }) => average));

  const topStudents = studentAverages.filter(({ average }) => average === highestAverage).map(({ name }) => name);
  const bottomStudents = studentAverages.filter(({ average }) => average === lowestAverage).map(({ name }) => name);
  if (key === "high")
    return `Highest average:${topStudents} -${highestAverage.toFixed(2)} `

  return ` Lowest average:${bottomStudents} -${lowestAverage} `
};

// ========================================================================33 & 34
export const getPercentageAboveBelowMark = (marks: number, key: "above" | "below") => {
  const subjectCounts: { [subject: string]: { above: number; below: number } } = {};
  classDetails.students.forEach(student => {
    student.marks.forEach(mark => {
      if (!subjectCounts[mark.subject]) {
        subjectCounts[mark.subject] = { above: 0, below: 0 };
      }

      if (mark.mark > marks) {
        subjectCounts[mark.subject].above++;
      } else if (mark.mark < marks) {
        subjectCounts[mark.subject].below++;
      }
    });
  });
  const totalStudents = classDetails.students.length;
  const results: string[] = [];
  for (const subject in subjectCounts) {
    const abovePercentage = (subjectCounts[subject].above / totalStudents) * 100;
    const belowPercentage = (subjectCounts[subject].below / totalStudents) * 100;
    if (key === "above")
      results.push(
        `${subject} - ${abovePercentage.toFixed(2)}% `)
    else results.push(`${subject} - ${belowPercentage.toFixed(2)} % `
    );
  }

  return results.join(',');
};


//================================================================= student with highest and lowest  percentage 35,36

export const getStudentsWithHighestAndLowestPercentage = (key: "high" | "low") => {
  const studentPercentages = classDetails.students.map(student => {

    const totalMarks = student.marks.reduce((sum, { mark }) => sum + mark, 0);
    const maxMarks = student.marks.length * 100;
    const percentage = maxMarks > 0 ? (totalMarks / maxMarks) * 100 : 0;

    return { name: student.name, percentage };
  });

  const highestPercentageStudent = studentPercentages.reduce((max, student) =>
    student.percentage > max.percentage ? student : max, studentPercentages[0]);

  const lowestPercentageStudent = studentPercentages.reduce((min, student) =>
    student.percentage < min.percentage ? student : min, studentPercentages[0]);
  if (key === "high")
    return `highest percentage: ${highestPercentageStudent.name} - ${highestPercentageStudent.percentage.toFixed(2)} % `
  else return `lowest percentage: ${lowestPercentageStudent.name} - ${lowestPercentageStudent.percentage.toFixed(2)} % `

};

//================================================================= subject with highest and lowest  percentage 37,38

const MAX_MARK = 100;
let highestSubject: string | null = null;
let lowestSubject: string | null = null;
let highestPercentage = -Infinity;
let lowestPercentage = Infinity;
let highestMark: number = -Infinity;
let lowestMark: number = Infinity;
export const getSubjetWithHighestAndLowestPercentage = (key: "high" | "low") => {
  const subjectPercentages: { [key: string]: number[] } = {};

  classDetails.students.forEach(student => {
    student.marks.forEach(mark => {
      const percentage = (mark.mark / MAX_MARK) * 100;

      if (!subjectPercentages[mark.subject]) {
        subjectPercentages[mark.subject] = [];
      }
      subjectPercentages[mark.subject].push(percentage);
    });
  });

  const subjectAverages: { [key: string]: number } = {};
  for (const subject in subjectPercentages) {
    const totalPercentage = subjectPercentages[subject].reduce((sum, percentage) => sum + percentage, 0);
    const averagePercentage = totalPercentage / subjectPercentages[subject].length;
    subjectAverages[subject] = averagePercentage;
  }

  for (const subject in subjectAverages) {
    const average = subjectAverages[subject];
    if (average > highestPercentage) {
      highestPercentage = average;
      highestSubject = subject;
    }
    if (average < lowestPercentage) {
      lowestPercentage = average;
      lowestSubject = subject;
    }
  }

  if (key === "high")
    return `highest percentage: ${highestSubject}(${highestPercentage.toFixed(2)} %)`;
  else
    return `Subject with lowest percentage: ${lowestSubject} (${lowestPercentage.toFixed(2)}%)`;
};

//==================================================================== highest and lowest percentage in subject 39 & 40

export const getStudentsHighLowMarksInSubject = (subject: string, key: "high" | "low") => {
  const highestStudent = getStudentWithHighandLowMarkInSubject(subject, "high");
  const lowestStudent = getStudentWithHighandLowMarkInSubject(subject, "low");
  const totalMarks = classDetails.students.reduce((acc, student) => {
    const subjectMark = student.marks.find((mark) => mark.subject === subject);
    return subjectMark ? acc + subjectMark.mark : acc;
  }, 0);

  const studentCount = classDetails.students.filter(student =>
    student.marks.some(mark => mark.subject === subject)
  ).length;
  const maxMarks = studentCount * 100;
  const averageMarks = maxMarks / studentCount;
  const highestMark =
    highestStudent ? classDetails.students.find(student => student.name === highestStudent)?.marks.find(mark => mark.subject === subject)?.mark : 0;
  const lowestMark =
    lowestStudent ? classDetails.students.find(student => student.name === lowestStudent)?.marks.find(mark => mark.subject === subject)?.mark : 0;

  const highestPercentage = highestMark ? (highestMark / 100) * 100 : 0;
  const lowestPercentage = lowestMark ? (lowestMark / 100) * 100 : 0;
  return {
    highest: highestStudent
      ? `${highestStudent} - ${highestPercentage.toFixed(2)}% `
      : `No student `,
    lowest: lowestStudent
      ? `${lowestStudent} -  ${lowestPercentage.toFixed(2)}% `
      : `No student `,
  };
};

//=================================================================== highest and lowesr percentage in students 41 & 42


export const getSubjectsWithHighestAndLowestPercentageInStudent = (studentName: string, key: "high" | "low") => {
  const student = classDetails.students.find(student => student.name === studentName);
  if (!student)
    return "not found"
  const subjectPercentages: { [subject: string]: number } = {};

  student.marks.forEach(mark => {
    const percentage = (mark.mark / MAX_MARK) * 100;
    subjectPercentages[mark.subject] = percentage;
  });

  for (const subject in subjectPercentages) {
    const percentage = subjectPercentages[subject];

    if (percentage > highestPercentage) {
      highestPercentage = percentage;
      highestSubject = subject;
    }
    if (percentage < lowestPercentage) {
      lowestPercentage = percentage;
      lowestSubject = subject;
    }
  }

  return (key === "high" ? `Highest percentage:  ${highestSubject} (${highestPercentage.toFixed(2)}%), ` :
    `Lowest percentage: ${lowestSubject} (${lowestPercentage.toFixed(2)}%).`);
};

//=======================================================================  43 & 44

export const getSubjectsAllStudentsScoredAboveBelowInmark = (threshold: number, condition: 'above' | 'below') => {
  const subjects: { [subject: string]: boolean } = {};
  classDetails.students.forEach(student => {
    student.marks.forEach(mark => {
      if (!subjects[mark.subject]) {
        subjects[mark.subject] = true;
      }
      if (condition === 'above' && mark.mark <= threshold) {
        subjects[mark.subject] = false;
      } else if (condition === 'below' && mark.mark >= threshold) {
        subjects[mark.subject] = false;
      }
    });
  });
  const result: string[] = [];
  for (const subject in subjects) {
    if (subjects[subject]) {
      result.push(subject);
    }
  }
  return result.length > 0 ? `${result.join(', ')} ` : `No subjects `;
};

//==================================================================== 45 & 46
export const getSubjectsAverageAboveBelowInmark = (threshold: number, condition: 'above' | 'below') => {
  const subjectTotals: { [subject: string]: { totalMarks: number; count: number } } = {};
  classDetails.students.forEach(student => {
    student.marks.forEach(mark => {
      if (!subjectTotals[mark.subject]) {
        subjectTotals[mark.subject] = { totalMarks: 0, count: 0 };
      }
      subjectTotals[mark.subject].totalMarks += mark.mark;
      subjectTotals[mark.subject].count++;
    });
  });
  const result: string[] = [];
  for (const subject in subjectTotals) {
    const average = subjectTotals[subject].totalMarks / subjectTotals[subject].count;

    if (condition === 'above' && average > threshold) {
      result.push(subject);
    } else if (condition === 'below' && average < threshold) {
      result.push(subject);
    }
  }
  return result.length > 0 ? ` ${result.join(', ')}` : `No subjects `;
};



//===================================================================== high and low score atleast one subject 47 & 48

export const getStudentHighandLowMarkAtleastone = (key: "high" | "low") => {
  const subjectScores: { [subject: string]: { highest: { name: string; mark: number }; lowest: { name: string; mark: number } } } = {};

  classDetails.students.forEach(student => {
    student.marks.forEach(mark => {
      const subject = mark.subject;
      if (!subjectScores[subject]) {
        subjectScores[subject] = {
          highest: { name: student.name, mark: mark.mark },
          lowest: { name: student.name, mark: mark.mark }
        };
      } else {
        if (mark.mark > subjectScores[subject].highest.mark) {
          subjectScores[subject].highest = { name: student.name, mark: mark.mark };
        }
        if (mark.mark < subjectScores[subject].lowest.mark) {
          subjectScores[subject].lowest = { name: student.name, mark: mark.mark };
        }
      }
    });
  });
  const results: string[] = [];
  for (const subject in subjectScores) {
    const { highest, lowest } = subjectScores[subject];
    if (key === "high")
      results.push(`${highest.name} (${highest.mark})`)
    else
      results.push(` ${lowest.name} (${lowest.mark})`);
  }

  return results.join(',');
};

// =============================================================== total and average mark of each student in each subject  49 & 50

export const getTotalandAvgOfEachSubject = (key: "total" | "average") => {
  const results: string[] = [];

  classDetails.students.forEach(student => {
    let totalMarks: { [subject: string]: number } = {};
    let subjectCounts: { [subject: string]: number } = {};
    student.marks.forEach(mark => {
      const subject = mark.subject;
      if (!totalMarks[subject]) {
        totalMarks[subject] = 0;
        subjectCounts[subject] = 0;
      }
      totalMarks[subject] += mark.mark;
      subjectCounts[subject]++;
    });
    const studentResult: string[] = [];
    for (const subject in totalMarks) {
      const total = totalMarks[subject];
      const average = total / subjectCounts[subject];
      if (key === "total") {
        studentResult.push(`${subject} -  ${total} `);
      } else {
        studentResult.push(`${subject} -  ${average.toFixed(2)} `);
      }
    }
    results.push(`Marks for ${student.name}: \n${studentResult.join(',')} `);
  });
  return results.join('&');
};
//=============================================================== stduents score highest and lowest  51 & 52

export const getStudnetHighandLowMark = (key: "high" | "low") => {
  const subjectResults: {
    [subject: string]: {
      highest: { name: string, mark: number } | null,
      lowest: { name: string, mark: number } | null
    }
  } = {};
  classDetails.students.forEach(student => {
    student.marks.forEach(mark => {
      const subject = mark.subject;


      if (!subjectResults[subject]) {
        subjectResults[subject] = {
          highest: { name: student.name, mark: mark.mark },
          lowest: { name: student.name, mark: mark.mark }
        };
      } else {

        if (mark.mark > subjectResults[subject].highest!.mark) {
          subjectResults[subject].highest = { name: student.name, mark: mark.mark };
        }

        if (mark.mark < subjectResults[subject].lowest!.mark) {
          subjectResults[subject].lowest = { name: student.name, mark: mark.mark };
        }
      }
    });
  });

  const result: string[] = [];
  for (const subject in subjectResults) {
    const highestStudent = subjectResults[subject].highest;
    const lowestStudent = subjectResults[subject].lowest;
    if (key === "high")
      result.push(` ${subject} - ${highestStudent!.name} (${highestStudent!.mark})`)
    else result.push(`${subject} - ${lowestStudent!.name} (${lowestStudent!.mark})`)


  }
  return result.join(',');
};

//============================================================  subject which score the highest and the lowest mark 53 & 54

export const getSubjectwithHighAndLowscore = (key: "high" | "low") => {
  let subjectsWithHighestMark: string[] = [];
  let subjectsWithLowestMark: string[] = [];
  classDetails.students.forEach(student => {
    student.marks.forEach(mark => {
      const subject = mark.subject;
      if (mark.mark > highestMark) {
        highestMark = mark.mark;
        subjectsWithHighestMark = [subject];
      } else if (mark.mark === highestMark) {
        subjectsWithHighestMark.push(subject);
      }
      if (mark.mark < lowestMark) {
        lowestMark = mark.mark;
        subjectsWithLowestMark = [subject];
      } else if (mark.mark === lowestMark) {
        subjectsWithLowestMark.push(subject);
      }
    });
  });
  if (key === "high") return `highest mark(${highestMark}):${subjectsWithHighestMark.join(', ')} `
  else return `lowest mark(${lowestMark}):${subjectsWithLowestMark.join(', ')} `
};


//==================================================== student who score above and below average 55 & 56

export const getStudentAboveBelowClassAverage = (key: "above" | "below") => {
  const classAverage = calculateClassAverage();

  let studentsAboveAverage: string[] = [];
  let studentsBelowAverage: string[] = [];
  classDetails.students.forEach(student => {
    let studentTotalMarks: number = 0;
    let studentTotalEntries: number = 0;

    student.marks.forEach(mark => {
      studentTotalMarks += mark.mark;
      studentTotalEntries++;
    });
    const studentAverage: number = studentTotalMarks / studentTotalEntries;
    if (studentAverage > classAverage && key === "above") {
      studentsAboveAverage.push(student.name);
    } else if (studentAverage < classAverage && key === "below") {
      studentsBelowAverage.push(student.name);
    }
  });
  if (key === "above") {
    return ` above class average (${classAverage.toFixed(2)}): ${studentsAboveAverage.join(', ')} `;
  } else {
    return ` below class average (${classAverage.toFixed(2)}): ${studentsBelowAverage.join(', ')} `;
  }
};
//================================= calculate the class average ==================================//


export const calculateClassAverage = (): number => {
  let totalMarks: number = 0;
  let totalEntries: number = 0;

  classDetails.students.forEach(student => {
    student.marks.forEach(mark => {
      totalMarks += mark.mark;
      totalEntries++
    });
  });
  const classAverage: number = totalMarks / totalEntries;
  return classAverage;
};



//=================================================== subject average above and below the class average 57 & 58

export const getSubjectAboveandBelowClassAverage = (key: "above" | "below") => {
  const classAverage = calculateClassAverage();
  const subjectTotals: { [subject: string]: number } = {};
  const subjectCounts: { [subject: string]: number } = {};
  let subjectsAboveAverage: string[] = [];
  let subjectsBelowAverage: string[] = [];

  classDetails.students.forEach(student => {
    let totalMarks: number = 0
    let totalEntries: number = 0
    student.marks.forEach(mark => {
      totalMarks += mark.mark;
      totalEntries++;

      if (!subjectTotals[mark.subject]) {
        subjectTotals[mark.subject] = 0;
        subjectCounts[mark.subject] = 0;
      }
      subjectTotals[mark.subject] += mark.mark;
      subjectCounts[mark.subject]++;
    });
  });

  for (const subject in subjectTotals) {
    const subjectAverage = subjectTotals[subject] / subjectCounts[subject];

    if (subjectAverage > classAverage) {
      subjectsAboveAverage.push(`${subject} (${subjectAverage.toFixed(2)})`);
    } else {
      subjectsBelowAverage.push(`${subject} (${subjectAverage.toFixed(2)})`);
    }
  }
  if (key === "above")
    return ` Above average: ${subjectsAboveAverage.join(', ')} `
  else return `Below average: ${subjectsBelowAverage.join(', ')} `;
};

//================================================================================ 59-62
export const getSubjectsWithHighestLowestPercentage = (threshold: number, key: "above" | "below" | "lowabove" | "lowbelow") => {
  const subjectPercentages: { [subject: string]: { above: number; below: number } } = {};
  const totalStudents = classDetails.students.length;
  classDetails.students.forEach(student => {
    student.marks.forEach(mark => {
      if (!subjectPercentages[mark.subject]) {
        subjectPercentages[mark.subject] = { above: 0, below: 0 };
      }

      if (mark.mark > threshold) {
        subjectPercentages[mark.subject].above++;
      } else if (mark.mark < threshold) {
        subjectPercentages[mark.subject].below++;
      }
    });
  });
  let highestAbove: { subject: string; percentage: number } | null = null;
  let lowestAbove: { subject: string; percentage: number } | null = null;
  let highestBelow: { subject: string; percentage: number } | null = null;
  let lowestBelow: { subject: string; percentage: number } | null = null;

  for (const subject in subjectPercentages) {
    const abovePercentage = (subjectPercentages[subject].above / totalStudents) * 100;
    const belowPercentage = (subjectPercentages[subject].below / totalStudents) * 100;
    if (!highestAbove || abovePercentage > highestAbove.percentage) {
      highestAbove = { subject, percentage: abovePercentage };
    }
    if (!lowestAbove || abovePercentage < lowestAbove.percentage) {
      lowestAbove = { subject, percentage: abovePercentage };
    }
    if (!highestBelow || belowPercentage > highestBelow.percentage) {
      highestBelow = { subject, percentage: belowPercentage };
    }
    if (!lowestBelow || belowPercentage < lowestBelow.percentage) {
      lowestBelow = { subject, percentage: belowPercentage };
    }
  }
  const results: string[] = []
  if (key === "above") results.push(` ${highestAbove?.subject} - ${highestAbove?.percentage.toFixed(2)} % `)
  else if (key === "below") results.push(`${highestBelow?.subject} - ${highestAbove?.percentage.toFixed(2)}% `)
  else if (key === "lowabove") results.push(`${lowestAbove?.subject} - ${lowestAbove?.percentage.toFixed(2)}%`)
  else results.push(`${lowestBelow?.subject}- ${lowestBelow?.percentage.toFixed(2)}%`)
  return results;
};


//=============================================================== percentage of students above the class average 63 & 64
const subjectTotals: { [subject: string]: { totalMarks: number; count: number } } = {};
export const getStudentPercentageByClassAverage = (key: "above" | "below") => {
  const subjectTotals: { [subject: string]: { totalMarks: number; count: number } } = {};
  const studentCount = classDetails.students.length;
  classDetails.students.forEach(student => {
    student.marks.forEach(mark => {
      if (!subjectTotals[mark.subject]) {
        subjectTotals[mark.subject] = { totalMarks: 0, count: 0 };
      }
      subjectTotals[mark.subject].totalMarks += mark.mark;
      subjectTotals[mark.subject].count++;
    });
  });
  const result: string[] = [];
  for (const subject in subjectTotals) {
    const totalMarks = subjectTotals[subject].totalMarks;
    const count = subjectTotals[subject].count;

    if (count > 0) {
      const average = totalMarks / count;
      let aboveCount = 0;
      let belowCount = 0;

      classDetails.students.forEach(student => {
        const subjectMark = student.marks.find(mark => mark.subject === subject);
        if (subjectMark) {
          if (subjectMark.mark > average) {
            aboveCount++;
          } else if (subjectMark.mark < average) {
            belowCount++;
          }
        }
      });
      const aboveAveragePercentage = (aboveCount / studentCount) * 100;
      const belowAveragePercentage = (belowCount / studentCount) * 100;
      if (key === "above") {
        result.push(`${subject} - ${aboveAveragePercentage.toFixed(2)} % `);
      } else {
        result.push(`${subject} - ${belowAveragePercentage.toFixed(2)} % `);
      }
    }
  }
  return result.join('\n');
};
//====================================================== percentage of student above or below class average in atleast one 65 & 66

export const getStudentPercentageByClassAvgAtleastone = (key: "above" | "below") => {

  const studentCount = classDetails.students.length;
  classDetails.students.forEach(student => {
    student.marks.forEach(mark => {
      if (!subjectTotals[mark.subject]) {
        subjectTotals[mark.subject] = { totalMarks: 0, count: 0 };
      }
      subjectTotals[mark.subject].totalMarks += mark.mark;
      subjectTotals[mark.subject].count++;
    });
  });

  const subjectAverages: { [subject: string]: number } = {};
  for (const subject in subjectTotals) {
    const totalMarks = subjectTotals[subject].totalMarks;
    const count = subjectTotals[subject].count;
    subjectAverages[subject] = totalMarks / count;
  }
  let studentsAboveAverage = 0;
  let studentsBelowAverage = 0;

  classDetails.students.forEach(student => {
    let aboveAverage = false;
    let belowAverage = false;

    student.marks.forEach(mark => {
      const average = subjectAverages[mark.subject];
      if (mark.mark > average) {
        aboveAverage = true;
      } else if (mark.mark < average) {
        belowAverage = true;
      }
    });

    if (aboveAverage) studentsAboveAverage++;
    if (belowAverage) studentsBelowAverage++;
  });
  let AveragePercentage: number = 0
  if (key === "above") {
    AveragePercentage = (studentsAboveAverage / studentCount) * 100;
  }
  else { AveragePercentage = (studentsBelowAverage / studentCount) * 100; }

  return `Percentage of students: ${AveragePercentage.toFixed(2)} % \n`

};

//============================================================== students above and below the class average  67 & 68

export const getStudentsAboveBelowClassAvgInallSub = (key: "above" | "below") => {
  const classAverage: number = calculateClassAverage();
  const studentsAboveAverage: string[] = [];
  const studentsBelowAverage: string[] = [];

  classDetails.students.forEach(student => {
    let studentTotalMarks: number = 0;
    let studentTotalEntries: number = student.marks.length;

    student.marks.forEach(mark => {
      studentTotalMarks += mark.mark;
    });

    const studentAverage: number = studentTotalMarks / studentTotalEntries;

    if (studentAverage > classAverage) {
      studentsAboveAverage.push(student.name);
    } else if (studentAverage < classAverage) {
      studentsBelowAverage.push(student.name);
    }
  });

  if (key === "above")
    return (`Above class average - ${studentsAboveAverage.join(', ')} `)
  else
    return (`Below class average - ${studentsBelowAverage.join(', ')} `)

};



// ================    Function to calculate average marks for each subject ================//

const calculateSubjectAverages = (): { [subject: string]: number } => {
  const subjectTotals: { [subject: string]: number } = {};
  const subjectCounts: { [subject: string]: number } = {};

  classDetails.students.forEach(student => {
    student.marks.forEach(mark => {
      if (!subjectTotals[mark.subject]) {
        subjectTotals[mark.subject] = 0;
        subjectCounts[mark.subject] = 0;
      }
      subjectTotals[mark.subject] += mark.mark;
      subjectCounts[mark.subject]++;
    });
  });

  const subjectAverages: { [subject: string]: number } = {};
  for (const subject in subjectTotals) {
    subjectAverages[subject] = subjectTotals[subject] / subjectCounts[subject];
  }

  return subjectAverages;
};

// ====================================================== students  above and below class average in majority of subjects 69 & 70

export const getStudentsAboveBelowMajorityClassAverage = (key: "above" | "below") => {
  const subjectAverages = calculateSubjectAverages();
  const subjectCount = Object.keys(subjectAverages).length;

  const studentsAboveMajority: string[] = [];
  const studentsBelowMajority: string[] = [];

  classDetails.students.forEach(student => {
    let aboveCount = 0;
    let belowCount = 0;

    student.marks.forEach(mark => {
      if (mark.subject in subjectAverages) {
        if (mark.mark > subjectAverages[mark.subject]) {
          aboveCount++;
        } else if (mark.mark < subjectAverages[mark.subject]) {
          belowCount++;
        }
      }
    });

    if (aboveCount > subjectCount / 2) {
      studentsAboveMajority.push(student.name);
    }
    if (belowCount > subjectCount / 2) {
      studentsBelowMajority.push(student.name);
    }
  });
  if (key === "above") return (` Above Majority: ${studentsAboveMajority} `)
  else return (`Below Majority: ${studentsBelowMajority} `)

}

//===================================================  students above and below class average in majority of subject 71 & 72



export const getSubjectsMajorityAboveBelowClassAverage = (key: "above" | "below") => {
  const subjectAverages = calculateSubjectAverages();
  const totalStudents = classDetails.students.length;
  const majorityThreshold = totalStudents / 2;

  const subjectsAboveMajority: string[] = [];
  const subjectsBelowMajority: string[] = [];

  for (const subject in subjectAverages) {
    let aboveCount = 0;
    let belowCount = 0;
    classDetails.students.forEach(student => {
      const studentMark = student.marks.find(mark => mark.subject === subject)?.mark;
      if (studentMark !== undefined) {
        if (studentMark > subjectAverages[subject]) {
          aboveCount++;
        } else if (studentMark < subjectAverages[subject]) {
          belowCount++;
        }
      }
    });
    if (aboveCount > majorityThreshold) {
      subjectsAboveMajority.push(subject);
    }
    if (belowCount > majorityThreshold) {
      subjectsBelowMajority.push(subject);
    }
  }
  if (key === "above")
    return `Above Average: ${subjectsAboveMajority}.join(', ')`
  else return `Below average: ${subjectsAboveMajority}.join(', ')`


};






//=================================================== percentage of stduent above and below the average 73 & 74

export const getPercentageAboveBelowStudentAverage = (studentName: string, key: "above" | "below") => {
  const selectedStudent = classDetails.students.find(student => student.name === studentName);

  if (!selectedStudent) {
    return `Student ${studentName} not found.`;
  }
  const totalStudents = classDetails.students.length;
  const subjects = selectedStudent.marks.map(mark => mark.subject);
  const studentsAboveSubjectPercentage: { [subject: string]: number } = {};
  const studentsBelowSubjectPercentage: { [subject: string]: number } = {};
  subjects.forEach(subject => {
    let aboveCount = 0;
    let belowCount = 0;

    const selectedStudentMark = selectedStudent.marks.find(mark => mark.subject === subject)?.mark;

    classDetails.students.forEach(student => {
      if (student.name !== selectedStudent.name) {
        const studentMark = student.marks.find(mark => mark.subject === subject)?.mark;

        if (studentMark !== undefined && selectedStudentMark !== undefined) {
          if (studentMark > selectedStudentMark) {
            aboveCount++;
          } else if (studentMark < selectedStudentMark) {
            belowCount++;
          }
        }
      }
    });

    studentsAboveSubjectPercentage[subject] = (aboveCount / (totalStudents - 1)) * 100;
    studentsBelowSubjectPercentage[subject] = (belowCount / (totalStudents - 1)) * 100;
  });
  const result: string[] = []
  subjects.forEach(subject => {

    if (key === "above")
      result.push(` ${subject} - ${studentsAboveSubjectPercentage[subject].toFixed(2)} % `)
    else
      result.push(`${subject} - ${studentsBelowSubjectPercentage[subject].toFixed(2)} % `)
  })
  return result.join(',')
};

//================================================= percentage of specific stduent in atleast one subject 75 &v76

export const getPercentageAboveBelowInAtLeastOneSubject = (studentName: string, key: "above" | "below") => {
  const selectedStudent = classDetails.students.find(student => student.name === studentName);

  if (!selectedStudent) {
    return `Student ${studentName} not found.`;
  }
  const totalStudents = classDetails.students.length;
  let studentsAboveAtLeastOne = 0;
  let studentsBelowAtLeastOne = 0;

  classDetails.students.forEach(student => {
    if (student.name !== selectedStudent.name) {
      let aboveInAtLeastOneSubject = false;
      let belowInAtLeastOneSubject = false;
      selectedStudent.marks.forEach(selectedMark => {
        const studentMark = student.marks.find(mark => mark.subject === selectedMark.subject)?.mark;

        if (studentMark !== undefined) {
          if (studentMark > selectedMark.mark) {
            aboveInAtLeastOneSubject = true;
          } else if (studentMark < selectedMark.mark) {
            belowInAtLeastOneSubject = true;
          }
        }
      });

      if (aboveInAtLeastOneSubject) {
        studentsAboveAtLeastOne++;
      }
      if (belowInAtLeastOneSubject) {
        studentsBelowAtLeastOne++;
      }
    }
  });

  const percentageAbove = (studentsAboveAtLeastOne / (totalStudents - 1)) * 100;
  const percentageBelow = (studentsBelowAtLeastOne / (totalStudents - 1)) * 100;

  if (key === "above") {
    return `Percentage above: ${percentageAbove.toFixed(2)} % `;
  } else {
    return `Percentage below: ${percentageBelow.toFixed(2)} % `;
  }
};


//=========================================================== 77 & 78

export const getStudentsAboveBelowInAllSubjects = (studentName: string, key: "above" | "below") => {
  const selectedStudent = classDetails.students.find(student => student.name === studentName);

  if (!selectedStudent) {
    return `Student ${studentName} not found.`;
  }
  const studentsAboveInAll: string[] = [];
  const studentsBelowInAll: string[] = [];
  classDetails.students.forEach(student => {
    if (student.name !== selectedStudent.name) {
      let isAboveInAllSubjects = true;
      let isBelowInAllSubjects = true;
      selectedStudent.marks.forEach(selectedMark => {
        const studentMark = student.marks.find(mark => mark.subject === selectedMark.subject)?.mark;

        if (studentMark !== undefined) {
          if (studentMark <= selectedMark.mark) {
            isAboveInAllSubjects = false;
          }
          if (studentMark >= selectedMark.mark) {
            isBelowInAllSubjects = false;
          }
        }
      });
      if (isAboveInAllSubjects) {
        studentsAboveInAll.push(student.name);
      }
      if (isBelowInAllSubjects) {
        studentsBelowInAll.push(student.name);
      }
    }
  });


  if (key === "above" && studentsAboveInAll.length > 0) {
    return `Above average: ${studentsAboveInAll.join(", ")} `;
  }
  else if (key === "below" && studentsBelowInAll.length > 0) {
    return `Below average: ${studentsBelowInAll.join(",")} `;
  }
  else return ("no students found ")

};


//===================================================  79 & 80

export const getSubjectsAboveBelowStudentAverage = (studentName: string, key: "above" | "below") => {
  const selectedStudent = classDetails.students.find(student => student.name === studentName);

  if (!selectedStudent) {
    return `Student ${studentName} not found.`;
  }

  const subjectAverages: { [subject: string]: number } = {};
  const subjectCounts: { [subject: string]: number } = {};
  classDetails.students.forEach(student => {
    student.marks.forEach(mark => {
      if (!subjectAverages[mark.subject]) {
        subjectAverages[mark.subject] = 0;
        subjectCounts[mark.subject] = 0;
      }
      subjectAverages[mark.subject] += mark.mark;
      subjectCounts[mark.subject]++;
    });
  });

  for (const subject in subjectAverages) {
    subjectAverages[subject] = subjectAverages[subject] / subjectCounts[subject];
  }

  const subjectsAbove: string[] = [];
  const subjectsBelow: string[] = [];

  selectedStudent.marks.forEach(mark => {
    const classAverage = subjectAverages[mark.subject];

    if (classAverage > mark.mark) {
      subjectsAbove.push(mark.subject);
    } else if (classAverage < mark.mark) {
      subjectsBelow.push(mark.subject);
    }
  });

  if (key === "above" && subjectsAbove.length > 0) {
    return `Above average: ${subjectsAbove.join(", ")} `;
  } else if (key === "below" && subjectsBelow.length > 0) {
    return `Below average: ${subjectsBelow.join(",")} `;
  }
  else return ("no stduents found")
};
//====================================================== 81 - 84

export const getSubjectsWithHighestLowestAboveBelowStudentAverage = (studentName: string, key: "highabove" | "highbelow" | "lowabove" | "lowbelow") => {
  const selectedStudent = classDetails.students.find(student => student.name === studentName);
  if (!selectedStudent) {
    return `Student ${studentName} not found.`;
  }
  const subjectAverages = calculateSubjectAverages();
  const aboveCount: { [subject: string]: number } = {};
  const belowCount: { [subject: string]: number } = {};
  classDetails.students.forEach(student => {
    if (student.name !== selectedStudent.name) {
      student.marks.forEach(mark => {
        const selectedStudentMark = selectedStudent.marks.find(m => m.subject === mark.subject)?.mark;
        if (selectedStudentMark !== undefined) {
          if (mark.mark > selectedStudentMark) {
            aboveCount[mark.subject] = (aboveCount[mark.subject] || 0) + 1;
          } else if (mark.mark < selectedStudentMark) {
            belowCount[mark.subject] = (belowCount[mark.subject] || 0) + 1;
          }
        }
      });
    }
  });
  const totalStudents = classDetails.students.length;
  const subjectPercentages: { [subject: string]: { above: number, below: number } } = {};
  Object.keys(subjectAverages).forEach(subject => {
    subjectPercentages[subject] = {
      above: (aboveCount[subject] || 0) / (totalStudents - 1) * 100,
      below: (belowCount[subject] || 0) / (totalStudents - 1) * 100,
    };
  });

  let highestAbove = { subject: '', percentage: -1 };
  let lowestAbove = { subject: '', percentage: 101 };
  let highestBelow = { subject: '', percentage: -1 };
  let lowestBelow = { subject: '', percentage: 101 };
  for (const subject in subjectPercentages) {
    const { above, below } = subjectPercentages[subject];

    if (above > highestAbove.percentage) {
      highestAbove = { subject, percentage: above };
    }
    if (above < lowestAbove.percentage) {
      lowestAbove = { subject, percentage: above };
    }

    if (below > highestBelow.percentage) {
      highestBelow = { subject, percentage: below };
    }
    if (below < lowestBelow.percentage) {
      lowestBelow = { subject, percentage: below };
    }
  }
  if (key === "highabove") {
    return `${highestAbove.subject} - ${highestAbove.percentage.toFixed(2)} % above`;
  } else if (key === "highbelow") {
    return `${lowestAbove.subject} - ${lowestAbove.percentage.toFixed(2)} % above`;
  } else if (key === "lowabove") {
    return `${highestBelow.subject} - ${highestBelow.percentage.toFixed(2)} % below`;
  } else {
    return `${lowestBelow.subject} - ${lowestBelow.percentage.toFixed(2)} % below`;
  }
};

// =======================================================  85 & 86

export const getPercentageAboveBelowClassAverage = (key: "above" | "below") => {
  const totalStudents = classDetails.students.length;
  const subjectAverages = calculateSubjectAverages();
  const studentsAbovePercentage: { [subject: string]: number } = {};
  const studentsBelowPercentage: { [subject: string]: number } = {};
  Object.keys(subjectAverages).forEach(subject => {
    let aboveCount = 0;
    let belowCount = 0;
    classDetails.students.forEach(student => {
      const studentMark = student.marks.find(mark => mark.subject === subject)?.mark;

      if (studentMark !== undefined) {
        if (studentMark > subjectAverages[subject]) {
          aboveCount++;
        } else if (studentMark < subjectAverages[subject]) {
          belowCount++;
        }
      }
    });
    studentsAbovePercentage[subject] = (aboveCount / totalStudents) * 100;
    studentsBelowPercentage[subject] = (belowCount / totalStudents) * 100;
  });
  const resuslt: string[] = []

  Object.keys(subjectAverages).forEach(subject => {
    if (key === "above")
      resuslt.push(` ${subject} - ${studentsAbovePercentage[subject].toFixed(2)} % `)
    else resuslt.push(`${subject} - ${studentsBelowPercentage[subject].toFixed(2)} % `)
  });
  return resuslt.join(',')
};

//====================================================== 87 & 88

export const getPercentageAboveBelowClassAverageatleastOne = (key: "above" | "below") => {
  const subjectAverages = calculateSubjectAverages();
  let studentsAbove = 0;
  let studentsBelow = 0;
  classDetails.students.forEach(student => {
    let aboveAverage = false;
    let belowAverage = false;

    student.marks.forEach(mark => {
      const subjectAverage = subjectAverages[mark.subject];

      if (mark.mark > subjectAverage) {
        aboveAverage = true;
      }
      if (mark.mark < subjectAverage) {
        belowAverage = true;
      }
    });
    if (aboveAverage) studentsAbove++;
    if (belowAverage) studentsBelow++;
  });
  const totalStudents = classDetails.students.length;
  const percentageAbove = (studentsAbove / totalStudents) * 100;
  const percentageBelow = (studentsBelow / totalStudents) * 100;
  if (key === "above")
    return (`Above: ${percentageAbove.toFixed(2)} % `)
  else return (`Below: ${percentageBelow.toFixed(2)} % `)
};

//================================================================ 91 & 92

export const getStudentsAboveBelowMajorityClassAverageinSubject = (key: "above" | "below") => {
  const subjectAverages = calculateSubjectAverages();
  const subjectCount = Object.keys(subjectAverages).length;

  const studentsAboveMajority: string[] = [];
  const studentsBelowMajority: string[] = [];

  classDetails.students.forEach(student => {
    let aboveCount = 0;
    let belowCount = 0;
    student.marks.forEach(mark => {
      const subjectAverage = subjectAverages[mark.subject];
      if (mark.mark > subjectAverage) {
        aboveCount++;
      } else if (mark.mark < subjectAverage) {
        belowCount++;
      }
    });
    if (aboveCount > subjectCount / 2) {
      studentsAboveMajority.push(student.name);
    }
    if (belowCount > subjectCount / 2) {
      studentsBelowMajority.push(student.name);
    }
  });
  if (key === "above") {
    return `Above Majority: ${studentsAboveMajority.length > 0 ? studentsAboveMajority.join(", ") : "No students"} `;
  } else {
    return `Below Majority: ${studentsBelowMajority.length > 0 ? studentsBelowMajority.join(", ") : "No students"} `;
  }
};


//=======================================================  95 & 96

export const getStudentsAboveBelowMajoritySpecificStudent = (studentName: string, key: "above" | "below") => {
  const selectedStudent = classDetails.students.find(student => student.name === studentName);

  if (!selectedStudent) {
    return `Student ${studentName} not found.`;
  }
  const selectedStudentMarks: { [subject: string]: number } = {};
  selectedStudent.marks.forEach(mark => {
    selectedStudentMarks[mark.subject] = mark.mark;
  });

  const subjectCount = selectedStudent.marks.length;
  const studentsAboveMajority: string[] = [];
  const studentsBelowMajority: string[] = [];

  classDetails.students.forEach(student => {
    if (student.name !== studentName) {
      let aboveCount = 0;
      let belowCount = 0;

      student.marks.forEach(mark => {
        const studentAverage = selectedStudentMarks[mark.subject];

        if (studentAverage !== undefined) {
          if (mark.mark > studentAverage) {
            aboveCount++;
          } else if (mark.mark < studentAverage) {
            belowCount++;
          }
        }
      });
      if (aboveCount > subjectCount / 2) {
        studentsAboveMajority.push(student.name);
      }
      if (belowCount > subjectCount / 2) {
        studentsBelowMajority.push(student.name);
      }
    }
  });

  if (key === "above") {
    return `Above Majority: ${studentsAboveMajority.length > 0 ? studentsAboveMajority.join(", ") : "No students"} `;
  } else {
    return `Below Majority: ${studentsBelowMajority.length > 0 ? studentsBelowMajority.join(", ") : "No students"} `;
  }
};

//============================================================================== 99 & 100
export const getSubjectsHighestPercentageAboveBelowStudentAverage = (studentName: string, key: "above" | "below") => {
  const selectedStudent = classDetails.students.find(student => student.name === studentName);
  if (!selectedStudent) {
    return `Student ${studentName} not found.`;
  }
  const subjectAverages = calculateSubjectAverages();
  const subjectPercentages: { [subject: string]: { above: number; below: number } } = {};
  const totalStudents = classDetails.students.length;
  selectedStudent.marks.forEach(mark => {
    const subjectAverage = subjectAverages[mark.subject];

    if (!subjectPercentages[mark.subject]) {
      subjectPercentages[mark.subject] = { above: 0, below: 0 };
    }

    classDetails.students.forEach(student => {
      const studentMark = student.marks.find(m => m.subject === mark.subject);
      if (studentMark) {
        if (studentMark.mark > subjectAverage) {
          subjectPercentages[mark.subject].above++;
        } else if (studentMark.mark < subjectAverage) {
          subjectPercentages[mark.subject].below++;
        }
      }
    });
    subjectPercentages[mark.subject].above = (subjectPercentages[mark.subject].above / totalStudents) * 100;
    subjectPercentages[mark.subject].below = (subjectPercentages[mark.subject].below / totalStudents) * 100;
  });
  let highestAbove = { subject: '', percentage: -1 };
  let highestBelow = { subject: '', percentage: -1 };
  for (const subject in subjectPercentages) {
    const { above, below } = subjectPercentages[subject];
    if (above > highestAbove.percentage) {
      highestAbove = { subject, percentage: above };
    }
    if (below > highestBelow.percentage) {
      highestBelow = { subject, percentage: below };
    }
  }

  if (key === "above") {
    return highestAbove.percentage >= 0
      ? ` ${highestAbove.subject} - ${highestAbove.percentage.toFixed(2)} % `
      : "No subject ";
  } else {
    return highestBelow.percentage >= 0
      ? ` ${highestBelow.subject} - ${highestBelow.percentage.toFixed(2)} % `
      : "No subject .";
  }
};
