import styled from 'styled-components';
import iconFacebook from '../../images/icon-facebook.svg';
import iconTwitter from '../../images/icon-twitter.svg';
import LogoBookmark from './LogoBookmark/LogoBookmark';
import FooterContainer from './FooterContainer/FooterContainer';
import FooterGroup from './FooterGroup/FooterGroup';
import NavigationLinks from './NavigationLinks/NavigationLinks';
import NavigationLinksItem from './NavigationLinksItem/NavigationLinksItem';
import SocialLinks from './SocialLinks/SocialLinks';

function Footer() {
    return (
        <FooterContainer>
            <FooterGroup>
                <NavigationLinks>
                    <NavigationLinksItem><LogoBookmark /></NavigationLinksItem>
                    <NavigationLinksItem href=''>Features</NavigationLinksItem>
                    <NavigationLinksItem href=''>Pricing</NavigationLinksItem>
                    <NavigationLinksItem href=''>Contact</NavigationLinksItem>
                </NavigationLinks>
                <SocialLinks>
                    <a href=''><img src={iconFacebook} alt='' /></a>
                    <a href=''><img src={iconTwitter} alt='' /></a>
                </SocialLinks>
            </FooterGroup>
        </FooterContainer>
    )
}

export default Footer