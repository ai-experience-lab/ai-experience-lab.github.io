import img1 from './korail1.png';
import img2 from './korail2.png';
import img3 from './korail3.png';

function Korail(){
    return(<div className="ProjectContent">
            <div className="Header">
                <div className="Date">
                    <div className="ProjectDateTitle">2021</div>
                </div>
                <div className="Title">Interactive Dashboard for High-Speed Train Safety Management</div>
                {/* <div className="Subtitle">SUBTITLE</div> */}
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
                <div className="ImageBox">
                    <img src={img2} alt="" />
                </div>
                <div className="ImageBox">
                    <img src={img3} alt="" />
                </div>
                <div className="halfColumn">


                </div>
            </div>
        </div>
    )
}

export default Korail;
