import facebookIcon from "../images/Facebook Icon.png"
import instagramIcon from "../images/Instagram Icon.png"
import githubIcon from "../images/GitHub Icon.png"


export default function Contacts(props) {
    return (
        <div>
            <div className="soc--icons">
                <a href={props.linksList.facebook}>
                    <img src={facebookIcon} alt="facebook--icon" />
                </a>
                <a href={props.linksList.instagram}>
                    <img src={instagramIcon} alt="instagram--icon" />
                </a>
                <a href={props.linksList.github}>
                    <img src={githubIcon} alt="github--icon" />
                </a>
            </div>
        </div>
    )
}