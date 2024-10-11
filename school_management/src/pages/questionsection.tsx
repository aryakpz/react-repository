import TopScorerstudent from "../component/studentdetails/topstudent";
import HighestAverageStudent from "../component/studentdetails/high_average_sub";
import Displayoverallmark from "../component/studentdetails/overallmark";
import DisplaymarkofAllSubject from "../component/studentdetails/DisplayAvgAllSub";
import SubejctMarksDisplay from "../component/studentdetails/highsubjectmrk";
import StudentAveragescore from "../component/studentdetails/StuHighAvg";
import StudentmarkPercentage from "../component/studentdetails/high_per_mark";
import SubjectPercentage from "../component/studentdetails/subject_high_per";
import PercentageInSubject from "../component/studentdetails/toppercentage";
import MarkofSubejct from "../component/studentdetails/subject_highmark";
import MarkofEachsubject from "../component/studentdetails/showeachavg";
import HighestandLowestMarkInEachSubject from "../component/studentdetails/HighEachSubject";
import ClassAverageInallSubject from "../component/studentdetails/Showaboveavgclass";
import AverageMarkInMajoritySubject from "../component/studentdetails/ShowAbovClass";
import StudentAbvoeAndBelowAverage from "../component/studentdetails/Studentaboveavg";
import SubjectAboveAndBelowClassAvgMark from "../component/studentdetails/SubjectAboveClassAvg";
import AboveAndBelowSubjectAveragemark from "../component/studentdetails/PercentageAboveEachSubject";
import PercentageOfAvgMarkInEachSubject from "../component/studentdetails/PercentageAboveAvg";
import React, { useState, useEffect } from "react";
import SubjectPercentageInAverageofStudent from "../component/studentdetails/HighAvgStudent";
import "./details.css";
import StudenthighTotal from "../component/studentdetails/stuhightotal";
import SubjectMajorityAvgClassAverage from "../component/studentdetails/Subjectabovemajority";
import PercentageOfStudentAverageMark from "../component/studentdetails/PercentageAboveAvg";
import PercentageAboveAndBelowAvgMarkInSubejct from "../component/studentdetails/specificstudentpercentage";
import Studenttotal from "../component/studentdetails/totalmarkofstudent";
import SubjectSelection from "../component/studentdetails/selectsubject";
import StduentMarkAtleastOne from "../component/studentdetails/stuhighatleastone";
import StudentPercentageHigh from "../component/studentdetails/StudentSubjecthigh";
import BelowSubjectavg from "../component/studentdetails/BelowSubjectallavg";
import TopscorerInSubject from "../component/studentdetails/topscore";
import SubjectsBelowAverage from "../component/studentdetails/Belowsubjectavg";
import MarkSelection from "../component/studentdetails/markselection";
import SubjectTotalmarkofstduent from "../component/studentdetails/Subjectotalmark";
import SubjectsBasedOnCertainMark from "../component/studentdetails/subjectabovecertianmark";
import arrowimg from "../angle-right-solid.svg";
import classDetails from "../data/classdata.json";

import "./details.css";
import {
  TeacherDisplay,
  ClassnameDisplay,
  ShowStudents,
  StudentSelection,
  StudentDisplay,
  AboveAtleastOne,
  LowestPercentageAboveAverage,
  AboveAvgAllSub,
  AboveMajority,
  // PercentageAboveSpecificInMajority,
  StudentsAboveAverage,
  AboveSubjectavg,
  SubjectsAboveAverage,
  AvgAboveAtLeastOne,
  AvgBelowAtleastOne,
  // StudentAverage,
  BelowAtleastOne,
  BelowAvgAllSub,
  LowestPercentageBelowAverage,
  BelowMajority,
  // PercentageBelowSpecificInMajority,
  StudentsBelowAverage,
  // CountStudentsAboveMark,
  SubjectPercentageAboveCertainMark,
  SubjectPercentageBelowCertainMark,
  ShowStudentswithId,
  SubjectLowPercentageAboveCertainMark,
  SubjectLowPercentageBelowCertainMark,
} from "../utils/functions";

export type Mark = {
  subject: string;
  mark: number;
};

export type Student = {
  name: string;
  id: number;
  marks: Mark[];
};

export type ClassData = {
  name: string;
  teacherName: string;
  students: Student[];
};

export type Question = {
  question: string;
  answer: JSX.Element | string;
};

const Details: React.FC = () => {
  const [classObj, setClassObj] = useState<ClassData | null>(null);
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedMarks, setSelectedMarks] = useState<Mark[]>([]);
  const [results, setResults] = useState<number | null>(null);
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
    setSelectedSubject(subject);
  };

  const handlemarkchange = (mark: number) => {
    setResults(mark);
  };

  const handleToggle = (index: number) => {
    if (openIndex !== index) {
      setSelectedStudent(null);
      setSelectedMarks([]);
    }
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions: Question[] = [
    {
      question: "What is the name of the class?",
      answer: <ClassnameDisplay className={classObj?.name || ""} />,
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
      question: "Display students with their IDs",
      answer: classObj ? (
        <ShowStudentswithId students={classObj.students} />
      ) : (
        ""
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
              displayType="subject"
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
            <StudentDisplay
              selectedStudent={selectedStudent}
              selectedSubjects={selectedMarks}
              displayType="mark"
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
            <SubjectTotalmarkofstduent
              students={classObj.students}
              subject={selectedSubject}
              displayType="average"
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
            <SubjectTotalmarkofstduent
              students={classObj.students}
              subject={selectedSubject}
              displayType="total"
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
            <TopscorerInSubject
              students={classObj.students}
              subject={selectedSubject}
              displayType="top"
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
            <TopscorerInSubject
              students={classObj.students}
              subject={selectedSubject}
              displayType="low"
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
      answer: classObj ? (
        <TopScorerstudent students={classObj.students} displayType="top" />
      ) : (
        ""
      ),
    },
    {
      question: "Student who score the lowest mark in the class",
      answer: classObj ? (
        <TopScorerstudent students={classObj.students} displayType="low" />
      ) : (
        ""
      ),
    },
    {
      question: "Student who score the highest average mark in the class",
      answer: classObj ? (
        <HighestAverageStudent
          students={classObj.students}
          displayType="highest"
        />
      ) : (
        ""
      ),
    },
    {
      question: "Student who score the lowest average mark in the class",
      answer: classObj ? (
        <HighestAverageStudent
          students={classObj.students}
          displayType="lowest"
        />
      ) : (
        ""
      ),
    },
    {
      question: "Display overall average mark in the class",
      answer: classObj ? (
        <Displayoverallmark
          students={classObj.students}
          displayType="average"
        />
      ) : (
        ""
      ),
    },
    {
      question: "Display overall mark in the class",
      answer: classObj ? (
        <Displayoverallmark students={classObj.students} displayType="total" />
      ) : (
        ""
      ),
    },
    {
      question: "Display the average mark scored in each subject",
      answer: classObj ? (
        <DisplaymarkofAllSubject
          students={classObj.students}
          displayType="average"
        />
      ) : (
        ""
      ),
    },
    {
      question: "Display the total mark scored in each subject",
      answer: classObj ? (
        <DisplaymarkofAllSubject
          students={classObj.students}
          displayType="total"
        />
      ) : (
        ""
      ),
    },
    {
      question:
        "Display the subject which score the highest total mark in the class ",
      answer: classObj ? (
        <SubejctMarksDisplay
          students={classObj.students}
          displayType="highest"
        />
      ) : (
        ""
      ),
    },
    {
      question:
        "Display the subject which score the lowest total mark in the class ",
      answer: classObj ? (
        <SubejctMarksDisplay
          students={classObj.students}
          displayType="lowest"
        />
      ) : (
        ""
      ),
    },
    {
      question:
        "Display student who  score the highest average mark in the class ",
      answer: classObj ? (
        <StudentAveragescore
          students={classObj.students}
          displayType="highest"
        />
      ) : (
        ""
      ),
    },
    {
      question:
        "Display student who  score the lowest average mark in the class ",
      answer: classObj ? (
        <StudentAveragescore
          students={classObj.students}
          displayType="lowest"
        />
      ) : (
        ""
      ),
    },
    {
      question:
        "Display student who  score the highest total mark in the class ",
      answer: classObj ? <StudenthighTotal students={classObj.students} /> : "",
    },
    {
      question:
        "Display student who  score the lowest total mark in the class ",
      answer: classObj ? (
        <StudentAveragescore
          students={classObj.students}
          displayType="lowest"
        />
      ) : (
        ""
      ),
    },
    //27-34
    {
      question:
        "Display student who  score the highest percentage of mark in the class ",
      answer: classObj ? (
        <StudentmarkPercentage
          students={classObj.students}
          displayType="highest"
        />
      ) : (
        ""
      ),
    },
    {
      question:
        "Display student who  score the lowest percentage of mark in the class ",
      answer: classObj ? (
        <StudentmarkPercentage
          students={classObj.students}
          displayType="lowest"
        />
      ) : (
        ""
      ),
    },
    {
      question: "Display subject which score the highest percentage of mark  ",
      answer: classObj ? (
        <SubjectPercentage students={classObj.students} displayType="highest" />
      ) : (
        ""
      ),
    },
    {
      question: "Display subject which score the lowest percentage of mark ",
      answer: classObj ? (
        <SubjectPercentage students={classObj.students} displayType="lowest" />
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
            <PercentageInSubject
              students={classObj.students}
              subject={selectedSubject}
              displayType="highest"
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
            <PercentageInSubject
              students={classObj.students}
              subject={selectedSubject}
              displayType="lowest"
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
              type="high"
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
            <StudentPercentageHigh
              students={classObj.students}
              selectedStudent={selectedStudent}
              type="low"
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
      question: "Subject in which all students scored above a certain mark",
      answer: classObj ? (
        <>
          <MarkSelection onSelectmark={(mark) => handlemarkchange(mark)} />
          {results ? (
            <SubjectsBasedOnCertainMark
              students={classObj.students}
              mark={results}
              condition="above"
            />
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      ),
    },
    {
      question: "Subject in which all students scored below a certain mark.",
      answer: classObj ? (
        <>
          <MarkSelection onSelectmark={(mark) => handleToggle(mark)} />
          {results ? (
            <SubjectsBasedOnCertainMark
              students={classObj.students}
              mark={results}
              condition="below"
            />
          ) : (
            " "
          )}
        </>
      ) : (
        ""
      ),
    },
    {
      question: "Subject in which all students scored above a certain mark",
      answer: classObj ? (
        <>
          <MarkSelection onSelectmark={(mark) => handlemarkchange(mark)} />
          {results ? (
            <SubjectsBasedOnCertainMark
              students={classObj.students}
              mark={results}
              condition="above"
            />
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      ),
    },
    {
      question: "Subject in which all students scored below a certain mark.",
      answer: classObj ? (
        <>
          <MarkSelection onSelectmark={(mark) => handleToggle(mark)} />
          {results ? (
            <SubjectsBasedOnCertainMark
              students={classObj.students}
              mark={results}
              condition="below"
            />
          ) : (
            " "
          )}
        </>
      ) : (
        ""
      ),
    },
    {
      question:
        "Dispaly student who scored the highest marks in at least one subject.",
      answer: classObj ? (
        <StduentMarkAtleastOne
          students={classObj.students}
          displayType="highest"
        />
      ) : (
        ""
      ),
    },
    {
      question:
        "Dispaly student who scored the lowest marks in at least one subject.",
      answer: classObj ? (
        <StduentMarkAtleastOne
          students={classObj.students}
          displayType="lowest"
        />
      ) : (
        ""
      ),
    },
    {
      question: "Display total mark of each student in each subject ",
      answer: classObj ? (
        <MarkofEachsubject students={classObj.students} displayType="total" />
      ) : (
        ""
      ),
    },
    {
      question: "Display average mark of each student in each subject ",
      answer: classObj ? (
        <MarkofEachsubject students={classObj.students} displayType="average" />
      ) : (
        ""
      ),
    },
    {
      question: "Display the highest mark scorers in each subject ",
      answer: classObj ? (
        <HighestandLowestMarkInEachSubject
          students={classObj.students}
          displayType="high"
        />
      ) : (
        ""
      ),
    },
    {
      question: "Display the lowest mark scorers in each subject ",
      answer: classObj ? (
        <HighestandLowestMarkInEachSubject
          students={classObj.students}
          displayType="low"
        />
      ) : (
        ""
      ),
    },
    {
      question: "Subject which the highest marks were scored ",
      answer: classObj ? (
        <MarkofSubejct students={classObj.students} displayType="high" />
      ) : (
        ""
      ),
    },
    {
      question: "Subject which the lowest marks were scored ",
      answer: classObj ? (
        <MarkofSubejct students={classObj.students} displayType="low" />
      ) : (
        ""
      ),
    },
    {
      question: "Students who scored above the class average ",
      answer: classObj ? (
        <StudentAbvoeAndBelowAverage
          students={classObj.students}
          displayType="above"
        />
      ) : (
        ""
      ),
    },
    {
      question: "Students who scored below the class average ",
      answer: classObj ? (
        <StudentAbvoeAndBelowAverage
          students={classObj.students}
          displayType="below"
        />
      ) : (
        ""
      ),
    },
    {
      question:
        "Subject which the average marks are above the class average marks. ",
      answer: classObj ? (
        <SubjectAboveAndBelowClassAvgMark
          students={classObj.students}
          displayType="above"
        />
      ) : (
        ""
      ),
    },
    {
      question:
        "Subject which the average marks are below the class average marks. ",
      answer: classObj ? (
        <SubjectAboveAndBelowClassAvgMark
          students={classObj.students}
          displayType="below"
        />
      ) : (
        ""
      ),
    },
    //not--
    {
      question:
        "Subject in whcih the highest percentage of students scored above a certain mark",
      answer: classObj ? (
        <>
          <MarkSelection onSelectmark={(mark) => handlemarkchange(mark)} />
          {results ? (
            <SubjectPercentageAboveCertainMark
              students={classObj.students}
              results={results}
            />
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      ),
    },

    {
      question:
        "Subject in whcih the highest percentage of students scored below a certain mark",
      answer: classObj ? (
        <>
          <MarkSelection onSelectmark={(mark) => handlemarkchange(mark)} />
          {results ? (
            <SubjectPercentageBelowCertainMark
              students={classObj.students}
              results={results}
            />
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      ),
    },

    {
      question:
        "Subject in whcih the lowest percentage of students scored above a certain mark",
      answer: classObj ? (
        <>
          <MarkSelection onSelectmark={(mark) => handlemarkchange(mark)} />
          {results ? (
            <SubjectLowPercentageAboveCertainMark
              students={classObj.students}
              results={results}
            />
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      ),
    },

    {
      question:
        "Subject in whcih the lowest percentage of students scored below a certain mark",
      answer: classObj ? (
        <>
          <MarkSelection onSelectmark={(mark) => handlemarkchange(mark)} />
          {results ? (
            <SubjectLowPercentageBelowCertainMark
              students={classObj.students}
              results={results}
            />
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      ),
    },
    //==
    {
      question:
        " percentage of students who scored above the class average marks in each subject. ",
      answer: classObj ? (
        <AboveAndBelowSubjectAveragemark
          students={classObj.students}
          displayType="above"
        />
      ) : (
        ""
      ),
    },
    {
      question:
        " percentage of students who scored below the class average marks in each subject.",
      answer: classObj ? (
        <AboveAndBelowSubjectAveragemark
          students={classObj.students}
          displayType="below"
        />
      ) : (
        ""
      ),
    },
    //
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
    //===
    {
      question:
        " Student who scored above the class average marks in all subjects. ",
      answer: classObj ? (
        <ClassAverageInallSubject
          students={classObj.students}
          displayType="above"
        />
      ) : (
        ""
      ),
    },
    {
      question:
        " Student who scored below the class average marks in all subjects.",
      answer: classObj ? (
        <ClassAverageInallSubject
          students={classObj.students}
          displayType="below"
        />
      ) : (
        ""
      ),
    },
    //subjectcertain
    {
      question: "Subject in which all students scored above a certain mark",
      answer: classObj ? (
        <>
          <MarkSelection onSelectmark={(mark) => handlemarkchange(mark)} />
          {results ? (
            <SubjectsBasedOnCertainMark
              students={classObj.students}
              mark={results}
              condition="above"
            />
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      ),
    },
    {
      question: "Subject in which all students scored below a certain mark.",
      answer: classObj ? (
        <>
          <MarkSelection onSelectmark={(mark) => handleToggle(mark)} />
          {results ? (
            <SubjectsBasedOnCertainMark
              students={classObj.students}
              mark={results}
              condition="below"
            />
          ) : (
            " "
          )}
        </>
      ) : (
        ""
      ),
    },
    {
      question:
        "Student who scored above the class average marks in the majority of subjects. ",
      answer: classObj ? (
        <AverageMarkInMajoritySubject
          students={classObj.students}
          displayType="above"
        />
      ) : (
        ""
      ),
    },
    {
      question:
        "Student who scored below the class average marks in the majority of subjects.",
      answer: classObj ? (
        <AverageMarkInMajoritySubject
          students={classObj.students}
          displayType="below"
        />
      ) : (
        ""
      ),
    },
    {
      question:
        " subject in which the majority of students scored above the class average marks",
      answer: classObj ? (
        <SubjectMajorityAvgClassAverage
          students={classObj.students}
          displayType="above"
        />
      ) : (
        ""
      ),
    },
    {
      question:
        " Subject in which the majority of students scored below the class average marks",
      answer: classObj ? (
        <SubjectMajorityAvgClassAverage
          students={classObj.students}
          displayType="below"
        />
      ) : (
        ""
      ),
    },
    {
      question:
        "percentage of students who scored above the average marks of a specific student in each subject.",
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
            <PercentageAboveAndBelowAvgMarkInSubejct
              students={classObj.students}
              selectedStudent={selectedStudent}
              displayType="above"
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
        "percentage of students who scored below the average marks of a specific student in each subject.",
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
            <PercentageAboveAndBelowAvgMarkInSubejct
              students={classObj.students}
              selectedStudent={selectedStudent}
              displayType="below"
            />
          ) : (
            ""
          )}
        </>
      ) : (
        "Loading..."
      ),
    },
    //
    {
      question:
        "percentage of students who scored above the average marks of a specific student in at least one subject",
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
            <AvgAboveAtLeastOne
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
        " percentage of students who scored below the average marks of a specific student in at least one subject",
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
            <AvgBelowAtleastOne
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
        "percentage of students who scored above the average marks of a specific student in each subject.",
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
            <StudentsAboveAverage
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
        "percentage of students who scored below the average marks of a specific student in all subject.",
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
            <StudentsBelowAverage
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
        "Subject in which the average marks are above the average marks of a specific student.",
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
            <StudentsAboveAverage
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
        "Subject in which the average marks are above the average marks of a specific student.",
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
            <StudentsBelowAverage
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
    //==

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
            <SubjectPercentageInAverageofStudent
              students={classObj.students}
              selectedStudent={selectedStudent}
              displayType="highest"
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
            <SubjectPercentageInAverageofStudent
              students={classObj.students}
              selectedStudent={selectedStudent}
              displayType="lowest"
            />
          ) : (
            ""
          )}
        </>
      ) : (
        "Loading..."
      ),
    },
    //
    {
      question:
        "Subject in which the lowest percentage of students scored above the average marks of a specific student",
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
        "Subject in which the lowest percentage of students scored below the average marks of a specific student",
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
    //
    {
      question:
        "Percentage of students who scored above the average marks of the class in each subject.",
      answer: classObj ? (
        <PercentageOfAvgMarkInEachSubject
          students={classObj.students}
          displayType="above"
        />
      ) : (
        ""
      ),
    },
    {
      question:
        "percentage of students who scored below the average marks of the class in each subject.",
      answer: classObj ? (
        <PercentageOfAvgMarkInEachSubject
          students={classObj.students}
          displayType="below"
        />
      ) : (
        ""
      ),
    },
    {
      question:
        "Percentage of students who scored above the average marks of the class in at least one subject",
      answer: classObj ? (
        <PercentageOfStudentAverageMark
          students={classObj.students}
          displayType="above"
        />
      ) : (
        ""
      ),
    },
    {
      question:
        " percentage of students who scored below the average marks of the class in at least one subject",
      answer: classObj ? (
        <PercentageOfStudentAverageMark
          students={classObj.students}
          displayType="below"
        />
      ) : (
        ""
      ),
    },
    //
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
    //==
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
              type="high"
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
            <StudentPercentageHigh
              students={classObj.students}
              selectedStudent={selectedStudent}
              type="low"
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

  return (
    <div className="mainsec">
      <h2>Details of the class</h2>
      <div className="questionsec">
        {questions.map((item, index) => (
          <div key={index} className="sections">
            <h3 onClick={() => handleToggle(index)} className="question">
              <span className={`arrow ${openIndex === index ? "rotate" : ""}`}>
                <img src={arrowimg} />
              </span>
              <span className="ques">{item.question}</span>
            </h3>
            {openIndex === index && <div className="answer">{item.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
