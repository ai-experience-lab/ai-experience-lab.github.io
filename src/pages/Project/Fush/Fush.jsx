import img1 from "./fush.png";

function Fush() {
    return (<div className="ProjectContent">
        <div className="Header">
            <div className="Date">
                <div className="ProjectDateTitle">2022-2023</div>
            </div>
            <div className="Title">Future Home for Family</div>
            {/* <div className="Subtitle">Supporting Children's Creative Writing with AI-Infused Interactive 3D Environment</div> */}
            <div className="Researchers">
            AEL in collaboration with many labs @ KAIST
            </div>

        </div>
        <div className="MainContent">
            <div className="halfColumn">
            <p>
                AEL worked on this project, Future Home for Family, as part of a large research team funded by TaeJae Research Foundation.
            </p>
            <div className="ImageBox">
                <img src={img1} alt="" />
            </div>
            </div>
        </div>
    </div>
    )
}

export default Fush;
