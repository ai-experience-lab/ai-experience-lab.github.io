import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
// import Header from "../../components/Header.jsx";
// import Nav from "../../components/Nav.jsx";
import Footer from "../../components/Footer.jsx";

import "./CommonPage.scss";

function CommonPage({ContentPage, language, setLanguage}) {
    const location = useLocation();
    const [isContentVisible, setIsContentVisible] = useState(false);
    
    useEffect(() => {
        setIsContentVisible(false);
        
        const timer = setTimeout(() => {
            setIsContentVisible(true);
        }, 150);
        
        return () => clearTimeout(timer);
    }, [location.pathname]);
    return (
        <div className={`Content ${isContentVisible ? 'content-visible' : ''}`}>
            <ContentPage/>
            <Footer />
        </div>
    );
}   

export default CommonPage;