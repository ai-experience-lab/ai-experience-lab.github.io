import "./Join.scss";

function Join() {
  return (
    <div className="page join">
      <div className="pageTitle">How to Join </div>
      <div className="halfColumn">
        <p>
          We are always looking for students interested in AI-infused products and data-driven design. If you're interested in working with me, please read below and send me an email (takyeonlee at kaist dot ac dot kr).
        </p>
        <h3>Ph.D. student</h3>
        <p>
          An ideal candidate should have some prior research experience and technical skills such as prototyping or machine learning. If you are interested in, please send me an email containing some of the following information,
        </p>
        <ul>
          <li>Cover letter that summarizes your experience and research interest</li>
          <li>A link to materials that demonstrate your technical capabilities such as source code repositories, a personal website, etc</li>
          <li>List of publications</li>
          <li>Any other information that demonstrates your potential as a researcher</li>
        </ul>

        <h3>Master student</h3>
        <p>In KAIST, master’s program is research-oriented, which means that every student needs to join a research group and writes a thesis. In fact, after admission, students are allowed to select their preferred lab, and the department makes the best effort to accommodate these requests (though acceptance to a specific lab is not guaranteed, as it depends on the number of applications received).</p>

        <h3>Undergraduate Internship</h3>
        <p>
          If you are currently registered as a KAIST student (including a visiting student) and are interested in an internship, independent research in our lab or in starting a URP (Undergraduate Research Program) with me, please send an email with the following information,
        </p>
        <ul>
          <li>What do you want to achieve at the end of your internship?</li>
          <li>What research topic are you interested in?</li>
          <li>How long will your internship be? I prefer students to work with me at least for six months, but it's not a hard requirement.</li>
          <li>Any materials that demonstrate your expertise and capabilities such as design brief, video of working prototype, etc</li>
        </ul>

        <h3>Frequently Asked Questions</h3>
        <h4>Q. Is programming skill required to join the lab?</h4>
        <p className="answer">
        Not at all! While many AEL members do know how to code, we don’t see programming as a strict requirement. Think of it like drawing for artists — helpful, yes, but creating meaningful work goes way beyond just one skill. What really matters is <b>an open mind and a willingness to explore across disciplines</b>. If you’re great at qualitative research, awesome — dive into how people interact with AI. If you’re a visual designer, maybe you’ll explore how AI shapes or inspires visual expression. Some of us build tools, some tell stories, some do both. As long as you’re curious and excited to work at the intersection of design, data, and intelligence, there’s definitely a place for you here.
        </p>

        <h4>Q. What career path do AELers expect?</h4>
        <p className="answer">
        AEL is a great launchpad for creative, interdisciplinary careers at the intersection of design, AI, and research. One ideal path is to intern at global tech companies like Google, Meta, or Adobe, and eventually pursue roles like <b>research scientist or design technologist</b>. Academic careers are also a strong fit — <b>becoming a professor or research scholar </b>is a natural continuation for those interested in deeper inquiry. If you’re thinking about <b>studying abroad after completing your MSc at AEL</b>, that’s highly encouraged and well aligned with the lab’s vision. And of course, some may take a more artistic route — using <b>AI as a creative partner</b> to explore new forms of expression, storytelling, or interactive experiences. Whether you’re aiming for industry, academia, or the arts, what matters most is having a bold, inquisitive mindset and a drive to shape the future through design and AI.
        </p>
        
      </div>
    </div>
  );
}

export default Join;

