import styled from 'styled-components';
import illustrationHero from '../../images/illustration-hero.svg';
import IllustrationHero from './IllustrationHero/IllustrationHero';
import ImageContainer from './ImageContainer/ImageContainer';
import Image from './Image/Image';
import Square from './Square/Square';
import Description from './Description/Description';
import Text from './Text/Text';
import HeaderDescription from './HeaderDescription/HeaderDescription';
import ParagraphDescription from './ParagraphDescription/ParagraphDescription';
import Buttons from './Buttons/Buttons';
import ChromeButton from './ChromeButton/ChromeButton';
import FirefoxButton from './FirefoxButton/FirefoxButton';

const Hero = styled.header`    
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
    }        
`;

function Home() {
    return (
        <Hero>
            <IllustrationHero>
                <div className='illustration'>
                    <ImageContainer>
                        <Image src={illustrationHero} alt='' />                 
                        <Square></Square>
                    </ImageContainer>
                </div>                
            </IllustrationHero>
            <Description>  
                <Text>
                    <HeaderDescription>A Simple Bookmark Manager</HeaderDescription>
                    <ParagraphDescription>
                        A clean and simple interface to organize your favorite websites.
                        Open a new browser tab and see your sites load instantly. Try it for free.
                    </ParagraphDescription>
                </Text>
                <Buttons>
                    <ChromeButton href='#'>Get it on Chrome</ChromeButton>
                    <FirefoxButton href='#'>Get it on Firefox</FirefoxButton>
                </Buttons>
            </Description>
        </Hero>
    )
}

export default Home;
