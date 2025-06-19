import Header from "../../components/Header.jsx";
import Nav from "../../components/Nav.jsx";
import Footer from "../../components/Footer.jsx";

import "./CommonPage.scss";

function CommonPage({ContentPage, language, setLanguage}) {
    return (
        <div className="App noBounce">
            <Header language={language} setLanguage={setLanguage} />
            <div className="CommonPage noBounce">
                <Nav language={language} setLanguage={setLanguage} />
                <div className="Content">
                    <ContentPage/>
                    <Footer />
                </div>
            </div>
        </div>
        
    );
}   

export default CommonPage;