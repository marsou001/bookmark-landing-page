import styled from 'styled-components';

function marginTop(props) {
    if (props.isInsideTab) return '100px';
    if (props.isCard) return '40px';
    return '140px';
}

const Container = styled.div`
    text-align: center;
    max-width: 450px;
    margin: auto;
    margin-top: ${marginTop};
    padding: 0 5%;
    @media (min-width: 500px) {
        padding: 0;
    }        
    @media (min-width: 768px) {
        text-align: ${props => props.isInsideTab ? 'left' : 'center'};        
        margin: ${props => props.isInsideTab ? '0' : 'auto'};
        margin-top: ${props => props.isInsideTab || props.isCard ? '0px' : '140px'};
        width: ${props => props.isInsideTab ? '45%' : 'auto'};
    }
`;

const Header = styled.h2`
    font-size: 1.7rem;
    color: hsl(229, 31%, 21%);
    font-weight: 500;
    line-height: 35px;
    margin-bottom: 15px;
    @media (min-width: 992px) {
        font-size: ${props => props.isCard ? '1.7' : '2.0'}rem;
        line-height: 45px;
    }  
`;

const Paragraph = styled.p`
    color: hsl(229, 8%, 60%);
    line-height: 1.5rem;
    margin: 0;
    @media (min-width: 992px) {
        font-size: ${props => props.isCard && '1.0rem'};
        line-height: 1.8rem;
    }
`;

const Button = styled.a`
    color: #fff;
    background-color: hsl(231, 69%, 60%);    
    display: none;
    margin-top: 20px;
    padding: 10px 15px;
    border-radius: 3px;
    cursor: pointer;
    @media (min-width: 768px) {
        display: ${props => props.isInsideTab ? 'inline-block' : 'none'};
    }
`;

function Text({ header, paragraph, isInsideTab, isCard }) {
    return (
        <Container isInsideTab={isInsideTab} isCard={isCard}>
            <Header isCard={isCard}>{header}</Header>
            <Paragraph isCard={isCard}>{paragraph}</Paragraph>
            <Button isInsideTab={isInsideTab}>More Info</Button>
        </Container>
    )
}

export default Text;
