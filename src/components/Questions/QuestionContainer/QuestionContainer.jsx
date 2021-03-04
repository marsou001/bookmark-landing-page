import styled from 'styled-components';
import Question from '../Question/Question';

const QuestionContainer = styled.div`
    border-bottom: 1px solid #DDE0E7;
    cursor: pointer;    
    &:hover ${Question} {
        color: hsl(0, 94%, 66%);
    }
    @media (min-width: 500px) {
        &:first-child {
            border-top: 1px solid #DDE0E7;
        }
    }
`;

export default QuestionContainer;
