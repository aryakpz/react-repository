import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// const findhighmark = (subject) => {
//   return classObj.students.reduce((highest, student) => {
//       const mark = student.marks.find(m => m.subject === subject);
//       if (mark && (highest === null || mark.mark > highest.mark)) {
//           return { name: student.name, mark: mark.mark };
//       }
//       return highest; 
//   }, null);
// };