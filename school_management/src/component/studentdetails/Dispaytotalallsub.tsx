import React from "react";

type Totalprops = {
    students: {
        name: string;
        marks: {
            subject: string;
            mark: number
        }[];
    }[];
}

const Displaytotalallsub: React.FC<Totalprops> = ({ students }) => {
 
    const subjects: { [key: string]: { totalmarks: number; count: number } } = {}

    students.forEach(student => {
        student.marks.forEach(mark => {
            const subject = mark.subject;
            if (!subjects[subject]) {
                subjects[subject] = { totalmarks: 0, count: 0 }
            }
            subjects[subject].totalmarks += mark.mark;
            subjects[subject].count += 1
        })
    })

    const total = Object.keys(subjects).map(subject => {
        const { totalmarks, count } = subjects[subject];
        const total = count > 0 ? totalmarks : 0;
        return (
            <li>
                {subject} : {total}
            </li>
        );

    });

    return (
        <p><span>Total Mark</span>
            <ul>
                {total}
            </ul>
        </p>       

    )
}

export default Displaytotalallsub; 