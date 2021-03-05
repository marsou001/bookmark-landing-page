import styled from 'styled-components';

const InputEmailContainer = styled.div`
    position: relative;
    margin-bottom: ${props => props.isError ? '30px' : '10px'};
    @media (min-width: 500px) {
        display: inline-block;
        width: 60%;
        margin-right: 10px;        
    }
`;

export default InputEmailContainer;