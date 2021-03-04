import { useState } from 'react';
import Text from '../../utils/Text';
import QuestionsContainer from './QuestionsContainer/QuestionsContainer';
import QuestionContainer from './QuestionContainer/QuestionContainer';
import QuestionField from './QuestionField/QuestionField';
import Question from './Question/Question';
import Arrow from './Arrow/Arrow';
import Answer from './Answer/Answer';

const questions = [
    {
        id: 1,
        question: 'What is bookmark',
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                 Fames ac turpis egestas sed. Sodales neque sodales ut etiam sit. 
                 Vitae tempus quam pellentesque nec nam. 
                 Eget gravida cum sociis natoque penatibus et magnis.`
    },
    {
        id: 2,
        question: 'How can I request a new browser',
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                 Fames ac turpis egestas sed. Sodales neque sodales ut etiam sit. 
                 Vitae tempus quam pellentesque nec nam. 
                 Eget gravida cum sociis natoque penatibus et magnis.`
    },
    {
        id: 3,
        question: 'Is there a mobile app',
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                 Fames ac turpis egestas sed. Sodales neque sodales ut etiam sit. 
                 Vitae tempus quam pellentesque nec nam. 
                 Eget gravida cum sociis natoque penatibus et magnis.`
    },
    {
        id: 4,
        question: 'What about other Chromium browsers',
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                 Fames ac turpis egestas sed. Sodales neque sodales ut etiam sit. 
                 Vitae tempus quam pellentesque nec nam. 
                 Eget gravida cum sociis natoque penatibus et magnis.`
    },
];

const header = 'Frequently Asked Questions';

const paragraph = `Here qre some of our FQAs. If you have any other questions you'd like answered
                   please feel free to email us.`;

function Questions() {
    const [isActive, setIsActive] = useState(false);
    const [selected, setSelected] = useState(0);    

    const handleClick = (e) => {
        const oldValue = selected;
        const newValue = parseInt(e.target.dataset.id);

        if (oldValue === newValue) {
            setIsActive(prevState => !prevState);
        } else {
            setSelected(newValue);
            setIsActive(true);
        }           
    }    

    return (
        <>
            <Text header={header} paragraph={paragraph} />
            <QuestionsContainer>
                {questions.map((question) => (
                    <QuestionContainer key={question.id}>
                        <QuestionField data-id={question.id} onClick={handleClick}>
                            <Question data-id={question.id}>{question.question}</Question>
                            <Arrow QuestionId={question.id} isActive={isActive && (selected === question.id)} />
                        </QuestionField>
                        <Answer isActive={isActive && (selected === question.id)}>
                            {question.answer}
                        </Answer>
                    </QuestionContainer>
                ))}
            </QuestionsContainer>
        </>
    )
}

export default Questions;
