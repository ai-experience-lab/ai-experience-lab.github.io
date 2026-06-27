import dear_if from "../../images/project_photo/dear_if.jpg";
import roomiti from "./ID503/2026/id503-1.png";
import dioramacraft from "./ID503/2026/id503-2.png";
import mori from "./ID503/2026/id503-3.png";
import saw from "./ID503/2026/id503-4.png";
import realm from "./ID503/2026/id503-5.png";
import "./Courses.scss";

function Courses() {
  return (
    <div className="page courses">
      <div className="pageTitle">Courses</div>
      <div className="subTitle">
        The courses listed below are taught by Tak Yeon Lee at the department of Industrial Design at KAIST.
        <div className="roundedButton">
          <a href="https://id.kaist.ac.kr/education" target="_blank" rel="noreferrer">Education @ ID KAIST</a>

        </div>
      </div>
      <div className="">
        <h3>ID503 Design Project 1
          &nbsp;&nbsp;&nbsp;<a href="https://www.notion.so/takyeon/ID503-Design-Project-I-7c59f9d47d944bf887ab0e3636d104f3" target="_blank" rel="noreferrer">
            <span className="year">2021 Spring, 2026 Spring</span></a>
        </h3>
        <p>
          A wide range of AI technology, such as chatbots, robotics, and computer vision, are becoming key elements of novel products and services. However, it is still unclear for designers how to make those technology valuable, accessible, sustainable, and usable to our society. This course aims to train master-level students how to bridge the gap between real-world needs and AI technology (There will be a narrower theme, which will be decided before the semester begins). Students are expected to be familiar with undergraduate level design methods and skills. Each group of students will (1) create a functioning prototype that integrates various AI technology (e.g., APIs, libraries, products) via vibe coding, (2) produce illustrative videos of design concept and walkthrough, and (3) make presentation boards in a quality of international design award submission.
        </p>
        <div className="class_year">
          <p>
            <b>2026 Spring Projects</b>
          </p>
          <div className="projects">
            <div className="class_project">
              <img src={roomiti} alt="" />
              <div className="project_description">
                <b>RoomiTi</b> is a multi-agent simulation system that helps university students prepare for dormitory life by simulating realistic roommate interactions. Based on four lifestyle dimensions, it generates personalized roommate agents, enabling users to explore potential conflicts, improve communication, and build empathy before living together. User evaluations showed that the system effectively increased self-awareness and preparedness for shared living.
                <br /><a href="https://drive.google.com/file/d/1n8fnyS-zV-Lvw8Le-lkRGo1tZgwIdzkO/view?usp=drive_link" target="_blank"> Milestone Presentation</a>
              </div>
            </div>
            <div className="class_project">
              <img src={dioramacraft} alt="" />
              <div className="project_description">
                <b>Diorama Craft</b> is an AI-powered design tool that transforms personal memories into buildable paper dioramas. By combining text and photographs, the system automatically reconstructs memorable scenes into layered designs for physical assembly while keeping user interaction simple with optional depth control. Through iterative prototyping, the project demonstrates how generative AI can bridge digital memory reconstruction and tangible craft.
                <br /><a href="https://drive.google.com/file/d/1xw8RqZn3FeRPGrzVshLkIzUvHsHyo2v7/view?usp=drive_link" target="_blank"> Milestone Presentation</a>
              </div>
            </div>
            <div className="class_project">
              <img src={mori} alt="" />
              <div className="project_description">
                <b>"Mori"</b> is an AI-guided VR art therapy service designed to help children and adolescents (ages 11–16) externalize, explore, and regulate complex emotions. By transforming emotions into tangible, interactive 3D objects, the service enables users to gain agency and control over their emotional experiences.
                <br /><a href="https://drive.google.com/file/d/1meHvQRWbWEAciTUtMOvd_2KwZWf4pcB8/view?usp=drive_link" target="_blank"> Milestone Presentation</a>
              </div>
            </div>
            <div className="class_project">
              <img src={saw} alt="" />
              <div className="project_description">
                <b>The Transcendent Contact exhibition</b> (organized by the Saw Art Museum in New Caledonia) is a conceptual project that challenges the traditional perception of reality and explores the role of artificial intelligence (AI). While presented as a museum exhibition, the project reveals that it is entirely fabricated using generative AI.
                <br /><a href="https://drive.google.com/file/d/13QbDJ_yDucJBlNCey0VnPmIkvh5oXev6/view?usp=drive_link" target="_blank"> Milestone Presentation</a>
              </div>
            </div>
            <div className="class_project">
              <img src={realm} alt="" />
              <div className="project_description">
                <b>REALM</b> is an immersive, location-based storytelling platform that utilizes digital technology to transform real-world environments into interactive escape room experiences. Developed as part of an ID503 Design Project, the platform allows users to move beyond the physical constraints and scaling difficulties of traditional, single-location escape rooms by bringing the experience directly to the user's devices
                <br /><a href="https://drive.google.com/file/d/1q4IslszABmWM7gqPeST6t163EN5o_V97/view?usp=drive_link" target="_blank"> Milestone Presentation</a>
              </div>
            </div>
          </div>

        </div>

        <h3>ID.49902 Designing Artificial Human Behavior
          &nbsp;&nbsp;&nbsp;
          <span className="year">Spring 2025 - Current</span>
        </h3>
        <p>
          In this course, students will experience the process of designing artificial models of the human mind, personality, and experiences using large language models (LLMs), developing them into innovative product/service features, and evaluating their outcomes. The 16-week program combines theory, individual assignments and exercises, and group projects. Through theoretical learning, students will master the principles and characteristics of LLMs while exploring various issues such as AI usability, ethics, security, and evaluation methods through case studies and research papers. Individual assignments and exercises focus on teaching prompt engineering and prototyping skills. Finally, group projects (3-4 members) aim to analyze user challenges and needs within a specific domain and propose AI-driven product/service features to address these issues. The process includes the following steps:
        </p>
        <ol>
          <li>Implementing core features using manual prompts.</li>
          <li>Advancing the solution by applying techniques such as Retrieval-Augmented Generation (RAG), Chain-of-Thought (CoT), or fine-tuning.</li>
          <li>Completing a prototype, including a user interface.</li>
          <li>Conducting evaluations.</li>
        </ol>
        <p>
          This course equips students with the knowledge to use LLMs as a design material, providing hands-on experience in designing, developing, and evaluating innovative product/service features.</p>


        <h3>ID403 System Design
          &nbsp;&nbsp;&nbsp;<a href="https://takyeon.notion.site/ID403-System-Design-c1bb4fc93e5342cfbb8fa32d9fb58fea" target="_blank" rel="noreferrer">
            <span className="year">Spring 2022 - Spring 2025</span></a>
        </h3>
        <p>
          ID403 System Design completes the undergraduate curriculum of the Industrial Design department. The entire course focuses on conducting a design project where each project group consists of 4-5 students.  We assume that students have equipped most (if not all) design skills and knowledge for conducting user research, visual communication, building low and high-fidelity prototypes, and evaluate design outcomes. Historically the course had a specific theme for each year. We expect the final outcomes will not only look great but also provide innovative solutions and/or intriguing (or even provocative) messages to the audience. There is no predefined set of lectures, but we will have several sessions for sharing ideas and feedbacks. While we have no plan to get feedback from external audiences, each group will weekly present their progress to the instructor, teaching assistants, and other groups - and get feedback from them.</p>
        <div className="class_year">
          <p><b>2022. Home for Future Family</b>&nbsp; Supported by TaeJae Foundation &nbsp;
            <a className="term_projects" href="https://takyeon.notion.site/Term-Projects-ID403-a6407bf323bc4f0cb0e0496944a640bb" target="_blank" rel="noreferrer"> See other projects</a>
          </p>
          <div className="image" style={{ margin: "20px auto", width: "70%", }}>
            <a href="https://ifdesign.com/en/winner-ranking/project/dear/616445" target="_blank" rel="noreferrer">
              <img src={dear_if} alt="" />
            </a>
          </div>
        </div>
        <div className="class_year">
          <p><b>2023. NAVER for Generation Z</b>&nbsp; Supported by NAVER &nbsp;
            <a className="term_projects" href="https://takyeon.notion.site/Project-ID403-2023-8551d8ba60b646778def146163aba922" target="_blank" rel="noreferrer"> See other projects</a>
          </p>
          <div className="image" style={{ margin: "20px auto", width: "80%", "textAlign": "center" }}>
            <iframe width="300" height="168.75" style={{ "marginRight": "8px" }} src="https://www.youtube.com/embed/4kygZvWSBCQ?si=eFU_IPbTMZfShm9S" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <iframe width="300" height="168.75" src="https://www.youtube.com/embed/zlNRN1QIydk?si=4T8UkOBLCJJaUunZ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
        </div>





        <h3>ID408B Data Analytics for Designers
          &nbsp;&nbsp;&nbsp;<a href="https://github.com/reflect9/id430dataanalytics" target="_blank" rel="noreferrer">
            <span className="year">Fall 2021 - Current</span></a>
        </h3>
        <p>
          Design is often considered as an art domain, which excludes objective data-driven analytic reasonings. Such dichotomy is inadequate in the age of data where most products and services are directly / indirectly connected through digital network. Data-driven design is a set of techniques to better understand the problem (e.g. what people want, how people behave), and employ data-driven functionalities to create innovative solutions. Failing to use data at all / properly may end up creating products that are useful for only a fraction of people, overlooking critical signals from people's behavior. In this course students will (1) learn basic concepts of data, (2) get their hands dirty while cleaning, transform, analyze, and visualizing data. Since knowing the dark side of data-driven design is another goal of this course, students will also learn (3) common limitations of data such as bias, ambiguity, sparsity, insufficiency, and how to fight against them.
        </p>


      </div>


    </div>
  );
}
export default Courses;