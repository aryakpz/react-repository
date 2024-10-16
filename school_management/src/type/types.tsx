
export type Mark = {
  subject: string;
  mark: number;
};

export type Student = {
  name: string;
  id: number;
  marks: Mark[];
};

export type ClassData = {
  name: string;
  teacherName: string;
  students: Student[];
  questions: Question[];
};


export type Question = {
  id: number;
  question: string;
  answer: () => JSX.Element | string
};

export type displayType = string;

export type StudentProps = {
  students: Student[];
  selectedStudent?: string;
  selectedSubject?: string;
  results?: number;
  displayType?: displayType;
};

export type QuestionsListProps = {
  selectedStudent: string | null;
  selectedMarks: number | null;
  selectedSubject: string | null;
  handleSelection: (type: "student" | "subject" | "mark") => JSX.Element;
};

