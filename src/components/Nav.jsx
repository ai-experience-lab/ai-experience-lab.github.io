import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Nav.scss";
// import { BsToggleOff, BsToggleOn } from "react-icons/bs";
// import { RiEnglishInput } from "react-icons/ri";
// import { TbAlphabetKorean } from "react-icons/tb";

function Nav({language, setLanguage}) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // 컴포넌트 마운트 후 애니메이션 시작
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);
        
        return () => clearTimeout(timer);
    }, []);
    return (<div className={`nav ${isVisible ? 'nav-visible' : ''}`}>
        {/* <div className="title_kr">
            AI<br/>
            Experience<br/>
            Lab<br/>
            인공지능<br/>
            경험<br/>
            연구실<br/>
        </div> */}
        {/* <div className="languageToggle">
            {language === "en" ?
                <span className="language" onClick={() => setLanguage("kr")}>
                    <BsToggleOff/><RiEnglishInput className="currentLanguage"/> 
                </span> :
                <span className="language" onClick={() => setLanguage("en")}>
                    <BsToggleOn/><TbAlphabetKorean className="currentLanguage"/>
                </span>
            }
        </div> */}
        <ul>
            <li className="no-select"><Link to="/about">About us</Link></li>
            <li className="no-select"><Link to="/people">People</Link></li>
            <li className="no-select"><Link to="/projects">Projects</Link></li>
            <li className="no-select"><Link to="/publications">Publications</Link></li>
            <li className="no-select"><Link to="/courses">Courses</Link></li>
            <li className="no-select"><Link to="/gallery">Gallery</Link></li>
            <li className="no-select"><Link to="/join">Join</Link></li>
            <li className="no-select"><Link to="/news">News</Link></li>
        </ul>
        
        
    </div>)
}

export default Nav;