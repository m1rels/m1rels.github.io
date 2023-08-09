import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Projects from "./routes/Projects";
import Nav from "./components/Nav";
import { HashRouter, Route, Routes } from "react-router-dom";
import { LanguageProvider } from "./LanguageContext";

export default function App() {
    return (
        <LanguageProvider>
            <HashRouter>
                <Nav/>
                <Routes>
                    <Route 
                    path="/"
                    element={<Home/>}
                    />
                    <Route 
                    path="/contact"
                    element={<Contact/>}
                    />
                    <Route 
                    path="/about"
                    element={<About/>}
                    />
                    <Route 
                    path="/projects"
                    element={<Projects/>}
                    />
                </Routes>
            </HashRouter>
        </LanguageProvider>
    )
}