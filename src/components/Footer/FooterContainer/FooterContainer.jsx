import styled from 'styled-components';

const FooterContainer = styled.footer`
    color: #fff;
    background-color: hsl(229, 31%, 21%);
    position: relative;
    left: -30px;
    width: calc(100% + 60px);
    @media (min-width: 992px) {
        left: -100px;
        width: calc(100% + 200px);        
    }
`;

export default FooterContainer;