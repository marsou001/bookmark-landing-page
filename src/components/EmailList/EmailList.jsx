import { useState } from 'react';
import EmailListContainer from './EmailListContainer/EmailListContainer';
import EmailListGroup from './EmailListGroup/EmailListGroup';
import CatchPhrase from './CatchPhrase/CatchPhrase';
import CallToAction from './CallToAction/CallToAction';
import EmailForm from './EmailForm/EmailForm';
import InputEmailContainer from './InputEmailContainer/InputEmailContainer';
import InputEmail from './InputEmail/InputEmail';
import InputEmailNonValid from './InputEmailNonValid/InputEmailNonValid';
import IconError from './IconError/IconError';
import InputSubmitContainer from './InputSubmitContainer/InputSubmitContainer';
import InputSubmit from './InputSubmit/InputSubmit';

const buttonStyle = `
    width: 100%;
    padding: 16px 24px;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0);
    border-radius: 6px;
    box-sizing: border-box;
`;

function EmailList() {
    const [emailInput, setEmailInput] = useState('');
    const [isError, setIsError] = useState(false)

    const handleChange = (e) => setEmailInput(e.target.value);
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const validateEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        setIsError(!validateEmailRegex.test(emailInput));
    }

    return (
        <EmailListContainer>
            <EmailListGroup>
                <div>
                    <CatchPhrase>35,000+ already joined</CatchPhrase>
                    <CallToAction>Stay up-to-date with what we're doing</CallToAction>
                </div>
                <EmailForm noValidate onSubmit={handleSubmit} method='POST'>
                    <InputEmailContainer isError={isError}>
                        <InputEmail type='email' buttonStyle={buttonStyle} name='email' onChange={handleChange} placeholder='Enter your email address' value={emailInput} />
                        <InputEmailNonValid isError={isError}>Whoops, make sure it's an email</InputEmailNonValid>
                        <IconError isError={isError} />
                    </InputEmailContainer>                    
                    <InputSubmitContainer>
                        <InputSubmit type='submit' buttonStyle={buttonStyle}>Contact Us</InputSubmit>
                    </InputSubmitContainer>
                </EmailForm>
            </EmailListGroup>
        </EmailListContainer>
    )
}

export default EmailList;

