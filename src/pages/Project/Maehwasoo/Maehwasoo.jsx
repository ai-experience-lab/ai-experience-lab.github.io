import img1 from "./Maehwasoo1.png";


function Maehwasoo(){
    return(<div className="ProjectContent">
            <div className="Header">
                <div className="Date">
                    <div className="ProjectDateTitle">2025</div>
                </div>
                <div className="Title">Mae Hwa Soo</div>
                <div className="Subtitle">Interactive Curriculum Explorer for College Students</div>
                {/* 
                <div className="Researchers">
                    Seon Gyeom Kim, Jae Young Choi
                </div>
                <div className="links">
                    <a href="https://chart2experience.github.io/" target="_blank" rel="noreferrer" className="link">Project Website</a>
                </div>
                */}
                
            </div>
            <div className="MainContent">
                <div className="ImageBox">
                    <img src={img1} alt="" />
                </div>
                <div className="halfColumn">


                </div>
            </div>
        </div>
    )
}

export default Maehwasoo;
