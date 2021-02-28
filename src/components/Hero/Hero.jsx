import styled from 'styled-components';
import illustrationHero from '../../images/illustration-hero.svg'

/**@media (min-width: 300px) {
            font-size: 0.7rem;
        }
        @media (min-width: 320px) {
            font-size: 0.8rem;
        }
        @media (min-width: 350px) {
            font-size: 0.9rem;
        }
        @media (min-width: 375px) {
            font-size: 1rem;
        } */

const He = styled.header`    
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
    }
    .illustration-hero {        
        transform: translateY(60px);
        @media (min-width: 768px) {
            width: 45%;
        }
        .illustration {
            .image {
                position: relative;
                img {
                    width: 100%;                    
                }
                .square {
                    background-color: #5267DF;
                    position: absolute;
                    bottom: 10px;
                    right: -30px;
                    width: 100%;
                    height: 75%;
                    border-top-left-radius: 9999px;
                    border-bottom-left-radius: 9999px;
                    z-index: -1;
                    @media (min-width: 992px) {
                        right: -100px;
                    }
                }
            }            
        }
`;

const Description = styled.div`
    text-align: center;    
    margin: 80px auto 0;
    max-width: 450px;    
    @media (min-width: 768px) {
        text-align: left;
        width: 45%;
        margin: 0;
        margin-top: 40px;
    }
    @media (min-width: 992px) {
    }
`;

const Text = styled.div`
    margin-bottom: 40px;
    padding: 0 5%;
    @media (min-width: 500px) {
        padding: 0;
    }
    h2 {
        font-size: 1.7rem;
        font-weight: 600;
        color: hsl(229, 31%, 21%);
        letter-spacing: 0.1rem;
        line-height: 35px;
          
        @media (min-width: 992px) {
            font-size: 2rem;
            line-height: 45px;
        }     
    }
    P {
        font-size: 0.9rem;
        color: hsl(229, 8%, 60%);
        line-height: 1.5rem;
        margin: 0;
        @media (min-width: 992px) {
            font-size: 1rem;
            line-height: 1.8rem;
        }
    }
`;

const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    @media (min-width: 500px) {
        display: inline-block;
    }
    a {
        text-decoration: none;
        width: 38%;
        padding: 10px;
        border-radius: 6px;
        @media (min-width: 300px) {
            padding: 15px;
        }
        @media (min-width: 375px) {
            font-size: 0.9rem;
        }
        @media (min-width: 500px) {
            font-size: 1rem;
            width: 130px;            
        }
        &:first-child {
            color: #F3FCFF;
            background-color: #5267DF;    
            @media (min-width: 500px) {
                margin-right: 5px;          
            }        
        }        
        &:last-child {
            color: #7E808D;
            background-color: #F7F7F7;
            font-weight: 500;
            box-shadow: 0 6px 18px -10px;
            @media (min-width: 500px) {
                margin-left: 5px;          
            }        
        }
`;

function Home() {
    return (
        <He>
            <div className='illustration-hero'>
                <div className='illustration'>
                    <div className='image'>
                        <img src={illustrationHero} alt='' />                 
                        <div className='square'></div>
                    </div>
                </div>                
            </div>
            <Description>  
                <Text>
                    <h2>A Simple Bookmark Manager</h2>
                    <p>
                        A clean and simple interface to organize your favorite websites.
                        Open a new browser tab and see your sites load instantly. Try it for free.
                    </p>
                </Text>
                <Buttons>
                    <a href='#'>Get it on Chrome</a>
                    <a href='#'>Get it on Firefox</a>
                </Buttons>
            </Description>
        </He>
    )
}

export default Home
