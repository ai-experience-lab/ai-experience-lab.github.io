
import "./News.scss";

import aaa from "../../images/news_images/2025_6_11.jpeg";

function News() {
  return (
    <div className="page news">
      <div className="pageTitle">News</div>
      <h3>2025</h3>
      <ul>
        <li style={{ backgroundImage: `url(${aaa})`}}>
          <div className="newsTitle">A new version of this website is launched!</div>
          <div className="newsDate">June 11, 2025: </div>
        </li>
      </ul>
      <h3>2024</h3>
      <h3>2023</h3>
      <h3>2022</h3>
      <h3>2021</h3>
      <ul>
        <li>March, 1 2024: AEL Lab is launched!</li>
      </ul>
    </div>
  );
}

export default News;