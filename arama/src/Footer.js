import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faInstagram , faLinkedin , faGithub  } from "@fortawesome/free-brands-svg-icons";
 


function FooterBox() {
  return <div className="footerDiv">
    <div className="iconsDiv"> 
    <FontAwesomeIcon className="icons" icon={faInstagram}/>
    <FontAwesomeIcon className="icons" icon={faLinkedin}/>
    <FontAwesomeIcon className="icons" icon={faGithub}/>
    </div>
    <p className="footerCopyright">@Copyright Burak İLDAM</p>
  </div>;
}

export default FooterBox;
