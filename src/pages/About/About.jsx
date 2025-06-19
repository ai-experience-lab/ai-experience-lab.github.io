import "./About.scss";

function About() {
    return (    
        <div className="page">
            <div className="pageTitle">About</div>
            <div className="halfColumn">
                <p>
                    Welcome to the AI Experience Lab (AEL) founded in 2021 by prof. <a href="http://www.takyeonlee.com" target='takyeonlee'>Tak Yeon Lee</a> at the <a href="https://id.kaist.ac.kr" target='id'>Industrial Design department</a>, <a href="https://www.kaist.ac.kr" target='kaist'>KAIST</a>. We create innovation solutions for real-world problems by integrating the power of <em>design</em>, <em>data</em>, and <em>AI-technology</em>.
                </p>

                <h3>Data-Centric Approach</h3>
                <p className="">
                    Digital transformation is fundamentally changing how products and services operate and deliver value to people. Data now has become the lens to understand people, and the oil that runs AI-powered machines. AEL's primary goal is to create innovative yet practical solutions for challenging problems. To achieve the goal, we leverage individual researchers' creative and constructive mindsets for finding insights from data, and building prototypes with data and AI technologies.
                </p>

                <h3>Pioneering the real-world applications of Generative AI</h3>
                <p className="">
                    Generative AI models such as LLM (Large Language Model) or Image Models have been a hot topic in the research community. However, the real-world applications of generative AI models are still limited. We are interested in exploring the real-world applications of generative AI models, and developing novel design methods to leverage the power of generative AI models.
                </p>

                <h3>Pursuing the next design paradigm</h3>
                <p className="">
                    The world is evolving into a giant network of human/non-human stakeholders. It gets harder and harder for designers to satisfy individual end-users. While holding the basic principles of HCD, we treat end-users with the same level of importance as other nodes such as other user groups, businesses, and even AI models. That being said, we try to mediate interests and tensions within the network rather than to satisfy a specific target users.
                </p>

                
            </div>
            
        </div>
        
       
    );
}

export default About;