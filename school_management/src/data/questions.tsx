
import {
    getAverageandTotalSubject,
    getClassName,
    getHighestAndLowestAverageMarks,
    getHighestAndLowestTotalMarks,
    getStudentWithHighandLowMarkInSubject,
    getStudentsName,
    getSubject,
    getTotalandAverage,
    getOverallTotalandAverage,
    getSubjectMarksTotalandAverage,
    getHighestAndLowestAveragemarkStudent,
    getStudentsWithHighestAndLowestPercentage,
    getSubjetWithHighestAndLowestPercentage,
    getSubjectsWithHighestAndLowestPercentageInStudent,
    getStudentHighandLowMarkAtleastone,
    getTotalandAvgOfEachSubject,
    getStudnetHighandLowMark,
    getSubjectwithHighAndLowscore,
    getStudentAboveBelowClassAverage,
    getSubjectAboveandBelowClassAverage,
    getStudentPercentageByClassAverage,
    getStudentPercentageByClassAvgAtleastone,
    getStudentsAboveBelowClassAvgInallSub,
    getStudentsAboveBelowMajorityClassAverage,
    getPercentageAboveBelowStudentAverage,
    getSubjectsMajorityAboveBelowClassAverage,
    getPercentageAboveBelowInAtLeastOneSubject,
    getStudentsAboveBelowInAllSubjects,
    getSubjectsAboveBelowStudentAverage,
    getSubjectsWithHighestLowestAboveBelowStudentAverage,
    getPercentageAboveBelowClassAverage,
    getPercentageAboveBelowClassAverageatleastOne,
    getStudentsAboveBelowMajorityClassAverageinSubject,
    getStudentsAboveBelowMajoritySpecificStudent,
    getStudentsHighLowMarksInSubject,
    getPercentageAboveBelowMark,
    getSubjectsAllStudentsScoredAboveBelowInmark,
    getSubjectsAverageAboveBelowInmark,
    getSubjectsWithHighestLowestPercentage,

} from "../utils/functions";
import { Question } from "../type/types"

export const questions = (
    handleSelection: (type: "student" | "subject" | "mark") => void,
    selectedStudent: string | null,
    selectedSubject: string | null,
    selectedMark: number | null
): Question[] => [
        {
            id: 1,
            question: "What is the name of the class?",
            answer: () =>
                getClassName("name"),
        },
        {
            id: 2,
            question: "Who is the teacher of the class?",
            answer: () => getClassName("teacher"),
        },

        {
            id: 3,
            question: "What are the names of all the students?",
            answer: () => getStudentsName("name"),
        },
        {
            id: 4,
            question: "Display the students name with ID",
            answer: () => getStudentsName("id"),
        },

        {
            id: 5,
            question: "Display subject names for a specific student",
            answer: () => (
                <>
                    {handleSelection("student")}
                    {getSubject(selectedStudent, "subject")}
                </>
            ),
        },
        {
            id: 6,
            question: "Display marks of a specific student in all subjects",
            answer: () => (
                <>
                    {handleSelection("student")}
                    {getSubject(selectedStudent, "mark")}
                </>
            ),
        },
        {
            id: 7,
            question: "Display the average marks of a specific student",
            answer: () => (
                <>
                    {handleSelection("student")}
                    {getTotalandAverage(selectedStudent, "average")}
                </>
            ),
        },
        {
            id: 8,
            question: "Display the total marks of a  specific student",
            answer: () => (
                <>
                    {handleSelection("student")}
                    {getTotalandAverage(selectedStudent, "total")}

                </>
            ),
        },
        {
            id: 9,
            question: "Display the total marks of students in a specific subject",
            answer: () => (
                <>
                    {handleSelection("subject")}
                    {selectedSubject ? getAverageandTotalSubject(selectedSubject, "total") : "Please Select a Subject"}
                </>
            ),
        },
        {
            id: 10,
            question: "Display the average marks of students in a specific subject",
            answer: () => (
                <>
                    {handleSelection("subject")}
                    {selectedSubject ? getAverageandTotalSubject(selectedSubject, "average") : "Please Select a Subject"}
                </>
            ),
        },
        {
            id: 11,
            question: "Display the student with the highest mark in a specific subject",
            answer: () => (
                <>
                    {handleSelection("subject")}
                    {selectedSubject ? getStudentWithHighandLowMarkInSubject(selectedSubject, "high") : "Please Select a Subject"}
                </>
            ),
        },
        {
            id: 12,
            question: "Display the student with the lowest mark in a specific subject",
            answer: () => (
                <>
                    {handleSelection("subject")}
                    {selectedSubject ? getStudentWithHighandLowMarkInSubject(selectedSubject, "low") : "Please Select a Subject"}
                </>
            ),
        },
        {
            id: 13,
            question: "Display the student with the highest total mark",
            answer: () => getHighestAndLowestTotalMarks("high"),
        },
        {
            id: 14,
            question: "Display the student with the lowest total mark",
            answer: () => getHighestAndLowestTotalMarks("low"),
        },
        {
            id: 15,
            question: "Display the  subject with the highest average marks",
            answer: () => getHighestAndLowestAverageMarks("high"),
        },
        {
            id: 16,
            question: "Display the subject with the lowest average marks",
            answer: () => getHighestAndLowestAverageMarks("low"),
        },
        {
            id: 17,
            question: "Display overall average marks for the class.",
            answer: () => getOverallTotalandAverage("total"),
        },
        {
            id: 18,
            question: "Display overall total marks for the class.",
            answer: () => getOverallTotalandAverage("average"),
        },
        {
            id: 19,
            question: "Display average mark in each subject.",
            answer: () => getSubjectMarksTotalandAverage("total"),
        },
        {
            id: 20,
            question: "Display total mark in each subject.",
            answer: () => getSubjectMarksTotalandAverage("average"),
        },
        {
            id: 21,
            question: "Display  the subject with the highest total marks.",
            answer: () => getHighestAndLowestAverageMarks("hightotal"),
        },
        {
            id: 22,
            question: "Display the subject with the lowset total marks.",
            answer: () => getHighestAndLowestAverageMarks("lowtotal"),
        },
        {
            id: 23,
            question: "Display student with highest average mark.",
            answer: () => getHighestAndLowestAveragemarkStudent("high"),
        },
        {
            id: 24,
            question: "Display tstudent with lowest average mark.",
            answer: () => getHighestAndLowestAveragemarkStudent("low"),
        },
        {
            id: 25,
            question: "Display the student with the highest total mark",
            answer: () => getHighestAndLowestTotalMarks("high"),
        },
        {
            id: 26,
            question: "Display the student with the lowest total mark",
            answer: () => getHighestAndLowestTotalMarks("low"),
        },

        // 27-32

        {
            id: 27,
            question: "Subject in which the students scored above the class average marks",
            answer: () => getSubjectsMajorityAboveBelowClassAverage("above")
        },
        {
            id: 28,
            question: "Subject in which the students scored below the class average marks ",
            answer: () => getSubjectsMajorityAboveBelowClassAverage("below")
        },
        {
            id: 29,
            question: "Percentage of students who scored above the average marks of a specific student in each subject. ",
            answer: () => (<>{handleSelection("student")}
                {selectedStudent ? getPercentageAboveBelowStudentAverage(selectedStudent, "above") : ""}</>)

        },
        {
            id: 30,
            question: "Percentage of students who scored above the average marks of a specific student in each subject. ",
            answer: () => (<>{handleSelection("student")}
                {selectedStudent ? getPercentageAboveBelowStudentAverage(selectedStudent, "below") : ""}</>)
        },
        {
            id: 31,
            question: "Percentage of students who scored above the average marks of a specific student in atleastone subject. ",
            answer: () => (<>{handleSelection("student")}
                {selectedStudent ? getPercentageAboveBelowInAtLeastOneSubject(selectedStudent, "above") : ""}</>)

        },
        {
            id: 32,
            question: "Percentage of students who scored above the average marks of a specific student in atleastone subject ",
            answer: () => (<>{handleSelection("student")}
                {selectedStudent ? getPercentageAboveBelowInAtLeastOneSubject(selectedStudent, "below") : ""}</>)
        },
        //
        {
            id: 33,
            question: " # Percentage of students who scored above a certain mark in all subjects",
            answer: () => <>{handleSelection("mark")}
                {selectedMark ? getPercentageAboveBelowMark(selectedMark, "above") : "select a mark"}
            </>
        },
        {
            id: 34,
            question: "Percentage of students who scored below a certain mark in all subjects",
            answer: () => <>{handleSelection("mark")}
                {selectedMark ? getPercentageAboveBelowMark(selectedMark, "below") : "select a mark"}</>
        },

        {
            id: 35,
            question: "Display student with the highest percentage of marks",
            answer: () => getStudentsWithHighestAndLowestPercentage("high")
        },
        {
            id: 36,
            question: "Display stduent with the highest percentage of marks",
            answer: () => getStudentsWithHighestAndLowestPercentage("low")
        },
        {
            id: 37,
            question: "Display subject with the highest percentage of marks",
            answer: () => getSubjetWithHighestAndLowestPercentage("high")
        },
        {
            id: 38,
            question: "Display subject with the lowest percentage of marks",
            answer: () => getSubjetWithHighestAndLowestPercentage("low")
        },
        {
            id: 39,
            question: "Display student with the highest percentage of marks in specific subject",
            answer: () => <>{handleSelection("subject")}
                {selectedSubject ? getStudentsHighLowMarksInSubject(selectedSubject, "high") : "select a subject"}
            </>
        },
        {
            id: 40,
            question: "Display stduent with the highest percentage of marks in specific subject",
            answer: () => <>{handleSelection("subject")}
                {selectedSubject ? getStudentsHighLowMarksInSubject(selectedSubject, "low") : "select a subject"}</>
        },
        {
            id: 41,
            question: "Display subject with the highest percentage of marks in specific student",
            answer: () => <>{handleSelection("student")}
                {selectedStudent ? getSubjectsWithHighestAndLowestPercentageInStudent(selectedStudent, "high") : "select a stduent"}
            </>
        },
        {
            id: 42,
            question: "Display subject with the highest percentage of marks in specific stduent",
            answer: () => <>{handleSelection("student")}
                {selectedStudent ? getSubjectsWithHighestAndLowestPercentageInStudent(selectedStudent, "low") : "select a student"}</>
        },

        {
            id: 43,
            question: "Subject in which all students scored above a certain mark.",
            answer: () => <>{handleSelection("mark")}
                {selectedMark ? getSubjectsAllStudentsScoredAboveBelowInmark(selectedMark, "above") : "select a mark"}
            </>
        },
        {
            id: 44,
            question: "Subject in which all students scored above a certain mark.",
            answer: () => <>{handleSelection("mark")}
                {selectedMark ? getSubjectsAllStudentsScoredAboveBelowInmark(selectedMark, "below") : "select a mark"}</>
        },
        {
            id: 45,
            question: "Subject in which the average marks of all students are above a certain mark.",
            answer: () => <>{handleSelection("mark")}
                {selectedMark ? getSubjectsAverageAboveBelowInmark(selectedMark, "above") : "select a mark"}
            </>
        },
        {
            id: 46,
            question: "Subject in which the average marks of all students are above a certain mark.",
            answer: () => <>{handleSelection("mark")}
                {selectedMark ? getSubjectsAverageAboveBelowInmark(selectedMark, "below") : "select a mark"}</>
        },
        {
            id: 47,
            question: "Student who scored the highest marks in at least one subject.",
            answer: () => getStudentHighandLowMarkAtleastone("high")
        },
        {
            id: 48,
            question: "Student who scored the lowest marks in at least one subject.",
            answer: () => getStudentHighandLowMarkAtleastone("low")
        },
        {
            id: 49,
            question: "Total mark of each student in each subject",
            answer: () => getTotalandAvgOfEachSubject("total")
        },
        {
            id: 50,
            question: "Average mark of each student in each subject",
            answer: () => getTotalandAvgOfEachSubject("average")
        },
        {
            id: 51,
            question: "Student who score the highest mark in each subject",
            answer: () => getStudnetHighandLowMark("high")
        },
        {
            id: 52,
            question: "Student who score the lowest in each subject",
            answer: () => getStudnetHighandLowMark("low")
        },
        {
            id: 53,
            question: "Subject which is scored the highest mark ",
            answer: () => getSubjectwithHighAndLowscore("high")
        },
        {
            id: 54,
            question: "Subject which is scored the lowest mark",
            answer: () => getSubjectwithHighAndLowscore("low")
        },
        {
            id: 52,
            question: "Student who score the lowest in each subject",
            answer: () => getStudnetHighandLowMark("low")
        }, {
            id: 55,
            question: "Students who score above the class average marks ",
            answer: () => getStudentAboveBelowClassAverage("above")
        },
        {
            id: 56,
            question: "Students who score below the class average mark",
            answer: () => getStudentAboveBelowClassAverage("below")
        },
        {
            id: 57,
            question: "Subject which the average mark above the class average mark ",
            answer: () => getSubjectAboveandBelowClassAverage("above")
        },
        {
            id: 58,
            question: "Subject which is the average mark below the class average mark",
            answer: () => getSubjectAboveandBelowClassAverage("below")
        },

        {
            id: 59,
            question: " Subject in which the highest percentage of students scored above a certain mark",
            answer: () => <>{handleSelection("mark")}
                {selectedMark ? getSubjectsWithHighestLowestPercentage(selectedMark, "above") : "select a mark"}
            </>
        },
        {
            id: 60,
            question: "Subject in which the highest percentage of students scored below a certain mark",
            answer: () => <>{handleSelection("mark")}
                {selectedMark ? getSubjectsWithHighestLowestPercentage(selectedMark, "below") : "select a mark"}</>
        },
        {
            id: 61,
            question: "Subject in which the lowest percentage of students scored above a certain mark",
            answer: () => <>{handleSelection("mark")}
                {selectedMark ? getSubjectsWithHighestLowestPercentage(selectedMark, "lowabove") : "select a mark"}
            </>
        },
        {
            id: 62,
            question: "Subject in which the lowest percentage of students scored below a certain mark",
            answer: () => <>{handleSelection("mark")}
                {selectedMark ? getSubjectsWithHighestLowestPercentage(selectedMark, "lowbelow") : "select a mark"}</>
        },
        {
            id: 63,
            question: "Percentage of students who scored above the class average marks in each subject",
            answer: () => getStudentPercentageByClassAverage("above")
        },
        {
            id: 64,
            question: "Percentage of students who scored above the class average marks in each subjec",
            answer: () => getStudentPercentageByClassAverage("below")
        },
        {
            id: 65,
            question: "Percentage of students who scored above the class average marks in atleast one subject",
            answer: () => getStudentPercentageByClassAvgAtleastone("above")
        },
        {
            id: 66,
            question: "Percentage of students who scored above the class average marks in atleast one subject",
            answer: () => getStudentPercentageByClassAvgAtleastone("below")
        },

        {
            id: 67,
            question: "Students who score above the class average in all subject",
            answer: () => getStudentsAboveBelowClassAvgInallSub("above")
        },
        {
            id: 68,
            question: "Students who score below the class average in all subject",
            answer: () => getStudentsAboveBelowClassAvgInallSub("below")
        },
        {
            id: 69,
            question: "Students who scored above the class average marks in the majority of subjects",
            answer: () => getStudentsAboveBelowMajorityClassAverage("above")
        },
        {
            id: 70,
            question: "Student who scored above the class average marks in the majority of subjects",
            answer: () => getStudentsAboveBelowMajorityClassAverage("below")
        },
        {
            id: 71,
            question: "Subject in which the majority of students scored above the class average marks",
            answer: () => getSubjectsMajorityAboveBelowClassAverage("above")
        },
        {
            id: 72,
            question: "Subject in which the majority of students scored below the class average marks ",
            answer: () => getSubjectsMajorityAboveBelowClassAverage("below")
        },
        {
            id: 73,
            question: "Percentage of students who scored above the average marks of a specific student in each subject. ",
            answer: () => (<>{handleSelection("student")}
                {selectedStudent ? getPercentageAboveBelowStudentAverage(selectedStudent, "above") : ""}</>)

        },
        {
            id: 74,
            question: "Percentage of students who scored above the average marks of a specific student in each subject. ",
            answer: () => (<>{handleSelection("student")}
                {selectedStudent ? getPercentageAboveBelowStudentAverage(selectedStudent, "below") : ""}</>)
        },
        {
            id: 75,
            question: "Percentage of students who scored above the average marks of a specific student in atleastone subject. ",
            answer: () => (<>{handleSelection("student")}
                {selectedStudent ? getPercentageAboveBelowInAtLeastOneSubject(selectedStudent, "above") : ""}</>)

        },
        {
            id: 76,
            question: "Percentage of students who scored above the average marks of a specific student in atleastone subject ",
            answer: () => (<>{handleSelection("student")}
                {selectedStudent ? getPercentageAboveBelowInAtLeastOneSubject(selectedStudent, "below") : ""}</>)
        },
        {
            id: 77,
            question: "Student who scored above the average marks of a specific student in all subjects",
            answer: () => (<>{handleSelection("student")}
                {selectedStudent ? getStudentsAboveBelowInAllSubjects(selectedStudent, "above") : ""}</>)

        },
        {
            id: 78,
            question: "Student who scored above the average marks of a specific student in all subjects ",
            answer: () => (<>{handleSelection("student")}
                {selectedStudent ? getStudentsAboveBelowInAllSubjects(selectedStudent, "below") : ""}</>)
        },
        {
            id: 79,
            question: "subject in which the average marks are above the average marks of a specific student.",
            answer: () => (<>{handleSelection("student")}
                {selectedStudent ? getSubjectsAboveBelowStudentAverage(selectedStudent, "above") : ""}</>)

        },
        {
            id: 80,
            question: "subject in which the average marks are above the average marks of a specific student. ",
            answer: () => (<>{handleSelection("student")}
                {selectedStudent ? getSubjectsAboveBelowStudentAverage(selectedStudent, "below") : ""}</>)
        },
        {
            id: 81,
            question: "Subject in which the highest percentage of students scored above the average marks of a specific student.",
            answer: () => (<>{handleSelection("student")}
                {selectedStudent ? getSubjectsWithHighestLowestAboveBelowStudentAverage(selectedStudent, "highabove") : ""}</>)

        },
        {
            id: 82,
            question: "Subject in which the highest percentage of students scored below the average marks of a specific student ",
            answer: () => (<>{handleSelection("student")}
                {selectedStudent ? getSubjectsWithHighestLowestAboveBelowStudentAverage(selectedStudent, "highbelow") : ""}</>)
        },
        {
            id: 83,
            question: "Subject in which the lowest percentage of students scored above the average marks of a specific student",
            answer: () => (<>{handleSelection("student")}
                {selectedStudent ? getSubjectsWithHighestLowestAboveBelowStudentAverage(selectedStudent, "lowabove") : ""}</>)

        },
        {
            id: 84,
            question: "Subject in which the lowest percentage of students scored below the average marks of a specific student. ",
            answer: () => (<>{handleSelection("student")}
                {selectedStudent ? getSubjectsWithHighestLowestAboveBelowStudentAverage(selectedStudent, "lowbelow") : ""}</>)
        },
        {
            id: 85,
            question: "Percentage of students who scored above the average marks of the class in each subject",
            answer: () => getPercentageAboveBelowClassAverage("above")
        },
        {
            id: 86,
            question: "Percentage of students who scored below the average marks of the class in each subject",
            answer: () => getPercentageAboveBelowClassAverage("below")
        },
        {
            id: 87,
            question: "Percentage of students who scored above the average marks of the class in at least one subject",
            answer: () => getPercentageAboveBelowClassAverageatleastOne("above")
        },
        {
            id: 88,
            question: "Percentage of students who scored below the average marks of the class in at least one subject",
            answer: () => getPercentageAboveBelowClassAverageatleastOne("below")
        },

        {
            id: 89,
            question: "Students who score above the class average in all subject",
            answer: () => getStudentsAboveBelowClassAvgInallSub("above")
        },
        {
            id: 90,
            question: "Students who score below the class average in all subject",
            answer: () => getStudentsAboveBelowClassAvgInallSub("below")
        },
        {
            id: 91,
            question: "Student who scored above the average marks of the class in the majority of subject",
            answer: () => getStudentsAboveBelowMajorityClassAverageinSubject("above")
        },
        {
            id: 92,
            question: "Student who scored below the average marks of the class in the majority of subject",
            answer: () => getStudentsAboveBelowMajorityClassAverageinSubject("below")
        },
        {
            id: 93,
            question: "Subject in which the majority of students scored above the class average marks",
            answer: () => getSubjectsMajorityAboveBelowClassAverage("above")
        },
        {
            id: 94,
            question: "Subject in which the majority of students scored below the class average marks ",
            answer: () => getSubjectsMajorityAboveBelowClassAverage("below")
        },
        {
            id: 95,
            question: "Percentage of students who scored above the average marks of a specific student in the majority of subjects",
            answer: () => (<>{handleSelection("student")}
                {selectedStudent ? getStudentsAboveBelowMajoritySpecificStudent(selectedStudent, "above") : ""}</>)
        },
        {
            id: 96,
            question: "Percentage of students who scored below the average marks of a specific student in the majority of subjects ",
            answer: () => (<>{handleSelection("student")}
                {selectedStudent ? getStudentsAboveBelowMajoritySpecificStudent(selectedStudent, "below") : ""}</>)
        },
        {
            id: 97,
            question: "Display  the percentage of students who scored above the average marks of a specific student in the  subejcts in majority",
            answer: () => (<>{handleSelection("student")}
                {selectedStudent ? getStudentsAboveBelowMajoritySpecificStudent(selectedStudent, "above") : ""}</>)
        },
        {
            id: 98,
            question: "Display the percentage of students who scored below the average marks of a specific student in the  subjects  in majority",
            answer: () => (<>{handleSelection("student")}
                {selectedStudent ? getStudentsAboveBelowMajoritySpecificStudent(selectedStudent, "below") : ""}</>)
        },
        {
            id: 99,
            question: "Subject in which the highest percentage of students scored above the average marks of a specific student.",
            answer: () => (<>{handleSelection("student")}
                {selectedStudent ? getStudentsAboveBelowMajoritySpecificStudent(selectedStudent, "above") : ""}</>)
        },
        {
            id: 100,
            question: "Subject in which the highest percentage of students scored below the average marks of a specific student. ",
            answer: () => (<>{handleSelection("student")}
                {selectedStudent ? getStudentsAboveBelowMajoritySpecificStudent(selectedStudent, "below") : ""}</>)
        },

    ];