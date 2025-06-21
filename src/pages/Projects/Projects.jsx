import iitp from "../../images/project_photo/iitp-crop.png";
import fush from "../../images/project_photo/fush.png";
import skully from "../../images/project_photo/skully.png";
import ids from "../../images/project_photo/ids.png";
import korail from "../../images/project_photo/korail.png";
//import image_sgd_all from "../../images/project_photo/SGD/sgd_all.jpg";
import maehwasoo from "../../images/project_photo/maehwasoo.png";
import chart2experience from "../../images/project_photo/c2e.jpg";
import grounded from "../../images/project_photo/grounded2.jpg";
import intalk from "../../images/project_photo/intalk.jpg";
import lifegraphy from "../../images/project_photo/lifegraphy.jpg";
import skulpt from "../../images/project_photo/skulpt.jpeg";
import gaze from "../../images/project_photo/gaze.png";
import histochat from "../../images/project_photo/histochat-square2.png";
import wrighthere from "../../images/project_photo/wrighthere.png";


import "./Projects.scss";
function Projects() {
  return (
    <div className="page projects">
      <div className="pageTitle">Projects</div>

      <div className="subTitle">
        We are working on various projects that aim to improve human experience with AI.
        <div className="roundedButton">
          Contact
        </div>
      </div>

      {/*  CURRENT PROJECTS ------------------------------------------------------------------------ */}
      <h3>Current Projects</h3>
      <ul className="projectList">
        <li className="project">
          <div className="image">
            <a href="#/project/Chart2Experience">
              <img src={chart2experience} alt="c2e_image"/>
            </a>
          </div>
          <div className="title">
            <a href="#/project/Chart2Experience">Chart-to-Experience: Benchmarking Multimodal LLMs for Predicting Experiential Impact of Charts</a>
            <span className="time">2025</span>
          </div>
        </li>

        <li className="project">
          <div className="image">
            <a href="#/project/GroundedChart">
              <img src={grounded} style={{ "objectPosition": "center center"}} alt=""/>
            </a>
          </div>
          <div className="title">
            <a href="#/project/GroundedChart">Grounded Generation of Embellished Bar Chart Ensuring Chart Integrity</a>
            <span className="time">2025</span>
          </div>
        </li>

        <li className="project">
          <div className="image">
            <a href="#/project/InTalk"><img src={intalk} style={{ "objectPosition": "center center", "objectFit": "contain" }} alt=""/></a>
          </div>
          <div className="title">
            <a href="#/project/InTalk">InTalk: Voice-Enabled Chatbot for Medical Pre-Consultation</a>
            <span className="time">2025</span>
          </div>
        </li>

        <li className="project">
          <div className="image">
          <a href="#/project/Lifegraphy"><img src={lifegraphy} alt=""/></a>
          </div>
          <div className="title">
            <a href="#/project/Lifegraphy">Lifegraphy: Chatting with Virtual Customer Personas
            </a>
            <span className="time">2024-2025</span>
          </div>
        </li>

        <li className="project">
          <div className="image">
          <a href="#/project/Skulpt"><img src={skulpt} style={{ "objectPosition": "center center" }} alt=""/>
          </a>
          </div>
          <div className="title">
          <a href="#/project/Skulpt">SKULPT: Facial Reconstruction from Human Skull
          </a>
            <span className="time">2024-2025</span>
          </div>
        </li>

        <li className="project">
          <div className="image">
          <a href="#/project/Gaze2Prompt"><img src={gaze} alt=""/></a>
          </div>
          <div className="title">
          <a href="#/project/Gaze2Prompt">Gaze2Prompt: Turning Eye-Tracking Data into Visual Prompts for Multimodal LLMs</a>
            <span className="time">2025</span>
          </div>
        </li>

        <li className="project">
          <div className="image">
          <a href="#/project/HistoChat"><img src={histochat} style={{ "objectPosition": "center center" }} alt=""/>
          </a>
          </div>
          <div className="title">
          <a href="#/project/HistoChat">HistoChat: Leveraging AI-Driven Historical Personas for Personalized and
            Engaging Middle School History Education</a>
            <span className="time">2025</span>
          </div>
        </li>

        <li className="project">
          <div className="image">
          <a href="#/project/WrightHere"><img src={wrighthere} style={{ "objectPosition": "center right" }} alt=""/>
          </a>
          </div>
          <div className="title">
          <a href="#/project/WrightHere">WrightHere: Supporting Children's Creative Writing with AI-Infused Interactive 3D Environment</a>
            <span className="time">2024-2025</span>
          </div>
        </li>
      </ul>

      {/*  PAST PROJECTS ------------------------------------------------------------------------ */}

      <h3>Past Projects</h3>
      <ul className="projectList">
        <li className="project">
          <div className="image">
          <a href="#/project/IITP"><img src={iitp} alt=""/>
          </a>
          </div>
          <div className="title">
            <a href="#/project/IITP">Data Visualization for Alleviating Stress of Emotional Labor Over the Phone
            </a>
            <span className="time">2022-2024</span>
          </div>
        </li>

        <li className="project">
          <div className="image">
          <a href="#/project/Fush"><img src={fush} alt=""/></a>
          </div>
          <div className="title">
          <a href="#/project/Fush">
            Future Home for Family
          </a>
            <span className="time">2022-2024</span>
          </div>
          {/* <div className="description">
            As part of a large research team at KAIST, AEL has been working on how future home should support family members.
            During the first year the team has led the System Design class, and created some interesting <a href='https://takyeon.notion.site/Term-Projects-ID403-a6407bf323bc4f0cb0e0496944a640bb'>design concepts</a>.
          </div> */}
          {/* <div className="contributors">
            <b>AEL in collaboration with many labs @ KAIST</b>
            <div className="sponsor"> Sponsored by <b>TaeJae Research Foundation (<a target='_blank' href='http://www.dbew.or.kr/'>태재연구재단</a>)</b></div>
          </div> */}

        </li>

        <li className="project">
          <div className="image">
          <a href="#/project/skully"><img src={skully} alt=""/></a>
          </div>
          <div className="title">
          <a href="#/project/skully">
            Interactive Gender Estimation of Human Skull
            </a>
            <span className="time">2022-2025</span>
          </div>
          {/* <div className="description">
            Gender estimation is the first step when an unidentified skull is found. Gender estimation is currently done by forensic experts. However, we developed a novel web appication that allows non-expert users to estimate gender of any skull with only three images. We trained a computer vision model from rendered images of 800 3D skull models, which exceeds state-of-the-art
          </div> */}
          {/* <div className="contributors">
            <b>SeungHo Baek</b>.
            <span className="sponsor"> Sponsored by <b>National Forensic Service (국립과학수사연구원)</b></span> 2022 - 2025
          </div> */}

        </li>

        <li className="project">
          <div className="image">
            <img src={ids} alt=""/>
          </div>
          <div className="title">
          <a href="#/project/IDS">
            AI-supported Tools for Authoring Immersive Data Storytelling
            </a>
            <span className="time">2021-2024</span>
          </div>
          {/* <div className="description">
            This project aims to build an AI-assisted  authoring tool of immersive data storytelling (IDS). Our tool focuses on maximizing the following benefits of IDS: (1) Meaningful and engaging composition of charts in 3D space, (2) Embodied interaction between presenter and charts, (3) Enabling collaborative data exploration in a virtual space. Our tool makes IDS authoring easier and more effective by automating low-level specifications and recommending semantically meaningful chart arrangements.
          </div>
          <div className="contributors">
            <b>Seon Gyeom Kim</b>, and <b>Tak Yeon lee</b>.
            <span className="sponsor"> Sponsored by <b>Adobe Research, San Jose, USA</b></span> 
            &nbsp; 2021-2024
          </div> */}

        </li>



        <li className="project">
          <div className="image">
          <a href="#/project/Korail">
            <img src={korail} alt=""/>
            </a>
          </div>
          <div className="title">
          <a href="#/project/Korail">
            Interactive Dashboard for High-Speed Train Safety Management
            </a>
            <span className="time">2021</span>
          </div>
          {/* <div className="contributors">
          <span className="sponsor"> Sponsored by <b>KORAIL, South Korea</b></span>
        </div>
        <div className="description">
          Sensor data is a critical source of information for high-speed train safety management. However, it is not easy to understand the overall status of the train from the raw sensor data. This project aims to design, implement, and deliver an interactive dashboard for train operators. Operators can use the dashboard to understand the overall status of the train, and to quickly identify abnormal situations.
        </div> */}

        </li>

        <li className="project">
          <div className="image">
          <a href="#/project/Maehwasoo">
            <img src={maehwasoo} alt=""  style={{ "objectPosition": "center center" }}/>
          </a>
          </div>
          <div className="title">
          <a href="#/project/Maehwasoo">
            MaeHwaSoo - Interactive Curriculum Explorer for College Students
            </a>
            <span className="time">2021</span>
          </div>
          {/* <div className="contributors">
          <b>Minwoo Kim</b>. Guided by <b>Seok-Hyoung Bae</b>, <b>Tak Yeon lee</b>.
          <span className="sponsor"> Sponsored by <b>AEL</b></span>
        </div>
        
        <div className="description">
          College students regularly spend time on checking their progress toward graduation.
          MaeHwaSoo is a web-based interactive platform for students to quickly check
          whether they are ready to graduate, and how many / what classes they need to take until graduation.
          This project was originally initiated by a undergraduate student Minwoo Kim, and now became an open-source
          project maintained and improved by other contributors in KAIST.
          <span className="link">
            <a href="https://graduate-kaist.herokuapp.com/" target="_blank" rel="noreferrer">Visit the site</a>
          </span>
        </div> */}

        </li>

      </ul>









      {/* <div className="project">
  <div className="title">
      Data-Driven Discovery for Design Opportunities in the Context of Consumer Electronics
  </div>
  <div className="contributors">
    <b>Tak Yeon lee</b>. 
    <span className="sponsor"> Sponsored by <b>LG Electronics, South Korea</b></span>
  </div>
  <div className="time">
    March 2021 - September 2021
  </div>
  <div className="description">
    Data-driven discovery is a global trend for any business, and 
    consumer electronics is not an exception. This project aims to design, implement, and deliver 
    an interactive dashboard for in-house designers. Designers can use the dashboard to understand
    their customers' lifestyle and preferences on consumer electronics.  
    This is a six-month consulting project that prof Tak Yeon Lee did with LG Electronics. 
  </div>
</div> */}


    </div>
  );
}

export default Projects;