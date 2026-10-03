
import "./News.scss";
import { Link } from "react-router-dom";
import statImg from "../Project/STAT/STAT_Cover.jpg";
import megagonImg from "../../images/news_images/sgkim_megagon_internship.jpg";
import maldoImg2 from "../../images/lab_photo_resize/20260510_2.jpg";
import foundgenPdf from "../../images/news_images/foundgen-2026-poster.pdf";
import skulptImg from "../../images/project_photo/skulpt.jpeg";
import daejeonImg from "../../images/news_images/daejeon_education_committee.jpg";
import jaeyoungGradImg from "../../images/news_images/jaeyoung_graduation.png";
import pokebowlImg1 from "../../images/news_images/pokebowl_1.jpg";
import pokebowlImg2 from "../../images/news_images/pokebowl_2.jpg";
import pokebowlImg3 from "../../images/news_images/pokebowl_3.jpg";

function News() {
  return (
    <div className="page news">
      <div className="pageTitle">News</div>
      <div className="halfColumn">
        <table className="newsTable">
          <tbody>
            <tr>
              <td className="newsDate">Oct. 2026</td>
              <td>
                Two works from our lab were accepted to <b>NeurIPS 2026</b>:
                <ul style={{ margin: "6px 0 0 18px", padding: 0 }}>
                  <li style={{ marginBottom: "4px" }}>
                    Our work investigating how people interpret <b>multi-agent coordination</b> received two workshop paper acceptances:
                    <ul style={{ margin: "4px 0 0 18px", padding: 0 }}>
                      <li style={{ marginBottom: "4px" }}>
                        <i>"Human-Grounded Representations for Neuro-Symbolic Monitoring of Multi-Agent Coordination"</i>, accepted to the <a href="https://nemo.semantic.review/" target="_blank" rel="noreferrer"><b>NEmo Workshop</b></a>.
                      </li>
                      <li>
                        <i>"Same Behavior, Different Feedback: Interpreting Multi-Agent Coordination Beyond Performance Metrics"</i>, accepted to the <a href="https://iab-agents.github.io/" target="_blank" rel="noreferrer"><b>1st Workshop on Interpreting Agent Behavior (IAB)</b></a>.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="https://youtu.be/k8-NVI_kL6A" target="_blank" rel="noreferrer"><i>"Transcendent Contact: Expanding Creative Agency Through Hallucination"</i></a>, an extension of a <b>Design Project 1</b> course project, was selected for the <b>Creative AI Track</b> and will be exhibited at NeurIPS 2026. <a href="https://transcendentcontact.vercel.app/" target="_blank" rel="noreferrer"><b>View the book</b></a>.
                    <div className="newsEmbed">
                      <iframe
                        src="https://www.youtube-nocookie.com/embed/k8-NVI_kL6A"
                        title="Transcendent Contact: Expanding Creative Agency Through Hallucination"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="newsDate">Sep. 2026</td>
              <td>
                We welcome <b>Yoonjung Lee</b> (Korea University, Industrial Design) and <b>Yoonji Son</b> (Ewha Womans University, AX) to the AI Experience Lab as new M.S. students.
              </td>
            </tr>
            <tr>
              <td className="newsDate">Aug. 2026</td>
              <td>
                <div>Jaeyoung Choi completed his M.S. degree and will be joining <b>Texas A&M University (TAMU)</b> as a Ph.D. student in Computer Science. We wish him all the best in his future journey!</div>
                <div className="newsImage large">
                  <img src={jaeyoungGradImg} alt="Jaeyoung Choi Graduation" />
                </div>
              </td>
            </tr>
            <tr>
              <td className="newsDate">Aug. 2026</td>
              <td>
                <div>The AI Experience Lab members gathered for a hands-on lab meeting social, preparing and enjoying homemade <b>Poké Bowls</b> together.</div>
                <div className="newsImages">
                  <img src={pokebowlImg1} alt="Poké Bowl Lab Meeting 1" />
                  <img src={pokebowlImg2} alt="Poké Bowl Lab Meeting 2" />
                  <img src={pokebowlImg3} alt="Poké Bowl Lab Meeting 3" />
                </div>
              </td>
            </tr>
            <tr>
              <td className="newsDate">Aug. 2026</td>
              <td>
                Two poster papers were accepted to <b>ACM UIST 2026</b>:
                <ul style={{ margin: "6px 0 0 18px", padding: 0 }}>
                  <li style={{ marginBottom: "4px" }}>
                    <b>DioramaCraft</b>: <i>"A Human-AI Workflow for Transforming Personal Photographs into Layered Paper Theater Dioramas"</i> (by Guhn Lee, Heejin Kim, Jiyoon Lee, Donggun Lee, and Tak Yeon Lee) — developed as a project in <b>Design Project 1</b>.
                  </li>
                  <li>
                    <b>Hangulo</b>: <i>"Demonstrating Workflow-Embedded AI Support for Korean Lettering Implementation"</i> (by Hyewon Lee and Tak Yeon Lee) — developed as part of <b>Undergraduate Graduation Research</b>.
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="newsDate">Jul. 2026</td>
              <td>
                <div>Our project <b>STAT</b> was recognized as a <b>Red Dot Design Award Finalist</b>.</div>
                <div className="newsImage">
                  <Link to="/project/STAT">
                    <img src={statImg} alt="STAT Project" />
                  </Link>
                </div>
              </td>
            </tr>
            <tr>
              <td className="newsDate">Jul. 2026</td>
              <td>
                We launched a KEITI-funded (Ministry of Environment) AI Rapid Commercialization Project on <b>AI agents for automated carbon accounting</b>, developing explainable multi-agent systems for Scope 3 emissions estimation, verification, and sustainability reporting.
              </td>
            </tr>
            <tr>
              <td className="newsDate">Jun. 2026</td>
              <td>
                <div>Ph.D. student <b>Seon Gyeom Kim</b> joined <a href="https://megagon.ai/" target="_blank" rel="noreferrer"><b>Megagon Labs</b></a> (Mountain View, CA) as a Summer Research Intern.</div>
                <div className="newsImage">
                  <img src={megagonImg} alt="Megagon Labs Internship" />
                </div>
              </td>
            </tr>
            <tr>
              <td className="newsDate">Jun. 2026</td>
              <td>
                <div>Prof. <b>Tak Yeon Lee</b> joined the Daejeon Metropolitan Office of Education Transition Committee to help shape the future of AI education and digital learning.</div>
                <div className="newsImage large">
                  <img src={daejeonImg} alt="Daejeon Education Transition Committee" />
                </div>
              </td>
            </tr>
            <tr>
              <td className="newsDate">Jun. 2026</td>
              <td>
                <div>The AI Experience Lab held its annual retreat at <b>Maldo Island</b>, enjoying team-building activities, fishing, and discussions on future research directions.</div>
                <div className="newsImages">
                  <img src={maldoImg2} alt="Maldo Island Retreat 2" />
                </div>
              </td>
            </tr>
            <tr>
              <td className="newsDate">May 2026</td>
              <td>
                <div>Our full paper <b>SKULPT Yourself</b> (<i>"SKULPT Yourself: A Data-Driven Facial Reconstruction Pipeline and Expert-Guided Evaluation Study"</i>) was accepted and presented at the <b>CVPR 2026 Workshop on Foundation and Generative Models in Biometrics (FoundGen-Bio)</b> — developed by Maida Aizaz and Khadija Rajabova as part of their <b>Individual Research</b>.</div>
                <div className="newsImage">
                  <Link to="/project/Skulpt">
                    <img src={skulptImg} alt="SKULPT Yourself Project" />
                  </Link>
                </div>
              </td>
            </tr>
            <tr>
              <td className="newsDate">May 2026</td>
              <td>
                Our lab joined the <b>AI Science Hub</b> program to develop AI technologies for <b>digital phenotyping and mental health</b>, combining multimodal behavioral sensing with intelligent AI agents.
              </td>
            </tr>
            <tr>
              <td className="newsDate">May 2026</td>
              <td>
                Our lab launched a government-funded research project with <b>Dohwa Engineering</b> on <b>AI-powered digital twins for smart farms</b>, developing human-in-the-loop and multi-agent AI systems for intelligent agricultural management.
              </td>
            </tr>
            <tr>
              <td className="newsDate">Apr. 2026</td>
              <td>
                Our lab joined the <b>IITP-funded AI Leading Talent Development Program</b> in collaboration with <b>Elice</b>, advancing research and education on AI agents, foundation models, and AI-native software development.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default News;
