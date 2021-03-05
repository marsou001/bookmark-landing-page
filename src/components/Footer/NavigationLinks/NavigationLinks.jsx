import styled from 'styled-components';

const NavigationLinks = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 992px) {
        flex-direction: row;
        align-items: center;
    }
`;

export default NavigationLinks;