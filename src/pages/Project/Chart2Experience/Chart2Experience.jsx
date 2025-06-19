import img_chart2exp1 from './chart2exp-3.png';
import img_chart2exp2 from './chart2exp-2.png';
import img_chart2exp_all from './chart2exp-all.png';
import { FaAward } from "react-icons/fa";

function Chart2Experience() {
    return (
        <div className="ProjectContent">
            <div className="Header">
                <div className="Date">
                    <div className="ProjectDateTitle">2024 - 2025</div>
                </div>

                <div className="Remarks">
                    <FaAward/> Best Paper awarded at PacificVis2025
                </div>
                <div className="Title">Chart2Experience</div>
                <div className="Subtitle">Benchmarking Multimodal LLMs for Predicting Experiential Impact of Charts</div>
                <div className="Researchers">
                    Seon Gyeom Kim, Jae Young Choi
                </div>
                
                <div className="links">
                    <a href="https://chart2experience.github.io/" target="_blank" rel="noreferrer" className="link">Project Website</a>
                </div>
                
            </div>
            <div className="MainContent">
                <div className="ImageBox">
                    <img src={img_chart2exp_all} alt="" />
                </div>
                <div className="halfColumn">
                    <h3>Embarking on a New Journey: Can AI Understand Our 'Feelings' About Data Visualizations?</h3>
                    <p>
                        Data visualizations are ubiquitous, appearing everywhere from news articles to scientific papers. For a long time, the focus of data visualization has been on efficiency and effectiveness for objective tasks, such as quickly understanding data. However, recent studies have shown that data visualizations can go beyond mere factual communication, stimulating creativity, fostering engagement, and even evoking a range of emotions like sadness, surprise, or trustworthiness. This perspective challenges data visualization creators to refine their work by considering "user experiential factors," making how a chart *feels* to the user increasingly important.
                    </p>
                    <p>
                        This is where Multimodal Large Language Models (MLLMs) come in. As powerful AI tools capable of understanding both text and images, MLLMs present an intriguing opportunity to predict the experiential impact of charts without requiring complex theoretical backgrounds or the development of dedicated machine learning models. MLLMs are cost-efficient and have demonstrated an ability to understand human nuance, including subjective assessments of designs and emotion recognition in natural language dialogues. Despite these advantages, MLLMs can sometimes produce incoherent and inaccurate outputs, leading to a recognized need for sufficient validation of their performance and effectiveness.
                    </p>

                    <h3>A New Benchmark for Experiential Impact</h3>
                    <p>To establish the "ground truth" of how humans experience these charts, we recruited 216 crowdsourced workers. They were asked to rate their experience with each chart using a 7-point Likert scale across seven experiential factors. These factors are categorized into two groups:</p>
                    <ol>
                        <li>Emotional factors: Empathy, Interest, and Comfort.</li>
                        <li>Perceptual factors: Memorability, Trustworthiness, Aesthetic Pleasure, and Intuitiveness.</li>
                    </ol>

                    <p>For example:</p>

                    <ol>
                        <li><strong>Memorability</strong> refers to how easily a chart is remembered after viewing.</li>
                        <li><strong>Aesthetic Pleasure</strong> pertains to the visual attractiveness of a chart and the satisfaction a viewer derives from it.</li>
                        <li><strong>Intuitiveness</strong> measures how easily a chart communicates its message at first glance.</li>
                        <li><strong>Comfort</strong> assesses the overall ease and satisfaction with which a viewer interacts with a chart, including visual comfort.</li>
                        <li><strong>Interest</strong> captures the level of hedonic satisfaction and attention a viewer dedicates to a chart.</li>
                        <li><strong>Trustworthiness</strong> evaluates the viewer's confidence in the accuracy and reliability of the information presented.</li>
                        <li><strong>Empathy</strong> assesses a chart's capacity to evoke a personal response from the viewer, including feelings of compassion, sympathy, anxiety, or discomfort.</li>
                    </ol>
                    <p>Participants also provided text explanations for their ratings, creating a rich dataset.</p>

                    <h3>Testing the AI: MLLMs as Chart Critics</h3>
                    <p>Using the Chart-to-Experience dataset, we evaluated the performance of three state-of-the-art MLLMs: OpenAI GPT-4o, Anthropic Claude 3.5 Sonnet, and Meta Llama-3.2-11B-Vision-Instruct. We conducted two main tasks:</p>

                    <h4>Task 1: Direct Score Prediction – A Matter of Nuance</h4>

                    <p>In the first task, MLLMs were asked to directly predict scores on the 7-point Likert scale for each of the seven experiential factors, mimicking human evaluators. The results showed significant challenges.
                    </p>
                    <ul>
                        <li>MLLMs' ratings were <em>less sensitive</em> to differences in chart design and effectiveness than human evaluations, exhibiting much smaller standard deviations.</li>
                        <li>Different MLLMs displayed <em>distinct biases</em>; for instance, GPT-4o consistently assigned higher scores on average than human evaluators, while Llama-3.2 often gave lower scores.</li>
                        <li>Some factors like Aesthetic Pleasure showed moderate alignment with human ratings (especially for GPT-4o and Claude 3.5 Sonnet), and Intuitiveness also demonstrated moderate alignment for GPT-4o and Claude 3.5 Sonnet. However, other factors exhibited weak or no correlation with human ratings.</li>
                    </ul>
                    <p>This implies that relying on MLLMs for direct, fine-grained score prediction of experiential impact may not be ideal due to their limited sensitivity and inherent biases.</p>

                    <h4>Task 2: Pairwise Comparison – Where MLLMs Excel</h4>
                    <p>To address the lack of sensitivity observed in Task 1, the second task involved asking MLLMs to compare pairs of charts and determine which one would receive a higher score for each experiential factor from "ordinary people".</p>

                    <p>Here, MLLMs demonstrated significantly higher accuracy and reliability. GPT-4o and Claude 3.5 Sonnet showed much higher overall accuracy compared to Llama-3.2. Importantly, MLLMs performed more accurately when comparing chart pairs with larger score differences in human ratings. This "upward trend" suggests that MLLMs are proficient at identifying clear differences, similar to how humans perceive stark contrasts. For example, GPT-4o correctly compared all 28 pairs in the 1.4-1.6 score difference range for Comfort.</p>

                    <p>However, this task also revealed interesting insights from inaccuracies. For instance, MLLMs sometimes overrated charts for "Interest" and "Aesthetic Pleasure". Their explanations often cited "vivid color scheme," "visual complexity," and "analysis over extended timeframes" as positive attributes. In contrast, human evaluators frequently described these same charts as "hard to read," "not pleasing," or even "chaotic". This highlights potential areas for MLLM improvement.</p>


                    <h3> Moving Forward: Benchmarks for Better AI</h3>
                    <p>The Chart-to-Experience benchmark provides a crucial foundation for understanding how MLLMs interpret the experiential impact of data visualizations. While direct score prediction remains a challenge, the ability of MLLMs to perform comparative evaluations suggests a promising avenue for future research and application.</p>

                    <p>Moreover, this research emphasizes the importance of benchmark datasets not only for evaluation but also for driving innovation. By comparing explanations generated by humans and MLLMs, researchers can identify critical issues in AI performance and gain inspiration for improving MLLMs and their prompts. Future research could explore advanced prompt engineering techniques (e.g., Chain-of-Thought or Few-shot learning) and integrate demographic factors like educational background or chart proficiency to further refine MLLMs' sensitivity to human perceptions.</p>
                    <p>As AI continues to evolve, understanding not just WHAT charts show but also HOW they make us feel will be key to creating truly impactful data visualizations. The Chart-to-Experience benchmark is a significant step in that direction.</p>
                    
                    <div className="contact">
                    For more information, contact Seon Gyeom Kim via ksg_0320@kaist.ac.kr
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Chart2Experience;




