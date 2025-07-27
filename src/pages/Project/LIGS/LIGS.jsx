import img1 from "./UI.jpeg";
import LIGS_VIDEO from './LIGS.mp4';


function LIGS() {
    return (<div className="ProjectContent">
        <div className="Header">
            <div className="Date">
                <div className="ProjectDateTitle">2025</div>
            </div>
            <div className="Title">LIGS</div>
            <div className="Subtitle">Developing an LLM-infused Game System for Emergent
                Narrative</div>

            <div className="Researchers">
                Jin Jeong
            </div>
            <div className="Remarks">
                Late-break-Work @ CHI 2025
            </div>

        </div>
        <div className="MainContent">
            <div className="ImageBox">
                {/* <img src={img1} alt="" /> */}
                <video width="100%" controls autoPlay muted loop>
                    <source src={LIGS_VIDEO} type="video/mp4" controls />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="halfColumn">
                <h3>LIGS: An LLM-Infused Game System for Emergent Narrative</h3>
                <p>LIGS, an acronym for LLM-Infused Game System or LLM-Integrated Game System, represents a novel approach to game design that aims to <b>leverage large language models (LLMs) as its fundamental engine to facilitate new narrative games</b>. The core objective of LIGS is to enable 'emergent narrative' games, where the storyline dynamically unfolds in real-time in response to player actions, diverging from traditional games with pre-set narratives.</p>

                <p>Traditional emergent narrative games, such as 'The Sims,' have historically encountered limitations, including the necessity for extensive modular content, the repetitive nature inherent in procedural generation, and the difficulty in simulating nuanced emotions or internal states within characters due to the deterministic nature of their underlying algorithms. Generative AI, including LLMs, is posited as a transformative solution to these constraints, offering the capacity to automate tasks like game quest generation and enable more realistic interactions with Non-Player Characters (NPCs). While previous research has explored the application of LLMs in various aspects of games, there remains a limited understanding of the specific challenges and user experiences that arise from deeply integrating these models into comprehensive game systems. This research introduces LIGS to investigate these opportunities and challenges through the development of a prototype game and a subsequent user study.</p>

                <h4>How LIGS Works</h4>
                <p>In the LIGS framework, players are empowered to <b>freely input their character's actions using natural language text</b>. In response, the LLM is responsible for determining NPC actions and dynamically updating in-game objects as the narrative progresses. The system is built upon several foundational components:</p>
                <ul>
                    <li>
                        <p><b>Game World Data Structure</b>: All in-game entities—spaces, characters, and objects—are meticulously defined as 'digital objects' within a hierarchical structure. Each object is endowed with textual properties (such as type, name, and description) and relational properties, which establish its connections and position within the game world (e.g., a "wardrobe" being a child object inside a "library" parent object). This structured approach is crucial for both game designers and the LLM to comprehend and consistently manage updates to the game world.</p>
                    </li>
                    <li>
                        <p><b>NPC Simulation</b>: NPCs within LIGS are equipped with three internal variables: 'personality,' 'self-reminders' about their current situation, and 'sequential memory' of past events. The LLM utilizes these variables to facilitate NPCs' perception of their environment (recognition), predict subsequent actions, and make decisions (prediction and action). These internal processes aim to maintain narrative consistency and lend a sense of realism to NPCs, though the simulation was simplified for user testing to minimize costs and generation time.</p>
                    </li>
                    <li>
                        <p><b>Event Generation</b>: The LLM aggregates the actions of players and NPCs for each turn and generates the next segment of the story in an 'event' format. These events are systematically categorized into four types: Conversation, Spatial Movement, Parent Movement, and Action. The LLM's role is to ensure these generated events are detailed, clear, and coherent, especially when managing interactions involving multiple characters. Based on the generated events, the system identifies and applies necessary changes to game objects or their locations, thereby updating the game world to maintain consistency.</p>
                    </li>
                    <li>
                        <p><b>Game Progression</b>: The gameplay loop involves players receiving a textual description of the current game situation, followed by their ability to select objects, choose from system-suggested actions, or, most significantly, <b>freely input any desired action for their character directly into a text field</b>. The system then employs the LLM to generate the results of these inputs and presents them back to the player. The game world data is also visually represented as a hierarchical list, often with images for pre-defined objects, to enhance clarity and quick identification.</p>
                    </li>
                </ul>

                <h4>'In The Cabin' Prototype</h4>
                <p>To rigorously test the LIGS system, a playable prototype game titled <b>'In The Cabin'</b> was developed within the mystery genre. The mystery genre was chosen strategically due to its alignment with research resources, its capacity for diverse interactions within confined spaces, and its inherent realism. Conversely, action-heavy genres were deliberately avoided due to the challenges associated with real-time LLM interactions, and fantasy or horror genres were excluded because of difficulties in establishing clear rules for content generation.</p>

                <p>The game's narrative revolves around four characters: Noah (the player character), John, Amy, and Cindy. The premise involves Noah and John searching for their missing friend Amy within a sealed cabin, unaware that Amy has been kidnapped by Cindy, who secretly harbors romantic feelings for John. The cabin itself is structured with distinct areas, specifically a living room and a reading room, both populated with various objects designed to facilitate diverse interactions and scenarios. To deepen player immersion, initial information regarding character relationships is withheld, with details only provided upon player request.</p>

                <h4>User Study Findings</h4>
                <p>A user study was conducted with 20 participants, comprising 8 general gamers and 12 game development experts, to collect qualitative data through observational gameplay sessions and semi-structured interviews. The primary objective of the study was to ascertain user perceptions of LLM-generated narratives, specifically focusing on emotional engagement, narrative coherence, and the degree of player agency. The findings from this study illuminated both significant opportunities and considerable challenges posed by the integration of LLMs into game systems.</p>

                <b>Positive Aspects (Opportunities):</b>
                <ul>
                    <li>
                        <p><b>Unlimited Action and Storytelling Freedom</b>: Participants enthusiastically lauded the system for offering "no restrictions" and the remarkable ability to do "almost every-thing". They highly valued the flexibility in how they could interact with and utilize objects, feeling that their actions were realistically reflected and effectively shaped the game's story. The narrative progression was consistently described as "free-flowing" and not adhering to any predetermined script.</p>
                    </li>
                    <li>
                        <p><b>Dynamic and Creative Content</b>: Players expressed surprise and enjoyment as game objects dynamically changed attributes (e.g., a "closed" wardrobe becoming "openable" or "locked") or when entirely new items, such as "books" or "paperweights," spontaneously appeared to fit the evolving context of the reading room. These emergent changes were frequently interpreted by players as intentional clues within the game, thereby enhancing their overall experience and engagement.</p>
                    </li>
                    <li>
                        <p><b>Becoming the Protagonist</b>: Many participants reported a profound sense of becoming the protagonist of their own unique story. The ability to continuously create variables, rather than merely selecting from predefined choices, fostered a powerful feeling of autonomy and immersion as they pursued their self-defined goals.</p>
                    </li>
                    <li>
                        <p><b>Automation in Game Design</b>: Game development experts observed that AI could significantly streamline the game development process by autonomously managing intricate details and information that traditionally required extensive manual setup, potentially reducing overall design complexity.</p>
                    </li>
                    <li>
                        <p><b>High Immersion and Personalized Experience</b>: Participants emphasized the considerable potential for AI-based games to deliver a heightened sense of immersion and exceptionally personalized experiences, describing them as "endless" and capable of providing deep, long-term engagement.</p>
                    </li>
                </ul>

                <b>Negative Aspects (Challenges and Concerns):</b>
                <ul>
                    <li>
                        <p><b>Decision-Making Confusion</b>: The expansive freedom afforded by the system occasionally led to confusion and difficulty in prioritizing actions or fully comprehending the game's progression. Participants felt there was insufficient contextual information to deduce situations or make well-informed choices, leading to hesitation in taking action.</p>
                    </li>
                    <li>
                        <p><b>Risk of Narrative Disruption</b>: The narrative sometimes felt unclear, fragmented, or unresponsive to player actions, creating an impression that the story was "already decided" or that the system was not "listening" to their inputs, which consequently broke immersion. Ambiguity in certain situations also left players confused about expected actions.</p>
                    </li>
                    <li>
                        <p><b>Ambiguous Player Role</b>: Some players felt their character, Noah, functioned more as an "observer" than an active, influential participant within the narrative. Frustration arose when their aggressive actions (e.g., throwing a lamp at an NPC) were seemingly ignored by the game's narrative or other characters, leading to a perception of a lack of player agency.</p>
                    </li>
                    <li>
                        <p><b>Need for Greater Oversight and Regulation</b>: A significant concern revolved around the potential for AI to generate unpredictable or undesirable content, sometimes referred to as "hallucinations". Participants underscored the need for clear rules regarding sensitive content and questioned how AI-generated game content would impact established game ratings and industry policies.</p>
                    </li>
                    <li>
                        <p><b>Diminished Creator Certainty</b>: Developers voiced apprehension that the fluid nature of LLM-generated narratives could make it challenging to define a clear conclusion for a game or to reliably guarantee deep, long-term player engagement. There were also concerns that AI might eventually dominate content production, potentially reducing human involvement primarily to consumption.</p>
                    </li>
                </ul>

                <h3>Conclusion and Future Directions</h3>
                <p>The research unequivocally demonstrates that the integration of LLMs into games can provide a <b>unique and highly free experience</b> that markedly differentiates them from traditional games. However, this unprecedented freedom simultaneously introduces potential misunderstandings and an element of unpredictability. While traditional games rely on explicitly defined rules, systems, and narratives, LLM-powered games convey everything primarily through linguistic expression, which blurs these established boundaries. This can certainly foster creativity and spontaneity, but it also generates uncertainty for players accustomed to structured gameplay. The study highlights that the lack of clear definitions in LLM-based systems significantly impacts player experience, as dynamically generated outcomes necessitate players to constantly adjust their understanding and expectations.</p>

                <p>To address these identified challenges, future efforts should concentrate on several crucial areas:</p>
                <ul>
                    <li>
                        <p><b>Clear Boundary Definition</b>: LLMs should be meticulously designed to operate within clearly defined rules and frameworks, akin to how tabletop role-playing games (TRPGs) offer flexible yet structured worlds.</p>
                    </li>
                    <li>
                        <p><b>Story Management Implementation</b>: The integration of tools such as a "narrative manager" could serve to bridge the gap between the AI's freeform storytelling capabilities and the developers' intended design, ensuring a more polished and coherent user experience.</p>
                    </li>
                    <li>
                        <p><b>Re-evaluation of Game Development</b>: As AI-based games become more commonplace, there will be a pressing need to redefine the roles of game developers, establish new criteria for content evaluation, and adapt overall industry policies and standards.</p>
                    </li>
                </ul>
                <p>The study also underscored current technical limitations of AI models, including instances of hallucinations, incomplete context reflection, and slow response times, all of which significantly impact user experience. Future research will aim to provide <b>specific design guidelines and practical recommendations</b> to overcome these issues, explore how LIGS functions across diverse game genres, and investigate its impact on long-term gameplay experiences. The ultimate goal is to fully realize AI's potential in game design, fostering the creation of truly immersive and adaptive experiences.</p>


            </div>
        </div>
    </div>
    )
}

export default LIGS;
