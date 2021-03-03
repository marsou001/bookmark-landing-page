import styled from 'styled-components'
import logoChrome from '../../../images/logo-chrome.svg';
import logoFirefox from '../../../images/logo-firefox.svg';
import logoOpera from '../../../images/logo-opera.svg';
import Card from './Card/Card';

const cards = [
    {
        id: 1,
        browser: 'Chrome',
        logo: logoChrome,
        version: 62
    },
    {
        id: 2,
        browser: 'Firefox',
        logo: logoFirefox,
        version: 55
    },
    {
        id: 3,
        browser: 'Opera',
        logo: logoOpera,
        version: 46
    },
];

const CardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    margin-top: 40px; 
    @media (min-width: 280px) {
        width: 90%;
    }   
    @media (min-width: 992px) {
        width: 100%;
        margin-top: 100px;         
        flex-direction: row;
        justify-content: center;
    }
`;

function Cards() {
    return (
        <CardsContainer>
            {cards.map((card) => (
                <Card key={card.id} logo={card.logo} browser={card.browser} version={card.version} />
            ))}            
        </CardsContainer>
    )
}

export default Cards;