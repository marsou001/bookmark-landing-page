import styled from 'styled-components';
import Question from '../Question/Question';

const QuestionContainer = styled.div`
    max-height: ${props => props.isActive ? '1000px' : '40px'};
    overflow: hidden;
    padding-bottom: 30px;
    border-bottom: 1px solid #DDE0E7;
    cursor: pointer;    
    transition: max-height 0.3s ${props => props.isActive ? 'cubic-bezier(0, 0, 1, 0)' : 'cubic-bezier(1, 1, 0, 1)'};
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
