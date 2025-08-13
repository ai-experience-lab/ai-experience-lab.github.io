import "./About.scss";
import AelLogo from "../../components/AelLogo.jsx";
import LouisKahn from "./louiskahn.jpeg";

function About() {
    return (    
        <div className="page About">
            <div className="pageTitle">
                About us
            </div>
            <div className="halfColumn">
                <p>
                    <b>AI Experience Lab</b> (a.k.a AEL) was founded in 2021 by prof. <a href="http://www.takyeonlee.com" target='takyeonlee'>Tak Yeon Lee</a> at the <a href="https://id.kaist.ac.kr" target='id'>Industrial Design department</a>, <a href="https://www.kaist.ac.kr" target='kaist'>KAIST</a>. We create innovation solutions for real-world problems by integrating the power of <em>design</em>, <em>data</em>, and <em>artificial intelligence</em>. This manifesto outlines the principles below that guide our work — a declaration of intent to reimagine design in an age of intelligent systems.
                </p>
                
                <p className="korean-version">
                    <b>인공지능경험연구실</b> (약칭 AEL)은 2021년 <a href="https://www.kaist.ac.kr" target='kaist'>KAIST</a> <a href="https://id.kaist.ac.kr" target='id'>산업디자인학과</a>의 <a href="http://www.takyeonlee.com" target='takyeonlee'>이탁연 교수</a>에 의해 설립되었습니다. 우리는 <em>디자인</em>, <em>데이터</em>, <em>인공지능</em>의 힘을 통합하여 현실 문제에 대한 혁신적인 해결책을 만들며, 이를 위해 아래와 같은 원칙을 제안합니다.
                </p>
                
                {/* <div className="logoWrapper">
                    <AelLogo/>
                </div> */}

               
                
                <h3>Without data, modern products have no pulse</h3>
                <p className="">
                    Digital transformation is fundamentally changing how products and services operate and deliver value to people. Data now has become the lens to understand people, and the blood that runs through the vein of modern products. Our primary goal is to create innovative yet practical solutions for real-world problems. To achieve the goal, we leverage individual researchers' creative and constructive mindsets for finding insights from data, and building prototypes with data and AI technologies.
                </p>

                <p className="korean-version">
                    디지털 전환이 제품과 서비스가 작동하고 사람들에게 가치를 전달하는 방식을 근본적으로 변화시키고 있습니다. 데이터는 이제 사람을 이해하는 렌즈가 되었고, 현대 제품의 혈관을 흐르는 피가 되었습니다. 우리의 주요 목표는 현실 문제에 대한 혁신적이면서도 실용적인 해결책을 만드는 것입니다. 이 목표를 달성하기 위해 우리는 개별 연구자들의 창의적이고 건설적인 사고방식을 활용하여 데이터에서 통찰을 찾고, 데이터와 AI 기술로 프로토타입을 구축합니다.
                </p>

                <h3>AI as Design <span className="crossed">Tool</span> Material</h3>
                <p className="">
                {/* <img src={LouisKahn} alt="Louis Kahn" /><br/> */}
                <div className="quote">
                You say to brick, "What do you want, brick?" <br/>
                Brick says to you, "I like an arch." <br/>
                If you say to brick, "arches are expensive and I can use a concrete lintel over an opening. What do you think of that, brick?" <br/>
                Brick says: "I like an arch." <br/>
                —Louis Kahn<br/>
                
                </div>
                AI technology is often perceived as a convenient tool for designers. While that perspective has its own value, it risks casting designers as passive beneficiaries of technology - far from the spirit of pioneers in design history. Inspired by Louis Kahn's quote, we instead approach AI as <b>design material</b> - something to actively dissect, examine, shape, and engage with. This mindset drives us to craft novel processes that <b>truely harness the power of AI through design</b>.  
                </p>

                <p className="korean-version">
                    대다수의 디자이너들에게 AI 기술은 기존에 하던 작업을 도와주는 편리한 도구로 인식됩니다. 그런 관점도 나름의 가치를 가지고 있지만, 디자이너를 자칫 기술의 수동적 수혜자로 머물게 하기 때문에 디자인 역사 속 선구자들의 인식과는 궤를 달리 합니다. 벽돌에게 "넌 무엇이 되고 싶니?"라고 묻는 건축가 Louis Kahn의 자세에서 영감을 받아, 우리는 AI를 적극적으로 해부하고, 분석하며, 그 가능성을 모색하는 <b>재료</b>로 다룹니다. 이를 통해 <b>디자인을 통해 AI의 힘을 진정으로 활용하고 (디자이너뿐만 아니라) 세상을 이롭게 하는</b> 도구와 프로세스, 시스템을 만들어갑니다. 
                </p>

                <h3>Designing beyond Form-Giving</h3>
                <p className="">
                For much of design history, the act of "form-giving" defined the designer's role — to give shape, structure, and clarity to formless ideas. This legacy, rooted in modernist traditions, assumes that products are static, bounded, and visually resolved. But in the age of AI, this paradigm is no longer sufficient. </p>
                <p>
                Today's products are not fixed objects; they are adaptive systems, learning agents, and dynamic services. AI enables interfaces that vanish, behaviors that evolve, and systems that co-create meaning with human / non-human stakeholders. In this landscape, designer have new opportunities to go beyond sculpting static forms and toward shaping conditions for emergence — crafting processes, rules, prompts, and interactions that guide how a system behaves, learns, and grows.
                </p>
                <p>
                To design beyond form-giving is to design with time, with uncertainty, and with intelligence. It is to engage with data not as an input to visualize, but as a living material to shape. It is to consider not only how things look, but how they behave, respond, and adapt.
                </p>

                <p className="korean-version">
                    "조형" - 즉 아이디어에 모양, 구조, 명확성을 부여하는 활동은 디자인의 본질로 인식됩니다. 이는 제품이 정적이고, 명확한 경계를 갖으며, 시각적 완성도가 높던 과거에는 아주 유용한 관점이었습니다. 하지만 이제는 적응형 시스템, 추천엔진, 챗봇이 눈에 보이는 인터페이스 없이도 사용자와 상호작용하고, 학습을 통해 진화하며, 인간/비인간 이해관계자들이 함께 가치를 만들어갑니다. 우리는 디자이너의 역할을 전통적인 조형 활동에서 그치지 않고, 시스템이 스스로 학습하고 성장하는 논리 구조를 설계하는 과정으로 확장합니다. 
                </p>

                <h3>Toward Post-Human Design</h3>
                <p>
                Traditional design has long been centered on human needs, desires, and experiences. This anthropocentric foundation, known as Human-Centered Design (HCD), emerged as a powerful correction of technocratic, engineering-driven processes. It empowered designers to advocate for empathy, usability, and user rights. Yet as we enter an era defined by AI in deeply entangled systems, the limitations of human-centeredness become clear. Who counts as a stakeholder in a world where machines learn, environments respond, and nonhuman lives are impacted by design choices? What does it mean to design when "the user" is no longer the sole or even primary participant? A posthuman design agenda does not seek to erase the human, but to resituate design within a world of interconnected, evolving, and more-than-human actors. It urges us to move beyond user-centric thinking and into a practice of relational, systemic, and ethical world-building. 
                </p>
                <p className="korean-version">
                인간 중심 디자인(Human-Centered Design, HCD)은 인간의 경험과 가치에 초점을 두고, (기술 중심 사회에 결핍된) 공감, 사용성, 사용자 권리와 같은 가치를 증진해 왔습니다. 그러나 인공지능이 학습하고, 환경이 반응하며, 비인간 생명체까지도 디자인 선택의 영향을 받는 복잡계 속에서, "인간 사용자"는 더 이상 유일한 (심지어는 가장 중요한) 이해당사자가 아닐 수도 있습니다. 로봇, 인공지능, 동식물, 지구, 심지어 가상의 인격체를 위한 디자인이 가능할까요? 우리는 포스트휴먼 디자인을 통해, 인간을 포함한 다양한 객체들이 공존하는 세상 속에서 디자인의 역할을 재정립하고자 합니다. 
                </p>
                
            </div>
            
        </div>
        
       
    );
}

export default About;