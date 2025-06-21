import img1 from "./Gaze2Prompt1.png";
import img2 from "./Gaze2Prompt2.png";
import img3 from "./Gaze2Prompt3.png";

function Gaze2Prompt() {


    return (<div className="ProjectContent">
        <div className="Header">
            <div className="Date">
                <div className="ProjectDateTitle">2025</div>
            </div>
            
            <div className="Title">Gaze2Prompt</div>
            <div className="Subtitle">Seeing the World Through AI's Eyes</div>

            <div className="Researchers">
                Seon Gyeom Kim, Jae Young Choi
            </div>
            {/* 
                <div className="links">
                    <a href="https://chart2experience.github.io/" target="_blank" className="link">Project Website</a>
                </div>
                */}

        </div>
        <div className="MainContent">
            <div className="halfColumn">
                <p>In the rapidly evolving landscape of Artificial Intelligence, Large Language Models (LLMs) are becoming increasingly adept at understanding our physical world by processing various forms of sensor data. Imagine an AI that can not only read your text but also interpret your gaze to understand what you're focusing on. This is where the innovative approach of Gaze2Prompt comes in, transforming raw eye-tracking data into visual prompts for Multimodal Large Language Models (MLLMs).</p>

                <div className="ImageBox">
                    <img src={img1} alt="" />
                </div>

                <h2>The Challenge with Raw Sensor Data</h2>
                <p>Traditionally, feeding raw sensor data, such as eye-tracking coordinates, directly into LLMs as text prompts has been a common method. However, this approach comes with significant drawbacks:</p>
                <ul>
                    <li>Excessive token overhead: Raw data, especially long sequences, translates into a huge number of tokens, making processing inefficient.</li>
                    <li>Degraded model performance: LLMs can struggle with very long contexts, leading to less accurate results.</li>
                    <li>High computational and financial costs: More tokens mean more processing power and higher expenses.</li>
                </ul>
                <p>Previous research has shown promise in converting other types of sensor data, like accelerometer or ECG readings, into visual charts for MLLMs. This method effectively condenses long data sequences into a single image, reducing token overhead and improving classification accuracy. However, spatially grounded data, such as eye-tracking trajectories, which include two-dimensional spatial information alongside temporal dynamics, had not been thoroughly explored in this context—until now.</p>


                
                <h2>Gaze2Prompt's Innovative Solution</h2>
                <p>The core idea behind Gaze2Prompt is simple yet powerful: instead of feeding raw, verbose eye-tracking coordinates to an MLLM, convert them into concise, meaningful visual representations. This study specifically investigated three distinct types of visualizations:</p>
                <ol>
                    <li><p><strong>Time-series plot:</strong> This visualization directly depicts gaze coordinates against a time axis, highlighting temporal dynamics.</p></li>
                    <li><p><strong>Scanpath:</strong> Scanpaths illustrate the sequence of gaze movements as thin lines, conveying both spatial positions and temporal progression.</p></li>
                    <li><p><strong>Heatmap:</strong> Heatmaps offer a color-coded overview of attention distribution, emphasizing spatial density while omitting explicit temporal information.</p></li>
                </ol>
                <p>The researchers set out to answer two key questions: Can visual prompts serve as a more efficient and effective alternative to raw text for eye-tracking data? And how does the performance of these different visual representations vary across various human behavioral categories?</p>



                <h2>Methodology: Putting Visuals to the Test</h2>
                <p>To rigorously test their hypothesis, the study utilized the comprehensive GazeBase dataset, which contains thousands of monocular eye movement recordings from hundreds of participants. The dataset covered six distinct eye-tracking activities:</p>
                <ul>
                    <li>Horizontal Saccade (HSS)</li>
                    <li>Video Viewing (VID)</li>
                    <li>Fixation (FXS)</li>
                    <li>Random Saccade (RAN)</li>
                    <li>Reading (TEX)</li>
                    <li>Playing Balura Game (BLG)</li>
                </ul>
                <p>Each recording was standardized to a 10-second window and converted into four representations: raw text data and the three visual types (time-series plot, scanpath, and heatmap). These were then fed into GPT-4o, a powerful Multimodal Large Language Model, for a six-class classification task. The experiments were conducted under both zero-shot (no examples provided) and one-shot (a single example provided) conditions to assess the model's generalization capabilities and the benefits of minimal supervision.</p>

                <h2>Results: Visuals Lead the Way</h2>
                <p>The findings from Gaze2Prompt are compelling and underscore the power of visual abstraction:</p>
                <h3>Visual Prompts Outperform Raw Text</h3>
                <p>All visual representations—time-series plot, scanpath, and heatmap—consistently and significantly outperformed raw text input in both accuracy and token efficiency. For example, heatmaps achieved the highest one-shot accuracy of 73.9%, nearly doubling the 37.8% accuracy of raw text. Furthermore, using visual prompts drastically reduced token consumption, utilizing only about 15% of the tokens required by raw text in the zero-shot setting and under 12% in the one-shot setting. This means more efficient processing and lower costs.</p>



                <div className="ImageBox">
                    <img src={img2} alt="" />
                </div>


                <h3>One-shot Learning Generally Improves Accuracy</h3>
                <p>The one-shot prompt setting, where the MLLM was given a single example for each activity, generally led to higher accuracies across the visual representations. This highlights the benefit of even minimal supervision for MLLMs interpreting complex sensor data.</p>

                <h3>The Right Visualization for the Right Activity</h3>
                <p>A fascinating insight emerged regarding the effectiveness of each visualization type depending on the specific eye-tracking activity:</p>
                <ul>
                    <li><h4>Heatmap's Strength:</h4>
                        <p>The heatmap demonstrated strong overall performance and was particularly effective for activities characterized by spatially predictable and dense fixation zones, such as Horizontal Saccade, Fixation, and Random Saccade. Its ability to summarize high-density attention areas proved superior, suggesting that for gaze-based tasks, a concise spatial summary can be more powerful than a verbose sequence of raw coordinates, even without explicit temporal information.</p></li>
                    <li><h4>Scanpath and Time-series for Dynamic Activities:</h4>
                        <p>For activities involving tracking dynamically moving objects, such as Playing Balura Game, the time-series plot and scanpath representations achieved higher accuracy than the heatmap in the one-shot condition. This indicates that when temporal and sequential information about gaze movements is critical, these visualizations excel.</p></li>
                    <li><h4>Challenges with Unstructured Gaze:</h4>
                        <p>Video Viewing proved challenging for all visual methods. Its free-viewing nature lacks a distinct, consistent gaze signature, making it difficult for the MLLM to classify without additional context. This suggests that for less structured activities, gaze data alone might be insufficient for subtle distinctions.</p></li>
                </ul>
                </div>
                <div className="ImageBox">
                    <img src={img3} alt="" />
                </div>
                <div className="halfColumn">
                <h2>Looking Ahead: The Future of Eye-Tracking and AI</h2>
                <p>Gaze2Prompt's findings confirm that visual prompting is a highly effective strategy for integrating complex spatio-temporal eye-tracking data into MLLMs. This approach not only enhances classification accuracy but also dramatically reduces resource consumption.</p>
                <p>The study highlights the crucial importance of selecting the appropriate visual encoding that aligns with the specific nature of the activity being analyzed. This isn't a one-size-fits-all solution, but rather a call for tailoring visual representations to specific analytical goals.</p>
                <p>Future research can build upon this by enhancing existing visualizations (e.g., incorporating dwell time into scanpaths, overlaying heatmaps on stimuli), expanding the scope to other eye-tracking tasks like saliency prediction or cognitive load estimation, and generalizing this methodology to a broader range of trajectory tracking data, such as human physical movements from wearables, robot navigation paths, or GPS vehicle logs. This could unlock advanced AI capabilities like path forecasting, anomaly detection, and generating explanations for observed physical behaviors, truly advancing how MLLMs process and reason about dynamic events in the real world.</p>



                <div className="contact">
                    For more information, contact Jae Young Choi via jaeyoungchoi@kaist.ac.kr
                </div>

            </div>
        </div>
    </div>
    )
}

export default Gaze2Prompt;
