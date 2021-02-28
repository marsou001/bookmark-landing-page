import styled from 'styled-components';

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
    }
`;

export default Buttons;