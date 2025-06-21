import img1 from "./WrightHere1.png";
import img2 from "./WrightHere2.png";
import img3 from "./WrightHere3.png";
import "./WrightHere.scss";

function WrightHere() {
    return (<div className="ProjectContent">
        <div className="Header">
            <div className="Date">
                <div className="ProjectDateTitle">2025</div>
            </div>
            <div className="Title">WrightHere</div>
            <div className="Subtitle">Supporting Children's Creative Writing with AI-Infused Interactive 3D Environment</div>
            <div className="Researchers">
                Jae Ryoung Chung, Seon Gyeom Kim
            </div>
            <div className="Remarks">
                Late-break-Work @ CHI 2025
            </div>
            {/* 
                <div className="links">
                    <a href="https://chart2experience.github.io/" target="_blank" className="link">Project Website</a>
                </div>
                */}

        </div>
        <div className="MainContent">
            <div className="halfColumn">
                <div class="video-container">
                    <iframe
                        src="https://www.youtube.com/embed/KyVi9_0TCCE?si=xpEuNGMLa6Wq6ghT"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    ></iframe>
                </div>
                <div className="ImageBox">
                   <img src={img3} alt="" />
                </div>
                <p>Welcome to the forefront of creative writing technology! Imagine a world where your written words instantly transform into vibrant, interactive 3D environments, where you can step inside your story, meet your characters, and gather fresh inspiration. This isn't science fiction; it's WrightHere, an innovative system designed to support children's creative writing with AI-infused interactive 3D environments.</p>




                <h3>WrightHere: An AI-Infused Gateway to Your Imagination</h3>
                <p>WrightHere is a generative AI-infused writing system that takes your written story and brings it to life by generating interactive 3D environments. It allows users to explore these environments, create and interact with characters, and gather inspiration directly from their evolving narrative worlds. The system is designed for seamless transitions, enabling easy switching between writing and interactive exploration through its two interconnected modes: Writer Mode and Dive-in Mode.</p>
                
                <h3>Seamless Storytelling: Writer Mode and Dive-in Mode</h3>
                <p>The core of WrightHere lies in its dual-mode design, facilitating a continuous cycle between imagination and composition:</p>

                
                <div className="ImageBox">
                    <img src={img1} alt="" />
                </div>
                
                    
                <ul>
                    <li>
                        <h4>Writer Mode</h4>
                        <p>In Writer Mode, users craft their story within the Main Editor. As each paragraph is written, it automatically generates a corresponding 3D scene, displayed as small thumbnail images alongside the text. This mode supports the "translating stage," where users put their ideas into words. Crucially, it provides "Story Materials"—dialogues, characters, and memos—that originate from interactions in Dive-in Mode. Users can incorporate these materials into their writing through a co-writing function, blending their direct experiences with their narrative.</p>
                    </li>
                    <li>
                        <h4>Dive-in Mode</h4>
                        <p>Dive-in Mode facilitates the "planning stage" by allowing users to enter and explore the very 3D environments generated from their paragraphs. Here, the creative possibilities expand: users can create and converse with characters, and capture new ideas as memos. The system generates 3D characters based on user descriptions and enables dynamic conversations powered by large language models with text-to-speech output. All these interactions, including saved memos and their visual context, are stored as Story Materials, ready to be utilized when users return to Writer Mode.</p>
                    </li>
                </ul>

                <h3>The Vision: Enhancing Creative Writing Engagement</h3>
                <p>Through user studies, WrightHere demonstrates how integrating AI-generated 3D environments with writing interfaces significantly enhances children's creative writing engagement and output. The system aims to address key questions in creative process support:</p>
                <ul>
                    <li>How do writers explore generative 3D environments in creative writing?</li>
                    <li>How can these environments be integrated into a system to support continuous cycles between imagination and composition?</li>
                    <li>How can we ensure that inspiration gained from these rich environments effectively translates into written narrative, preventing ideas from remaining as abstract thoughts?</li>
                </ul>

                </div>
                <div className="ImageBox">
                    <img src={img2} alt="" />
                </div>
                <div className="halfColumn">

                <h3>Key Discoveries from Our Users</h3>
                <p>Our studies revealed compelling insights into how WrightHere supports narrative development and engagement:</p>
                <ol>
                    <li>
                        <h4>Exploring dynamic 3D environments facilitates narrative development</h4>
                        <p>Generating Story Scenes and entering into them were the most frequently utilized features. Participants naturally progressed their narratives through spatial exploration. They would often start with simple premises, like "went camping," and then develop them further, evolving to "went camping with friends" and even "went camping with friends when a monster appeared," demonstrating a natural flow from exploration to elaboration.</p>
                    </li>
                    <li>
                        <h4>Character creation established foundations for interactive narrative engagement</h4>
                        <p>Despite some noticeable latency in character generation, participants highly valued how these materialized characters served as anchors for dialogue and interaction within their stories.</p>
                    </li>
                    <li>
                        <h4>Character interactions catalyze both emotional resonance and story progression</h4>
                        <p>Emotional engagement and story development emerged organically through character conversations. For example, one participant created a new 'girl' character as a companion after their rabbit character expressed loneliness. Another spontaneously contemplated a monster’s sad history upon encountering it in a vacant space, showing how direct interaction sparks deeper narrative threads.</p>
                    </li>
                    <li>
                        <h4>Story materials bridged ideation and writing while maintaining creative agency</h4>
                        <p>The system proved effective in helping translate imagination into written content. Participants actively used the dialogue materials for co-writing, thoughtfully keeping useful segments while discarding others, showcasing their control over the narrative.</p>
                    </li>
                </ol>

                <h3>User Voices: The Impact of WrightHere</h3>
                <p>Participants expressed strong engagement and positive feedback for WrightHere. They felt a deep connection to their stories and the system's ability to support their creativity:</p>
                <ul>
                    <li>One participant noted their continued motivation, stating, "It is my story, but I want to know what happens next. It’s fun."</li>
                    <li>Another highlighted the system’s intuitive support, observing how its understanding seemed to deepen as the story progressed, providing "the exact inspiration needed at a specific point."</li>
                    <li>A participant particularly emphasized the system’s role in creative support, describing it as "feeling like pulling out the imagination from inside my head."</li>
                </ul>

                <h3>A Glimpse into the Future: Spatial Computing and Apple Vision Pro</h3>
                <p>Looking ahead, the potential integration of WrightHere with spatial computing environments like Apple Vision Pro opens up exciting avenues for exploration:</p>
                <ul>
                    <li>How might the relationship between immersion and creative writing change when implementing WrightHere in such an environment?</li>
                    <li>What impact would physical interactions and gestures in a spatial computing environment have on children's storytelling abilities?</li>
                    <li>How might character interactions in spatial computing create even richer narrative experiences compared to traditional interfaces?</li>
                </ul>

                <h3>How WrightHere Works: A Cyclical Creative Process</h3>
                <p>The process is designed to be intuitive and cyclical:</p>
                <ol>
                    <li>Users begin in Writer Mode, crafting stories in the Main Editor.</li>
                    <li>As they write, corresponding 3D Story Scenes are automatically generated.</li>
                    <li>By clicking on a scene, users seamlessly enter Dive-in Mode.</li>
                    <li>In Dive-in Mode, they can interact with characters through conversation, create memos, or add new characters.</li>
                    <li>These interactions are saved as Story Materials.</li>
                    <li>These Story Materials are then displayed in Writer Mode.</li>
                    <li>Users can easily drag these Story Materials into the Main Editor for co-writing suggestions.</li>
                    <li>The Main Editor remains accessible even during Dive-in Mode, allowing users to seamlessly switch between different Story Scenes and continue writing, fostering a dynamic and continuous storytelling experience.</li>
                </ol>


            </div>
        </div>
    </div>
    )
}

export default WrightHere;
