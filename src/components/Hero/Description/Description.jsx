import styled from 'styled-components';

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

export default Description;