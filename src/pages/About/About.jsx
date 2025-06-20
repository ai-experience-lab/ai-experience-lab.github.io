import "./About.scss";
import AelLogo from "../../components/AelLogo.jsx";
import LouisKahn from "./louiskahn.jpeg";

function About() {
    return (    
        <div className="page About">
            <div className="pageTitle">
                <AelLogo />
            </div>
            <div className="halfColumn">
                <p>
                    <b>AI Experience Lab</b> (a.k.a AEL) was founded in 2021 by prof. <a href="http://www.takyeonlee.com" target='takyeonlee'>Tak Yeon Lee</a> at the <a href="https://id.kaist.ac.kr" target='id'>Industrial Design department</a>, <a href="https://www.kaist.ac.kr" target='kaist'>KAIST</a>. We create innovation solutions for real-world problems by integrating the power of <em>design</em>, <em>data</em>, and <em>artificial intelligence</em>.
                </p>

                <h3>Without data, modern products have no pulse</h3>
                <p className="">
                    Digital transformation is fundamentally changing how products and services operate and deliver value to people. Data now has become the lens to understand people, and the blood that runs through the vein of modern products. Our primary goal is to create innovative yet practical solutions for real-world problems. To achieve the goal, we leverage individual researchers' creative and constructive mindsets for finding insights from data, and building prototypes with data and AI technologies.
                </p>

                <h3>AI as Design <span className="crossed">Tool</span> Material</h3>
                <p className="">
                {/* <img src={LouisKahn} alt="Louis Kahn" /><br/> */}
                <div className="quote">
                You say to brick, “What do you want, brick?” <br/>
                Brick says to you, “I like an arch.” <br/>
                If you say to brick, “arches are expensive and I can use a concrete lintel over an opening. What do you think of that, brick?” <br/>
                Brick says: “I like an arch.” <br/>
                —Louis Kahn<br/>
                
                </div>
                AI technology is often perceived as a convenient tool for designers. While that perspective has its own value, it risks casting designers as passive beneficiaries of technology - far from the spirit of pioneers in design history. Inspired by Louis Kahn's quote, we instead approach AI as <b>design material</b> - something to actively dissect, examine, shape, and engage with. This mindset drives us to craft novel processes that <b>truely harness the power of AI through design</b>.  
                </p>

                <h3>Designing beyond Form-Giving</h3>
                <p className="">
                For much of design history, the act of “form-giving” defined the designer’s role — to give shape, structure, and clarity to formless ideas. This legacy, rooted in modernist traditions, assumes that products are static, bounded, and visually resolved. But in the age of AI, this paradigm is no longer sufficient. </p>
                <p>
                Today’s products are not fixed objects; they are adaptive systems, learning agents, and dynamic services. AI enables interfaces that vanish, behaviors that evolve, and systems that co-create meaning with human / non-human stakeholders. In this landscape, designer have new opportunities to go beyond sculpting static forms and toward shaping conditions for emergence — crafting processes, rules, prompts, and interactions that guide how a system behaves, learns, and grows.
                </p>
                <p>
                To design beyond form-giving is to design with time, with uncertainty, and with intelligence. It is to engage with data not as an input to visualize, but as a living material to shape. It is to consider not only how things look, but how they behave, respond, and adapt.
                </p>

                <h3>Toward Post-Human Design</h3>
                <p>
                Traditional design has long been centered on human needs, desires, and experiences. This anthropocentric foundation, known as Human-Centered Design (HCD), emerged as a powerful correction of technocratic, engineering-driven processes. It empowered designers to advocate for empathy, usability, and user rights. Yet as we enter an era defined by AI in deeply entangled systems, the limitations of human-centeredness become clear. Who counts as a stakeholder in a world where machines learn, environments respond, and nonhuman lives are impacted by design choices? What does it mean to design when “the user” is no longer the sole or even primary participant? A posthuman design agenda does not seek to erase the human, but to resituate design within a world of interconnected, evolving, and more-than-human actors. It urges us to move beyond user-centric thinking and into a practice of relational, systemic, and ethical world-building. 
                </p>
                
            </div>
            
        </div>
        
       
    );
}

export default About;