import themeIcon from "../images/theme-icon.png"
import menuIcon from "../images/menu-icon.png"
import educationIcon from "../images/education.png"
import terminalIcon from "../images/Terminal-icon-Yosemite.png"
// import { Link } from "react-router-dom";

export default function Navbar(props) {
    return (
        <nav>
            <img
                className="navbar--icon navbar--theme--icon"
                src={themeIcon}
                alt="change theme icon"
                onClick={props.handleThemeChange}
            />
            <a href={props.linksList.portfolioRepo} target="_blank">
                <img
                    className="navbar--icon navbar--terminal--icon"
                    src={terminalIcon}
                    alt="macOS terminal icon"
                />
            </a>

        </nav>
    )
}