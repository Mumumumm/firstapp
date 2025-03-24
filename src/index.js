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
// 컴퍼넌트는 태그를 만들어서 리턴해주는 함수<??? />
// 태그를 호출하기 때문에 태그모양으로 만들어짐
// App.js 보면 바로 return 되어있다()안에 태그를 모두 반환 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
