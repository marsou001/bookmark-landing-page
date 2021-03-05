import styled from 'styled-components';

const FooterContainer = styled.footer`
    background-color: black;
    position: relative;
    left: -30px;
    width: calc(100% + 60px);
    @media (min-width: 992px) {
        left: -100px;
        width: calc(100% + 200px);
    }
`;

function Footer() {
    return (
        <FooterContainer>
            Footer
        </FooterContainer>
    )
}

export default Footer