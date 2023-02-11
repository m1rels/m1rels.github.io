import "./style.css";
import Button from "./Button";
import profile from "./images/me.jpg";
import github from "./images/github.png";
import contact from "./images/email.png"

function App() {
  return (
    <div className='App'>
      <div className='Header'>
        <img className="Profile" src={profile}/>
        <h1>Mirel Korajac</h1>
        <h3>Passionate Programmer</h3>
      </div>
      <div className="Button_Container">
        <Button text="Github" image={github}/>
        <Button text="Contact" image={contact}/>
      </div>
    </div>
  );
}

export default App;
