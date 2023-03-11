import "../style.css";
import html from "../images/html-5.png";
import css from "../images/css-3.png";
import javascript from "../images/js.png";


const skills = [
    {
        id: 1,
        title: "HTML",
        image: html,
        description: "HTML is one of my strongest skills, and I take great pleasure in creating well-structured and semantic markup. I am familiar with all the core HTML tags and attributes, and understand how to use them effectively to create clear and accessible content. Whether it's designing a layout from scratch or working with a pre-existing template, I am able to implement HTML code that is both clean and efficient. Additionally, I keep up-to-date with the latest developments in HTML, ensuring that my knowledge is always current and relevant.",
    },
    {
        id: 2,
        title: "CSS",
        image: css,
        description: "I am quite proficient in CSS and enjoy designing visually appealing and responsive user interfaces. With my strong understanding of CSS properties and selectors, I am able to create custom styles and layouts that elevate the overall aesthetic of any website or application. Whether it's implementing animations, transitions, or complex grid systems, I take great pride in my ability to bring a designer's vision to life through CSS.",
    },
    {
        id: 3,
        title: "JavaScript",
        image: javascript,
        description: "I have a solid understanding of JavaScript and enjoy working with its dynamic and versatile features. Whether it's creating interactive elements on a website, implementing complex logic, or manipulating the DOM, I am well-versed in a variety of JavaScript frameworks and libraries. I also have experience with front-end frameworks like React and Vue, which allow me to build scalable and efficient web applications. With my strong problem-solving skills and attention to detail, I am able to write clean and optimized JavaScript code that enhances the functionality and user experience of any web project.",
    }
]

export default function About() {

    return(
        <div className="App">
            <div className="About__section">
                <h1>About</h1>
                <p>Hi, I'm Mirel Korajac! I am a 16-year-old programmer skilled in both front-end and back-end development. With a passion for coding, I have dedicated countless hours to honing my craft and perfecting my skills. In addition to my technical prowess, I enjoy staying active and participate in various sports activities during my free time. When not coding or breaking a sweat, you can find me relaxing with friends and indulging in my favorite movies and TV shows.</p>
            </div>
            <div className="Skills__section">
                <h1 className="Skills__heading">My skills</h1>
                <div className="Skills__container">
                    {skills.map((card) => 
                        <div className="Card" key={card.id}>
                            <div className="Card__header">
                                <h2>{card.title}</h2>
                                <img className="Card__image" src={card.image} />
                            </div>
                            <div className="Card__content">
                                <p>{card.description}</p>
                            </div>
                        </div>
                            )
                    }
                </div>
            </div>
        </div>
    )
}