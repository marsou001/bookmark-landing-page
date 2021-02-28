import { useState, useEffect } from 'react';
import hamburgerMenu from '../../images/icon-hamburger.svg';
import iconClose from '../../images/icon-close.svg';
import iconFacebook from '../../images/icon-facebook.svg';
import iconTwitter from '../../images/icon-twitter.svg';
import NavUtil from './NavUtil/NavUtil';
import NavLinksUtil from './NavLinksUtil/NavLinksUtil';
import NavInactive from './NavInactive/NavInactive';
import NavActiveContainer from './NavActiveContainer/NavActiveContainer';
import NavActive from './NavActive/NavActive';
import NavigationLinks from './NavigationLinks/NavigationLinks';
import SocialLinks from './SocialLinks/SocialLinks';

function Navbar() {
    const [isNavActive, setIsNavActive] = useState(false);
    const [showHamburgerMenu, setShowHamburgerMenu] = useState(window.innerWidth < 680);
    const [allowMarginLeft, setAllowMarginLeft] = useState(window.innerWidth < 992);
    const [height, setHeight] = useState(window.innerHeight);

    const handleClick = () => setIsNavActive(prevState => !prevState);

    useEffect(() => {
        function addResizeEventListener() {
            setShowHamburgerMenu(window.innerWidth < 680);
            setAllowMarginLeft(window.innerWidth < 992);
            setHeight(window.innerHeight);
        }

        window.addEventListener('resize', addResizeEventListener);
    
        return function() {
            window.removeEventListener('resize', addResizeEventListener);
        }
    });

    return (
        <nav>
            <div>           
                <NavInactive allowMarginLeft={allowMarginLeft} isNavActive={isNavActive} showHamburgerMenu={showHamburgerMenu}>                    
                    <NavUtil isNavActive={isNavActive} icon={hamburgerMenu} handleClick={handleClick} />
                    <div className='navigation-links'>                        
                        <NavLinksUtil />
                    </div>
                </NavInactive>
            </div>
            <NavActiveContainer isNavActive={isNavActive}>        
                <NavActive>                    
                    <NavUtil isNavActive={isNavActive} icon={iconClose} handleClick={handleClick} />
                </NavActive>
                <NavigationLinks>                    
                    <NavLinksUtil />
                </NavigationLinks>
                <SocialLinks height={height}>
                    <div><img src={iconFacebook} alt='' /></div>
                    <div><img src={iconTwitter} alt='' /></div>
                </SocialLinks>
            </NavActiveContainer>        
        </nav>
    )
}

export default Navbar;

