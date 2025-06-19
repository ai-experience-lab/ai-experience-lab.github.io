import img_InTalk1 from './intalk1-en.png';
import img_InTalk2 from './intalk2-en.png';
import img_InTalk3 from './intalk3-en.png';

function InTalk() {
  return (
    <div className="ProjectContent">
            <div className="Header">
                <div className="Date">
                    <div className="ProjectDateTitle">2025</div>
                </div>
                <div className="Title">InTalk</div>
                <div className="Subtitle">AI-Powered Voice-based Medical Interviews</div>
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
                    <img src={img_InTalk1} alt="" />
                </div>
                <div className="halfColumn">

<h3>Revolutionizing Healthcare: How Intalk is Paving the Way for AI-Powered Voice Medical Interviews</h3>

<p>The global healthcare landscape is rapidly evolving, driven by an aging population, increasing chronic diseases, and a persistent shortage of medical personnel. This growing demand for medical services, coupled with the immense burden on healthcare providers, has accelerated the need for innovative solutions. Enter Artificial Intelligence (AI), which is projected to drive the global AI in healthcare market from approximately $3.7 billion in 2025 to over $61 billion by 2034, growing at an annual rate of 38.6%.</p>

<p>While AI promises significant advancements, existing medical systems, often reliant on click-based questionnaires, fall short. They lack the flexibility to capture the nuances of natural language communication from patients, leading to distorted symptom descriptions and increased workload for medical staff. This is precisely where "Intalk" steps in, offering a transformative AI-powered voice-based medical interview automation service designed to enhance efficiency and patient satisfaction.</p>


<h3>Intalk: A New Era of Patient-Centric Interviews</h3>

<p>"Intalk" proposes a groundbreaking approach to pre-diagnosis interviews, allowing patients to input symptoms, medical history, and other relevant information conversationally through an AI voice system. This innovative system aims to significantly reduce the administrative burden on medical professionals and improve overall consultation efficiency.</p>

<h4>Key Features that Set Intalk Apart:</h4>

<ul>
    <li><b>Free-Form Conversational Interviewing with LLMs:</b> Unlike most competitors that rely on predefined chatbots, Intalk leverages large language models (LLMs) to conduct flexible, patient-customized conversations, enabling deeper and more comprehensive information gathering. This allows it to capture unstructured symptoms and context that might otherwise be missed by non-specialist medical staff.</li>
    <li><b>Time and Space Agnostic Support:</b> Intalk offers diverse channel support, including smartphone apps, web platforms, and kiosks, optimizing medical staff resources and reducing patient waiting times. This means patients can complete their pre-interviews from various environments like hospital rooms or even their homes.</li>
    <li><b>Automated Summaries for Medical Professionals:</b> The system analyzes collected conversation logs in real-time to automatically generate summarized reports for medical records, which include symptom keywords, risk levels, and patient emotional expressions. These visual reports assist medical professionals before consultations, shortening interview times and potentially serving as foundational data for clinical decision support systems (CDSS).</li>
    <li><b>Continuous Improvement through Data-Driven Evaluation:</b> Intalk includes a quality management tool that analyzes interview logs and usability data in real-time. It monitors system response accuracy, user satisfaction, and interview completion rates, allowing for continuous algorithm improvement. This tool also generates patient personas for automated system evaluation and safety assurance.</li>
    <li><b>Seamless Integration:</b> Intalk is designed to integrate with hospital electronic medical record (EMR) systems, ensuring a cohesive flow between patient interviews and the overall treatment process.</li>
</ul>


<h3>A Blue Ocean Opportunity in Healthcare AI</h3>

<p>The field of AI-powered interview automation, especially for initial medical consultations using natural language processing, is still relatively underexplored, presenting a "blue ocean" market opportunity. While AI for image interpretation or document summarization is nearing saturation, the workflow of "AI interviewing patients, summarizing symptoms, and delivering them to doctors" is in its early stages globally and domestically, indicating high potential for market preemption.</p>

<p>Intalk stands out by actively securing real patient data and conducting Proof of Concept (PoC) validations with major hospitals like Sinchon Severance Hospital and Asan Medical Center, proving its clinical utility. This collaboration with leading medical institutions helps build technical reliability and facilitates initial field application and quantitative performance verification.</p>

</div>
<div className="ImageBox">
    <img src={img_InTalk3} alt="" />
</div>

<div className="halfColumn">
<h3>Addressing Pressing Healthcare Challenges</h3>

<p>Intalk directly addresses several critical pain points in the healthcare system:</p>


<ul>
<li><b>Medical Staff Burnout & Workload:</b> Doctors in South Korea face significant burnout due to heavy workloads, long working hours, and increasing administrative tasks. Intalk automates repetitive tasks like medical history taking and record keeping, allowing medical professionals to focus on diagnosis, treatment, and patient consultation.</li>
<li><b>Patient Wait Times & Satisfaction:</b> Long wait times and mechanical, fixed-format questionnaires contribute to patient dissatisfaction and operational inefficiencies in hospitals. By enabling pre-interviews before the consultation, Intalk shortens waiting times and enhances patient flow, leading to increased patient satisfaction and improved hospital brand value as a "smart hospital".</li>
<li><b>Accessibility for Vulnerable Populations:</b> Traditional click-based systems pose significant barriers for the elderly and digitally vulnerable. Intalk's voice-based interface provides a more natural and accessible experience, empowering patients to comfortably express their symptoms in their own words.</li>
</ul>
</div>

<div className="ImageBox">
    <img src={img_InTalk2} alt="" />
</div>

<div className="halfColumn">
<h3>Navigating the Future: Strategic Growth and Impact</h3>

<p>Intalk's strategic roadmap includes a multi-phased market entry, initially targeting large and smart hospitals, and gradually expanding to general hospitals and smaller clinics with a B2B SaaS model. The system is being positioned as a "medical information collection assistant" (a non-medical device) to navigate current regulations, ensuring that diagnostic judgments remain solely with medical professionals. Long-term plans include expanding business scope in line with regulatory changes, such as new digital health reimbursement codes.</p>

<p>Beyond domestic expansion, Intalk aims for global reach. Designed with multilingual LLM and voice interfaces, it can be adapted across different languages without significant barriers. The company plans to target countries with high demand for remote medical services and K-medical tourism, such as China, Vietnam, Thailand, and Japan, through local partnerships and localized service models.</p>

<p>"Intalk" is not just a technology; it's a vision for a more efficient, patient-centric, and accessible healthcare future. By leveraging advanced AI to automate initial patient interviews, it promises to free up medical professionals, reduce patient waiting times, and ultimately contribute to a healthier society.</p>
                </div>
            </div>
    </div>

  );
}

export default InTalk;