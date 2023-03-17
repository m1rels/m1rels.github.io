import Nav from "../components/Nav";
import "../style.css";

const projects = [
    {
        heading: "From Web to App-development",
        description:"I now have a fundamental basis of React Native and built my first mobile app called DoneWithIt. For this I used Expo-CLI.",
        url: "https://github.com/m1rels/done-with-it-app",
        url_2: "htps://github.com/m1rels/done-with-it-backend"
    },
    {
        heading: "Into backend-development",
        description:"When I got quite familiar with the frontend, I took a look at the backend and learned the concept of Node.js. So this is how I came to make Node.js applications with React.",
        url: "https://github.com/m1rels/formel-1",
        url_2 : "https://github.com/m1rels/formel-1-backend"
    },
    {
        heading: "Starting over with React",
        description:"Now I had a good knowledge about the basic and advanced techniques in HTML, CSS and JavaScript. So I decided to focus on JS-Frameworks like React. As my first react application I built the functionality of a shopping cart for adding and deleting products from your shopping cart.",
        url: "https://github.com/m1rels/shopping-cart",
    },
    {
        heading: "Complex browser games",
        description:"Later on I went on with writing browser games but with more complexity and logic.",
        url: "https://github.com/m1rels",
    },
    {
        heading: "js-experiments",
        description:"After I have learned the basics of HTML, CSS and JavaScript, I started writing my very first programs. Mostly it were simple games running in a browser such as rock-paper-scissors or a quiz game.",
        url: "https://github.com/m1rels/js-experiments",
    },
    {
        heading: "Websites with HTML, CSS and JavaScript",
        description:"After I have learned the basics of HTML, CSS and JavaScript, I started writing my first professional responsive websites.",
        url: "https://github.com/m1rels/moshify",
    },
   

]

export default function Blog() {
    return (
        <div className="App">
            <Nav />
            <h1 className="Blog__heading">My Blog</h1>
            <div className="Project__section">
            {projects.map((project) => 
                 <ul className="Project__item">
                    <li>
                     <h2 className="Project__heading">{project.heading}</h2>
                     <p className="Project__text">{project.description}</p>
                     <p className="Project__text">Take a look at the corresponding code:</p>
                    <ul>
                        <li className="Project__text"><a>{project.url}</a></li>
                        {(() => {if (project.url_2) {
                            return <li className="Project__text"><a>{project.url_2}</a></li>
                            } else {
                            return null;
                            }
                        })()}
                     </ul>
                    </li>
                </ul>
            )}
            </div>
        </div>
    )
}