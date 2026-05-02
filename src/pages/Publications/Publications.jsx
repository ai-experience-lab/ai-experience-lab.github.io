import "./Publications.scss";
import { FaAward } from "react-icons/fa";

function Publications() {
  return (
    <div className="page publications">
      <div className="pageTitle">Publications</div>

      <div className="subTitle">
        Check <em>Tak Yeon Lee</em>'s Google Scholar page for the latest and older (-2021) publications
        <div className="roundedButton">
          <a href="https://scholar.google.com/citations?hl=en&user=k2sjjrwAAAAJ&view_op=list_works&sortby=pubdate" target="_blank" rel="noreferrer">Google Scholar page</a>

        </div>
      </div>

      <div className="halfColumn">
        <div className="year">2026</div>

        <ul className="publicationList">
          <li>
            <div className="bib-item">
              <div className="title">
                SKULPT Yourself: A Data-Driven Facial Reconstruction Pipeline and Expert-Guided Evaluation Study
              </div>
              <div className="description">
                Full Paper @ FoundGen-Bio workshop, CVPR 2026
              </div>
              <div className="authors">
                Maida Aizaz, Khadija Rajabova, Seon Gyeom Kim, Won Joon Lee, Joon Yeol Ryu, Hyobong Jang, Soojung Park, Kiwan Jeon, Hyoung Suk Park, Sung Ho Kang, Tak Yeon Lee
              </div>
            </div>
          </li>
          <li>
            <div className="bib-item">
              <div className="title">
                Toward Flexible Psychiatric History-Taking and Visualization: Exploring Clinician Perspectives with Large Language Models
              </div>
              <div className="description">
                Full Paper @ CHI 2026
              </div>
              <div className="authors">
                Yugyeong Jung, Thu Hoang Anh Vo, <em>Hyun Seung Moon</em>, <em>Jae Young Choi</em>, Hyangkyeong Oh, Ujin Lee, Eunjoo Kim, <em>Tak Yeon Lee</em>, and Uichin Lee
              </div>
            </div>
          </li>
          <li>
            <div className="bib-item">
              <div className="title">
                Designing for Deliberate User Engagement with Distorted Information in Conversational Search
              </div>
              <div className="description">
                Full Paper @ CHI 2026
              </div>
              <div className="authors">
                Sohyun Park, <em>Tak Yeon Lee</em>, and Woohun Lee
              </div>
            </div>
          </li>
          <li>
            <div className="bib-item">
              <div className="title">
                Understanding How Creators Collaborate with Conversational Agents in Short-Form Video Production
              </div>
              <div className="description">
                Poster @ CHI 2026
              </div>
              <div className="authors">
                <em>Hyun Lee</em>, <em>Yoonjae Oh</em>, <em>Hyun Seung Moon</em>, and <em>Tak Yeon Lee</em>
              </div>
            </div>
          </li>
          <li>
            <div className="bib-item">
              <div className="title">
                Evaluating Visual Prompts with Eye-Tracking Data for MLLM–Based Human Activity Recognition
              </div>
              <div className="description">
                VisNotes @ PacificVis 2026
              </div>
              <div className="authors">
                <em>Jae Young Choi</em>, <em>Seon Gyeom Kim</em>, Hyungjun Yoon, Taeckyung Lee, <em>Donggun Lee</em>, <em>Jaeryung Chung</em>, Jihyung Kil, Ryan Rossi, Sung-Ju Lee, and <em>Tak Yeon Lee</em>
              </div>
            </div>
          </li>

        </ul>

        <div className="year">2025</div>
        <ul className="publicationList">
          <li>
            <div className="bib-item">
              <div className="title">
                <a href="https://youtu.be/cMDp2FHnG8k" target="_blank" rel="noreferrer">
                  SKULPT Yourself: A Data-Driven Facial Reconstruction Pipeline
                </a>
              </div>
              <div className="description">
                WiCV Workshop @ CVPR 2025
              </div>
              <div className="authors">
                <em>Maida Aizaz, Khadija Rajabova, Seon Gyeom Kim,</em> Won Joon Lee, Joon Yeol Ryu, Hyobong Jang, Soojung Park, Kiwan Jeon, Hyoung Suk Park, Sung Ho Kang, and <em>Tak Yeon Lee</em>
              </div>
            </div>
          </li>

          <li>
            <div className="bib-item">
              <div className="title">
                <a href="pdf/Gaze2Prompt__Turning_Eye_Tracking_Data_into_Visual_Prompts_for_Multimodal_LLMs.pdf" target="_blank" rel="noreferrer">
                  Gaze2Prompt: Turning Eye-Tracking Data into Visual Prompts for Multimodal LLMs
                </a>
              </div>
              <div className="description">
                Best Poster Award @ Ubicomp Companion 2025
                <span className="acknowledgement">
                  <FaAward className="award" />
                </span>
              </div>
              <div className="authors">
                <em>Jae Young Choi</em>, <em>Seon Gyeom Kim</em>, <em>Jaywoong Jeong</em>, Ryan Rossi, Jihyung Kil, and <em>Tak Yeon Lee</em>
              </div>
            </div>
          </li>
          <li>
            <div className="bib-item">
              <div className="title">
                <a href="https://groundedchartgeneration.github.io/" target="_blank" rel="noreferrer">
                  Grounded Generation of Embellished Bar Chart Ensuring Chart Integrity
                </a>
              </div>
              <div className="description">
                IEEE VIS 2025
              </div>
              <div className="authors">
                <em>Seon Gyeom Kim</em>, <em>Jae Young Choi</em>, Yuseung Lee, <em>Jaeryung Chung</em>, Ryan Rossi, Jihyung Kil, Eunyee Koh, and <em>Tak Yeon Lee</em>
              </div>
            </div>
          </li>
          <li>
            <div className="bib-item">
              <div className="title">
                <a href="" target="_blank" rel="noreferrer">
                  “HistoChat”: Leveraging AI-Driven Historical Personas for Personalized and Engaging Middle School History Education
                </a>
              </div>
              <div className="description">
                ACM CSCW 2025
              </div>
              <div className="authors">
                Yeon Soo Kim, <em>Hyun Seung Moon</em>, Sangsu Lee, and <em>Tak Yeon Lee</em>
              </div>
            </div>
          </li>
          <li>
            <div className="bib-item">
              <div className="title">
                <a href="https://ieeexplore.ieee.org/document/11021044" target="_blank" rel="noreferrer">
                  Chart-to-Experience: Benchmarking Multimodal LLMs for Predicting Experiential Impact of Charts
                </a>
              </div>
              <div className="description">
                Best Paper Award @ PacificVis 2025
                <span className="acknowledgement">
                  <FaAward className="award" />
                </span>
              </div>
              <div className="authors">
                <em>Seon Gyeom Kim</em>, <em>Jae Young Choi</em>, Ryan Rossi, Eunyee Koh, and <em>Tak Yeon Lee</em>
              </div>
            </div>
          </li>
          <li>
            <div className="bib-item">
              <div className="title">
                <a href="https://dl.acm.org/doi/full/10.1145/3706599.3719871" target="_blank" rel="noreferrer">
                  Bridging Bond Beyond Life: Designing VR Memorial Space with Stakeholder Collaboration via Research through Design
                </a>
              </div>
              <div className="description">
                Late-breaking-Work @ CHI 2025
              </div>
              <div className="authors">
                Heejae Bae, Nayeong Kim, Sehee Lee, and <em>Tak Yeon Lee</em>
              </div>
            </div>
          </li>

          <li>
            <div className="bib-item">
              <div className="title">
                <a href="https://dl.acm.org/doi/full/10.1145/3706599.3720212" target="_blank" rel="noreferrer">
                  LIGS: Developing an LLM-infused Game System for Emergent Narrative
                </a>
              </div>
              <div className="description">
                Late-breaking-Work @ CHI 2025
              </div>
              <div className="authors">
                <em>Jin Jeong</em>, and <em>Tak Yeon Lee</em>
              </div>
            </div>
          </li>

          <li>
            <div className="bib-item">
              <div className="title">
                <a href="https://dl.acm.org/doi/full/10.1145/3706599.3719932" target="_blank" rel="noreferrer">
                  WrightHere: Supporting Children's Creative Writing with AI-Infused Interactive 3D Environment
                </a>
              </div>
              <div className="description">
                Late-breaking-Work @ CHI 2025
              </div>
              <div className="authors">
                <em>Jaeryung Chung</em>, <em>Seon Gyeom Kim</em>, and <em>Tak Yeon Lee</em>
              </div>
            </div>
          </li>


        </ul>
        <div className="year">2024</div>
        <ul className="publicationList">
          <li>
            <div className="bib-item">
              <div className="title">
                <a href="https://aclanthology.org/2024.lrec-main.1193/" target="_blank" rel="noreferrer">
                  RECIPE4U: Student-ChatGPT Interaction Dataset in EFL Writing Education
                </a>
              </div>

              <div className="description">
                LREC-COLING 2024
              </div>
              <div className="authors">
                Jieun Han, Haneul Yoo, Junho Myung, <em>Minsun Kim</em>, <em>Tak Yeon Lee</em>, So-Yeon Ahn and Alice Oh
              </div>
            </div>
          </li>

          <li>
            <div className="bib-item">
              <div className="title">
                <a href="https://link.springer.com/chapter/10.1007/978-3-031-66336-9_44" target="_blank" rel="noreferrer">
                  Virfie: Enhancing Remote Togetherness with User-Created Scenarios for Virtual Group Selfie
                </a>
              </div>
              <div className="description">
                Intelligent Systems Conference (IntelliSys) 2024, Lecture Notes in Networks and Systems
              </div>
              <div className="authors">
                Hyerin Im, Taewan Kim, Eunhee Jung, Bonhee Ku, <em>Seungho Baek</em>, Youn-kyung Lim, Tek-Jin Nam, and <em>Tak Yeon Lee</em>
              </div>
            </div>
          </li>

          <li>
            <div className="bib-item">
              <div className="title">
                <a href="https://arxiv.org/abs/2405.19691" target="_blank" rel="noreferrer">
                  Designing Prompt Analytics Dashboards to Analyze Student-ChatGPT Interactions in EFL Writing
                </a>
              </div>
              <div className="description">
                arxiv
              </div>
              <div className="authors">
                <em>Minsun Kim</em>, <em>Seon Gyeom Kim</em>, Suyoun Lee, <em>Yoosang Yoon</em>, Junho Myung, Haneul Yoo, Hyunseung Lim, Jieun Han, Yoonsu Kim, So-Yeon Ahn, Juho Kim, Alice Oh, Hwajung Hong, and <em>Tak Yeon Lee</em>
              </div>
            </div>
          </li>

          <li>
            <div className="bib-item">
              <div className="title">
                <a href="https://ui.adsabs.harvard.edu/abs/2024arXiv241118049G/abstract" target="_blank" rel="noreferrer">
                  Understanding the Impact of Spatial Immersion in Web Data Stories
                </a>
              </div>
              <div className="description">
                arxiv e-print
              </div>
              <div className="authors">
                <em>Seon Gyeom Kim</em>, <em>Juhyeong Park</em>, Yutaek Song, Donggun Lee, Yubin Lee, Ryan Rossi, Jane Hoffswell, Eunyee Koh, and <em>Tak Yeon Lee</em>
              </div>
            </div>
          </li>
        </ul>

        <div className="year">2023</div>
        <ul className="publicationList">
          <li>
            <div className="bib-item">
              <div className="title">
                <a href="https://arxiv.org/abs/2307.08985" target="_blank" rel="noreferrer">
                  PromptCrafter: Crafting Text-to-Image Prompt through Mixed-Initiative Dialogue with LLM
                </a>
              </div>
              <div className="description">
                ICML 2023 workshop on AI&HCI
              </div>
              <div className="authors">
                <em>Seungho Baek</em>, Hyerin Im, Jiseung Ryu, <em>Juhyeong Park</em>, and <em>Takyeon Lee</em>
              </div>
            </div>
          </li>

          <li>
            <div className="bib-item">
              <div className="title">
                GUIDE for GAIED: Exploring Student-ChatGPT Dialogue in EFL Writing Education
              </div>
              <div className="description">
                GAIED Workshop @ NeurIPS 2023

              </div>
              <div className="authors">
                Jieun Han, Haneul Yoo, Junho Myung, <em>Minsun Kim</em>, <em>Tak Yeon Lee</em>, So-Yeon Ahn, and Alice Oh
              </div>
            </div>
          </li>

          <li>
            <div className="bib-item">
              <div className="title">
                <a href="https://www.computer.org/csdl/proceedings-article/bigdata/2023/10386099/1TUOAe1Br1K" target="_blank" rel="noreferrer">
                  Visual Insight Recommendation: From Ranking Insight Visualizations to Insight Types
                </a>
              </div>
              <div className="description">
                2023 IEEE International Conference on Big Data Industry and Government Program
              </div>
              <div className="authors">
                Camille Harris, Ryan Rossi, Sana Malik, Jane Hoffswell, Fan Du, <em>Tak Yeon Lee</em>, Eunyee Koh, and Handong Zhao
              </div>
            </div>
          </li>
          <li>
            <div className="bib-item">
              <div className="title">
                <a href="https://dl.acm.org/doi/abs/10.1145/3543873.3587302" target="_blank" rel="noreferrer">
                  SpotLight: Visual Insight Recommendation
                </a>
              </div>
              <div className="description">
                ACM Web Conference 2023
              </div>
              <div className="authors">
                Camille Harris, Ryan Rossi, Sana Malik, Jane Hoffswell, Fan Du, <em>Tak Yeon Lee</em>, Eunyee Koh, and Handong Zhao.
              </div>

            </div>
          </li>

          <li>
            <div className="bib-item">
              <div className="title">
                <a target="_blank" rel="noreferrer" href="https://dl.acm.org/doi/10.1145/3573051.3596200">
                  RECIPE: How to Integrate ChatGPT into EFL Writing Education
                </a>
              </div>
              <div className="description">
                L@S '23: Proceedings of the Tenth ACM Conference on Learning @ Scale
              </div>
              <div className="authors">
                Jieun Han, Haneul Yoo, Yoonsu Kim, Junho Myung, <em>Minsun Kim</em>, Hyunseung Lim, Juho Kim, <em>Tak Yeon Lee</em>, Hwajung Hong, So-Yeon Ahn, and Alice Oh
              </div>

            </div>
          </li>



        </ul>

        <div className="year">2022</div>
        <ul className="publicationList">
          <li>
            <div className="bib-item">
              <div className="title">
                <a target="_blank" rel="noreferrer" href="https://dl.acm.org/doi/full/10.1145/3538703">
                  Personalized visualization recommendation
                </a>
              </div>
              <div className="description">
                ACM Transactions on the Web
              </div>
              <div className="authors">
                Xin Qian, Ryan A Rossi, Fan Du, Sungchul Kim, Eunyee Koh, Sana Malik, <em>Tak Yeon Lee</em>, Nesreen K Ahmed
              </div>

            </div>
          </li>

          <li>
            <div className="bib-item">
              <div className="title">
                <a target="_blank" rel="noreferrer" href="https://nips.cc/virtual/2022/workshop/50008">
                  Is It Really Useful?: An Observation Study of How Designers Use CLIP-based Image Generation For Moodboards
                </a>
              </div>
              <div className="description">
                HCAI Workshop at NeurIPS 2022
              </div>
              <div className="authors">
                <em>Seungho Baek</em>, Hyerin Im, Uran Oh, Youn-kyung Lim, and <em>Tak Yeon Lee</em>
              </div>

            </div>
          </li>

          <li>
            <div className="bib-item">
              <div className="title">
                <a target="_blank" rel="noreferrer" href="https://dl.acm.org/doi/abs/10.1145/3491101.3519767">
                  Virfie: Virtual Group Selfie Station for Remote Togetherness
                </a>
              </div>
              <div className="description">
                Extended Abstracts @ CHI '22
              </div>
              <div className="authors">
                Hyerin Im, Taewan Kim, Eunhee Jung, Bonhee Ku, <em>Seungho Baek</em>, and <em>Tak Yeon Lee</em>
              </div>

            </div>
          </li>


        </ul>
        <div className="year">2021</div>
        <ul className="publicationList">

          <li>
            <div className="bib-item">
              <div className="title">
                <a target="_blank" rel="noreferrer" href="https://homes.cs.washington.edu/~leibatt/static/papers/zeng2021evaluation.pdf">
                  An Evaluation-Focused Framework for Visualization Recommendation Algorithms
                </a>
              </div>
              <div className="description">
                IEEE VIS 2021
                <span className="acknowledgement">
                  <FaAward className="award" />
                </span>
              </div>
              <div className="authors">
                Zehua Zeng, Phoebe Moh, Fan Du, Jane Hoffswell, <em>Tak Yeon Lee</em>, Sana Malik, Eunyee Koh, Leilani Battle
              </div>

            </div>
          </li>

          <li>
            <div className="bib-item">
              <div className="title">
                <a target="_blank" rel="noreferrer" href="https://terpconnect.umd.edu/~xinq/Figure_captioning_WWW21.pdf">
                  Generating Accurate Caption Units for Figure Captioning
                </a>

              </div>
              <div className="description">
                ACM Web Conference 2021

              </div>
              <div className="authors">
                Xin Qian, Eunyee Koh, Fan Du, Sungchul Kim, Joel Chan, Ryan A Rossi, Sana Malik, and <em>Tak Yeon Lee</em>
              </div>

            </div>
          </li>

          <li>
            <div className="bib-item">
              <div className="title">
                <a target="_blank" rel="noreferrer" href="https://orcax.github.io/publications/">
                  EXACTA: Explainable Column Annotation</a>
              </div>
              <div className="description">
                KDD '21: Proceedings of the 19th ACM SIGKDD international conference on Knowledge discovery and data mining (ACM) Association for Computing Machinery, New York, NY, USA, 2792–2804.

              </div>
              <div className="authors">
                Yikun Xian, Handong Zhao, <em>Tak Yeon Lee</em>, Sungchul Kim, Ryan Rossi, Zuohui Fu, Gerard de Melo and S. Muthukrishnan
              </div>

            </div>
          </li>

          <li>
            <div className="bib-item">
              <div className="title">
                <a target="_blank" rel="noreferrer" href="https://www.terpconnect.umd.edu/~xinq/Learning_to_Recommend_Vis_from_Data_KDD21.pdf">Learning to Recommend Visualizations from Data</a>
              </div>
              <div className="description">
                KDD '21: Proceedings of the 19th ACM SIGKDD international conference on Knowledge discovery and data mining (ACM) Association for Computing Machinery, New York, NY, USA, 2792–2804.

              </div>
              <div className="authors">
                Xin Qian, Ryan Rossi, Fan Du, Sungchul Kim, Eunyee Koh, Sana Malik, <em>Tak Yeon Lee</em>, and Joel Chan
              </div>

            </div>
          </li>

        </ul>

        <div className="year">Prior to 2021</div>
        <center>
          <p>Check <em>Tak Yeon Lee</em>'s <a href="https://scholar.google.com/citations?hl=en&user=k2sjjrwAAAAJ" target="_blank" rel="noreferrer">Google Scholar page</a> for publications before 2021</p>
        </center>
      </div>
    </div>
  );
}

export default Publications;