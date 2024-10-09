
import React from "react";

type Overallmarkprops = {
    students: {
        name: string;
        marks: {
            subject: string;
            mark: number;
        }[];
    }[];
}

const Displayoverallmark: React.FC<Overallmarkprops> = ({ students }) => {

    let total=0
    let count=0
    students.forEach(student =>{
        student.marks.forEach(mark =>{
            total += mark.mark;
            count ++
        })           
    })
       
    return (  
      <p>
        <span>Overall Mark :</span>
        {total}
      </p>
    )
}


export default Displayoverallmark