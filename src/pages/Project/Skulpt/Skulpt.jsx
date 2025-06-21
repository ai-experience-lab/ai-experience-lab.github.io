import img1 from './skulpt-bien-1.png';
import img2 from './skulpt-bien-2.png';
import img3 from './skulpt-bien-3.png';
import img4 from './skulpt-bien-4.png';

function Skulpt() {
    return (<div className="ProjectContent">
        <div className="Header">
            <div className="Date">
                <div className="ProjectDateTitle">2025</div>
            </div>
            <div className="Title">SKULPT</div>
            <div className="Subtitle">Revolutionizing Forensic Facial Reconstruction</div>
            <div className="Researchers">
                Maida Aizaz, Khadija Rajabova
            </div>
            <div className="Remarks">
                WiCV workshop at CVPR 2025 <br/>
                Will be at Gwangju Biennale 2025
            </div>
            {/*
                <div className="links">
                    <a href="https://chart2experience.github.io/" target="_blank" className="link">Project Website</a>
                </div>
                */}

        </div>
        <div className="MainContent">
            <div className="ImageBox">
                <img src={img3} alt="" />
            </div>
            <div className="halfColumn">

                <h3>Unveiling SKULPT: Revolutionizing Forensic Facial Reconstruction</h3>
                <p>Imagine being able to reconstruct a human face from just a 3D skull, accurately and efficiently. This is the groundbreaking promise of SKULPT, a novel, data-driven pipeline designed for forensic facial reconstruction. SKULPT leverages cutting-edge technology, combining sophisticated deep reinforcement learning for precise skull landmarking with innovative face generation techniques. Its aim is to create realistic faces that faithfully capture both the underlying bone structure and the subtle nuances of soft tissue details. We believe SKULPT represents a significant leap forward, offering an automated, adaptable, and highly effective advancement with broad implications for forensics and beyond.</p>

                <h4>From Manual Labor to Automated Precision</h4>
                <p>Traditionally, forensic facial reconstruction has been a demanding process. Methods like the well-known Manchester method, which considers soft tissue thickness and facial muscles, are incredibly labor-intensive and require specialized training. These older techniques often relied on manual artistry or basic digital tools, making the entire procedure time-consuming and highly susceptible to subjective interpretation.</p>
                <p>While computerized craniofacial reconstruction techniques have emerged, offering less subjective and more cost-effective outcomes, they still often involve extensive expert assessment of the skull characteristics such as gender, age, and ancestry. These techniques build upon a craniofacial model (CFM), which essentially encodes prior information about faces and their relationship to the skull, customized by anthropological characteristics. The geometric link between the CFM and the unknown skull is then determined, often using facial landmarks, followed by texturing and visualization to create images for recognition.</p>
                <p>However, the field is rapidly evolving. Recent advancements in machine learning and 3D modeling are paving the way for automation, enhancing both the accuracy and reproducibility of forensic facial reconstruction. Many existing approaches, from statistical shape modeling to deep generative models, still depend on manual input, specific tissue depth data, or complex skull-to-face mapping strategies that demand extensive model training, limiting their generalizability and scalability. SKULPT steps in to bridge this gap, offering a fast, fully-automated, and data-driven solution.</p>

                <h4>How SKULPT Works: An End-to-End Approach</h4>
                <p>SKULPT operates as an end-to-end pipeline, significantly minimizing the need for manual input from forensic experts. Unlike many prior studies that rely on direct skull-to-face mappings, SKULPT performs skull-to-skull and face-to-face matching. Crucially, it achieves this using only skull and face landmarks, eliminating the requirement for explicit tissue depth data.</p>

            </div>

            <div className="ImageBox">
                <img src={img1} alt="" />
            </div>

            <div className="halfColumn">

                <p>The entire process is broken down into four main stages:</p>
                <ol>
                    <li><b>Landmarking the Skulls:</b> The pipeline begins by automatically landmarking the 3D skulls. This involves identifying 20 pre-defined skull landmarks, chosen based on the topography of the skulls in the dataset. This precise annotation is performed by a multistage deep reinforcement learning agent, specifically a deep Q-network (DQN), which was trained to predict one specific skull landmark at a time. This agent can landmark unseen skulls remarkably fast, in about 20 seconds per skull, after an initial training period.</li>
                    <li><b>Preprocessing Landmark Coordinates:</b> Once landmarked, the coordinates from both the database and the input skull undergo a crucial preprocessing step. This ensures that the landmarks are invariant to translation, rotation, and scale. Translational invariance is achieved by centering all landmark sets to the origin. Scale invariance is maintained by normalizing the points so that the maximum distance from the origin on any axis is always one. Rotational invariance is ensured by using Principal Component Analysis (PCA) to align the points along their principal axis.</li>
                    <li><b>Skull-Skull Matching:</b> The preprocessed input skull is then matched to its closest counterparts within its age group (defined as plus or minus 10 years from the subject's age group). This matching process uses Euclidean distance in 3D space to identify the 'k' closest skulls from the database, where 'k' is typically 2 or more. For each of these 'k' matched skulls, their corresponding 3D faces are retrieved from the database. To manage computational expense, 2D snapshots of these 3D faces are then created and annotated with a widely recognized 68-point facial landmark model.</li>
                    <li><b>2D Face Generation:</b> This final stage is where SKULPT truly shines, employing four distinct sub-pipelines to generate the facial images. Each pipeline offers a unique approach to balancing realism, customizability, and anatomical consistency.</li>
                </ol>
                <p>SKULPT was developed using a dataset of 552 anonymized 3D skull and face pairs, obtained as CT scans from the National Forensic Service of Korea. This diverse dataset includes individuals categorized by age group (20s to 60s) and gender, crucial factors given the morphological variations in skulls across these demographics.</p>


                <h3>SKULPT's Innovative Face Generation Pipelines</h3>
                <p>Following the precise skull-skull matching, SKULPT offers four distinct face generation pipelines, each with unique characteristics:</p>
                <ol>
                    <li><h4>3d-avg Pipeline</h4>
                        <p>This pipeline takes the 'k' 2D face snapshots obtained from skull-skull matching and simply averages them using a tool called Facer. The result is a mean grayscale facial image that geometrically incorporates the maximum features from each of the constituent 3D CT faces. It provides a foundational averaged face directly from the matched skull data.</p>
                    </li>
                    <li><h4>3d-sd Pipeline</h4>
                        <p>Building upon the output of the 3d-avg pipeline, this stage introduces the power of Stable Diffusion. Given the averaged grayscale image and a user-defined prompt specifying details like gender, ethnicity, or additional features (e.g., glasses, hair length and color), it performs prompted in-painting. This results in a highly realistic 2D face that bears a strong visual resemblance to the 3d-avg output, but with added detail and customizability.</p>
                    </li>
                    <li><h4>3d2d-avg Pipeline</h4>
                        <p>This pipeline introduces an external element. For each of the 'k' matched faces, it extracts 'n' additional matches from a benchmark dataset of Asian faces (All-Age-Faces dataset) using 2D Procrustes distance. This creates a larger matrix of images, which is then filtered using a BMI tool and gender information to retain only the images that fall within the input skull's BMI range and match its gender, ensuring physiological similarity. These 'm' filtered images are then averaged using Facer, producing an averaged, slightly blurry 2D face.</p>
                    </li>
                    <li><h4>3d2d-sd Pipeline</h4>
                        <p>Similar to the 3d-sd pipeline, this final stage takes the averaged output from the 3d2d-avg pipeline and applies Stable Diffusion. With user prompts for additional features, it renders a realistic, detailed face with strong features. Interestingly, unlike the 3d-sd pipeline, the output of this pipeline doesn't always strictly resemble its 3d2d-avg input, offering a more generative interpretation.</p>
                    </li>
                </ol>

                <h3>Evaluating SKULPT's Performance</h3>
                <p>To determine the most effective pipeline, SKULPT underwent comprehensive evaluations, including a first-of-its-kind user study and quantitative analyses.</p>
            </div>

            <div className="ImageBox">
                <img src={img2} alt="" />
            </div>

            <div className="halfColumn">
                <h4>User Evaluation: Expert and Non-Expert Insights</h4>
                <p>The user study involved 24 participants – 20 non-experts and 4 forensic experts. Each participant was presented with images from one of the four pipelines and asked to identify the ground truth facial CT scan that best matched the pipeline's output from a choice of three images (pipeline output, ground truth CT, and a false image). The overall average score was 5.33 out of 10.</p>
                <ul>
                    <li>The <b>3d2d-avg pipeline emerged as the most effective</b>, scoring 5.50, slightly outperforming 3d-avg (5.33), 3d-sd (5.17), and 3d2d-sd (5.33).</li>
                    <li>Non-expert participants primarily relied on general facial features like face shape, jawline, bone structure, nose, lips, and cheekbones, as well as age cues and gender indicators. They found eyes, eyebrows, and ears difficult to distinguish in CT scans.</li>
                    <li>Forensic experts noted that the 3d-avg pipeline sometimes suffered from inconsistent facial alignment, while the 3d-sd pipeline often had misaligned lower facial regions despite accurately generating upper and central areas.</li>
                    <li>Significantly, forensic experts highlighted the benefit of the slight blurriness in the 3d2d-avg outputs, stating it provides a wider margin for interpretation in forensic contexts, which is helpful when data is limited.</li>
                    <li>They also praised the flexibility of the Stable Diffusion-based pipelines (3d-sd and 3d2d-sd) for allowing variations in hairstyles, scars, and accessories. This customizability is particularly valuable for families and friends who wish to recreate the deceased's appearance as they remember them.</li>
                </ul>

            </div>

            <div className="ImageBox">
                <img src={img4} alt="" />
            </div>

            <div className="halfColumn">

                <h4>Quantitative Analysis: Measuring Similarity</h4>
                <p>Given its strong performance in the user study, the 3d2d-avg pipeline was subjected to quantitative analysis. Generated images were compared against ground truth photographs using five well-established metrics: LPIPS, DeepFace (with Dlib, Facenet512, and VGG-16 models), and Face Recognition. The goal was to determine how perceptually similar the generated faces were to the real ones.</p>
                <p>The results showed matching rates ranging from 60% to 100%, with an average accuracy of 76%. While not perfect, these numbers, especially when considered alongside the positive user feedback, indicate significant promise for the pipeline's efficacy.</p>

                <h3>Limitations and Future Directions</h3>
                <p>Despite its encouraging results, SKULPT's current iteration faces certain limitations. A primary constraint is its reliance on CT scan data, which, while valuable for bone structure, may lack the richer details provided by photographic images. Future work aims to incorporate higher-quality image data to capture finer facial features, particularly in challenging areas like the lower face.</p>
                <p>Additionally, while SKULPT proves effective with its current database of 552 skull-face pairs, expanding this 3D dataset is expected to further enhance the reliability and robustness of reconstructions. Addressing these limitations will pave the way for even more accurate and scalable forensic facial reconstruction methods.</p>

                <h3>Conclusion</h3>
                <p>SKULPT stands as a fully-automated, data-driven pipeline that dramatically streamlines the process of facial reconstruction. By integrating advanced techniques like deep reinforcement learning for landmark detection, facial averaging, and Stable Diffusion for face generation, it minimizes manual labor while maximizing potential for accurate and compelling results. The comprehensive evaluations underscore its promising potential in delivering perceptually plausible and anatomically consistent reconstructions, particularly highlighting the strength of the 3d2d-avg pipeline. SKULPT truly offers a significant step forward in forensic science, providing invaluable tools for identification and remembrance.</p>


            </div>
        </div>
    </div>
    )
}

export default Skulpt;
