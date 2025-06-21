import { useParams, Link } from "react-router-dom";
import Chart2Experience from "./Chart2Experience/Chart2Experience";
import GroundedChart from "./GroundedChart/GroundedChart";
import InTalk from "./InTalk/InTalk";
import Lifegraphy from "./Lifegraphy/Lifegraphy";
import Skulpt from "./Skulpt/Skulpt";
import Gaze2Prompt from "./Gaze2Prompt/Gaze2Prompt";
import HistoChat from "./HistoChat/HistoChat";
import WrightHere from "./WrightHere/WrightHere";

import IITP from "./IITP/IITP";
import Fush from "./Fush/Fush";
import Skully from "./Skully/Skully";
import IDS from "./IDS/IDS";
import Maehwasoo from "./Maehwasoo/Maehwasoo";
import Korail from "./Korail/Korail";

import "./Project.scss";

function Project() {
    const { pid } = useParams();
    const pageProps = {
        "Chart2Experience": <Chart2Experience/>,
        "GroundedChart": <GroundedChart/>,
        "InTalk": <InTalk/>,
        "Lifegraphy": <Lifegraphy/>,
        "Skulpt": <Skulpt/>,
        "Gaze2Prompt": <Gaze2Prompt/>,
        "HistoChat": <HistoChat/>,
        "WrightHere": <WrightHere/>,
        "IITP": <IITP/>,
        "Fush": <Fush/>,
        "skully": <Skully/>,
        "IDS": <IDS/>, 
        "Korail": <Korail/>,
        "Maehwasoo": <Maehwasoo/>,
    }
    const props = pageProps[pid] || <div className="Project">Project not found</div>;
    return (
        <div className="Project">
            <div className="backButton">
                <Link to="/projects" className="back-link">
                    ← Back to Projects
                </Link>
            </div>
            {props}
        </div>
    );
}

export default Project;