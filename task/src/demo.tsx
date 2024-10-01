type Student = {
    name: string;
    id: string;
    marks: {
        subject: string;
        mark: number;
    }[];
};

type ClassData = {
    name: string;
    teacherName: string;
    students: Student[];
};

const calculateAverageMarksForSubject = (subjectName: string, classObj: ClassData) => {
    let totalMarks = 0;
    let studentCount = 0;

    // Iterate through each student
    classObj.students.forEach(student => {
        // Find the subject marks for the given student
        const subjectMark = student.marks.find(mark => mark.subject.toLowerCase() === subjectName.toLowerCase());
        
        // If the student has marks for the subject, add them to the total
        if (subjectMark) {
            totalMarks += subjectMark.mark;
            studentCount++;
        }
    });

    // Calculate and print the average if there are students with marks for that subject
    if (studentCount > 0) {
        const averageMarks = totalMarks / studentCount;
        console.log(`The average marks for the subject "${subjectName}" is: ${averageMarks.toFixed(2)}`);
    } else {
        console.log(`No students have marks for the subject "${subjectName}".`);
    }
};

// Sample data
const classObj: ClassData = {
    name: "Class A",
    teacherName: "Mary",
    students: [
        {
            name: "Ravi",
            id: "101",
            marks: [
                { subject: "English", mark: 25 },
                { subject: "Maths", mark: 48 },
                { subject: "Physics", mark: 40 },
                { subject: "Chemistry", mark: 30 },
                { subject: "Computer", mark: 20 }
            ]
        },
        {
            name: "Aju",
            id: "102",
            marks: [
                { subject: "English", mark: 35 },
                { subject: "Maths", mark: 38 },
                { subject: "Physics", mark: 33 },
                { subject: "Chemistry", mark: 34 },
                { subject: "Computer", mark: 30 }
            ]
        },
        {
            name: "Mini SS",
            id: "103",
            marks: [
                { subject: "English", mark: 12 },
                { subject: "Maths", mark: 49 },
                { subject: "Physics", mark: 18 },
                { subject: "Chemistry", mark: 30 },
                { subject: "Computer", mark: 40 }
            ]
        },
        {
            name: "Binu",
            id: "104",
            marks: [
                { subject: "English", mark: 49 },
                { subject: "Maths", mark: 49 },
                { subject: "Physics", mark: 47 },
                { subject: "Chemistry", mark: 46 },
                { subject: "Computer", mark: 50 }
            ]
        }
    ]
};

// Example usage
calculateAverageMarksForSubject("Maths", classObj);
