import React, { useState } from "react";
import "./home.css";
import classDetails from "../data/classdata.json";
import { questions } from "../data/questions";

const Details: React.FC = () => {
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedMarks, setSelectedMarks] = useState<number | null>(null);
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const handleSelection = (type: "student" | "subject" | "mark") => {
    return (
      <select
        value={
          type === "student"
            ? selectedStudent || ""
            : type === "subject"
              ? selectedSubject || ""
              : selectedMarks || ""
        }
        onChange={(e) => {
          if (type === "student") {
            setSelectedStudent(e.target.value);
          } else if (type === "subject") {
            setSelectedSubject(e.target.value);
          } else if (type === "mark") {
            setSelectedMarks(parseInt(e.target.value));
          }
        }}
      >
        <option value="">{`Select a ${type}`}</option>
        {type === "student"
          ? classDetails.students.map((student) => (
            <option key={student.id} value={student.name}>
              {student.name}
            </option>
          ))
          : type === "subject"
            ? Array.from(
              new Set(
                classDetails.students.flatMap((student) =>
                  student.marks.map((mark) => mark.subject)
                )
              )
            ).map((subject, index) => (
              <option key={index} value={subject}>
                {subject}
              </option>
            ))
            : Array.from({ length: 100 }, (_, index) => (
              <option key={index + 1} value={index + 1}>
                {index + 1}
              </option>
            ))}
      </select>
    );
  };

  const questionList = questions(handleSelection, selectedStudent, selectedSubject, selectedMarks);

  const toggleFunction = (index: number) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Class Details</h1>
      <div className="mainsec">
        <div className="questionsec">
          {questionList.map((q, index) => (
            <div key={index} className="sections">
              <h3 onClick={() => toggleFunction(index)}>
                <span className="ques"> {q.question}</span>
              </h3>
              {activeQuestion === index && <div className="answer"> {q.answer()} </div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
