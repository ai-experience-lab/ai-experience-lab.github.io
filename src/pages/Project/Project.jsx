import { useParams } from "react-router-dom";
import Chart2Experience from "./Chart2Experience/Chart2Experience";
import GroundedChart from "./GroundedChart/GroundedChart";
import InTalk from "./InTalk/InTalk";
import Lifegraphy from "./Lifegraphy/Lifegraphy";
import Skulpt from "./Skulpt/Skulpt";
import Gaze2Prompt from "./Gaze2Prompt/Gaze2Prompt";
import HistoChat from "./HistoChat/HistoChat";
import WrightHere from "./WrightHere/WrightHere";


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
        "WrightHere": <WrightHere/>
    }
    const props = pageProps[pid] || <div className="Project">Project not found</div>;
    return (
        <div className="Project">
            {props}
        </div>
    );
}

export default Project;