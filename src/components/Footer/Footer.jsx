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
                <SocialLinks />
            </FooterGroup>
        </FooterContainer>
    )
}

export default Footer