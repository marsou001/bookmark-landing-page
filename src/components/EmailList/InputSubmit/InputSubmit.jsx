import styled from 'styled-components';

const InputSubmit = styled.button`
    font-weight: 500;
    color: #fff;
    background-color: hsl(0, 94%, 66%);
    letter-spacing: 0.0rem;
    ${props => props.buttonStyle}
    @media (min-width: 500px) {
        display: inline-block;
        width: 30%;
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