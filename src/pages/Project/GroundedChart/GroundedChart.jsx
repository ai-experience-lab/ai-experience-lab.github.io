import img_grounded_chart from './grounded.png';


function GroundedChart() {
    return (
        <div className="ProjectContent">
            <div className="Header">
                <div className="Date">
                    <div className="ProjectDateTitle">2025</div>
                </div>
                <div className="Title">Grounded Generation of Embellished Bar Chart Ensuring Chart Integrity</div>
                {/* <div className="Subtitle"></div> */}
                <div className="Researchers">
                    Seon Gyeom Kim, Jae Young Choi
                </div>
                <div className="links">
                    <a href="https://groundedchartgeneration.github.io/" target="_blank" className="link">Project Website</a>
                </div>
            </div>
            <div className="MainContent">
                <div className="ImageBox">
                    <img src={img_grounded_chart} alt="" />
                </div>
                <div className="halfColumn">
                    <p>Grounded image generation enables precise spatial control over pretrained diffusion models, making it possible to use chart images as visual guides during the image generation process. This paper presents a novel approach that generates cohesive and natural illustrations of vertical bar charts by integrating real-world object images as visual embellishments. The proposed pipeline takes an object image and a reference bar chart as input and produces an embellished bar chart that follows the structure of the input chart. </p>
                    <p>To preserve chart integrity by maintaining the count, position, size, and order of data values, we introduce a strategy that anchors top and bottom parts of object image to the top and bottom of each bar while allowing the middle section to be filled by the generation model. We demonstrate the efficacy of the pipeline through the generation of 4,725 chart images followed by filtering and evaluation based on three integrity metrics. The results show that generation success rate is affected by various factors. We also address limitations of the evaluation using detection, trade-offs in end-to-end image generation and outline future work direction for broader chart type coverage.</p>
                    
                    <div className="contact">
                    Submitted to a conference in 2025.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GroundedChart;
