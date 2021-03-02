import styled from 'styled-components';
const Container = styled.div`
    text-align: center;
    max-width: 450px;
    margin: auto;
    margin-top: ${props => props.isInsideTab ? '100px' : '140px'};
    padding: 0 5%;
    @media (min-width: 500px) {
        padding: 0;
    }        
    @media (min-width: 768px) {
        text-align: ${props => props.isInsideTab ? 'left' : 'center'};        
        margin: ${props => props.isInsideTab ? '0' : 'auto'};
        margin-top: ${props => props.isInsideTab ? '0px' : '140px'};
        width: ${props => props.isInsideTab ? '45%' : 'auto'};
    }
`;

const Header = styled.h2`
    font-size: 1.7rem;
    color: hsl(229, 31%, 21%);
    font-weight: 500;
    letter-spacing: 0.1rem;
    line-height: 35px;
    margin-bottom: 15px;
    @media (min-width: 992px) {
        font-size: 2rem;
        line-height: 45px;
    }  
`;

const Paragraph = styled.p`
    font-size: 0.9rem;
    color: hsl(229, 8%, 60%);
    line-height: 1.5rem;
    margin: 0;
    @media (min-width: 992px) {
        font-size: 1rem;
        line-height: 1.8rem;
    }
`;

const Button = styled.a`
    color: #fff;
    background-color: #5267DF;    
    display: none;
    margin-top: 20px;
    padding: 10px 15px;
    border-radius: 3px;
    cursor: pointer;
    @media (min-width: 768px) {
        display: ${props => props.isInsideTab ? 'inline-block' : 'none'};
    }
`;

function Text({ header, paragraph, isInsideTab }) {
    return (
        <Container isInsideTab={isInsideTab}>
            <Header>{header}</Header>
            <Paragraph>{paragraph}</Paragraph>
            <Button isInsideTab={isInsideTab}>More Info</Button>
        </Container>
    )
}

export default Text;
