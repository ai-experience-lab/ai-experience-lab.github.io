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
        <p className="kr">
          박사과정 지원자는 AEL의 연구분야에 맞는 사전 경험과 역량을 갖춘 분이어야 합니다. 정식 지원에 앞서 아래 정보를 포함한 이메일을 보내주세요.
        </p>
        <ul className="kr">
          <li>연구 경험과 관심사를 포함한 이력서 및 커버레터</li>
          <li>포트폴리오나, 개인 웹사이트, 소스코드 저장소 등 기존 연구 경험을 담은 웹 링크</li>
          <li>연구자로서의 잠재력을 보여주는 기타 정보</li>
        </ul>
        <p>
          An ideal candidate should have some prior research experience and technical / non-technical skills such as prototyping,  machine learning, empirical research, visual design skills, etc. If you are interested in, please send me an email containing some of the following information,
        </p>
        <ul>
          <li>Resume and Cover letter that summarize your experience and research interest</li>
          <li>A link to materials that demonstrate your technical capabilities such as source code repositories, a personal website, etc</li>
          <li>List of publications (if any)</li>
          <li>Any other information that demonstrates your potential as a researcher</li>
        </ul>
        

        <h3>Master student</h3>
        <p className="kr">KAIST의 석사과정은 연구 중심 프로그램입니다. 모든 학생이 2년간 다양한 수업을 들으며, 연구 그룹에 참여하여 학위 논문을 작성해야 합니다. 입학이 결정된 후 학생들은 선호하는 연구실을 선택할 수 있습니다. AEL에서는 매 학기 1-1.5명의 석사과정생을 받습니다.</p>

        <p>In KAIST, master's program is research-oriented, which means that every student takes 2-year courses, and writes a thesis in a research group. After admission, students are allowed to select their preferred lab. Our lab usually takes 1-1.5 master students per semester.</p>
        
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
        <p className="kr">
          KAIST 재학생(교환학생 포함)으로서 인턴십, 독립연구 또는 URP(학부연구프로그램)에 관심이 있다면, 아래 정보를 포함한 이메일을 보내주세요.
        </p>
        <ul className="kr">
          <li>인턴십을 통해 무엇을 달성하고 싶은지?</li>
          <li>어떤 연구 주제에 관심이 있는지?</li>
          <li>인턴십 기간은 얼마나 될 것인지? 최소 6개월 이상 함께 일하기를 선호하지만, 절대적인 요구사항은 아닙니다.</li>
          <li>디자인 브리프, 작동하는 프로토타입 영상 등 전문성과 역량을 보여주는 자료</li>
        </ul>

        <h3>Frequently Asked Questions</h3>
        <h4>Q. Is programming skill required to join the lab? 연구실에 합류하려면 프로그래밍 기술이 필요한가요?</h4>
        <p className="answer kr">
        전혀 그렇지 않습니다. AEL 멤버들 중 많은 이들이 코딩을 할 줄 알지만, 프로그래밍이 필수는 아닙니다. 이는 마치 대부분의 예술가들이 훌륭한 그림 실력을 가지고 있지만, 창작 활동에 필수 요소는 아닌 것과 같습니다. 프로그래밍보다 훨씬 중요한 것은 <b>열린 마음과 여러 분야를 탐구하려는 의지</b>입니다. 예를 들어서, 만일 당신이 프로그래밍은 못하지만 정성 연구에 능하다면, 사람들이 AI와 어떻게 상호작용하는지 탐구해보세요. 시각 디자이너라면, AI를 통한 시각적 표현을 깊이 탐구할 수 있겠죠. 디자인, 데이터, 지능의 교차점에서 일하는 것에 호기심과 열정을 가지고 있다면, 여기에는 분명히 당신의 자리가 있습니다.
        </p>
        <p className="answer">
        Not at all! While many AEL members do know how to code, we don't see programming as a strict requirement. Think of it like drawing for artists — helpful, yes, but creating meaningful work goes way beyond just one skill. What really matters is <b>an open mind and a willingness to explore across disciplines</b>. If you're great at qualitative research, awesome — dive into how people interact with AI. If you're a visual designer, maybe you'll explore how AI shapes or inspires visual expression. Some of us build tools, some tell stories, some do both. As long as you're curious and excited to work at the intersection of design, data, and intelligence, there's definitely a place for you here.
        </p>
        

        <h4>Q. What career path do AELers expect? AEL 멤버들은 어떤 직업 경로를 예상하나요?</h4>
        <p className="answer kr">
        AEL은 디자인-AI-연구의 교차점에서, 창의적이고 다학제적인 경력을 시작하는 발판입니다. 예를 들어, 박사과정 중 추구할 수 있는 이상적인 경로 중에는 Google, Meta, Adobe와 같은 빅테크 기업에서 인턴십을 한 다음 <b>기업내 연구자</b>로 성장하는 것입니다. 물론 더 깊은 탐구에 관심이 있는 사람들은 <b>교수나 연구 학자</b>가 될 수도 있을 것입니다. 만일 AEL에서 석사 과정을 마친 후 <b>해외 유학</b>을 고려하고 있다면, 이것도 연구실의 비전과 잘 부합합니다. 혹은 남들보다 예술적인 경로를 택할 수도 있습니다 — <b>AI를 창작 파트너</b>로 사용하여 새로운 형태의 표현, 스토리텔링, 또는 인터랙티브 경험을 탐구하는 것입니다. 산업계, 학계, 예술계 어디를 목표로 하든, 가장 중요한 것은 대담하고 탐구적인 마음가짐과 디자인과 AI를 통해 미래를 형성하려는 의지입니다.
        </p>
        <p className="answer">
        AEL is a great launchpad for creative, interdisciplinary careers at the intersection of design, AI, and research. One ideal path is to intern at global tech companies like Google, Meta, or Adobe, and eventually pursue roles like <b>research scientist or design technologist</b>. Academic careers are also a strong fit — <b>becoming a professor or research scholar </b>is a natural continuation for those interested in deeper inquiry. If you're thinking about <b>studying abroad after completing your MSc at AEL</b>, that's highly encouraged and well aligned with the lab's vision. And of course, some may take a more artistic route — using <b>AI as a creative partner</b> to explore new forms of expression, storytelling, or interactive experiences. Whether you're aiming for industry, academia, or the arts, what matters most is having a bold, inquisitive mindset and a drive to shape the future through design and AI.
        </p>
        
      </div>
    </div>
  );
}

export default Join;

