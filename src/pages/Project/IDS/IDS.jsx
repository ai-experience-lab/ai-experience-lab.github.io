import img1 from "./ids1.jpg";
import img2 from "./ids2.png";
import img3 from "./ids3.png";
import img4 from "./ids4.png";
import img5 from "./ids5.png";
import img6 from "./ids6.png";
import img7 from "./ids7.png";

import DS1_Anm from "./DS1_Anm.gif";
import DS1_Imm from "./DS1_Imm.gif";
import DS1_Stt from "./DS1_Stt.gif";
import DS2_Anm from "./DS2_Anm.gif";
import DS2_Imm from "./DS2_Imm.gif";
import DS2_Stt from "./DS2_Stt.gif";
import DS3_Anm from "./DS3_Anm.gif";
import DS3_Imm from "./DS3_Imm.gif";
import DS3_Stt from "./DS3_Stt.gif";
import DS4_Anm from "./DS4_Anm.gif";
import DS4_Imm from "./DS4_Imm.gif";
import DS4_Stt from "./DS4_Stt.gif";

import "./IDS.scss";

function IDS() {
    return (<div className="ProjectContent">
        <div className="Header">
            <div className="Date">
                <div className="ProjectDateTitle">2021-2023</div>
            </div>
            <div className="Title">Understanding the Impact of Spatial Immersion in Web Data Stories</div>
            <div className="Subtitle"></div>
            <div className="Researchers">
                Seon Gyeom Kim
            </div>
            <div className="links">
                <a href="https://immerwebds.github.io/" target="_blank" rel="noreferrer" className="link">Project Website</a>
            </div>

        </div>
        <div className="MainContent">
            <div className="ImageBox">
                <img src={img1} alt="" />
            </div>
            <div className="halfColumn">

                <p>Have you ever scrolled through a web article and felt like you were truly *inside* the data, navigating through charts and visualizations as if they were a physical space? This captivating experience is known as spatial immersion in web data stories, a growing trend thanks to advancements in web technology. While more and more online articles are embracing this immersive approach, the exact characteristics and their impact on readers have remained a bit of a mystery. Our recent research aimed to shed light on this fascinating area, exploring common design patterns and how they truly affect your reading experience.</p>

                <h4>What is Immersion, Anyway?</h4>
                <p>The term "immersion" has been used in many ways across different fields, from virtual environments to video games and film. For our study, we focused on immersion as a psychological state where you perceive yourself as being enveloped by, included in, and interacting with an environment. Crucially, in web data stories, this heightened sense of space doesn't typically require special devices like virtual reality headsets. Instead, it leverages a variety of clever design techniques, such as virtual spaces, depth cues, animated transitions, and camera movements.</p>

                <h3>Exploring Common Design Patterns</h3>
                <p>To understand how web data stories evoke spatial immersion, we collected and analyzed 23 distinct examples. From this collection, we identified six common design patterns that practitioners use to create this immersive feeling:</p>
            </div><div className="ImageBox">
                <img src={img2} alt="" />
            </div>
            <div className="halfColumn">
                <ol>
                    <li>
                        <h4>Cinematic Camera Shots and Transitions</h4>
                        <p>Similar to film, these stories employ diverse camera shots (wide, close-up, point-of-view) and transitions (tracking, hovering, zooming). Even 2D charts placed within a virtual 3D space can create a powerful sense of immersion through a virtual camera guided along a narrative path.</p>
                    </li>
                    <li>
                        <h4>Intuitive Encoding Between Phenomenon and Representation</h4>
                        <p>This pattern involves mapping real-world objects or phenomena to abstract graphical elements in an intuitive way. For instance, population density might be visualized as the elevation of a mountain range in 3D, or train schedules become lines that act as railroad tracks for animated train icons. This reduces cognitive effort and can transport the reader into the data's context.</p>
                    </li>
                    <li>
                        <h4>Smoothly and Naturally Moving Elements</h4>
                        <p>Elements that move naturally, like workers on a floor plan or trains on tracks, contribute to realism and help readers feel immersed in the virtual space. These movements can simulate physics like gravity or friction, making the space feel more authentic.</p>
                    </li>
                    <li>
                        <h4>Direct Manipulation of Camera and Visualization</h4>
                        <p>While less common in web data stories than cinematic techniques, allowing readers to directly control the camera (zoom, pan) or modify visual components through interactive UI elements promotes a sense of spatial immersion by enabling free exploration of the virtual space.</p>
                    </li>
                    <li>
                        <h4>Realistic Appearance</h4>
                        <p>Achieving realism through rendering techniques like image and texture maps, lighting, and shadow effects can significantly enhance spatial immersion. This often involves applying textures to 3D models or using realistic line drawings instead of abstract shapes, leveraging readers' prior knowledge of physical objects.</p>
                    </li>
                    <li>
                        <h4>Dynamic Dimension</h4>
                        <p>This transition technique allows switching between 2D (planar) and 3D (perspective) views within the same virtual space. It can involve showing a 2D view at key moments and then rotating the chart or moving the camera in 3D to transition to the next scene. This guides the reader through the narrative and can reduce cognitive load.</p>
                    </li>
                </ol>

                <h3>How Does Spatial Immersion Affect Your Experience?</h3>
                <p>To answer this, we designed four data stories, each with three variants: static, animated, and immersive. We then conducted a crowdsourced user study where participants compared these variants based on five cognitive factors:</p>
                <ul type="disc">
                    <li><b>Interest:</b> How engaging and appealing the story was.</li>
                    <li><b>Ease of Understanding:</b> How simple and clear the information was to grasp.</li>
                    <li><b>Persuasiveness:</b> How convincing the data story was.</li>
                    <li><b>Trustworthiness:</b> How truthful, fair, and unbiased the presentation felt.</li>
                    <li><b>Curiosity:</b> How much the story motivated further exploration of the topic.</li>
                </ul>
                <h3>DS1. Does Urbanization Affect Food Consumption Pattern?</h3>
                <div className="gifs">
                    <img src={DS1_Stt} alt="" />
                    <img src={DS1_Anm} alt="" />
                    <img src={DS1_Imm} alt="" />
                </div>
                <div className="ImageBox" style={{ marginTop: "1rem" }}>

                    <img src={img3} alt="" />
                </div>
                <h3>DS2. Why Happiness is Becoming more Expensive and Out of Reach?</h3>
                <div className="gifs">
                    <img src={DS2_Stt} alt="" />
                    <img src={DS2_Anm} alt="" />
                    <img src={DS2_Imm} alt="" />
                </div>
                <div className="ImageBox" style={{ marginTop: "1rem" }}>

                    <img src={img4} alt="" />
                </div>
                <h3>DS3. The Stock Market's Covid Pattern: Faster Recovery From Each Panic</h3>
                <div className="gifs">
                    <img src={DS3_Stt} alt="" />
                    <img src={DS3_Anm} alt="" />
                    <img src={DS3_Imm} alt="" />
                </div>
                <div className="ImageBox" style={{ marginTop: "1rem" }}>
                    <img src={img5} alt="" />
                </div>
                <h3>DS4. Mortality Rates of France in History</h3>
                <div className="gifs">
                    <img src={DS4_Stt} alt="" />
                    <img src={DS4_Anm} alt="" />
                    <img src={DS4_Imm} alt="" />
                </div>
                <div className="ImageBox" style={{ marginTop: "1rem" }}>
                    <img src={img6} alt="" />
                </div>

                {/* <div class="video-container">
                    <iframe width="100%" src="https://www.youtube.com/embed/EOy8W6r-2wU?si=oKHHa0gWqA-x0pkZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div> */}


                <h4>The Results Are In!</h4>
                <p>Our study revealed some fascinating insights. The immersive data stories consistently outperformed static or animated ones in terms of <b>interest</b> and <b>curiosity</b>. Participants found the 3D interactions engaging, cinematic, and felt more "drawn in" to the data. Many described it as an "adventure!"</p>
                <p>However, spatial immersion didn't always win. For <b>ease of understanding</b> and <b>trustworthiness</b>, static and animated stories often fared better. Some participants found the dynamic 3D movements distracting or hard to follow, and a few even felt that flashy 3D visuals could be deceptive, questioning the author's intent. While immersive stories were perceived as professional, there was a concern that 2D graphs felt more accurate and straightforward.</p>
                <p><b>Persuasiveness</b> showed mixed results, with no single variant consistently outperforming the others across all stories.</p>

            </div>
            <div className="ImageBox">
                <img src={img7} alt="" />
            </div>
            <div className="halfColumn">
                <h3>Key Takeaways for Designers and Developers</h3>
                <p>There's no one-size-fits-all solution, but our findings offer valuable guidance:</p>
                <ul>
                    <li><b>Mix and Match:</b> Combine immersive scenes with clearer 2D views. Starting with an engaging immersive intro and then transitioning to more reliable 2D representations can grab attention early and still deliver the message clearly and credibly.</li>
                    <li><b>Choose Wisely:</b> Immersive designs shine when the data is relatively easy to grasp. If the core information is simple, the "fancy" visuals can enhance engagement without overwhelming the reader.</li>
                </ul>
                <p>Creating these immersive experiences is complex, often requiring deep knowledge of 3D graphics libraries. There's a clear opportunity for authoring tools to provide higher-level controls, making it easier for creators to implement cinematic camera movements, dynamic dimension changes, and realistic visual embellishments without extensive coding.</p>

                <h3>Conclusion</h3>
                <p>As technology continues to advance, we expect to see even more immersive data stories on the web. Understanding these design patterns and their impact is crucial for developers and researchers alike to craft compelling narratives that not only inform but also truly engage and captivate their audience.</p>


            </div>
        </div>
    </div>
    )
}

export default IDS;
