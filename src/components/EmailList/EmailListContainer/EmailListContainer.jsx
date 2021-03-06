import styled from 'styled-components';

const EmailListContainer = styled.div`
    color: #fff;
    background-color: hsl(231, 69%, 60%);
    text-align: center;
    position: relative;
    left: -30px;
    width: calc(100% + 60px);
    margin-top: 100px;
    padding: 60px 0;
    @media (min-width: 992px) {
        left: -100px;
        width: calc(100% + 200px);
    }
`;

export default EmailListContainer;