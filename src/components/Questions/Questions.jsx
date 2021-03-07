import { useState } from 'react';
import Text from '../../utils/Text';
import QuestionsContainer from './QuestionsContainer/QuestionsContainer';
import QuestionContainer from './QuestionContainer/QuestionContainer';
import QuestionField from './QuestionField/QuestionField';
import Question from './Question/Question';
import Arrow from './Arrow/Arrow';
import Answer from './Answer/Answer';
import MoreInfo from './MoreInfo/MoreInfo';

const questions = [
    {
        id: 1,
        question: 'What is bookmark',
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Fusce tincidunt justo eget ultricies fringilla.
                 Phasellus blandit ipsum quis quam ornare mattis.`
    },
    {
        id: 2,
        question: 'How can I request a new browser',
        answer: `Vivamus luctus eros aliquet convallis ultricies.
                 Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
                 Vivamus luctus eros aliquet convallis ultricies.
                 Mauris augue massa, ultricies non ligula.
                 Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
                 Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.`
    },
    {
        id: 3,
        question: 'Is there a mobile app',
        answer: `Sed consectetur quam id neque fermentum accumsan.
                 Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget.
                 Cras in ligula quis est pharetra mattis sit amet pharetra purus.
                 Sed sollicitudin ex et ultricies bibendum.`
    },
    {
        id: 4,
        question: 'What about other Chromium browsers',
        answer: `Integer condimentum ipsum id imperdiet finibus. 
                 Vivamus in placerat mi, at euismod dui. 
                 Aliquam vitae neque eget nisl gravida pellentesque non ut velit.`
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
                    <QuestionContainer key={question.id} isActive={isActive && (selected === question.id)}>
                        <QuestionField data-id={question.id} onClick={handleClick}>
                            <Question data-id={question.id}>{question.question}</Question>
                            <Arrow QuestionId={question.id} isActive={isActive && (selected === question.id)} />
                        </QuestionField>
                        <Answer>
                            {question.answer}
                        </Answer>
                    </QuestionContainer>
                ))}
            </QuestionsContainer>
            <MoreInfo>More info</MoreInfo>
        </>
    )
}

export default Questions;
