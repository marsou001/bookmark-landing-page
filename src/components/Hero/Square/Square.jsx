import styled from 'styled-components';

const Square = styled.div`
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
`;

export default Square;