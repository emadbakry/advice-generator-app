import logo from './logo.svg';
import './App.css';
import disc_icon from "./images/icon-dice.svg";
import pattern_icon from "./images/pattern-divider-mobile.svg";
import pattern_icon_desk from "./images/pattern-divider-desktop.svg";

function App() {
  return (
    <div>
    <div className="section">
      <div className="top">
        <h1>
          Advice #<span id="advice_counter">0</span>
        </h1>
        <div className="advice_container">
        <p id="advice">Loading...</p>
        </div>
      </div>
      <div className="bottom">
        <div className="line">
          <img src={pattern_icon} alt="icon" className="mob_img" />
          <img src={pattern_icon_desk} alt="icon" className="desk_img" />
        </div>
        <div className="generate_advice">
          <button type="button" id="generate_btn" className="content_loaded">
            <img src={disc_icon} alt="icon" />
          </button>
        </div>
      </div>
      </div>
      <div className='attr'>
      By <a href="https://emadcode.com">Emadcode.com</a>
      </div>
  </div>
  );
}

export default App;
