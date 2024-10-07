import React, { useEffect, useState } from "react";

import '../pages/details.css'

import ShowStudents from "../component/showname";
import ShowStudentId from "../component/showid";
import StudentDisplay from "../component/subject/display";
import StudentSelection from "../component/subject/showsubject";
import StudentmarkDisplay from "../component/subject/displaymark";
import Studentaverage from "../component/subject/avgmark";
import Studenttotal from "../component/subject/totalmark";
import SubjectSelection from "../component/rank/selectsubject";
import TopScorerDisplay from "../component/rank/topscore";
import LowScorerDisplay from "../component/rank/lowscore";
import TopScorerstudent from "../component/rank/topstudent";
import LowScorerstudent from "../component/rank/loweststudent";
import HighestAverageDisplay from "../component/rank/high_average_sub";
import LowestAverageDisplay from "../component/rank/low_avg_sub";
import Dispoverall from "../component/subject/overallavg";
import Displayoverallmark from "../component/subject/overallmark";
import DisplayAvgAllSub from "../component/rank/DisplayAvgAllSub";
import Displaytotalallsub from "../component/rank/Dispaytotalallsub";
import Highsubjecttotal from "../component/rank/highsubjectmrk";
import Lowsubjecttotal from "../component/rank/lowsubjectmark";
import Studenthighavg from "../component/subject/StuHighAvg";
import Studentlowavg from "../component/subject/StuLowAvg";
import CountStudentsAboveMark from "../component/cutoff/CountAbovemark";
import CountStudentsBelowMark from "../component/cutoff/CountBelowmark";
import HighestPercentage from "../component/percentage/high_per_mark";
import LowestPercentage from "../component/percentage/low_per_mark";
import HighestSubjectPercentage from "../component/percentage/subject_high_per";
import LowestSubjectPercentage from "../component/percentage/subject_low_per";
import Toppercentagestudent from "../component/rank/toppercentage";
import Lowpercentagestudent from "../component/rank/lowpercentage";
import StudentPercentageHigh from "../component/subject/StudentSubjecthigh";
import SubAverageMarks from "../component/subject/Subjectavgmark";
import SubTotalMarks from "../component/subject/Subtotalmark";
import CutoffInAll from "../component/cutoff/cutoffinall";
import Highsubjectmark from "../component/subject/subject_highmark";

import Lowsubjectmark from "../component/subject/subejct_lowmark";
import ShowEachAvg from "../component/cutoff/showeachavg";
import ShowEachResult from "../component/cutoff/ShowEach";
import AboveAvgAllSub from "../component/percentage/Aboveavgall";
import BelowAvgAllSub from "../component/percentage/Belowavgall";
import BelowMajority from "../component/percentage/BelowMajority";
import AboveMajority from "../component/percentage/Abovemajority";
import AboveSubjectavg from "../component/subject/AboveSubjectavg";
import BelowSubjectavg from "../component/subject/BelowSubjectavg";
import BelowClassAverage from "../component/cutoff/showbelowavgclass";
import ShowAboveAvgClass from "../component/cutoff/Showaboveavgclass";
import AboveclassMajority from "../component/cutoff/ShowAbovClass";
import BelowClassMajority from "../component/cutoff/ShowBelowClass";
import SubjectAboveMajority from "../component/subject/Subjectbelowmajority";
import SubjectBelowMajority from "../component/subject/Subjectabovemajority";
import PercentageAboveAvg from "../component/percentage/PercentageAboveAvg";
import PercentageBelowAvg from "../component/percentage/PercentageBelowAvg";
import HighEachSubject from "../component/subject/HighEachSubject";
import LowEachSubject from "../component/subject/LowEachsubject";
import Studentaboveavg from "../component/cutoff/Studentaboveavg";
import Studentbelowavg from "../component/cutoff/Studentbelowavg";
import SubjectAboveClassAvg from "../component/subject/SubjectAboveClassAvg";
import SubjectBelowClassAvg from "../component/subject/SubjectBelowClassAvg";
import PercentageAboveEachSubject from "../component/percentage/PercentageAboveEachSubject";
import PercentageBelowEachSubject from "../component/percentage/PercentageBelowEachSubject";
import AboveAtleastOne from "../component/percentage/Aboveatleastone"
import BelowAtleastOne from "../component/percentage/Belowatleastone";
import PercentageAboveSpecificInMajority from "../component/percentage/AboveMajoritySubject";
import PercentageBelowSpecificInMajority from "../component/percentage/BelowMajoritySubejct";
import StudentPercentageLow from "../component/subject/StudentSubejctlow";
import Specificstudentpercentage from "../component/percentage/specificstudentpercentage";
import Specificstudentpercentagebelow from "../component/percentage/Specificstudentpercentagebelow";
import AvgAboveAtLeastOne from "../component/percentage/AvgAboveAtleastone";
import AvgBelowAtleastOne from "../component/percentage/Avgbelowatleastone";
import StudentsAboveAverage from "../component/student/AbovespecificStudent";
import StudentsBelowAverage from "../component/student/BelowspecificStudent";

import SubjectsAboveAverage from "../component/student/AboveSubjectavg";
import SubjectsBelowAverage from "../component/student/Belowsubjectavg";
import HighestPercentageSubjects from "../component/student/HighAvgStudent";
import LowestPercentageSubjects from "../component/student/LeastAvgStudent";
import LowestPercentageAboveAverage from "../component/student/AboveLowScore";
import LowestPercentageBelowAverage from "../component/student/BelowLowScore";
import PercentageAboveAverageInSubject from "../component/student/PercentageAboveAtleastone";
import PercentageBelowAverageInSubject from "../component/student/PercentageBelowatleastone";
import MarkSelection from "../component/cutoff/markselection";

interface AnswerSectionProps {
    displayType: string | null;
    classObj: any; 
    selectedStudent: any; 
    selectedSubjects: any; 
    selectedSubject: string; 
}

const AnswerSection: React.FC<AnswerSectionProps> = ({
    displayType,
    classObj,
    selectedStudent,
    selectedSubjects,
    selectedSubject,
}) => {
    return (
        <>
            {displayType === 'student' && classObj && (
                <StudentDisplay selectedStudent={selectedStudent} selectedSubjects={selectedSubjects} />
            )}

            {displayType === 'marks' && (
                <StudentmarkDisplay selectedStudent={selectedStudent} selectedSubjects={selectedSubjects} />
            )}

            {displayType === 'average' && classObj && (
                <Studentaverage students={classObj.students} selectedStudent={selectedStudent} />
            )}

            {displayType === 'total' && classObj && (
                <Studenttotal students={classObj.students} selectedStudent={selectedStudent} />
            )}

            {displayType === 'avgmark' && classObj && (
                <SubAverageMarks students={classObj.students} subject={selectedSubject} />
            )}

            {displayType === 'top' && classObj && (
                <TopScorerDisplay students={classObj.students} subject={selectedSubject} />
            )}

            {displayType === 'low' && classObj && (
                <LowScorerDisplay students={classObj.students} subject={selectedSubject} />
            )}

            {displayType === 'highper' && classObj && (
                <Toppercentagestudent students={classObj.students} subject={selectedSubject} />
            )}

            {displayType === 'lowper' && classObj && (
                <Lowpercentagestudent students={classObj.students} subject={selectedSubject} />
            )}

            {displayType === 'highsub' && classObj && (
                <StudentPercentageHigh students={classObj.students} selectedStudent={selectedStudent} />
            )}

            {displayType === 'lowsub' && classObj && (
                <StudentPercentageLow students={classObj.students} selectedStudent={selectedStudent} />
            )}

            {displayType === 'specificabove' && classObj && (
                <Specificstudentpercentage students={classObj.students} selectedStudent={selectedStudent} />
            )}

            {displayType === 'specificbelow' && classObj && (
                <Specificstudentpercentagebelow students={classObj.students} selectedStudent={selectedStudent} />
            )}

            {displayType === 'aboveone' && classObj && (
                <AvgAboveAtLeastOne students={classObj.students} selectedStudent={selectedStudent} />
            )}

            {displayType === 'belowone' && classObj && (
                <AvgBelowAtleastOne students={classObj.students} selectedStudent={selectedStudent} />
            )}

            {displayType === 'abovemajor' && classObj && (
                <PercentageAboveSpecificInMajority students={classObj.students} selectedStudent={selectedStudent} />
            )}

            {displayType === 'belowmajority' && classObj && (
                <PercentageBelowSpecificInMajority students={classObj.students} selectedStudent={selectedStudent} />
            )}
              {displayType === 'abovemajor1' && classObj && (
                <PercentageAboveSpecificInMajority students={classObj.students} selectedStudent={selectedStudent} />
            )}
              {displayType === 'belowmajority1' && classObj && (
                <PercentageBelowSpecificInMajority students={classObj.students} selectedStudent={selectedStudent} />
            )}


            {displayType === 'abovestd' && classObj && (
                <StudentsAboveAverage students={classObj.students} selectedStudent={selectedStudent} />
            )}

            {displayType === 'belowstd' && classObj && (
                <StudentsBelowAverage students={classObj.students} selectedStudent={selectedStudent} />
            )}

            {displayType === 'abovehigh' && classObj && (
                <HighestPercentageSubjects students={classObj.students} selectedStudent={selectedStudent} />
            )}

            {displayType === 'belowhigh' && classObj && (
                <LowestPercentageSubjects students={classObj.students} selectedStudent={selectedStudent} />
            )}

            {displayType === 'abovesubject' && classObj && (
                <SubjectsAboveAverage students={classObj.students} selectedStudent={selectedStudent} />
            )}

            {displayType === 'belowsubject' && classObj && (
                <SubjectsBelowAverage students={classObj.students} selectedStudent={selectedStudent} />
            )}

            {displayType === 'abovelow' && classObj && (
                <LowestPercentageAboveAverage students={classObj.students} selectedStudent={selectedStudent} />
            )}

            {displayType === 'belowlow' && classObj && (
                <LowestPercentageBelowAverage students={classObj.students} selectedStudent={selectedStudent} />
            )}

            {displayType === 'highsub2' && classObj && (
                <StudentPercentageHigh students={classObj.students} selectedStudent={selectedStudent} />
            )}

            {displayType === 'lowsub2' && classObj && (
                <StudentPercentageLow students={classObj.students} selectedStudent={selectedStudent} />
            )}
        </>
    );
};

export default AnswerSection;
