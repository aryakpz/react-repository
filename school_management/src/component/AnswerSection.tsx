import React, { useEffect, useState } from "react";
import "../pages/details.css";

import StudentDisplay from "../component/subject/display";

import StudentmarkDisplay from "../component/subject/displaymark";
import Studentaverage from "../component/subject/avgmark";
import Studenttotal from "../component/subject/totalmark";

import TopScorerDisplay from "./studentdetails/topscore";
import LowScorerDisplay from "./studentdetails/lowscore";
import Toppercentagestudent from "./studentdetails/toppercentage";
import Lowpercentagestudent from "./studentdetails/lowpercentage";
import StudentPercentageHigh from "../component/subject/StudentSubjecthigh";
import SubAverageMarks from "../component/subject/Subjectavgmark";
import PercentageAboveSpecificInMajority from "./studentdetails/AboveMajoritySubject";
import PercentageBelowSpecificInMajority from "./studentdetails/BelowMajoritySubejct";
import StudentPercentageLow from "../component/subject/StudentSubejctlow";
import Specificstudentpercentage from "./studentdetails/specificstudentpercentage";
import Specificstudentpercentagebelow from "./studentdetails/Specificstudentpercentagebelow";
import AvgAboveAtLeastOne from "./studentdetails/AvgAboveAtleastone";
import AvgBelowAtleastOne from "./studentdetails/Avgbelowatleastone";
import StudentsAboveAverage from "./studentdetails/AbovespecificStudent";
import StudentsBelowAverage from "./studentdetails/BelowspecificStudent";

import SubjectsAboveAverage from "./studentdetails/AboveSubjectavg";
import SubjectsBelowAverage from "./studentdetails/Belowsubjectavg";
import HighestPercentageSubjects from "./studentdetails/HighAvgStudent";
import LowestPercentageSubjects from "./studentdetails/LeastAvgStudent";
import LowestPercentageAboveAverage from "./studentdetails/AboveLowScore";
import LowestPercentageBelowAverage from "./studentdetails/BelowLowScore";

type AnswerSectionProps = {
  displayType: string | null;
  classObj: any;
  selectedStudent: any;
  selectedSubjects: any;
  selectedSubject: string;
};

const AnswerSection: React.FC<AnswerSectionProps> = ({
  displayType,
  classObj,
  selectedStudent,
  selectedSubjects,
  selectedSubject,
}) => {
  return (
    <>
      {displayType === "student" && classObj && (
        <StudentDisplay
          selectedStudent={selectedStudent}
          selectedSubjects={selectedSubjects}
        />
      )}

      {displayType === "marks" && (
        <StudentmarkDisplay
          selectedStudent={selectedStudent}
          selectedSubjects={selectedSubjects}
        />
      )}

      {displayType === "average" && classObj && (
        <Studentaverage
          students={classObj.students}
          selectedStudent={selectedStudent}
        />
      )}

      {displayType === "total" && classObj && (
        <Studenttotal
          students={classObj.students}
          selectedStudent={selectedStudent}
        />
      )}

      {displayType === "avgmark" && classObj && (
        <SubAverageMarks
          students={classObj.students}
          subject={selectedSubject}
        />
      )}

      {displayType === "top" && classObj && (
        <TopScorerDisplay
          students={classObj.students}
          subject={selectedSubject}
        />
      )}

      {displayType === "low" && classObj && (
        <LowScorerDisplay
          students={classObj.students}
          subject={selectedSubject}
        />
      )}

      {displayType === "highper" && classObj && (
        <Toppercentagestudent
          students={classObj.students}
          subject={selectedSubject}
        />
      )}

      {displayType === "lowper" && classObj && (
        <Lowpercentagestudent
          students={classObj.students}
          subject={selectedSubject}
        />
      )}

      {displayType === "highsub" && classObj && (
        <StudentPercentageHigh
          students={classObj.students}
          selectedStudent={selectedStudent}
        />
      )}

      {displayType === "lowsub" && classObj && (
        <StudentPercentageLow
          students={classObj.students}
          selectedStudent={selectedStudent}
        />
      )}

      {displayType === "specificabove" && classObj && (
        <Specificstudentpercentage
          students={classObj.students}
          selectedStudent={selectedStudent}
        />
      )}

      {displayType === "specificbelow" && classObj && (
        <Specificstudentpercentagebelow
          students={classObj.students}
          selectedStudent={selectedStudent}
        />
      )}

      {displayType === "aboveone" && classObj && (
        <AvgAboveAtLeastOne
          students={classObj.students}
          selectedStudent={selectedStudent}
        />
      )}

      {displayType === "belowone" && classObj && (
        <AvgBelowAtleastOne
          students={classObj.students}
          selectedStudent={selectedStudent}
        />
      )}

      {displayType === "abovemajor" && classObj && (
        <PercentageAboveSpecificInMajority
          students={classObj.students}
          selectedStudent={selectedStudent}
        />
      )}

      {displayType === "belowmajority" && classObj && (
        <PercentageBelowSpecificInMajority
          students={classObj.students}
          selectedStudent={selectedStudent}
        />
      )}
      {displayType === "abovemajor1" && classObj && (
        <PercentageAboveSpecificInMajority
          students={classObj.students}
          selectedStudent={selectedStudent}
        />
      )}
      {displayType === "belowmajority1" && classObj && (
        <PercentageBelowSpecificInMajority
          students={classObj.students}
          selectedStudent={selectedStudent}
        />
      )}

      {displayType === "abovestd" && classObj && (
        <StudentsAboveAverage
          students={classObj.students}
          selectedStudent={selectedStudent}
        />
      )}

      {displayType === "belowstd" && classObj && (
        <StudentsBelowAverage
          students={classObj.students}
          selectedStudent={selectedStudent}
        />
      )}

      {displayType === "abovehigh" && classObj && (
        <HighestPercentageSubjects
          students={classObj.students}
          selectedStudent={selectedStudent}
        />
      )}

      {displayType === "belowhigh" && classObj && (
        <LowestPercentageSubjects
          students={classObj.students}
          selectedStudent={selectedStudent}
        />
      )}

      {displayType === "abovesubject" && classObj && (
        <SubjectsAboveAverage
          students={classObj.students}
          selectedStudent={selectedStudent}
        />
      )}

      {displayType === "belowsubject" && classObj && (
        <SubjectsBelowAverage
          students={classObj.students}
          selectedStudent={selectedStudent}
        />
      )}

      {displayType === "abovelow" && classObj && (
        <LowestPercentageAboveAverage
          students={classObj.students}
          selectedStudent={selectedStudent}
        />
      )}

      {displayType === "belowlow" && classObj && (
        <LowestPercentageBelowAverage
          students={classObj.students}
          selectedStudent={selectedStudent}
        />
      )}

      {displayType === "highsub2" && classObj && (
        <StudentPercentageHigh
          students={classObj.students}
          selectedStudent={selectedStudent}
        />
      )}

      {displayType === "lowsub2" && classObj && (
        <StudentPercentageLow
          students={classObj.students}
          selectedStudent={selectedStudent}
        />
      )}
    </>
  );
};

export default AnswerSection;
