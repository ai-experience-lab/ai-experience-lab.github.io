import factoryConditions from "./factory-conditions.png";
import performanceRatings from "./performance-ratings.png";
import feedbackCoverage from "./feedback-coverage.png";
import feedbackDivergence from "./feedback-divergence.png";

function MultiAgentCoordination() {
  return (
    <div className="ProjectContent">
      <div className="Header">
        <div className="Date">
          <div className="ProjectDateTitle">2026</div>
        </div>
        <div className="Remarks">NeurIPS Workshops - IAB, NEmo</div>
        <div className="Title">Interpreting Multi-Agent Coordination</div>
        <div className="Subtitle">Understanding how people make sense of collaboration beyond performance metrics</div>
        <div className="Researchers">
          <a href="https://openreview.net/profile?id=~Kyungyoon_Jung1" target="_blank" rel="noreferrer">Kyungyoon Jung</a>
          <a href="https://openreview.net/profile?id=~Donggun_Lee4" target="_blank" rel="noreferrer">Donggun Lee</a>
        </div>
        <div className="links">
          <a href="https://iab-agents.github.io/" target="_blank" rel="noreferrer">IAB Workshop</a>
          <a href="https://nemo.semantic.review/" target="_blank" rel="noreferrer">NEmo Workshop</a>
        </div>
      </div>

      <div className="MainContent">
        <div className="ImageBox">
          <img src={factoryConditions} alt="Factory task and experimental conditions across layouts, team sizes, and performance levels" />
        </div>

        <div className="halfColumn">
          <h3>Summary</h3>
          <p>
            How do people interpret multi-agent coordination when they observe agents working together? This project examines the feedback people form while monitoring embodied agents in a simulated smart factory, revealing aspects of coordination that are not captured by task performance alone.
          </p>
          <p>
            Across 108 videos, 216 participants provided 1,746 feedback items about what they noticed, how they interpreted it, and how they assessed the team. The analysis develops a five-dimensional taxonomy of human monitoring feedback and shows that people who observe the same behavior can still attend to different moments and draw different conclusions.
          </p>
        </div>

        <div className="halfColumn">
          <h3>Studying Human Feedback</h3>
          <p>
            Participants watched teams of two or four agents coordinate package-delivery tasks in partitioned and open factory layouts. The videos represented low, mid, and high system-performance levels. After each video, participants rated overall collaboration, selected noteworthy time intervals, and described their observations and interpretations.
          </p>
          <p>
            The resulting feedback was analyzed across five dimensions: the unit of observation, observed behavior, monitoring strategy, interpretation, and feedback type. This makes it possible to examine both the evidence people select and the meanings they assign to it.
          </p>
        </div>

        <div className="halfColumn">
          <h3>Beyond Performance Metrics</h3>
          <p>
            Human collaboration ratings generally followed task performance, but only weakly distinguished low- from high-performing teams. Even when people watched the same trajectory, they often identified different moments as meaningful and interpreted shared moments differently. Aggregating feedback across observers therefore surfaces a broader view of coordination than any single observer or task metric alone.
          </p>
        </div>

        <div className="chartImages">
          <div className="ImageBox">
            <img src={performanceRatings} alt="Collaboration ratings by system-defined performance level" />
          </div>
          <div className="ImageBox">
            <img src={feedbackCoverage} alt="Temporal overlap and coverage of feedback across observers" />
          </div>
          <div className="ImageBox">
            <img src={feedbackDivergence} alt="Divergence in observer feedback across five taxonomy dimensions" />
          </div>
        </div>

        <div className="halfColumn">
          <h3>Workshop Papers</h3>
          <ul>
            <li><i>Human-Grounded Representations for Neuro-Symbolic Monitoring of Multi-Agent Coordination</i>, accepted to the NEmo Workshop at NeurIPS 2026.</li>
            <li><i>Same Behavior, Different Feedback: Interpreting Multi-Agent Coordination Beyond Performance Metrics</i>, accepted to the 1st Workshop on Interpreting Agent Behavior (IAB) at NeurIPS 2026.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MultiAgentCoordination;
