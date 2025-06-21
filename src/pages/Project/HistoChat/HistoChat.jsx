import img1 from "./HistoChat1.png";
import img2 from "./HistoChat2.png";
import img3 from "./HistoChat3.png";


function HistoChat() {
    return (<div className="ProjectContent">
        <div className="Header">
            <div className="Date">
                <div className="ProjectDateTitle">2024</div>
            </div>
            <div className="Remarks">
                Accepted to CSCW 2025
            </div>
            <div className="Title">HistoChat</div>
            <div className="Subtitle">Bringing History to Life with AI Personas</div>
                <div className="Researchers">
                    HyunSeung Moon
                </div>
        </div>
        <div className="MainContent">
            <div className="ImageBox">
                <img src={img2} alt="" />
            </div>
            <div className="halfColumn">
                <p>History education often struggles to connect with students on a personal level, leaving many feeling disengaged and reducing complex past events to a series of dates and facts. Imagine if students could actually converse with historical figures, delving into their thoughts, motivations, and the dilemmas they faced. This isn't science fiction anymore. A new approach, called HistoChat, is exploring how AI-driven historical personas can transform middle school history education, fostering empathy and making learning more dynamic and meaningful.</p>

                <h3>The Empathy Gap in History Classrooms</h3>
                <p>Traditional history instruction frequently falls short in cultivating what educators call "historical empathy." This isn't just about sympathy; it's the ability to truly understand, emotionally connect with, and contextualize the lived experiences of people from the past. When history is presented as a static timeline through textbooks and standardized tests, it limits opportunities for interpretation, emotional resonance, and human connection. Teachers often find it challenging to bring historical figures to life as complex individuals, and uniform teaching methods can't accommodate the diverse interests and prior knowledge of every student.</p>
                <p>Without opportunities for reflective inquiry or personalized exploration, many students experience history as distant and unengaging. They struggle to build the emotional and cognitive bridges needed to truly grasp the complexity of the past, often finding it difficult to cultivate an internal interest in the subject.</p>


                <h3>HistoChat: Bridging the Past and Present with AI</h3>
                <p>Recognizing these limitations, researchers have turned to advancements in Artificial Intelligence (AI) and Large Language Models (LLMs) to create more responsive and emotionally engaging learning environments. This is where AI personas come in. Unlike traditional AI tutors that simply provide answers, AI personas are designed to simulate the voices, values, and worldviews of historical figures. By engaging students in direct, real-time conversations, these personas enable deeply resonant and contextually grounded encounters with history.</p>
                <p>AI personas are a scalable and sustainable way to support historical empathy because they require much less teacher mediation. They also allow for personalized exploration, adapting to students’ questions, interests, and pace. In a subject where storytelling, perspective-taking, and contextual understanding are vital, interactive AI personas offer a compelling way to cultivate historical empathy, transforming static content into immersive, emotionally rich dialogues.</p>

            </div>
            <div className="ImageBox">
                <img src={img1} alt="" />
            </div>
            <div className="halfColumn">


                <h3>Behind the Scenes: Baseline vs. Experimental HistoChat</h3>
                <p>The development of HistoChat involved a formative study with teachers and students to understand key challenges and expectations for AI-mediated historical dialogue. This informed the creation of two versions of HistoChat: Baseline and Experimental.</p>

                <div className="ImageBox">
                    <img src={img3} alt="" />
                </div>
                <h4>Baseline HistoChat</h4>
                <p>The Baseline version of HistoChat allows historical figures to passively respond to students' queries. While it tries to align responses with learning objectives, the student primarily drives the conversation. Students often felt a sense of freedom and control, able to explore topics at their own pace and ask any questions they wanted without restriction, much like "taking control of the conversation."</p>

                <h4>Experimental HistoChat</h4>
                <p>In contrast, the Experimental version is designed to actively foster historical empathy by engaging students with personalized questions and adapting to each student's interests, concerns, and knowledge level. It uses a set of unique "experimental prompts" alongside the basic setup:</p>
                <ol>
                    <li>It presents students with three challenges experienced by the historical figure and asks them to choose one.</li>
                    <li>The AI then gradually gains a deeper understanding of the student's situation, tailoring the conversation to their life to create a sense of personal relevance.</li>
                    <li>It connects the chosen historical challenge to the student's personal concerns, unfolding the story through analogies and enriching it with historical context. This method breaks down complex information into smaller parts, helping students progressively develop their own interpretations.</li>
                    <li>It fosters mixed-initiative communication, stimulating curiosity, critical thinking, and self-directed exploration through open-ended questions and reflective cues.</li>
                    <li>It indirectly checks the student's progress toward the learning objective, adapting its teaching strategy as needed.</li>
                </ol>
                <p>For example, if a student chose a challenge related to Alexander the Great facing the unknown, the AI persona might share Alexander's initial fears and confusion, then relate that vulnerability to emotional challenges a student might face when moving to a new school. This approach makes history more emotionally engaging, reflective, and perspective-taking.</p>

                <h3>Student Experiences: Benefits and Drawbacks</h3>
                <p>A user study comparing the two HistoChat versions revealed significant insights into how AI personas shape the learning experience. Students noted that the interactive nature of the AI systems provided an engaging and dynamic way to learn historical content and build historical empathy.</p>

                <h4>Key Benefits of HistoChat</h4>
                <ul>
                    <li><strong>Taking Initiative:</strong> Students felt empowered to learn independently, ask any questions freely, and found the AI explained concepts more clearly than a human teacher. The experience often sparked a deeper desire to continue learning history.</li>
                    <li><strong>Contextual Knowledge Gain:</strong> Students found it easier to grasp new information and gain clarity on complex topics because facts were explained in a conversational, layered, and accessible way.</li>
                    <li><strong>Critical Historical Reasoning:</strong> The AI prompted students to explore multiple perspectives on historical events, broadening their understanding and encouraging deep reflection on historical choices and motivations.</li>
                    <li><strong>Deep Connection with Historical Figures:</strong> Students gained insight into the principles and values of historical figures, received personally relevant advice, felt motivated by their stories, and found the figures more relatable.</li>
                    <li><strong>Novel Learning Mode:</strong> The use of generative AI as a learning partner was exciting and intriguing, often bridging interests in AI and history. The narrative-driven, conversational format was a refreshing departure from traditional lectures, sustaining engagement and immersion.</li>
                </ul>

                <h4>Observed Drawbacks and Limitations</h4>
                <p>Despite the many positives, the study also surfaced some challenges:</p>
                <ul>
                    <li><strong>AI's Leading Role:</strong> In the Experimental version, the AI's tendency to lead conversations with continuous questioning sometimes limited students' sense of freedom, making the learning process feel more rigid.</li>
                    <li><strong>Information Overload:</strong> Some students found the AI’s breadth and complexity overwhelming, leading to difficulty synthesizing all the information or feeling like there was "nothing left to think about on [their] own" if the AI provided too much detail at once.</li>
                    <li><strong>Risk of Misinformation:</strong> Concerns about AI providing inaccurate or biased information were present, highlighting the need for source transparency and teacher oversight.</li>
                    <li><strong>Variability in Engagement:</strong> Disparities in students' AI prompting skills could lead to less meaningful exchanges for some, affecting the depth of emotional connection and learning outcomes.</li>
                    <li><strong>Immersion Breaks:</strong> Occasionally, the AI's overly authoritative tone, unsolicited advice, formal language, or knowledge of modern concepts broke the historical immersion for some students.</li>
                </ul>

                <h3>How Students Perceive AI</h3>
                <p>Interacting with HistoChat significantly influenced how students perceived AI itself. These perceptions fell into two main dimensions:</p>

                <h4>Understanding AI</h4>
                <ul>
                    <li><strong>As a Functional System:</strong> Baseline users often saw AI as a tool that processes existing data, while Experimental users had a broader view, imagining AI as autonomous, self-improving, and even "boundless."</li>
                    <li><strong>As a Conversational Partner:</strong> Baseline users focused on AI's efficiency in answering questions. Experimental users emphasized its responsiveness, creating a sense of genuine dialogue and even describing AI as a "bridge between past and present."</li>
                    <li><strong>As a Persona:</strong> While Baseline users saw AI as mimicking human traits but remaining a machine, Experimental users sometimes perceived it as more human-like, with some even feeling it could "replace a part of someone" or describing it as a "real person" or a "soulmate."</li>
                </ul>

                <h4>Understanding the Impact of AI</h4>
                <ul>
                    <li><strong>In Education:</strong> Students widely viewed AI as a knowledgeable resource and a helpful tool for self-study, providing clear explanations. Experimental users particularly noted that AI made learning more engaging and enjoyable, transforming traditional lessons.</li>
                    <li><strong>In Life:</strong> Many students saw AI as useful beyond the classroom, describing it as interesting, helpful, and convenient. Some even felt it enhanced their overall quality of life, viewing it as a companion that could support personal goals.</li>
                </ul>

                <h3>Integrating AI-Historical Figures in Real Classrooms</h3>
                <p>HistoChat demonstrates the compelling potential of AI personas in enriching history education. However, integrating such systems effectively in real classrooms requires careful consideration. A central tension lies in balancing student autonomy with pedagogical structure. While students loved self-directed inquiry, the more structured Experimental HistoChat, despite helping focus, sometimes limited perceived agency.</p>
                <p>This highlights the indispensable role of the teacher. AI in history education should not replace teachers but augment them, acting as an additional layer of historical conversation. Teachers serve as "epistemic moderators," ensuring interactions remain purposeful, historically grounded, and developmentally appropriate. This suggests a hybrid model: AI personas offer accessible, emotionally rich entry points into history, while teachers guide those engagements into deeper understanding through real-time monitoring and support for historical reasoning.</p>
                <p>Furthermore, while AI personas are excellent for individual, biographical engagement, future designs need to connect these personal narratives to larger systemic forces—political, economic, and cultural—that shape history. Historical thinking involves not just empathy but also identifying patterns, causation, and contingency. Future AI systems could support multi-perspective simulation or collaborative prompts that guide students in constructing broader historical explanations, transforming AI into an "epistemic collaborator" rather than just a historical proxy.</p>

                <h3>Conclusion</h3>
                <p>This exploration into AI-powered historical personas through HistoChat reveals a promising path for transforming middle school history education. By fostering personalized interactions and cultivating historical empathy, AI can make history dynamic, engaging, and deeply meaningful. While challenges like balancing student autonomy, ensuring accuracy, and linking individual stories to broader historical contexts remain, the potential for AI to enhance learning outcomes and ignite a passion for the past is clear. Future efforts will continue to refine these systems, ensuring they responsibly and effectively integrate into the rich tapestry of classroom learning.</p>


                <div className="contact">
                    For more information, contact Hyun Seung Moon via mzes0401@kaist.ac.kr
                </div>

            </div>
        </div>
    </div>
    )
}

export default HistoChat;
