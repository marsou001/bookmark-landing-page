import styled from 'styled-components';

const widthOnlargeheight = (props) => {
    if (props.height < 600) return '10vh';
    if (props.height < 700) return '20vh';
    if (props.height < 750) return '25vh';
    if (props.height < 800) return '30vh';
    if (props.height < 850) return '35vh';
}

const SocialLinks = styled.div`
    position: relative;
    top: ${widthOnlargeheight};
    width: 40%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
        margin: 20px;
    }
`;

export default SocialLinks;