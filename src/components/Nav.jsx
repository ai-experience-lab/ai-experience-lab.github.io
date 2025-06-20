import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Nav.scss";
// import { BsToggleOff, BsToggleOn } from "react-icons/bs";
// import { RiEnglishInput } from "react-icons/ri";
// import { TbAlphabetKorean } from "react-icons/tb";

function Nav({language, setLanguage}) {
    const [isVisible, setIsVisible] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        // 컴포넌트 마운트 후 애니메이션 시작
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);
        
        return () => clearTimeout(timer);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            {/* 모바일 햄버거 버튼 */}
            <button className="mobile-menu-button" onClick={toggleMobileMenu}>
                <span className={isMobileMenuOpen ? 'active' : ''}></span>
                <span className={isMobileMenuOpen ? 'active' : ''}></span>
                <span className={isMobileMenuOpen ? 'active' : ''}></span>
            </button>

            {/* 모바일 메뉴 오버레이 */}
            <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}></div>

            {/* 기존 네비게이션 */}
            <div className={`nav ${isVisible ? 'nav-visible' : ''} ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                <ul>
                    <li className="no-select"><Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About us</Link></li>
                    <li className="no-select"><Link to="/people" onClick={() => setIsMobileMenuOpen(false)}>People</Link></li>
                    <li className="no-select"><Link to="/projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</Link></li>
                    <li className="no-select"><Link to="/publications" onClick={() => setIsMobileMenuOpen(false)}>Publications</Link></li>
                    <li className="no-select"><Link to="/courses" onClick={() => setIsMobileMenuOpen(false)}>Courses</Link></li>
                    <li className="no-select"><Link to="/gallery" onClick={() => setIsMobileMenuOpen(false)}>Gallery</Link></li>
                    <li className="no-select"><Link to="/join" onClick={() => setIsMobileMenuOpen(false)}>Join</Link></li>
                    <li className="no-select"><Link to="/news" onClick={() => setIsMobileMenuOpen(false)}>News</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Nav;