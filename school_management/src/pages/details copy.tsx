import ShowStudentId from "../component/showid";
import TopScorerstudent from "../component/studentdetails/topstudent";
import LowScorerstudent from "../component/studentdetails/loweststudent";
import HighestAverageDisplay from "../component/studentdetails/high_average_sub";
import LowestAverageDisplay from "../component/studentdetails/low_avg_sub";
import Dispoverall from "../component/subject/overallavg";
import Displayoverallmark from "../component/subject/overallmark";
import DisplayAvgAllSub from "../component/studentdetails/DisplayAvgAllSub";
import Displaytotalallsub from "../component/studentdetails/Dispaytotalallsub";
import Highsubjecttotal from "../component/studentdetails/highsubjectmrk";
import Lowsubjecttotal from "../component/studentdetails/lowsubjectmark";
import Studenthighavg from "../component/subject/StuHighAvg";
import Studentlowavg from "../component/subject/StuLowAvg";
import HighestPercentage from "../component/studentdetails/high_per_mark";
import LowestPercentage from "../component/studentdetails/low_per_mark";
import HighestSubjectPercentage from "../component/studentdetails/subject_high_per";
import LowestSubjectPercentage from "../component/studentdetails/subject_low_per";
import Highsubjectmark from "../component/subject/subject_highmark";
import Lowsubjectmark from "../component/subject/subejct_lowmark";
import ShowEachAvg from "../component/studentdetails/showeachavg";
import ShowEachResult from "../component/studentdetails/ShowEach";
import BelowClassAverage from "../component/studentdetails/showbelowavgclass";
import ShowAboveAvgClass from "../component/studentdetails/Showaboveavgclass";
import AboveclassMajority from "../component/studentdetails/ShowAbovClass";
import BelowClassMajority from "../component/studentdetails/ShowBelowClass";
import HighEachSubject from "../component/subject/HighEachSubject";
import LowEachSubject from "../component/subject/LowEachsubject";
import Studentaboveavg from "../component/studentdetails/Studentaboveavg";
import Studentbelowavg from "../component/studentdetails/Studentbelowavg";
import SubjectAboveClassAvg from "../component/subject/SubjectAboveClassAvg";
import SubjectBelowClassAvg from "../component/subject/SubjectBelowClassAvg";
import PercentageAboveEachSubject from "../component/studentdetails/PercentageAboveEachSubject";
import PercentageBelowEachSubject from "../component/studentdetails/PercentageBelowEachSubject";
import AboveAtleastOne from "../component/studentdetails/Aboveatleastone";
import BelowAtleastOne from "../component/studentdetails/Belowatleastone";
import AnswerSection from "../component/AnswerSection";

import React, { useState, useEffect } from "react";
import TeacherDisplay from "./Teacher";
import StudentDisplay from "./student";
import ShowStudents from "../component/showname";
import StudentmarkDisplay from "../component/subject/displaymark";
import StudentSelection from "../component/subject/showsubject";
import "./details.css";
import StudenthighTotal from "../component/studentdetails/stuhightotal";

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
  const [selectedMarks, setSelectedMarks] = useState<
    { subject: string; mark: number }[]
  >([]);
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

  const handleStudentChange = (studentName: string, label: string) => {
    setSelectedStudent(studentName);

    if (classObj) {
      const student = classObj.students.find((stu) => stu.name === studentName);
      if (student) {
        setSelectedMarks(student.marks);
      }
    }
  };

  const questions: Question[] = [
    {
      question: "What is the name of the class?",
      answer: classObj ? (
        <StudentDisplay className={classObj.name} />
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
      question: "Display students with their Ids",
      answer: classObj ? <ShowStudentId students={classObj.students} /> : "",
    },
    // {
    //   question: "Select a student to view their subjects",
    //   answer: classObj ? (
    //     <>
    //       <StudentSelection
    //         students={classObj.students.map((student) => ({
    //           ...student,
    //           id: student.id.toString(),
    //         }))}
    //         onSelectStudent={handleStudentChange}
    //         label=""
    //       />
    //       {selectedStudent ? (
    //         <StudentDisplay
    //           selectedStudent={selectedStudent}
    //           selectedSubjects={selectedMarks}
    //         />
    //       ) : (
    //         ""
    //       )}
    //     </>
    //   ) : (
    //     "Loading..."
    //   ),
    // },
    {
      question: "Select a student to view their marks:",
      answer: classObj ? (
        <>
          <StudentSelection
            students={classObj.students.map((student) => ({
              ...student,
              id: student.id.toString(),
            }))}
            onSelectStudent={handleStudentChange}
            label=""
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
  ];

  const handleToggle = (index: number) => {
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
