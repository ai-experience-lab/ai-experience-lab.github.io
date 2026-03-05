import tak_image from "../../images/member_photo/tak.jpg";
import seongyeomkim_image from "../../images/member_photo/seongyeomkim.jpg";
import jeehunchoi_image from "../../images/member_photo/jeehunchoi.jpg";
//import donggunlee_image from "../../images/member_photo/donggunlee.jpeg";
import joohyoungpark_image from "../../images/member_photo/joohyoungpark.jpeg";
import yusangyun_image from "../../images/member_photo/yusangyun.jpg";
import byoungjaekim_image from "../../images/member_photo/byoungjaekim.jpg";
import minsunkim_image from "../../images/member_photo/minsunkim.jpg";
import jinjeong_image from "../../images/member_photo/jinjeong.jpg";
import hyunseungmoon_image from "../../images/member_photo/hyunseungmoon.jpg";
import jaeyoungchoi_image from "../../images/member_photo/jaeyoungchoi.jpg";
import hyunlee_image from "../../images/member_photo/hyunlee.jpeg";
import jaeryungchung_image from "../../images/member_photo/jaeryungchung.jpg";
import donggunlee_image from "../../images/member_photo/donggunlee.png";
import yoonjaeoh_image from "../../images/member_photo/yoonjaeoh.jpg";
import jungwonpark_image from "../../images/member_photo/jwpark.png";
import chaeyounghuh_image from "../../images/member_photo/chaeyounghuh.png";
import seunghobaek_image from "../../images/member_photo/seunghobaek.png";
import subincho_image from "../../images/member_photo/subincho.png";
import jaywoong_image from "../../images/member_photo/jaywoong.png";
import placeholder_image from "../../images/member_photo/placeholder.png";
import yoon_image from "../../images/member_photo/yoon.png";
import seo_image from "../../images/member_photo/seo.png";
import maida_image from "../../images/member_photo/maida.png";
import kadijah_image from "../../images/member_photo/kadijah.png";

import "./People.scss";

function People() {
  return (
  <div className="page People">
    <div className="pageTitle">People</div>
      <h3>Captain of the boat</h3>
      <ul className="people_list">
        <li>
          <a href="https://www.takyeonlee.com" target='_blank' rel="noreferrer"><img src={tak_image} alt="tak_image"/></a>
          <div className="name kr">이탁연</div>
          <div className="name">Tak Yeon, Lee</div>
          <div className="role">Assistant Professor</div>
          <div className="email">
            takyeonlee@kaist.ac.kr
          </div>
          <div className="website">
            <a href="https://www.takyeonlee.com">website</a>
          </div>
        </li>
      </ul>
      <h3>PhD Students</h3>
      <ul className="people_list">
        <li>
          <a href="https://kimseongyeom.github.io/" target='_blank' rel="noreferrer"><img src={seongyeomkim_image} alt="seon_image"/></a>
          <div className="name kr">김선겸</div>
          <div className="name">Seon Gyeom, Kim</div>
          <div className="role">PhD Student</div>
          <div className="email">
            ksg_0320@kaist.ac.kr
          </div>
          <div className="website">
            <a href="https://kimseongyeom.github.io/" target='_blank' rel="noreferrer">website</a>
          </div>
        </li>
        <li>
          <a href="https://hyunseungmoon.net" target='_blank' rel="noreferrer"><img src={hyunseungmoon_image} alt="hyunseung_image"/></a>
          <div className="name kr">문현승</div>
          <div className="name">HyunSeung, Moon</div>
          <div className="role">PhD Student</div>
          <div className="email">
            mzes0401@kaist.ac.kr
          </div>
          <div className="website">
            <a href="https://hyunseungmoon.net" target='_blank' rel="noreferrer">website</a>
          </div>
        </li>
      </ul>
      <h3>Master Students</h3>
      <ul className="people_list">
        <li>
        <a href="https://jaeyoungchoi1.github.io/" target='_blank' rel="noreferrer"><img src={jaeyoungchoi_image} alt="jaeyoung_image"/></a>
          <div className="name kr">최재영</div>
          <div className="name">Jae Young, Choi</div>
          <div className="role">Master Student</div>
          <div className="email">
          jaeyoungchoi@kaist.ac.kr 
          </div>
          <div className="website">
            <a href="https://jaeyoungchoi1.github.io/" target='_blank' rel="noreferrer">website</a>
          </div>
        </li>
        <li>
        <a href="https://hyun-lee.web.app/" target='_blank' rel="noreferrer"><img src={hyunlee_image} alt="hyun_image"/></a>
        <div className="name kr">이현</div>
          <div className="name">Hyun, Lee</div>
          <div className="role">Master Student</div>
          <div className="email">
          hyunini0408@kaist.ac.kr 
          </div>
          <div className="website">
            <a href="https://hyun-lee.web.app/" target='_blank' rel="noreferrer">website</a>
          </div>
        </li>
        <li>
          <a href="https://jaeryungchung.github.io" target='_blank' rel="noreferrer"><img src={jaeryungchung_image} alt="jaeryung_image"/></a>
          <div className="name kr">정재령 </div>
          <div className="name">Jaeryung, Chung</div>
          <div className="role">Master Student</div>
          <div className="email">
          jhyun513@kaist.ac.kr
          </div>
          <div className="website">
            <a href="https://jaeryungchung.github.io" target='_blank' rel="noreferrer">website</a>
          </div>
        </li>
        <li>
          <a href="https://donggunlee0.com/" target='_blank' rel="noreferrer"><img src={donggunlee_image} alt="donggunlee_image"/></a>
          <div className="name kr">이동건</div>
          <div className="name">Donggun, Lee</div>
          <div className="role">Master Student</div>
          <div className="email">
          jlee4330@kaist.ac.kr
          </div>
          <div className="website">
            <a href="https://donggunlee0.com/" target='_blank' rel="noreferrer">website</a>
          </div>
        </li>
        <li>
          <a><img src={yoonjaeoh_image} alt="yoonjaeoh_image"/></a>
          <div className="name kr">오윤재</div>
          <div className="name">Yoonjae, Oh</div>
          <div className="role">Master Student</div>
          <div className="email">
          angelaoh@kaist.ac.kr
          </div>
        </li>
        <li>
          <a href="https://seohyeyeon.myportfolio.com/work" target='_blank' rel="noreferrer"><img src={seo_image} alt="seo_image"/></a>
          <div className="name kr">서혜연</div>
          <div className="name">Hyeyeon, Seo</div>
          <div className="role">Master Student</div>
          <div className="email">
            hseo01@kaist.ac.kr
          </div>
          <div className="website">
            <a href="https://seohyeyeon.myportfolio.com/work" target='_blank' rel="noreferrer">website</a>
          </div>
        </li>
      </ul>

      <h3>Undergraduate Interns</h3>
      <ul className="people_list">
        <li>
          <a><img src={jungwonpark_image} alt="jungwonpark_image"/></a>
          <div className="name kr">박정원</div>
          <div className="name">Jung Won Park</div>
          <div className="role">Intern
          </div>
          <div className="website">
            <a href="https://siwon.site" target='_blank' rel="noreferrer">website</a>
          </div>
        </li>
        <li>
          <a><img src={yoon_image} alt="yoonkim_image"/></a>
          <div className="name kr">김윤</div>
          <div className="name">Yoon Kim</div>
          <div className="role">Intern
          </div>
        </li>
        <li>
          <a><img src={chaeyounghuh_image} alt="chaeyounghuh_image"/></a>
          <div className="name kr">허채영</div>
          <div className="name">Chaeyoung Huh</div>
          <div className="role">Intern
          </div>
          <div className="website">
            <a href="https://lirisnoir.notion.site/" target='_blank' rel="noreferrer">website</a>
          </div>
        </li>
        <li>
          <a><img src={subincho_image} alt="subincho_image"/></a>
          <div className="name kr">조수빈</div>
          <div className="name">Subin Cho</div>
          <div className="role">Intern
          </div>
        </li>
      </ul>

      <h3>Alumni</h3>
      <ul className="people_list">
        <li>
          <img src={joohyoungpark_image} alt="joohyoung_image"/>
          <div className="name kr">박주형</div>
          <div className="name">Juhyeong, Park</div>
          <div className="role">
            MSc. 2024<br />
            UX Designer @ Hyundai Card
          </div>

        </li>
        <li>
          <img src={byoungjaekim_image} alt="byoungjae_image"/>
          <div className="name kr">김병재</div>
          <div className="name">Byoungjae, Kim</div>
          <div className="role">MSc. 2024<br/>
            PhD Student @ KAIST
          </div>
          
        </li>
        <li>
          <img src={yusangyun_image} alt="yusang_image"/>
          <div className="name kr">윤유상</div>
          <div className="name">Yoosang, Yoon</div>
          <div className="role">MSc. 2024<br/>
            Skilled Industrial Personnel @ PLATEER
          </div>
        </li>
        <li>
          <img src={minsunkim_image} alt="minsun_image"/>
          <div className="name kr">김민선</div>
          <div className="name">Minsun, Kim</div>
          <div className="role">MSc. 2024<br/>
            Ph.D. Student @ Virginia Tech
          </div>
        </li>
        <li>
          <img src={jinjeong_image} alt="jin_image"/>
          <div className="name kr">정진</div>
          <div className="name">Jin, Jeong</div>
          <div className="role">MSc. 2025<br/>
            Military Duty
          </div>
        </li>
      </ul>
      <ul className="people_list">
        <li>
          <img src={seunghobaek_image} alt="seungho_image"/>
          <div className="name kr">백승호</div>
          <div className="name">Seungho Baek</div>
          <div className="role">Intern 2022
          </div>
          <div className="website">
            <a href="https://thestar.notion.site/e6f6b641bd8f493085e5f044182dcae3" target='_blank' rel="noreferrer">website</a>
          </div>
        </li>
        <li>
          <img src={jeehunchoi_image} alt="jeehunchoi_image"/>
          <div className="name kr">최지헌</div>
          <div className="name">Jee-Hun Choi</div>
          <div className="role">Intern 2022
          </div>
          <div className="website">
            <a href="https://jee-hun.notion.site" target='_blank' rel="noreferrer">website</a>
          </div>
        </li>
        <li>
          <img src={placeholder_image} alt="yutaeksong_image"/>
          <div className="name kr">송유택</div>
          <div className="name">Yutaek Song</div>
          <div className="role">Intern 2022
          </div>
        </li>
        <li>
          <img src={placeholder_image} alt="taewoo_image"/>
          <div className="name kr">김태우</div>
          <div className="name">Taewoo Kim</div>
          <div className="role">Intern 2022
          </div>
        </li>
        <li>
          <img src={placeholder_image} alt="yubin_image"/>
          <div className="name kr">이유빈</div>
          <div className="name">Yubin Lee</div>
          <div className="role">Intern 2022
          </div>
        </li>
        <li>
          <img src={placeholder_image} alt="yoojin_image"/>
          <div className="name kr">홍유진</div>
          <div className="name">Yoojin Hong</div>
          <div className="role">Intern 2023
          </div>
        </li>
        <li>
          <img src={maida_image} alt="maida_image"/>
          <div className="name kr">마이다</div>
          <div className="name">Maida Aizaz</div>
          <div className="role">Intern 2023
          </div>
        </li>
        <li>
          <img src={kadijah_image} alt="kadijahrajavova_image"/>
          <div className="name kr">카디자</div>
          <div className="name">Kadijah Rajabova</div>
          <div className="role">Intern 2024
          </div>
        </li>
        <li>
          <img src={placeholder_image} alt="suyounlee_image"/>
          <div className="name kr">이수연</div>
          <div className="name">Suyoun Lee</div>
          <div className="role">Intern 2024
          </div>
        </li>
        <li>
          <img src={placeholder_image} alt="ichae_image"/>
          <div className="name kr">류이채</div>
          <div className="name">Ihchae Ryu</div>
          <div className="role">Intern 2024
          </div>
        </li>
        <li>
          <a><img src={jaywoong_image} alt="jaywoong_image"/></a>
          <div className="name kr">정재웅</div>
          <div className="name">Jaywoong Jeong</div>
          <div className="role">Intern 2025
          </div>
          <div className="website">
            <a href="https://www.jaywoong.me" target='_blank' rel="noreferrer">website</a>
          </div>
        </li>

      </ul>
      {/* <li>
                <img src={jeehunchoi_image} />
                <div className="name">Jee Hun, Choi</div>
                <div className="role">Undergraduate Researcher</div>
                <div className="email">
                  jeehun@kaist.ac.kr
                </div>
              </li> */}
      {/* <li>
                <img src={donggunlee_image} />
                <div className="name">Dong Gun, Lee</div>
                <div className="role">Undergraduate Researcher</div>
                <div className="email">
                  jlee4330@kaist.ac.kr
                </div>
              </li> */}
      {/* </ul> */}
  </div>);
}

export default People;
