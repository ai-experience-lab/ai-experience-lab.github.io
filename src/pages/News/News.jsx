
import "./News.scss";
import { Link } from "react-router-dom";
import statImg from "../Project/STAT/STAT_Cover.jpg";
import megagonImg from "../../images/news_images/sgkim_megagon_internship.jpg";
import maldoImg1 from "../../images/lab_photo_resize/20260510_1.jpg";
import maldoImg2 from "../../images/lab_photo_resize/20260510_2.jpg";
import foundgenPdf from "../../images/news_images/foundgen-2026-poster.pdf";
import skulptImg from "../../images/project_photo/skulpt.jpeg";
import daejeonImg from "../../images/news_images/daejeon_education_committee.jpg";

function News() {
  return (
    <div className="page news">
      <div className="pageTitle">News</div>
      <div className="halfColumn">
        <table className="newsTable">
          <tbody>
            <tr>
              <td className="newsDate">Sep. 2026</td>
              <td>
                We welcome <b>Yoonjung Lee</b> (Korea University, Industrial Design) and <b>Yoonji Son</b> (Ewha Womans University, AX) to the AI Experience Lab as new M.S. students.
              </td>
            </tr>
            <tr>
              <td className="newsDate">Aug. 2026</td>
              <td>
                Two posters (<i>DioramaCraft</i> and <i>Hangulo</i>) were accepted to <b>ACM UIST 2026</b>.
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
                <div>Our paper <i>SKULPT Yourself</i> was accepted to a <b>CVPR 2026 Workshop</b>.</div>
                <div className="newsImage">
                  <Link to="/project/Skulpt">
                    <img src={skulptImg} alt="SKULPT Yourself Project" />
                  </Link>
                </div>
              </td>
            </tr>
            <tr>
              <td className="newsDate">Jun. 2026</td>
              <td>
                <div>The AI Experience Lab held its annual retreat at <b>Maldo Island</b>, enjoying team-building activities, fishing, and discussions on future research directions.</div>
                <div className="newsImages">
                  <img src={maldoImg1} alt="Maldo Island Retreat 1" />
                  <img src={maldoImg2} alt="Maldo Island Retreat 2" />
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