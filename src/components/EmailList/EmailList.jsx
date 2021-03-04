import EmailListContainer from './EmailListContainer/EmailListContainer';
import EmailListGroup from './EmailListGroup/EmailListGroup';
import CatchPhrase from './CatchPhrase/CatchPhrase';
import CallToAction from './CallToAction/CallToAction';
import EmailForm from './EmailForm/EmailForm';
import InputEmail from './InputEmail/InputEmail';
import InputSubmit from './InputSubmit/InputSubmit';

const buttonStyle = `
    display: block;
    width: 100%;
    margin-bottom 10px;
    padding: 16px 24px;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0);
    border-radius: 6px;
    box-sizing: border-box;
`;

function EmailList() {
    return (
        <EmailListContainer>
            <EmailListGroup>
                <div>
                    <CatchPhrase>35,000+ already joined</CatchPhrase>
                    <CallToAction>Stay up-to-date with what we're doing</CallToAction>
                </div>
                <EmailForm onSubmit={(e) => e.preventDefault()} method='POST'>
                    <InputEmail type='email' buttonStyle={buttonStyle} name='email' placeholder='Enter your email address' />
                    <InputSubmit type='submit' buttonStyle={buttonStyle}>Contact Us</InputSubmit>
                </EmailForm>
            </EmailListGroup>
        </EmailListContainer>
    )
}

export default EmailList
