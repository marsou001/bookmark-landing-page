import styled from 'styled-components';

const NavInactiveContainer = styled.div`
    visibility: ${props => props.isNavActive ? 'hidden': 'visible'};
    pointer-events: ${props => props.isNavActive ? 'none' : 'auto'};
`;

export default NavInactiveContainer;