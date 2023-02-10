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

// All scripts for the advice-generator app
function run_script() {
  let advice_copy = '';
  const advice_text = document.getElementById('advice');
  const advice_counter = document.getElementById('advice_counter');
  async function gen_advice() {
    // show downloading icon
    document.body.classList.add('loading');
    await fetch("https://api.adviceslip.com/advice")
    .then((i) => i.json())
      .then((i) => {
        setTimeout(() => {
          if (advice_copy !== i.slip.advice) {
            advice_counter.textContent = Number(advice_counter.textContent) + 1;
            advice_text.textContent = i.slip.advice;
            // hide downloading icon
            document.body.classList.remove("loading");
            advice_copy = i.slip.advice;
          } else {
            console.log("same");
            gen_advice();
          }
      }, 200);
       });
  }
  gen_advice();
  const gen_btn = document.getElementById("generate_btn");
  gen_btn.addEventListener("click", () => {
    if (!document.body.classList.contains('loading')) {
      gen_advice()
    }
  });

} // End generating advice codes

// dont edit below
let my_interval = setInterval(() => {
  let content = document.querySelector("#generate_btn").className;
  console.log('content not yet')
  if (content === "content_loaded") {
    console.log('content loaded now');
    run_script();
    clearInterval(my_interval);
  }
  
}, 200);