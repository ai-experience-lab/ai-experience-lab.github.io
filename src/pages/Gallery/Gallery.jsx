import "./Gallery.scss";
import activityImages from "../../images/lab_activities_new.png";   
function Gallery() {
    return (
    <div className="page gallery">
        <div className="pageTitle">Life @ AEL</div>

        <img className="activities" src={activityImages} alt="AEL Lab Activities"/>
    </div>);
}

export default Gallery;