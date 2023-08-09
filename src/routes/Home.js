import "../style.css";
import Button from "../components/Button";
import profile from "../images/me.jpg";
import github from "../images/github.png";
import contact from "../images/email.png";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function Home() {



  return (
    <div>
      <div data-aos="zoom-in" className="App__section">
      <div className='Header'>
        <img className="Profile" src={profile} alt="Profile of Mirel Korajac"/>
        <h1>Mirel Korajac</h1>
        <h2>Passionate Programmer</h2>
      </div>
      <div className="Button_Container">
        <Button link="https://github.com/m1rels" text="Github" image={github} string="Github Icon"/>
        <Button link="contact" text="Contact" image={contact} string="Email Icon"/>
      </div>
    </div>
    </div>
  );
}

AOS.init();


