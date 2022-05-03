import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Body from "./components/Body"
import Contacts from "./components/Contacts"
import {useState} from "react";

import quizzicalPreview from "./images/previews for site/quizzical.png";
import tenziesPreview from "./images/previews for site/tenzies-game.png";
import notesPreview from "./images/previews for site/the-notes.png";
import airbnbClonePreview from "./images/previews for site/airbnb-clone.png";
import myTravelBlogPreview from "./images/previews for site/my-travel.png";
import cub3dPreview from "./images/previews for site/cub3d.gif";
import philoPreview from "./images/previews for site/philo.gif";
import asmPreview from "./images/previews for site/asm.png";

export default function App() {

    const linksList = {
        mail: "mailto:mitya.avadyaev@gmail.com",
        linkedin: "https://www.linkedin.com/feed/",

        facebook: "https://www.facebook.com/MitiaAvadiaev/",
        instagram: "https://www.instagram.com/synccccccc/",
        github: "https://github.com/mitia-avadiaev",

        portfolioRepo: "https://github.com/mitia-avadiaev",
    }

    const content = [
        {
            title: "Quizzical game app",
            img: quizzicalPreview,
            description: "Select a category and difficulty of the questions. Try to answer as much as possible for 2 minutes! Compete with others in the office",
            list: [
                "Work with <strong>REST API</strong>",
                "Interesting system of answer <strong>click handling</strong>",
                "Saves name and score with <strong>local storage</strong>"
            ],
            url:"https://github.com/mitia-avadiaev"
        },
        {
            title: "Tenzies game app",
            img: tenziesPreview,
            description: "Hold all the dice of the same number ASAP! Click on a dice to hold it.",
            list: [
                "Works with <strong>npm </strong>confetti<strong> library</strong> at the end of a game",
                "Based on dice <strong>functional component</strong>",
                "Timer uses <strong>useEffect </strong>hook"
            ],
            url:"https://github.com/mitia-avadiaev"
        },
        {
            title: "The Notes app",
            img: notesPreview,
            description: "Create, delete and edit notes with markdown in the browser! Click preview to see final result",
            list: [
                "Works with <strong>npm</strong> markdown-notes <strong>library</strong>",
                "Bump recent note to the top",
                "Saves notes in <strong>local storage</strong>"
            ],
            url:"https://github.com/mitia-avadiaev"
        },
        {
            title: "AirBnB clone",
            img: airbnbClonePreview,
            description: "Static page with component elements",
            list: [
                "Upper photo gallery uses <strong>grid</strong>",
                "Uses 'event' <strong> functional component</strong>",
                "Reads <strong>data from file</strong>"
            ],
            url:"https://github.com/mitia-avadiaev"
        },
        {
            title: "My Travel Blog",
            img: myTravelBlogPreview,
            description: "Just a static page with React JS with my memories about Tel-Aviv, Cicily and Mallorca",
            url:"https://github.com/mitia-avadiaev"
        },
        {
            title: "Cub3d game",
            img: cub3dPreview,
            description: "A dynamic view inside the maze using Ray casting technique. This project is inspired by the world-famous eponymous 90's game, which was the first FPS ever. I used MiniLibX, it's a tiny graphics library which allowed me to do the most basic things like rendering colored pixels on the screen.",
            list: [
                "<strong>Low-level</strong> graphic technique implemented on <strong>C</strong>",
                "Reads a <strong>map file</strong> with the <strong>parser</strong>",
                "Write bytes to make a <strong>screen shot</strong>"
            ],
            url:"https://github.com/mitia-avadiaev"
        },
        {
            title: "Philosophers project",
            img: philoPreview,
            description: "Represents the solving of the Dining Philosophers Problem formulated by Edsger Dijkstra. Illustrates the ability of different parts of a program to be executed out of order, without affecting the final outcome",
            list: [
                "Low level <strong>concurrent algorithm</strong> implementation on <strong>C</strong>",
                "Works using <strong>multiple threads</strong> and <strong>processes</strong>",
                "Uses <strong>mutexes</strong> and <strong>semaphores</strong>"
            ],
            url:"https://github.com/mitia-avadiaev"
        },
        {
            title: "Asm library",
            img: asmPreview,
            description: "Small library of C functions implemented on Assembler, symbolic machine code",
            list: [
                "7 functions",
                "Uses ASMx86",
                "One of the <strong>most low-level</strong> programming language used"
            ],
            url:"https://github.com/mitia-avadiaev"
        }
    ]

    const [isDark, setIsDark] = useState(false)
    function handleThemeChange() {
        setIsDark(prevState => !prevState)
    }

    return (
        <div className={
            isDark ? "background" : "background light"
        }>
            <div className="bg--container"/>
            <Navbar
                handleThemeChange={handleThemeChange}
                linksList={linksList}
            />
            <div className="app">
                <Main linksList={linksList} />
                <Body content={content} />
                <Contacts linksList={linksList}/>
            </div>
        </div>
    );
}