import React, { useEffect, useState } from "react";
import "../pages/details.css";

import StudentDisplay from "../src/component/studentdetails/display";

import StudentmarkDisplay from "../src/component/studentdetails/displaymark";
import Studentaverage from "../src/component/studentdetails/avgmark";
import Studenttotal from "../src/component/studentdetails/totalmark";

import TopScorerDisplay from "../src/component/studentdetails/topscore";
import LowScorerDisplay from "../src/component/studentdetails/lowscore";
import Toppercentagestudent from "../src/component/studentdetails/toppercentage";
import Lowpercentagestudent from "../src/component/studentdetails/lowpercentage";
import StudentPercentageHigh from "../src/component/studentdetails/StudentSubjecthigh";
import SubAverageMarks from "../src/component/studentdetails/Subjectavgmark";
import PercentageAboveSpecificInMajority from "../src/component/studentdetails/AboveMajoritySubject";
import PercentageBelowSpecificInMajority from "../src/component/studentdetails/BelowMajoritySubejct";
import StudentPercentageLow from "../src/component/studentdetails/StudentSubejctlow";
import Specificstudentpercentage from "../src/component/studentdetails/specificstudentpercentage";
import Specificstudentpercentagebelow from "../src/component/studentdetails/Specificstudentpercentagebelow";
import AvgAboveAtLeastOne from "../src/component/studentdetails/AvgAboveAtleastone";
import AvgBelowAtleastOne from "../src/component/studentdetails/Avgbelowatleastone";
import StudentsAboveAverage from "../src/component/studentdetails/AbovespecificStudent";
import StudentsBelowAverage from "../src/component/studentdetails/BelowspecificStudent";

import SubjectsAboveAverage from "../src/component/studentdetails/AboveSubjectavg";
import SubjectsBelowAverage from "../src/component/studentdetails/Belowsubjectavg";
import HighestPercentageSubjects from "../src/component/studentdetails/HighAvgStudent";
import LowestPercentageSubjects from "../src/component/studentdetails/LeastAvgStudent";
import LowestPercentageAboveAverage from "../src/component/studentdetails/AboveLowScore";
import LowestPercentageBelowAverage from "../src/component/studentdetails/BelowLowScore";

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
