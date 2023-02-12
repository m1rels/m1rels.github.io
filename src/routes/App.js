import "../style.css";
import Button from "../Button";
import profile from "../images/me.jpg";
import github from "../images/github.png";
import contact from "../images/email.png"

function App() {
  return (
    <div className='App'>
      <div className='Header'>
        <img className="Profile" src={profile} alt="Profile picture of Mirel Korajac"/>
        <h1>Mirel Korajac</h1>
        <h3>Passionate Programmer</h3>
      </div>
      <div className="Button_Container">
        <Button link="https://github.com/m1rels" text="Github" image={github} string="Github Icon"/>
        <Button link="contact" text="Contact" image={contact} string="Email Icon"/>
      </div>
    </div>
  );
}

export default App;
