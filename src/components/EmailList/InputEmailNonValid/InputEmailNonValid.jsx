import styled from 'styled-components';

const InputEmailNonValid = styled.div`
    font-size: 0.7rem;
    font-weight: 500;
    font-style: italic;
    background-color: hsl(0, 94%, 66%); 
    text-align: left;   
    position: absolute;
    top: 33px;    
    display: ${props => props.isError ? 'flex' : 'none'};
    align-items: flex-end;
    width: 100%;        
    height: 80%;
    padding-left: 10px;
    padding-bottom: 5px;
    border-radius: 6px;
    box-sizing: border-box;
`;

export default InputEmailNonValid;