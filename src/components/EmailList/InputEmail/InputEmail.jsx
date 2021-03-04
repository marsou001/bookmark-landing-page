import styled from 'styled-components';

const InputEmail = styled.input`
    ${props => props.buttonStyle}
    &:focus {
        border-color: hsl(0, 94%, 66%);
        outline: none;
    }
    &::placeholder {
        color: rgba(0, 0, 0, 0.2);
    }
    @media (min-width: 500px) {
        display: inline-block;
        width: 60%;
        margin-right: 10px;
    }
`;
export default InputEmail;