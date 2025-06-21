import img1 from "./iitp1.png";
import img2 from "./iitp2.png";

function IITP() {
    return (<div className="ProjectContent">
        <div className="Header">
            <div className="Date">
                <div className="ProjectDateTitle">2022-2024</div>
            </div>
            <div className="Title">Data Visualization for Alleviating Stress of Emotional Labor Over the Phone</div>
            {/* <div className="Subtitle">Supporting Children's Creative Writing with AI-Infused Interactive 3D Environment</div> */}
            <div className="Researchers">
            AEL in collaboration with many labs @ KAIST, Yonsei University, and industry
            </div>
            {/* 
                <div className="links">
                    <a href="https://chart2experience.github.io/" target="_blank" className="link">Project Website</a>
                </div>
                */}

        </div>
        <div className="MainContent">
            <div className="halfColumn">
            <p>
                As part of a large research team, AEL has been working on an IITP-funded project. The project's goal is to alleviate the stress of emotional workers at call centers. Our team's responsibility is to visualize digital twin of emotional workers' work-related stress factors.
            </p>
            <div className="ImageBox">
                <img src={img1} alt="" />
            </div>
            <div className="ImageBox">
                <img src={img2} alt="" />
            </div>
            </div>
        </div>
    </div>
    )
}

export default IITP;
