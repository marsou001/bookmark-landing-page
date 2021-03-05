import styled from 'styled-components';

const InputSubmit = styled.button`
    font-weight: 500;
    color: #fff;
    background-color: hsl(0, 94%, 66%);
    ${props => props.buttonStyle}
    @media (min-width: 500px) {        
        &:focus {
            outline: none;
        }
        &:hover {
            color: hsl(0, 94%, 66%);
            background-color: #fff;
            border-color: hsl(0, 94%, 66%);
        }
    }
`;

export default InputSubmit;