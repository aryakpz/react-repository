import React from "react";


type Lowtotalprops={
    students:{
        name:string;
        marks:{
            subject:string;
            mark:number
        }[];
    }[];
}

const Lowsubjecttotal:React.FC<Lowtotalprops> =({students})=>{


        const subjecttotal: { [key: string]: number } = {};

        students.forEach(student => {
            student.marks.forEach(mark => {
                const subject = mark.subject;

                if (!subjecttotal[subject]) {
                    subjecttotal[subject] = 0;
                }
                subjecttotal[subject] += mark.mark;
            });
        });

        let lowestSubject: string = '';
        let lowestTotal: number = Infinity;

        for (const subject in subjecttotal) {
             
            if (subjecttotal[subject] < lowestTotal) {
                lowestTotal = subjecttotal[subject];
                lowestSubject = subject;
            }
        }

   
            return(
                <p>
                    <span>Lowest Mark:</span> {lowestSubject}: {lowestTotal}
                </p>
            );
        }

        export default Lowsubjecttotal