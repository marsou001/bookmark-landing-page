import styled from 'styled-components';

const Answer = styled.p`
    color: #95959D;
    line-height: 2.3rem;
    max-height: ${props => props.isActive ? '1000px' : '0'};
    overflow: hidden;
    margin: 0;
    margin-bottom: ${props => props.isActive ? '30px' : '0'};
    transition: max-height 0.3s, margin-bottom 0.3s;
`;

export default Answer;