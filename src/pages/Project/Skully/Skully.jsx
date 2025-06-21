import img1 from "./Skully.png";

function Skully() {
    return (<div className="ProjectContent">
        <div className="Header">
            <div className="Date">
                <div className="ProjectDateTitle">2022-2023</div>
            </div>
            <div className="Title">Skully</div>
            <div className="Subtitle">Interactive Gender Estimation of Human Skull</div>
            <div className="Researchers">
            SeungHo Baek, and Tak Yeon lee. Sponsored by National Forensic Service (국립과학수사연구원)
            </div>

        </div>
        <div className="MainContent">
            <div className="ImageBox">
                <img src={img1} alt="" />
            </div>
            <div className="halfColumn">
            <h3>Forensic Skull Analysis with AI</h3>

<p>Imagine a scenario where numerous unidentified remains are discovered after a natural disaster or an accident. A crucial first step in identification is determining the sex of the deceased, but this often requires specialized forensic expertise and time-consuming laboratory procedures. What if there was a fast, accurate, and accessible way for even non-experts to get an initial estimate? This is where Skully comes in – a groundbreaking mobile application designed to estimate the sex of unidentified human skulls using cutting-edge artificial intelligence.</p>

<h4>What is Skully?</h4>
<p>Skully is an innovative mobile application developed to assist investigators and archaeologists in quickly determining the sex of unidentified human skulls. Born from a request by the National Forensic Service, Skully leverages advanced computer vision and AI to bring forensic capabilities directly into the field, reducing reliance on traditional, often constrained, expert analysis.</p>

<h4>Why is Skully Needed?</h4>
<p>Traditionally, determining the sex from a skull involves forensic experts visually and palpably assessing five specific indicators. This method, while effective, is highly dependent on an expert's anatomical knowledge and is limited by time and location. Modern digital measurement tools like CT or MRI offer objective and automated estimation, but their large size and high cost make them impractical for on-site use. In situations like war zones, large-scale accidents, or extensive archaeological digs where unidentified remains are frequently found, access to experts and specialized equipment becomes even more challenging and time-consuming. Skully addresses these critical gaps, providing a rapid preliminary assessment when time is of the essence.</p>

<h4>How Does Skully Work?</h4>
<p>Using Skully is remarkably straightforward, even for those without specialized knowledge:</p>
<ol>
    <li>Launch the Skully web application on your smartphone.</li>
    <li>The app will guide you to specific sex-related areas on the skull, such as the Mastoid, Glabella, and Supraorbital regions.</li>
    <li>Capture three photographs of these designated areas following the on-screen instructions.</li>
    <li>Press the "Estimate Sex" button.</li>
    <li>Within a maximum of 10 seconds, you will receive the estimation results.</li>
</ol>
<p>The results are visually represented by a bar graph, showing the probability of the skull being male or female on a scale from -1 to +1. While one sex typically shows a significantly higher probability, lower probabilities for both may indicate issues with photo quality or angle. Importantly, the app also provides an interpreted text explanation below the graph, ensuring that non-expert users can easily understand the findings.</p>

<h4>Key Features and Benefits</h4>
<ul>
    <li><b>Speed and Accuracy:</b> Skully provides sex estimation results in as little as 10 seconds. Its CNN-based AI, trained on 800 3D skull models and refined with the EfficientNet-b7 image model, achieves an impressive accuracy of 92%, surpassing even some forensic experts.</li>
    <li><b>Accessibility:</b> As a mobile application, Skully can be used directly at investigation or excavation sites, eliminating the need for bulky, expensive equipment or immediate access to forensic labs.</li>
    <li><b>Ease of Use:</b> The intuitive interface and guided photo-taking process make it easy for non-specialists to operate and interpret results.</li>
    <li><b>Critical Support:</b> It provides crucial preliminary information for investigators and researchers, enabling them to quickly cross-reference with missing persons databases or historical incident records.</li>
</ul>

<h4>Looking Ahead</h4>
<p>Skully is more than just a tool; it's a significant leap forward in forensic anthropology. Led by the National Forensic Service, there are plans to provide this service to research institutions and crime investigation agencies both domestically and internationally. Its potential is particularly immense in regions frequently affected by large-scale disasters, conflicts, or extensive archaeological findings, where the quick and accurate estimation of unidentified human remains is paramount to bringing closure and advancing knowledge.</p>
            
            </div>
        </div>
    </div>
    )
}

export default Skully;
