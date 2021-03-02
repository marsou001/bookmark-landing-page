import styled from 'styled-components';
import TabOne from '../../../images/illustration-features-tab-1.svg';
import TabTwo from '../../../images/illustration-features-tab-2.svg';
import TabThree from '../../../images/illustration-features-tab-3.svg';

const Container = styled.div`
    position: relative;
    @media (min-width: 768px) {
        width: 45%;
    }
`;

const Square = styled.div`
    background-color: #5267DF;
    position: absolute;
    top: 20%;
    left: -30px;
    width: 100%;
    height: 100%;
    border-top-right-radius: 9999px;
    border-bottom-right-radius: 9999px;
    z-index: -1;
    @media (min-width: 768px) {
        left: -100px;
    }
`;

function Main({ selectedTab }) {
    function image() {
        switch(selectedTab) {
            case 'Simple Bookmarking': 
                return TabOne;   
            case 'Speedy Searching': 
                return TabTwo;  
            case 'Easy Sharing': 
                return TabThree;
        }
    }

    return (
        <Container>
            <img style={{ width: '100%' }} src={image()} alt='' />
            <Square />
        </Container>
    )
}

export default Main

