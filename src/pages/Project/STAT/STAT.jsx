import imgCover from "./STAT_Cover.jpg";
import imgOnboarding from "./STAT_Onboarding.jpg";
import imgDiagnosis from "./STAT_Diagnosis.jpg";
import imgPupilCPR from "./STAT_PupilCPR.jpg";
import imgReport from "./STAT_Report.jpg";


function STAT() {
    return (<div className="ProjectContent">
        <div className="Header">
            <div className="Date">
                <div className="ProjectDateTitle">2026</div>
            </div>
            <div className="Remarks">
                Red Dot Award 2026 Winner — Design Concept, Service Design
            </div>
            <div className="Title">STAT</div>
            <div className="Subtitle">AI-Powered Emergency Response Solution</div>
            <div className="Researchers">
                Tak Yeon Lee, E Roon Kang, HyunSeung Moon, Hyun Lee, Jungwon Park, Yoonjae Oh, Hyeyeon Seo
            </div>
        </div>
        <div className="MainContent">
            <div className="halfColumn">
                <div class="video-container">
                    <iframe
                        src="https://www.youtube.com/embed/5feS3t3o3JE"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
            <div className="ImageBox">
                <img src={imgCover} alt="STAT Cover" />
            </div>
            <div className="halfColumn">
                <h3>Summary</h3>
                <p>STAT is an AI agent service that bridges the "golden hour gap" by enabling ordinary bystanders into capable helpers. Using multimodal visual and voice cues, it analyzes the patient in real time and guides the helper through first aid step-by-step. The patient's real time condition is shared with emergency medical services, and the system hands over to first responders for professional help.</p>

                <h3>Description</h3>
                <p>Survival rates decrease by 10% for every minute without care. Yet most bystanders freeze in the moment due to fear of insufficient skills and knowledge. First responders then arrive without knowing what happened in those critical minutes, and appropriate response is delayed. STAT closes both gaps with multimodal AI technology.</p>
            </div>

            <div className="ImageBox">
                <img src={imgOnboarding} alt="User profile setup and arrival sequence" />
            </div>
            <div className="halfColumn">
                <p>When a user responds to an emergency alert, STAT immediately provides step-by-step support. First, the AI agent guides the user to the patient. The user then follow necessary instructions, from checking pupil response to performing CPR.</p>
                <p>In parallel, STAT alerts other bystanders nearby to bring an AED or lend a hand. It also captures every action and the patient's status, updating a complete timeline and diagnostic record on the emergency medical services.</p>
            </div>

            <div className="ImageBox">
                <img src={imgDiagnosis} alt="AI assisted diagnosis" />
            </div>
            <div className="halfColumn">
                <p>STAT provides computer vision technology for context-aware assistance. Voice Interaction enables natural responses without complex controls. High contrast colors and a typography-centric UX layout minimize visual noise, allowing users to focus on essential information.</p>
            </div>

            <div className="ImageBox">
                <img src={imgPupilCPR} alt="AI initiated pupil scan and multi-modal CPR support" />
            </div>
            <div className="halfColumn">
                <p>STAT turns every critical second of bystanders into coordinated action, connecting people, data, and emergency response into one seamless life-saving system.</p>
            </div>

            <div className="ImageBox">
                <img src={imgReport} alt="Comprehensive report for helper and first responders" />
            </div>
        </div>
    </div>
    )
}

export default STAT;
