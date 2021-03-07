import styled from 'styled-components';
//F3FCFF
const ChromeButton = styled.a`
    color: #fff;
    background-color: hsl(231, 69%, 60%);
    border: 2px solid hsla(231, 69%, 60%, 0);
    &:hover {
        color: hsl(231, 69%, 60%);
        background-color: #fff;  
        border: 2px solid hsla(231, 69%, 60%, 1);
    }
    @media (min-width: 500px) {
        margin-right: 5px;          
    }   
`;

export default ChromeButton;