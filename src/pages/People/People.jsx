import tak_image from "../../images/member_photo/tak.jpg";
import seongyeomkim_image from "../../images/member_photo/seongyeomkim.jpg";
import jeehunchoi_image from "../../images/member_photo/jeehunchoi.jpg";
import donggunlee_image from "../../images/member_photo/donggunlee.jpeg";
import joohyoungpark_image from "../../images/member_photo/joohyoungpark.jpeg";
import yusangyun_image from "../../images/member_photo/yusangyun.jpg";
import byoungjaekim_image from "../../images/member_photo/byoungjaekim.jpg";
import minsunkim_image from "../../images/member_photo/minsunkim.jpg";
import jinjeong_image from "../../images/member_photo/jinjeong.jpg";
import hyunseungmoon_image from "../../images/member_photo/hyunseungmoon.jpg";
import jaeyoungchoi_image from "../../images/member_photo/jaeyoungchoi.jpg";
import hyunlee_image from "../../images/member_photo/hyunlee.jpeg";
import jaeryungchung_image from "../../images/member_photo/jaeryungchung.jpg";


function People() {
  return (
  <div className="page">
    <div className="pageTitle">Who We Are</div>
    <h3>Current Members</h3>
    <ul className="people_list">
      <li>
        <a href="https://www.takyeonlee.com" target='_blank' rel="noreferrer"><img src={tak_image} /></a>
        <div className="name">Tak Yeon, Lee</div>
        <div className="role">Assistant Professor</div>
        <div className="email">
          takyeonlee@kaist.ac.kr
        </div>
        <div className="website">
          <a href="https://www.takyeonlee.com">website</a>
        </div>
      </li>
      <li>
        <a href="https://kimseongyeom.github.io/" target='_blank' rel="noreferrer"><img src={seongyeomkim_image} /></a>
        <div className="name">Seon Gyeom, Kim</div>
        <div className="role">PhD Student</div>
        <div className="email">
          ksg_0320@kaist.ac.kr
        </div>
        <div className="website">
          <a href="https://kimseongyeom.github.io/">website</a>
        </div>
      </li>
      <li>
        <img src={hyunseungmoon_image} />
        <div className="name">HyunSeung, Moon</div>
        <div className="role">Master Student</div>
        <div className="email">
          mzes0401@kaist.ac.kr
        </div>
      </li>
      <li>
      <a href="https://jaeyoungchoi1.github.io/" target='_blank' rel="noreferrer"><img src={jaeyoungchoi_image} /></a>
        <div className="name">JaeYoung, Choi</div>
        <div className="role">Master Student</div>
        <div className="email">
        jaeyoungchoi@kaist.ac.kr 
        </div>
        <div className="website">
          <a href="https://jaeyoungchoi1.github.io/">website</a>
        </div>
      </li>
      <li>
      <a href="https://hyun-lee.web.app/" target='_blank' rel="noreferrer"><img src={hyunlee_image} /></a>
        <div className="name">Hyun, Lee</div>
        <div className="role">Master Student</div>
        <div className="email">
        hyunini0408@kaist.ac.kr 
        </div>
        <div className="website">
          <a href="https://hyun-lee.web.app/">website</a>
        </div>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/jaeryungchung" target='_blank' rel="noreferrer"><img src={jaeryungchung_image} /></a>
        <div className="name">Jaeryung, Chung</div>
        <div className="role">Master Student</div>
        <div className="email">
        jhyun513@kaist.ac.kr
        </div>
        <div className="website">
          <a href="https://www.linkedin.com/in/jaeryungchung">LinkedIn</a>
        </div>
      </li>

    </ul>

    <h3>Alumni</h3>
    <ul className="people_list">
      <li>
        <img src={joohyoungpark_image} />
        <div className="name">Juhyeong, Park</div>
        <div className="role">
          MSc.<br />
          UX Designer @ Hyundai Card
        </div>

      </li>
      <li>
        <img src={byoungjaekim_image} />
        <div className="name">Byoungjae, Kim</div>
        <div className="role">MSc.<br/>
          PhD Student @ KAIST
        </div>
        
      </li>
      <li>
        <img src={yusangyun_image} />
        <div className="name">Yoosang, Yoon</div>
        <div className="role">MSc.<br/>
          Skilled Industrial Personnel @ PLATEER
        </div>
      </li>
      <li>
        <img src={minsunkim_image} />
        <div className="name">Minsun, Kim</div>
        <div className="role">MSc.<br/>
          Product Manager @ Korea Telecom
        </div>
      </li>
      <li>
        <img src={jinjeong_image} />
        <div className="name">Jin, Jeong</div>
        <div className="role">Master Student</div>
        <div className="email">
          tasa2000@kaist.ac.kr
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
