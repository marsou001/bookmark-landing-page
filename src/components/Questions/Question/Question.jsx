import styled from 'styled-components';

const Question = styled.p`
    color: hsl(229, 31%, 21%);
    margin: 25px 0;
    &::after {
        content: '?';
    }
`;

export default Question;