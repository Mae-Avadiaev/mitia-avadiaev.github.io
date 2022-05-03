import Slider from "react-slick"
import circleUnfilled from "../images/circle.png"
import circleFilled from "../images/circle_filled.png"
import {useState} from "react";

export default function Body(props) {

    let sliderRef
    const [imageIndex, setImageIndex] = useState(0)

    const carouselItemsElems = props.content.map((item, i) => {
        return (
            <div
                id={i}
                key={i}
                className={
                    i === imageIndex ?
                        "carousel--item active--item" :
                        "carousel--item"
                }
                onClick={() => carouselItemClickHandler(i)}
            >
                <a href={item.url} target="_blank">
                    <h4>{item.title}</h4>
                </a>
                <img
                    src={item.img}
                    className="carousel--item--preview"
                    alt="project preview"
                    // onClick={}
                />
                <img
                    src={item.img}
                    className="carousel--item--shadow"
                />
                {item.description &&
                    <p>{item.description}</p>
                }
                {item.list &&
                    <ul>
                        {item.list.map(liContent => (
                            <li dangerouslySetInnerHTML={{__html: liContent}}/>
                        ))}
                    </ul>
                }
            </div>
        )
    })

    function findArrow(arrow) {
        let transposedIndex

        if (arrow === "prev") {
            // console.log(imageIndex === 0)
            transposedIndex = imageIndex === 0 ?
                carouselItemsElems.length - 1
                :
                imageIndex - 1
            // console.log(document.getElementById("0"))
            return document.getElementById(transposedIndex)
        } else if (arrow === "next") {
            transposedIndex = imageIndex === carouselItemsElems.length - 1 ?
                0
                :
                imageIndex + 1
            return document.getElementById(transposedIndex)
        }
    }



    // function CustomPrevArrow() {
    //     // const prevSlide = findArrow("prev")
    //     return (
    //         <div className="carousel--arrow" id="prev--arrow"/>
    //     )
    // }
    //
    // function CustomNextArrow () {
    //     return (
    //         <div className="carousel--arrow" id="next--arrow"/>
    //     )
    // }

    // console.log(findArrow("left").outerHTML)
    // console.log(findArrow("right").outerHTML)
    // const prevArrow =
    // const nextArrow = <div className="arrow next--arrow"/>

    const sliderSettings = {
        infinite: true,
        lazyLoad: true,
        autoplay:true,
        autoplaySpeed: 4500,
        speed: 2000,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        arrows: false,
        // prevArrow: document.getElementById("prev--arrow"),
        // nextArrow: document.getElementById("next--arrow"),
        // prevArrow: <CustomPrevArrow />,
        // nextArrow: <CustomNextArrow />,
        beforeChange: (current, next) => setImageIndex(next),
        variableWidth: true,
        variableHeight: true
    }

    function carouselItemClickHandler(id) {
        if (imageIndex === 0 && id === carouselItemsElems.length - 1)
            sliderRef.slickPrev()
        else if (imageIndex === carouselItemsElems.length - 1 && id === 0)
            sliderRef.slickNext()
        else
            if (id < imageIndex)
                sliderRef.slickPrev()
            else if (id > imageIndex)
                sliderRef.slickNext()
    }

    function rate(amount) {
        let ratingElems = []

        for (let i = 0; i < 5; i++) {
            if (i < amount) {
                ratingElems.push(
                    <img
                        className="rating--circle circle--black"
                        src={circleFilled}
                    />
                )
            } else {
                ratingElems.push(
                    <img
                        className="rating--circle circle--white"
                        src={circleUnfilled}
                    />
                )
            }
        }
        return ratingElems
    }

    return (
        <div className="body">
            <section className="text--section about">
                <h3>
                    About
                </h3>
                <p>
                    I am a student of <strong>École 42</strong>.
                    It prepares specialists using the unique educational methodology:
                    without teachers, lectures or grades.
                    The methodology is based on <strong>collective learning</strong>.
                    School 42 gave me the skills of <strong>self-study</strong> and
                    <strong>project-orientation</strong>
                    and also made me a <strong>team player</strong>.
                </p>
            </section>
            <section className="text--section education--history">

                <h3>
                    Education
                </h3>
                <div className="education--history--container">
                    <table>
                        <tr>
                            <td>Scrimba - Front-End Career Path</td>
                            <td>2022 - ongoing</td>
                        </tr>
                        <tr>
                            <td>École 42 Paris (Moscow Campus)</td>
                            <td>2020 - ongoing</td>
                        </tr>
                        <tr>
                            <td>Coursera - Algorithms and Data Structures</td>
                            <td>2020 - 2020</td>
                        </tr>
                        <tr>
                            <td>Moscow School of New Cinema</td>
                            <td>2015 - 2017</td>
                        </tr>
                        <tr>
                            <td>Russian State University for the Humanities - PR</td>
                            <td>2012 - 2015</td>
                        </tr>
                    </table>
                </div>
            </section>
            <section className="text--section proficiency">
                <h3>
                    Hard skills
                </h3>
                <ul>
                    <li>In love with ReactJS 🧡</li>
                    <li>1,5 years of C, C++ (10+ projects), École 42</li>
                    <li>Complex search queries and database design, School 21</li>
                    <li>Advanced algorithms and data structures, Coursera</li>
                    <li>Project Management from Google, Coursera</li>
                    <li>English B2+</li>
                    <li>Writing skills in Russian and in English</li>
                </ul>
            </section>
            <section className="text--section proficiency">
                <h3>
                    Programming languages
                </h3>
                <div className="rating--table">
                    <div className="rating--row">
                        <p>TypeScript</p>
                        <div className="rating">{rate(0)}</div>
                    </div>
                    <div className="rating--row">
                        <p>JavaScript</p>
                        <div className="rating">{rate(1)}</div>
                    </div>
                    <div className="rating--row">
                        <p>HTML5</p>
                        <div className="rating">{rate(3)}</div>
                    </div>
                    <div className="rating--row">
                        <p>CSS</p>
                        <div className="rating">{rate(2)}</div>
                    </div>
                    <div className="rating--row">
                        <p>C</p>
                        <div className="rating">{rate(4)}</div>
                    </div>
                    <div className="rating--row">
                        <p>C++</p>
                        <div className="rating">{rate(3)}</div>
                    </div>
                    <div className="rating--row">
                        <p>Python</p>
                        <div className="rating">{rate(3)}</div>
                    </div>
                    <div className="rating--row">
                        <p>SQL</p>
                        <div className="rating">{rate(2)}</div>
                    </div>
                </div>
            </section>
            <section className="text--section">
                <h3>
                    Frameworks and utilities
                </h3>
                <div className="rating--table">
                    <div className="rating--row">
                        <p className="rating--title">React JS</p>
                        <div className="rating--value">{rate(2)}</div>
                    </div>
                    <div className="rating--row">
                        <p className="rating--title">Redux</p>
                        <div className="rating--value">{rate(0)}</div>
                    </div>
                    <div className="rating--row">
                        <p className="rating--title">Git</p>
                        <div className="rating--value">{rate(2)}</div>
                    </div>
                    <div className="rating--row">
                        <p className="rating--title">Jira</p>
                        <div className="rating--value">{rate(1)}</div>
                    </div>
                    <div className="rating--row">
                        <p className="rating--title">Django</p>
                        <div className="rating--value">{rate(1)}</div>
                    </div>
                </div>
            </section>
            <section className="text--section projects">
                <h3>
                    Projects
                </h3>
                <div className="carousel">
                    <Slider {...sliderSettings} ref={(ref) => sliderRef = ref}>
                        {carouselItemsElems}
                    </Slider>

                    {/*<div className="carousel--arrows">*/}
                    {/*    <div className="carousel--arrow" id="prev--arrow"/>*/}
                    {/*    <div className="carousel--arrow" id="next--arrow"/>*/}
                    {/*</div>*/}
                </div>
                {/*<CustomPrevArrow/>*/}
                {/*<CustomNextArrow/>*/}
            </section>
            <section className="text--section proficiency">
                <h3>
                    Soft skills
                </h3>
                <ul>
                    <li>Teamwork</li>
                    <li>Self-education</li>
                    <li>Adaptability, creativity</li>
                    <li>Autonomy</li>
                    <li>Emotional intelligence</li>
                </ul>
            </section>
            <section className="text--section">
                <h3>
                    Languages
                </h3>
                <div className="rating--table">
                    <div className="rating--row">
                        <p className="rating--title">English</p>
                        <div className="rating--value">{rate(5)}</div>
                    </div>
                    <div className="rating--row">
                        <p className="rating--title">Russian</p>
                        <div className="rating--value">{rate(5)}</div>
                    </div>
                    <div className="rating--row">
                        <p className="rating--title">Hebrew</p>
                        <div className="rating--value">{rate(1)}</div>
                    </div>
                    <div className="rating--row">
                        <p className="rating--title">Spanish</p>
                        <div className="rating--value">{rate(1)}</div>
                    </div>
                </div>
            </section>
            <section className="text--section interests">
                <h3>
                    Interests
                </h3>
                <p>
                    DJing and producing music, digital drawing and composing,
                    fashion, architecture, psychology.
                    In November 2021 I've made
                    the first attempt to develop the psychological startup.
                    Its main goals were to reduce the cost of a couple psychology
                    session by 6-7 times, to completely anonymize the session
                    and make it independent of an online meeting.
                </p>
            </section>
        </div>
    )
}