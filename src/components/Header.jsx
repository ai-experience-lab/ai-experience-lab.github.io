//import logo_kaist from "../images/logo-kaist.png";
import React from 'react';
//import  { Link } from "react-router-dom";
import AelLogo from "./AelLogo.jsx";
import './Header.scss';

function Header({language, setLanguage}) {
    return (<header className="App-header">
        <div className="App-header-content">
            <div className="lab_title">
                <a href="/"><AelLogo/></a>
                {/* <span className="light">AI-Experience-Lab</span> */}
            </div>
            <div className="right">
                {/* 인공지능 경험 연구실 &nbsp; AI-Experience-Lab @  
                <a href="https://www.kaist.ac.kr" target="kaist"> KAIST</a> */}
                
            </div>
        </div>
    </header>);
}


export default Header;