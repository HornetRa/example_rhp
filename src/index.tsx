import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HomeworkPage from './pages/homeworkPage/HomeworkPage'



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HomeworkPage/>
  </React.StrictMode>
);


reportWebVitals();
