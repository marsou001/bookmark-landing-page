import styled from 'styled-components';

const NavigationLinksItem = styled.a`
    font-size: 0.8rem;
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.2rem;
    padding: 15px;
    &:first-child {
        padding: 0;
        padding-bottom: 20px;
    }    
    &:hover {
        color: hsl(0, 94%, 66%);
    }
    @media (min-width: 992px) {
        padding: 20px;
        &:first-child {
            padding: 20px;
            transform: translate(0, 2px);
        }
    }
`;

export default NavigationLinksItem;