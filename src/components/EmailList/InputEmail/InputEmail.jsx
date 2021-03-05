import styled from 'styled-components';

const InputEmail = styled.input`
    ${props => props.buttonStyle}
    position: relative;
    z-index: 1;
    &:focus {
        border-color: hsl(0, 94%, 66%);
        outline: none;
    }
    &::placeholder {
        font-weight: 600;
        color: rgba(0, 0, 0, 0.3);
    }        
`;
export default InputEmail;