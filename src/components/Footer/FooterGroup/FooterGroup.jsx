import styled from 'styled-components';

const FooterGroup = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: auto;
    padding: 30px;
    @media (min-width: 992px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: auto;
        margin: 0;
        padding: 15px 100px;        
    } 
`;

export default FooterGroup;