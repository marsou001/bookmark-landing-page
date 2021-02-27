import styled from 'styled-components';

const NavActiveContainer = styled.div`
    background-color: hsla(229, 31%, 21%, 0.9);
    position: absolute;
    top: 0;
    left: 0;
    display: ${props => props.isNavActive ? 'block': 'none'};
    width: 100vw;
    height: 100vh;
    overflow: scroll;
`;

export default NavActiveContainer;