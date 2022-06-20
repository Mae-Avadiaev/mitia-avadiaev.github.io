import avatar from "../images/Avatar.JPG"
import mailIcon from "../images/mail-icon.png"
import inIcon from "../images/in-icon.png"


export default function Main(props) {
    return (
        <div className="container main">
            <img className="avatar" src={avatar} alt="avatar" />
            <div className="main--info">
                <h1 className="name">
                    Mitia Avadiaev
                </h1>
                <h2 className="occupation">
                    Junior Front-End Developer
                </h2>
                <p className="contact--me">
                   Contact me
                </p>
                <div className="buttons">
                    <a href={props.linksList.mail} target="_blank">
                        <button
                            className="button mail--icon"
                        >
                            <img
                                className="contact--icon"
                                src={mailIcon} alt="mail-icon" />
                            Email
                        </button>
                    </a>
                    <a href={props.linksList.linkedin} target="_blank">
                        <button
                            className="button linkedin--button"
                            // onClick={}
                        >
                            <img
                                className="contact--icon"
                                 src={inIcon} alt="linkedin-icon" />
                            LinkedIn
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}