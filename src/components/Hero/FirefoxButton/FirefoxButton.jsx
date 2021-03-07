import styled from 'styled-components';
//F7F7F7
const FirefoxButton = styled.a`
    color: 	hsl(232, 6%, 52%);
    background-color: #F7F7F7;
    font-weight: 500;
    box-shadow: 0 6px 18px -10px;
    border: 2px solid hsla(232, 6%, 52%, 0);
    &:hover {        
        background-color: #fff;  
        border: 2px solid hsla(232, 6%, 52%, 1);
    }
    @media (min-width: 500px) {
        margin-left: 5px;          
    }      
`;

export default FirefoxButton;