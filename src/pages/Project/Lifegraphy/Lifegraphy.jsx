import img1 from './Lifegraphy-1.png';
import img2 from './Lifegraphy-2.png';

function Lifegraphy(){
    return(<div className="ProjectContent">
            <div className="Header">
                <div className="Date">
                    <div className="ProjectDateTitle">2024-2025</div>
                </div>
                <div className="Title">Lifegraphy</div>
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
                <div className="ImageBox" style={{width: "70%", margin: "0 auto"}}>
                    <center>
                        <video width="100%" controls>
                            <source src={`${process.env.PUBLIC_URL}/uist_2.mp4`} type="video/mp4" />
                        </video>
                    </center>
                </div>
                <div className="halfColumn">


                <p>Welcome to the future of customer understanding! For years, businesses have relied on traditional methods like personas to grasp their target audience. While valuable, these methods often prove time-consuming, subjective, and static, failing to keep pace with dynamic customer behaviors. Imagine a world where you could converse with a representation of your ideal customer, delving into their preferences and motivations in real-time. This is no longer a futuristic dream but a present-day reality with the advent of generative AI and systems like Lifegraphy.</p>

<h3>Revolutionizing Customer Understanding: Introducing Lifegraphy</h3>
<p>Lifegraphy is a groundbreaking Synthetic Customer Agent System designed to transform how enterprises conduct customer research. It moves beyond static representations by introducing dynamic Synthetic Customer Agents (SCAs) that simulate real customer behaviors and preferences. At its core, Lifegraphy is an interactive chat system that generates these agents based on a massive, in-depth lifestyle survey involving 4,000 respondents.</p>

<p>The system is built on three fundamental components:</p>
<ol>
    <li>A visual summary that provides comprehensive demographic, personality, and lifestyle profiles of customer clusters.</li>
    <li>The advanced generation of SCAs, each representing a specific customer cluster.</li>
    <li>The creation of interactive chat rooms, enabling seamless conversational interactions between users and these agents.</li>
</ol>
<p>This innovative approach allows businesses to swiftly create realistic synthetic customer agents, providing deep and diverse insights through natural conversation.</p>

</div>

<div className="ImageBox" style={{width:" 70%", margin: "0 auto"}}>
    <img src={img1} alt="" />
</div>


<div className="halfColumn">


<h3>The Power Behind Lifegraphy: How It's Built</h3>
<p>Lifegraphy’s strength lies in its robust foundation of real-world data and sophisticated AI pipeline.</p>

<h4>Data Foundation: A Deep Dive into Lifestyles</h4>
<p>The system leverages data from an annual survey of 4,000 respondents in South Korea, meticulously balanced across age, gender, and regional distribution. This rich dataset captures a vast array of information, categorized into:</p>
<ul>
    <li><b>Demography:</b> Covering aspects like gender, generational category, household type, income, occupation, education, and residence details (12 questions).</li>
    <li><b>Psychography:</b> Exploring values and personality traits, such as being outgoing, critical, valuing travel, faith, or physical appearance (25 questions).</li>
    <li><b>Lifestyle:</b> Around 400 questions about daily choices, from household activities to outdoor interests.</li>
    <li><b>CEJ (Customer Experience Journey) Insights:</b> Approximately 400 questions on household appliances, including preferences (price, utility, design) and ownership status.</li>
    <li><b>Enthusiasm for Appliances:</b> Around 300 questions on future ownership intentions and information sources for appliances.</li>
</ul>

<h4>From Raw Data to Key Insights: Keyword Extraction</h4>
<p>Before generating SCAs, Lifegraphy processes this extensive survey data. The enterprise defined eight distinct customer clusters, such as Smart Innovators, Tasteful Connoisseurs, and Home Economists. A sophisticated pipeline then identifies the most distinguishing features for each cluster. It uses a chi-square test to pinpoint questions where answer distributions within a cluster significantly differ from the overall population. For instance, if 59% of "Tasteful Connoisseurs" are male, and this is significantly different from the general population, "male" becomes a representative keyword for that cluster. These representative answers are then converted into keywords and grouped into three core categories: demographics, personality traits, and lifestyle.</p>

<h4>Crafting the Digital Human: Synthetic Customer Agent Generation</h4>
<p>With these representative keywords and descriptions, Lifegraphy employs a Large Language Model (LLM), specifically Claude 3.5 Sonnet, to generate detailed profiles for each SCA. To handle the vast amount of information and maintain consistency, a "chain-of-thought" pipeline is used, comprising eight stages:</p>
<ol>
    <li><b>Basic Information:</b> Generates gender, age, life stage, name, occupation, and annual income based on demographic descriptions.</li>
    <li><b>Family Members:</b> Details household members and relationships based on household type and family size.</li>
    <li><b>Residence Details:</b> Produces exact residential location, household income, and housing size.</li>
    <li><b>Work-related Details:</b> Specifies job title, description, and company type.</li>
    <li><b>Eating Behaviors:</b> Summarizes meal decisions, preparation, regularity, cooking frequency, use of delivery services, dining-out habits, spending, and food preferences.</li>
    <li><b>Health Profile:</b> Outlines potential health concerns like irregular eating, stress, eye strain, lack of activity, and sleep issues.</li>
    <li><b>Hobbies:</b> Summarizes leisure activities, including social media use, music streaming, video platforms, home workouts, mobile gaming, and social outings.</li>
    <li><b>Appearance (Image Generation):</b> As the final step, 10 English keywords based on the agent’s profile (hairstyle, eyewear, fashion sense, facial characteristics, favorite activity) are submitted to Stable Diffusion XL 1.0 to create a profile image.</li>
</ol>
<p>This meticulous process ensures that each Synthetic Customer Agent is not only realistic but also rich in detail, providing a comprehensive and coherent digital persona for interaction.</p>


<div className="ImageBox">
    <img src={img2} alt="" />
</div>



<h3>Interacting with Your Synthetic Customers: Lifegraphy's User Experience</h3>
<p>Lifegraphy provides a user-friendly web-based platform, offering a seamless experience from exploration to in-depth analysis.</p>

<h4>Exploring Customer Clusters</h4>
<p>Upon logging in, users are greeted with a customer cluster dashboard. This interface displays the name, market size, and concise descriptive summaries of the selected cluster, highlighting representative demographics, personality, and lifestyle keywords in red. Users can expand these summaries to view the probability of occurrence for each data type within the cluster, with keywords significantly higher than the overall population colored red and lower probabilities colored blue.</p>

<h4>Generating and Managing SCAs</h4>
<p>The system allows users to generate SCAs for a chosen cluster. Users can specify the number of SCAs to generate in a batch, and the system displays the progress of the generation pipeline. Profiles of generated SCAs, including their photos, names, ages, genders, occupations, and family compositions, are easily viewable. Existing SCAs can also be deleted as needed.</p>

<h4>Conversational Chat Rooms</h4>
<p>A core feature of Lifegraphy is its chat room functionality. Users can create chat rooms, choose to share them with others, and even invite SCAs from different clusters for comparative analysis. Within a chat room, users type messages, and the selected SCAs respond independently. This design encourages a wide range of responses, as agents do not consider how others might respond, offering multi-dimensional insights.</p>

<h4>Enhanced Insights with Retrieval-Augmented Generation (RAG)</h4>
<p>To ensure SCAs are knowledgeable about specific products, a Retrieval-Augmented Generation (RAG) module was integrated. This module retrieves relevant product information and attaches it to the user's message. While highly useful for expert-level inquiries, users have the flexibility to enable or disable the RAG module, as large amounts of product information can sometimes affect the SCA's natural tone of voice.</p>

<h4>Powerful Chat Analysis Tools</h4>
<p>Beyond simple conversation, Lifegraphy includes a robust analysis section at the bottom of each chat. It provides four predefined prompt buttons for quick insights:</p>
<ul>
    <li><b>Summarize:</b> Synthesizes and summarizes the dialogue.</li>
    <li><b>Writing a Prompt for Image Creation:</b> Generates an English prompt for Stable Diffusion to create images based on the conversation.</li>
    <li><b>Keyword Frequency Analysis:</b> Extracts and visualizes frequently mentioned keywords in descending order.</li>
    <li><b>Analyzing Emotions:</b> Extracts, groups, and summarizes emotions expressed by each SCA, with rationale.</li>
</ul>
<p>Users can also input their own custom prompts for flexible and personalized analysis.</p>

<h3>The Impact of Lifegraphy: Real-World Value</h3>
<p>Lifegraphy has demonstrated significant real-world utility, validated through rigorous evaluations and extensive field studies with global enterprise practitioners.</p>

<h4>High Accuracy and Reliability</h4>
<p>An offline evaluation confirmed that Lifegraphy's SCAs accurately represent real customer responses, achieving an impressive accuracy of up to 87%. This reliability is a key factor in building user trust, as practitioners highly value the agents' ability to reflect real data faithfully.</p>

<h4>Successful Field Studies and Practitioner Satisfaction</h4>
<p>Over a four-month period, 47 practitioners from various departments (Development, Product Planning, Marketing, Advanced Quality, Customer Experience, SCM/Logistics) at a global enterprise participated in field studies. The results were overwhelmingly positive:</p>
<ul>
    <li><b>Effective Representation:</b> Practitioners found that the system effectively represented each customer cluster, with agents providing differentiated and tailored responses that accurately captured group characteristics.</li>
    <li><b>Generation of Novel Insights:</b> Lifegraphy consistently elicited unanticipated ideas and insights, proving particularly valuable during ideation and planning phases. Practitioners appreciated that the system offered perspectives they hadn't considered, broadening their views beyond purely expert-centric approaches.</li>
    <li><b>Support for Qualitative Research:</b> The system effectively supports qualitative research through conversational interaction. While not a full replacement for traditional methods, it serves as a complementary tool for in-depth analysis, reducing time and financial burdens.</li>
    <li><b>Efficient Information Retrieval:</b> Users valued the system's ability to provide quick, customized responses, almost like conversing with a real person, highlighting its accessibility and swiftness.</li>
    <li><b>Multi-Dimensional Insights:</b> The multi-SCA conversational system was highly praised for allowing simultaneous interaction with multiple agents, providing diverse opinions and multi-dimensional insights that single-agent systems cannot.</li>
    <li><b>Useful Analytical Features:</b> The integrated chat analysis tools were frequently used and highly valued for daily work, assisting in tasks like drafting ad copy, report writing, and identifying key themes.</li>
    <li><b>User-Friendly Interface:</b> The conversational chat room UI was rated highly for its simplicity and intuitive interaction, making it easy for practitioners to refine hypotheses and start working immediately.</li>
    <li><b>Practical Applicability:</b> Practitioners expressed a strong desire to integrate Lifegraphy into future projects across various departments, recognizing its versatility and practical assistance in real-world tasks.</li>
</ul>
<p>Overall, a strong majority of practitioners reported that Lifegraphy met or exceeded their expectations, expressing high satisfaction and eagerness for continued use.</p>

<h3>Navigating Challenges and Future Directions</h3>
<p>While Lifegraphy has proven immensely valuable, the development and field studies also brought to light important considerations and areas for future enhancement.</p>

<h4>The Accuracy vs. Diversity Trade-off</h4>
<p>One key challenge identified is the inherent trade-off between the accuracy of agent representation and the diversity of responses within a customer cluster. Smaller batch sizes for SCA generation tend to yield higher accuracy by closely mirroring defining cluster characteristics. However, this often results in agents within the same cluster giving very similar or redundant answers. Conversely, larger batch sizes foster greater diversity but with a slight reduction in overall accuracy. Practitioners often desire both: agents that accurately reflect the cluster's traits yet provide maximal diversity of opinions. Future developments will aim to find a "sweet spot" by incorporating controlled randomness or separated generation processes to balance these conflicting needs.</p>

<h4>Addressing Practitioner Feedback</h4>
<p>User feedback revealed specific areas for improvement:</p>
<ul>
    <li><b>Greater Diversity within Clusters:</b> A desire for more varied demographic characteristics (e.g., country, culture) and response styles among agents in the same group.</li>
    <li><b>Richer Response Quality:</b> Suggestions for agents to express clearer likes and dislikes, or options to switch between positive and negative response modes, to generate more nuanced opinions.</li>
    <li><b>Flexible Multi-SCA Interaction:</b> The ability to freely choose and compare multiple SCAs, select agents based on specific attributes (age, gender, lifestyle), or engage in one-on-one conversations.</li>
    <li><b>Enhanced Analysis and Reporting:</b> More robust analytical capabilities, including real-time summarization focused on keywords, and features to export and share chat results (e.g., PDF reports, presentation slides).</li>
    <li><b>Improved UI and Guidelines:</b> Sequential display of responses to improve loading times, more intuitive navigation, and the provision of FAQs or sample questions to guide user inquiries.</li>
    <li><b>Transparency of Data Sources:</b> A strong request to clearly indicate the source of responses or underlying data to enhance trust and encourage broader adoption.</li>
</ul>

<h4>Focus on Target Use Cases</h4>
<p>Lifegraphy is not intended to be a complete replacement for traditional qualitative research. Instead, its maximum value is unlocked when optimized for specific, targeted use cases. Defining clear research objectives—such as initial ideation, product concept testing, or predicting customer responses—allows Lifegraphy to be developed as a specialized system with customized prompt templates, result visualization, and advanced analytical capabilities. This focused approach is expected to enhance practical utility and encourage sustained adoption in real-world business contexts.</p>

<h4>Future Outlook</h4>
<p>Future work for Lifegraphy includes conducting longer longitudinal studies to assess its sustained impact on daily workflows. Expanding the system's database to include more diverse and international datasets is also crucial to improve its generalizability and usefulness across varied cultural and business contexts. Continuous platform improvement will focus on optimizing API usage, refining the prompt pipeline, and expanding UI flexibility to meet evolving practitioner needs.</p>

<h3>Conclusion</h3>
<p>Lifegraphy stands as a testament to the power of generative AI in transforming customer research. By automating the creation of realistic synthetic customer agents and facilitating interactive conversations based on extensive survey data, it offers an innovative solution to the limitations of traditional personas. Its proven accuracy and positive reception from enterprise practitioners underscore its potential as a robust qualitative research tool, capable of eliciting unanticipated ideas and providing multi-dimensional insights. As Lifegraphy continues to evolve, balancing accuracy with diversity and focusing on specific use cases, it promises to be an indispensable asset for businesses seeking to truly understand and connect with their customers in the digital age.</p>
        </div>
    </div>
    </div>
    )
}

export default Lifegraphy;
