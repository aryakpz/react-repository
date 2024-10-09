import TopScorerstudent from "../src/component/studentdetails/topstudent";
import LowScorerstudent from "../src/component/studentdetails/loweststudent";
import HighestAverageDisplay from "../src/component/studentdetails/high_average_sub";
import LowestAverageDisplay from "../src/component/studentdetails/low_avg_sub";
import Dispoverall from "../src/component/studentdetails/overallavg";
import Displayoverallmark from "../src/component/studentdetails/overallmark";
import DisplayAvgAllSub from "../src/component/studentdetails/DisplayAvgAllSub";
import Displaytotalallsub from "../src/component/studentdetails/Dispaytotalallsub";
import Highsubjecttotal from "../src/component/studentdetails/highsubjectmrk";
import Lowsubjecttotal from "../src/component/studentdetails/lowsubjectmark";
import Studenthighavg from "../src/component/studentdetails/StuHighAvg";
import Studentlowavg from "../src/component/studentdetails/StuLowAvg";
import HighestPercentage from "../src/component/studentdetails/high_per_mark";
import LowestPercentage from "../src/component/studentdetails/low_per_mark";
import HighestSubjectPercentage from "../src/component/studentdetails/subject_high_per";
import LowestSubjectPercentage from "../src/component/studentdetails/subject_low_per";
import Highsubjectmark from "../src/component/studentdetails/subject_highmark";
import Lowsubjectmark from "../src/component/studentdetails/subejct_lowmark";
import ShowEachAvg from "../src/component/studentdetails/showeachavg";
import ShowEachResult from "../src/component/studentdetails/ShowEach";
import BelowClassAverage from "../src/component/studentdetails/showbelowavgclass";
import ShowAboveAvgClass from "../src/component/studentdetails/Showaboveavgclass";
import AboveclassMajority from "../src/component/studentdetails/ShowAbovClass";
import BelowClassMajority from "../src/component/studentdetails/ShowBelowClass";
import HighEachSubject from "../src/component/studentdetails/HighEachSubject";
import LowEachSubject from "../src/component/studentdetails/LowEachsubject";
import Studentaboveavg from "../src/component/studentdetails/Studentaboveavg";
import Studentbelowavg from "../src/component/studentdetails/Studentbelowavg";
import SubjectAboveClassAvg from "../src/component/studentdetails/SubjectAboveClassAvg";
import SubjectBelowClassAvg from "../src/component/studentdetails/SubjectBelowClassAvg";
import PercentageAboveEachSubject from "../src/component/studentdetails/PercentageAboveEachSubject";
import PercentageBelowEachSubject from "../src/component/studentdetails/PercentageBelowEachSubject";
import AboveAtleastOne from "../src/component/studentdetails/Aboveatleastone";
import BelowAtleastOne from "../src/component/studentdetails/Belowatleastone";
import React, { useState, useEffect } from "react";
import TeacherDisplay from "../src/component/studentdetails/Teacher";
import StudentDisplay from "../src/component/studentdetails/display";
import ShowStudents from "../src/component/studentdetails/showname";
import StudentmarkDisplay from "../src/component/studentdetails/displaymark";
import StudentSelection from "../src/component/studentdetails/studentselection";
import "./details.css";
import StudenthighTotal from "../src/component/studentdetails/stuhightotal";
import SubjectAboveMajority from "../src/component/studentdetails/Subjectbelowmajority";
import SubjectBelowMajority from "../src/component/studentdetails/Subjectabovemajority";
import PercentageAboveAvg from "../src/component/studentdetails/PercentageAboveAvg";
import PercentageBelowAvg from "../src/component/studentdetails/PercentageBelowAvg";
import PercentageAboveAverageInSubject from "../src/component/studentdetails/PercentageAboveAtleastone";
import PercentageBelowAverageInSubject from "../src/component/studentdetails/PercentageBelowatleastone";
import AboveAvgAllSub from "../src/component/studentdetails/Aboveavgall";
import BelowAvgAllSub from "../src/component/studentdetails/Belowavgall";
import AboveMajority from "../src/component/studentdetails/Abovemajority";
import BelowMajority from "../src/component/studentdetails/BelowMajority";
import AboveSubjectavg from "../src/component/studentdetails/AboveSubjectallavg";
import BelowSubjectavg from "../src/component/studentdetails/BelowSubjectallavg";
import CLassnameDisplay from "../src/component/studentdetails/classname";
import StudentAverage from "../src/component/studentdetails/avgmark";
import Studenttotal from "../src/component/studentdetails/totalmark";
import SubjectSelection from "../src/component/studentdetails/selectsubject";
import SubAverageMarks from "../src/component/studentdetails/Subjectavgmark";
import SubTotalMarks from "../src/component/studentdetails/Subjectotalmark";
import TopScorerDisplay from "../src/component/studentdetails/topscore";
import LowScorerDisplay from "../src/component/studentdetails/lowscore";
import Toppercentagestudent from "../src/component/studentdetails/toppercentage";
import LowestPercentageStudent from "../src/component/studentdetails/lowpercentage";
import StudentPercentageHigh from "../src/component/studentdetails/StudentSubjecthigh";
import StudentPercentageLow from "../src/component/studentdetails/StudentSubejctlow";
import StuHighAtleastOne from "../src/component/studentdetails/stuhighatleastone";
import StuLowAtlestOne from "../src/component/studentdetails/stdlowatleastone";
import LowestPercentageAboveAverage from "../src/component/studentdetails/AboveLowScore";
import LowestPercentageBelowAverage from "../src/component/studentdetails/BelowLowScore";
import SubjectsAboveAverage from "../src/component/studentdetails/AboveSubjectavg";
import SubjectsBelowAverage from "../src/component/studentdetails/Belowsubjectavg";

type Mark = {
  subject: string;
  mark: number;
};
type ClassData = {
  name: string;
  teacherName: string;
  students: {
    name: string;
    id: number;
    marks: Mark[];
  }[];
};

type Question = {
  question: string;
  answer: JSX.Element | string;
};

const Details: React.FC = () => {
  const [classObj, setClassObj] = useState<ClassData | null>(null);
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedMarks, setSelectedMarks] = useState<
    { subject: string; mark: number }[]
  >([]);
  const [results, setResults] = useState<any | null>(null);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/classdata.json");
        const data = await response.json();
        setClassObj(data);
      } catch (error) {
        console.error("Error fetching class data:", error);
      }
    };
    fetchData();
  }, []);

  const handleStudentChange = (studentName: string) => {
    if (classObj) {
      const student = classObj.students.find((stu) => stu.name === studentName);
      if (student) {
        setSelectedStudent(studentName);
        setSelectedMarks(student.marks);
      }
    }
  };

  const handleSubjectChange = (subject: string) => {
    setResults(null);
    setSelectedSubject(subject);
  };

  const questions: Question[] = [
    {
      question: "What is the name of the class?",
      answer: classObj ? (
        <CLassnameDisplay className={classObj.name} />
      ) : (
        "Loading..."
      ),
    },
    {
      question: "Who is the teacher of the class?",
      answer: classObj ? (
        <TeacherDisplay teacherName={classObj.teacherName} />
      ) : (
        "Loading..."
      ),
    },
    {
      question: "What are the names of all the students?",
      answer: classObj ? (
        <ShowStudents students={classObj.students} />
      ) : (
        "Loading..."
      ),
    },
    {
      question: "Display subject names for a specific student",
      answer: classObj ? (
        <>
          <StudentSelection
            students={classObj.students.map((student) => ({
              ...student,
              id: student.id.toString(),
            }))}
            onSelectStudent={(name) => {
              setSelectedStudent(null);
              handleStudentChange(name);
            }}
            label="Select a student:"
          />
          {selectedStudent ? (
            <StudentDisplay
              selectedStudent={selectedStudent}
              selectedSubjects={selectedMarks}
            />
          ) : (
            ""
          )}
        </>
      ) : (
        "Loading..."
      ),
    },
    {
      question: "Display marks of a specific student in all subjects",
      answer: classObj ? (
        <>
          <StudentSelection
            students={classObj.students.map((student) => ({
              ...student,
              id: student.id.toString(),
            }))}
            onSelectStudent={(name) => {
              setSelectedStudent(null);
              handleStudentChange(name);
            }}
            label="Select a student:"
          />
          {selectedStudent ? (
            <StudentmarkDisplay
              selectedStudent={selectedStudent}
              selectedSubjects={selectedMarks}
            />
          ) : (
            ""
          )}
        </>
      ) : (
        "Loading..."
      ),
    },
    {
      question: "Display the total mark of specific student",
      answer: classObj ? (
        <>
          <StudentSelection
            students={classObj.students.map((student) => ({
              ...student,
              id: student.id.toString(),
            }))}
            onSelectStudent={(name) => {
              setSelectedStudent(null);
              handleStudentChange(name);
            }}
            label="Select a student:"
          />
          {selectedStudent ? (
            <Studenttotal
              students={classObj.students}
              selectedStudent={selectedStudent}
            />
          ) : (
            ""
          )}
        </>
      ) : (
        "Loading..."
      ),
    },
    {
      question: "Display the average marks of students in a specific subject",
      answer: classObj ? (
        <>
          <SubjectSelection
            subjects={Array.from(
              new Set(
                classObj.students.flatMap((student) =>
                  student.marks.map((mark) => mark.subject)
                )
              )
            )}
            onSelectSubject={(subject) => {
              setSelectedSubject(null);
              handleSubjectChange(subject);
            }}
            label="Select a subject:"
          />
          {selectedSubject ? (
            <SubAverageMarks
              students={classObj.students}
              subject={selectedSubject}
            />
          ) : (
            ""
          )}
        </>
      ) : (
        "Loading..."
      ),
    },
    {
      question: "Display the total marks of students in a specific subject",
      answer: classObj ? (
        <>
          <SubjectSelection
            subjects={Array.from(
              new Set(
                classObj.students.flatMap((student) =>
                  student.marks.map((mark) => mark.subject)
                )
              )
            )}
            onSelectSubject={(name) => {
              setSelectedSubject(null);
              handleSubjectChange(name);
            }}
            label="Select a subject:"
          />
          {selectedSubject ? (
            <SubTotalMarks
              students={classObj.students}
              subject={selectedSubject}
            />
          ) : (
            ""
          )}
        </>
      ) : (
        "Loading..."
      ),
    },
    {
      question: "student with the highest marks in a specific subject",
      answer: classObj ? (
        <>
          <SubjectSelection
            subjects={Array.from(
              new Set(
                classObj.students.flatMap((student) =>
                  student.marks.map((mark) => mark.subject)
                )
              )
            )}
            onSelectSubject={(subject) => {
              setSelectedSubject(null);
              handleSubjectChange(subject);
            }}
            label="Select a subject:"
          />
          {selectedSubject ? (
            <TopScorerDisplay
              students={classObj.students}
              subject={selectedSubject}
            />
          ) : (
            ""
          )}
        </>
      ) : (
        "Loading..."
      ),
    },
    {
      question: "student with the lowest marks in a specific subject",
      answer: classObj ? (
        <>
          <SubjectSelection
            subjects={Array.from(
              new Set(
                classObj.students.flatMap((student) =>
                  student.marks.map((mark) => mark.subject)
                )
              )
            )}
            onSelectSubject={(subject) => {
              setSelectedSubject(null);
              handleSubjectChange(subject);
            }}
            label="Select a subject:"
          />
          {selectedSubject ? (
            <LowScorerDisplay
              students={classObj.students}
              subject={selectedSubject}
            />
          ) : (
            ""
          )}
        </>
      ) : (
        "Loading..."
      ),
    },
    {
      question: "Student who score the highest mark in the class",
      answer: classObj ? <TopScorerstudent students={classObj.students} /> : "",
    },
    {
      question: "Student who score the lowest mark in the class",
      answer: classObj ? <LowScorerstudent students={classObj.students} /> : "",
    },
    {
      question: "Student who score the highest average mark in the class",
      answer: classObj ? (
        <HighestAverageDisplay students={classObj.students} />
      ) : (
        ""
      ),
    },
    {
      question: "Student who score the lowest average mark in the class",
      answer: classObj ? (
        <LowestAverageDisplay students={classObj.students} />
      ) : (
        ""
      ),
    },
    {
      question: "Display overall average mark in the class",
      answer: classObj ? <Dispoverall students={classObj.students} /> : "",
    },
    {
      question: "Display overall mark in the class",
      answer: classObj ? (
        <Displayoverallmark students={classObj.students} />
      ) : (
        ""
      ),
    },
    {
      question: "Display the average mark scored in each subject",
      answer: classObj ? <DisplayAvgAllSub students={classObj.students} /> : "",
    },
    {
      question: "Display the total mark scored in each subject",
      answer: classObj ? (
        <Displaytotalallsub students={classObj.students} />
      ) : (
        ""
      ),
    },
    {
      question:
        "Display the subject which score the highest total mark in the class ",
      answer: classObj ? <Highsubjecttotal students={classObj.students} /> : "",
    },
    {
      question:
        "Display the subject which score the lowest total mark in the class ",
      answer: classObj ? <Lowsubjecttotal students={classObj.students} /> : "",
    },
    {
      question:
        "Display student who  score the highest average mark in the class ",
      answer: classObj ? <Studenthighavg students={classObj.students} /> : "",
    },
    {
      question:
        "Display student who  score the lowest average mark in the class ",
      answer: classObj ? <Studentlowavg students={classObj.students} /> : "",
    },
    {
      question:
        "Display student who  score the highest total mark in the class ",
      answer: classObj ? <StudenthighTotal students={classObj.students} /> : "",
    },
    {
      question:
        "Display student who  score the lowest total mark in the class ",
      answer: classObj ? <Studentlowavg students={classObj.students} /> : "",
    },
    //27-34

    {
      question:
        "Display student who  score the highest percentage of mark in the class ",
      answer: classObj ? (
        <HighestPercentage students={classObj.students} />
      ) : (
        ""
      ),
    },
    {
      question:
        "Display student who  score the lowest percentage of mark in the class ",
      answer: classObj ? <LowestPercentage students={classObj.students} /> : "",
    },
    {
      question: "Display subject which score the highest percentage of mark  ",
      answer: classObj ? (
        <HighestSubjectPercentage students={classObj.students} />
      ) : (
        ""
      ),
    },
    {
      question: "Display subject which score the lowest percentage of mark ",
      answer: classObj ? (
        <LowestSubjectPercentage students={classObj.students} />
      ) : (
        ""
      ),
    },
    {
      question:
        "Student with the highest percentage of marks in a specific subject",
      answer: classObj ? (
        <>
          <SubjectSelection
            subjects={Array.from(
              new Set(
                classObj.students.flatMap((student) =>
                  student.marks.map((mark) => mark.subject)
                )
              )
            )}
            onSelectSubject={(subject) => {
              setSelectedSubject(null);
              handleSubjectChange(subject);
            }}
            label="Select a subject:"
          />
          {selectedSubject ? (
            <Toppercentagestudent
              students={classObj.students}
              subject={selectedSubject}
            />
          ) : (
            ""
          )}
        </>
      ) : (
        "Loading..."
      ),
    },
    {
      question:
        "Student with the  lowest percentage of marks in a specific subject",
      answer: classObj ? (
        <>
          <SubjectSelection
            subjects={Array.from(
              new Set(
                classObj.students.flatMap((student) =>
                  student.marks.map((mark) => mark.subject)
                )
              )
            )}
            onSelectSubject={(subject) => {
              setSelectedSubject(null);
              handleSubjectChange(subject);
            }}
            label="Select a subject:"
          />
          {selectedSubject ? (
            <LowestPercentageStudent
              students={classObj.students}
              subject={selectedSubject}
            />
          ) : (
            ""
          )}
        </>
      ) : (
        "Loading..."
      ),
    },
    {
      question:
        "Subject with the highest percentage of marks for a specific student.",
      answer: classObj ? (
        <>
          <StudentSelection
            students={classObj.students.map((student) => ({
              ...student,
              id: student.id.toString(),
            }))}
            onSelectStudent={(name) => {
              setSelectedStudent(null);
              handleStudentChange(name);
            }}
            label="Select a student:"
          />
          {selectedStudent ? (
            <StudentPercentageHigh
              students={classObj.students}
              selectedStudent={selectedStudent}
            />
          ) : (
            ""
          )}
        </>
      ) : (
        "Loading..."
      ),
    },
    {
      question:
        "Subject with the lowest percentage of marks for a specific student.",
      answer: classObj ? (
        <>
          <StudentSelection
            students={classObj.students.map((student) => ({
              ...student,
              id: student.id.toString(),
            }))}
            onSelectStudent={(name) => {
              setSelectedStudent(null);
              handleStudentChange(name);
            }}
            label="Select a student:"
          />
          {selectedStudent ? (
            <StudentPercentageLow
              students={classObj.students}
              selectedStudent={selectedStudent}
            />
          ) : (
            ""
          )}
        </>
      ) : (
        "Loading..."
      ),
    },
    //43-46
    {
      question:
        "Dispaly student who scored the highest marks in at least one subject.",
      answer: classObj ? (
        <StuHighAtleastOne students={classObj.students} />
      ) : (
        ""
      ),
    },
    {
      question:
        "Dispaly student who scored the lowest marks in at least one subject.",
      answer: classObj ? <StuLowAtlestOne students={classObj.students} /> : "",
    },
    {
      question: "Display total mark of each student in each subject ",
      answer: classObj ? <ShowEachResult students={classObj.students} /> : "",
    },
    {
      question: "Display average mark of each student in each subject ",
      answer: classObj ? <ShowEachAvg students={classObj.students} /> : "",
    },
    {
      question: "Display total mark of each student in each subject ",
      answer: classObj ? <ShowEachResult students={classObj.students} /> : "",
    },
    {
      question: "Display the highest mark scorers in each subject ",
      answer: classObj ? <HighEachSubject students={classObj.students} /> : "",
    },
    {
      question: "Display the lowest mark scorers in each subject ",
      answer: classObj ? <LowEachSubject students={classObj.students} /> : "",
    },
    {
      question: "Subject which the highest marks were scored ",
      answer: classObj ? <Highsubjectmark students={classObj.students} /> : "",
    },
    {
      question: "Subject which the highest marks were scored ",
      answer: classObj ? <Highsubjectmark students={classObj.students} /> : "",
    },
    {
      question: "Subject which the lowest marks were scored ",
      answer: classObj ? <Lowsubjectmark students={classObj.students} /> : "",
    },
    {
      question: "Students who scored above the class average ",
      answer: classObj ? <Studentaboveavg students={classObj.students} /> : "",
    },
    {
      question: "Students who scored below the class average ",
      answer: classObj ? <Studentbelowavg students={classObj.students} /> : "",
    },
    {
      question:
        "Subject which the average marks are above the class average marks. ",
      answer: classObj ? (
        <SubjectAboveClassAvg students={classObj.students} />
      ) : (
        ""
      ),
    },
    {
      question:
        "Subject which the average marks are below the class average marks. ",
      answer: classObj ? (
        <SubjectBelowClassAvg students={classObj.students} />
      ) : (
        ""
      ),
    },
    //59-62
    {
      question:
        " percentage of students who scored above the class average marks in each subject. ",
      answer: classObj ? (
        <PercentageAboveEachSubject students={classObj.students} />
      ) : (
        ""
      ),
    },
    {
      question:
        " percentage of students who scored below the class average marks in each subject.",
      answer: classObj ? (
        <PercentageBelowEachSubject students={classObj.students} />
      ) : (
        ""
      ),
    },
    {
      question:
        "  Percentage of students who scored above the class average marks in at least one subject ",
      answer: classObj ? <AboveAtleastOne students={classObj.students} /> : "",
    },
    {
      question:
        " percentage of students who scored below the class average marks in at least one subject",
      answer: classObj ? <BelowAtleastOne students={classObj.students} /> : "",
    },
    {
      question:
        " Student who scored above the class average marks in all subjects. ",
      answer: classObj ? (
        <ShowAboveAvgClass students={classObj.students} />
      ) : (
        ""
      ),
    },
    {
      question:
        " Student who scored below the class average marks in all subjects.",
      answer: classObj ? (
        <BelowClassAverage students={classObj.students} />
      ) : (
        ""
      ),
    },
    {
      question:
        "Student who scored above the class average marks in the majority of subjects. ",
      answer: classObj ? (
        <AboveclassMajority students={classObj.students} />
      ) : (
        ""
      ),
    },
    {
      question:
        "Student who scored below the class average marks in the majority of subjects.",
      answer: classObj ? (
        <BelowClassMajority students={classObj.students} />
      ) : (
        ""
      ),
    },
    {
      question:
        " subject in which the majority of students scored above the class average marks",
      answer: classObj ? (
        <SubjectAboveMajority students={classObj.students} />
      ) : (
        ""
      ),
    },
    {
      question:
        " Subject in which the majority of students scored below the class average marks",
      answer: classObj ? (
        <SubjectBelowMajority students={classObj.students} />
      ) : (
        ""
      ),
    },
    //73-84
    {
      question:
        "Percentage of students who scored above the average marks of the class in each subject.",
      answer: classObj ? (
        <PercentageAboveAvg students={classObj.students} />
      ) : (
        ""
      ),
    },
    {
      question:
        "percentage of students who scored below the average marks of the class in each subject.",
      answer: classObj ? (
        <PercentageBelowAvg students={classObj.students} />
      ) : (
        ""
      ),
    },
    {
      question:
        "Percentage of students who scored above the average marks of the class in at least one subject",
      answer: classObj ? (
        <PercentageAboveAverageInSubject students={classObj.students} />
      ) : (
        ""
      ),
    },
    {
      question:
        " percentage of students who scored below the average marks of the class in at least one subject",
      answer: classObj ? (
        <PercentageBelowAverageInSubject students={classObj.students} />
      ) : (
        ""
      ),
    },
    {
      question:
        "Student who scored above the average marks of the class in all subjects",
      answer: classObj ? <AboveAvgAllSub students={classObj.students} /> : "",
    },
    {
      question:
        "Student who scored below the average marks of the class in all subjects",
      answer: classObj ? <BelowAvgAllSub students={classObj.students} /> : "",
    },
    {
      question:
        "Student who scored above the average marks of the class in the majority of subjects.",
      answer: classObj ? <AboveMajority students={classObj.students} /> : "",
    },
    {
      question:
        "Student who scored below the average marks of the class in the majority of subjects.",
      answer: classObj ? <BelowMajority students={classObj.students} /> : "",
    },
    {
      question:
        "Subject in which the majority of students scored above the average marks of the class",
      answer: classObj ? <AboveSubjectavg students={classObj.students} /> : "",
    },
    {
      question:
        "Subject in which the majority of students scored below the average marks of the class.",
      answer: classObj ? <BelowSubjectavg students={classObj.students} /> : "",
    },
    {
      question:
        " Subject in which the majority of students scored below the average marks of the class",
      answer: classObj ? (
        <>
          <StudentSelection
            students={classObj.students.map((student) => ({
              ...student,
              id: student.id.toString(),
            }))}
            onSelectStudent={(name) => {
              setSelectedStudent(null);
              handleStudentChange(name);
            }}
            label="Select a student:"
          />
          {selectedStudent ? (
            <SubjectsBelowAverage
              students={classObj.students}
              selectedStudent={selectedStudent}
            />
          ) : (
            ""
          )}
        </>
      ) : (
        "Loading..."
      ),
    },
    {
      question:
        " Subject in which the majority of students scored above the average marks of the class",
      answer: classObj ? (
        <>
          <StudentSelection
            students={classObj.students.map((student) => ({
              ...student,
              id: student.id.toString(),
            }))}
            onSelectStudent={(name) => {
              setSelectedStudent(null);
              handleStudentChange(name);
            }}
            label="Select a student:"
          />
          {selectedStudent ? (
            <SubjectsAboveAverage
              students={classObj.students}
              selectedStudent={selectedStudent}
            />
          ) : (
            ""
          )}
        </>
      ) : (
        "Loading..."
      ),
    },
    {
      question:
        "Subject in which the majority of students scored below the average marks of the class",
      answer: classObj ? (
        <>
          <StudentSelection
            students={classObj.students.map((student) => ({
              ...student,
              id: student.id.toString(),
            }))}
            onSelectStudent={(name) => {
              setSelectedStudent(null);
              handleStudentChange(name);
            }}
            label="Select a student:"
          />
          {selectedStudent ? (
            <LowestPercentageBelowAverage
              students={classObj.students}
              selectedStudent={selectedStudent}
            />
          ) : (
            ""
          )}
        </>
      ) : (
        "Loading..."
      ),
    },
    {
      question:
        "Subject in which the highest percentage of students scored above the average marks of a specific student",
      answer: classObj ? (
        <>
          <StudentSelection
            students={classObj.students.map((student) => ({
              ...student,
              id: student.id.toString(),
            }))}
            onSelectStudent={(name) => {
              setSelectedStudent(null);
              handleStudentChange(name);
            }}
            label="Select a student:"
          />
          {selectedStudent ? (
            <LowestPercentageAboveAverage
              students={classObj.students}
              selectedStudent={selectedStudent}
            />
          ) : (
            ""
          )}
        </>
      ) : (
        "Loading..."
      ),
    },
    {
      question:
        "Subject in which the highest percentage of students scored below the average marks of a specific student",

      answer: classObj ? (
        <>
          <StudentSelection
            students={classObj.students.map((student) => ({
              ...student,
              id: student.id.toString(),
            }))}
            onSelectStudent={(name) => {
              setSelectedStudent(null);
              handleStudentChange(name);
            }}
            label="Select a student:"
          />
          {selectedStudent ? (
            <LowestPercentageBelowAverage
              students={classObj.students}
              selectedStudent={selectedStudent}
            />
          ) : (
            ""
          )}
        </>
      ) : (
        "Loading..."
      ),
    },
    {
      question:
        "Subject in which the highest percentage of students scored above the average marks of a specific student",
      answer: classObj ? (
        <>
          <StudentSelection
            students={classObj.students.map((student) => ({
              ...student,
              id: student.id.toString(),
            }))}
            onSelectStudent={(name) => {
              setSelectedStudent(null);
              handleStudentChange(name);
            }}
            label="Select a student:"
          />
          {selectedStudent ? (
            <StudentPercentageHigh
              students={classObj.students}
              selectedStudent={selectedStudent}
            />
          ) : (
            ""
          )}
        </>
      ) : (
        "Loading..."
      ),
    },
    {
      question:
        "Subject in which the highest percentage of students scored below the average marks of a specific student",
      answer: classObj ? (
        <>
          <StudentSelection
            students={classObj.students.map((student) => ({
              ...student,
              id: student.id.toString(),
            }))}
            onSelectStudent={(name) => {
              setSelectedStudent(null);
              handleStudentChange(name);
            }}
            label="Select a student:"
          />
          {selectedStudent ? (
            <StudentPercentageLow
              students={classObj.students}
              selectedStudent={selectedStudent}
            />
          ) : (
            ""
          )}
        </>
      ) : (
        "Loading..."
      ),
    },
  ];

  const handleToggle = (index: number) => {
    if (openIndex !== index) {
      setSelectedStudent(null);
      setSelectedMarks([]);
    }
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mainsec">
      <h2>Details of the class</h2>
      <div className="quesitonsec">
        {questions.map((item, index) => (
          <div key={index} className="sections">
            <h3 onClick={() => handleToggle(index)}>{item.question}</h3>
            {openIndex === index && <div className="answer">{item.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
