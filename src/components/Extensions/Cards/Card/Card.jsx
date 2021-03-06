import styled from 'styled-components';
import bgDots from '../../../../images/bg-dots.svg';
import Text from '../../../../utils/Text';

function translate(props) {
    if (props.browser === 'Chrome') return '-35px';
    if (props.browser === 'Opera') return '35px';
    return '0px';
}

const CardContainer = styled.div`
    text-align: center;    
    max-width: 285px;
    margin: auto;
    margin-bottom: 45px;
    border-radius: 6px;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
    img {
        margin: 40px 0 20px;
    }
    img:first-child {
        display: block;
        margin: 40px auto;
    }
    @media (min-width: 992px) {
        margin-right: 20px;
        margin-left: 20px;
        transform: translateY(${translate});
    }
`;

const DownloadButton = styled.a`
    color: #fff;
    background-color: hsl(231, 69%, 60%);
    display: block;
    margin: 25px;
    margin-top: 0px;
    padding: 15px 0px;
    border: 2px solid hsla(231, 69%, 60%, 0);
    border-radius: 6px;
    box-sizing: border-box;
    cursor: pointer;
    &:hover {
        color: hsl(231, 69%, 60%);
        background-color: #fff;
        border: 2px solid hsla(231, 69%, 60%, 1);
    }
    @media (min-width: 992px) {
        font-size: 1rem;
    }
`;

function Card({ logo , browser, version}) {
    return (
        <CardContainer browser={browser}>
            <img src={logo} alt='' />
            <Text isCard={true} header={`Add to ${browser}`} paragraph={`Minimum version ${version}`} />
            <img src={bgDots} alt='' />
            <DownloadButton>Add & Install Extension</DownloadButton>
        </CardContainer>
    )
}

export default Card;