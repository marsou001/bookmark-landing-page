import styled from 'styled-components';

const NavInactive = styled.div`
    display: flex;
    justify-content: space-between;
    .hamburger-menu {
        display: ${props => props.showHamburgerMenu ? 'block' : 'none'};
    }
    .navigation-links {
        display: ${props => props.showHamburgerMenu ? 'none' : 'block'};
        ul {
            list-style-type: none;
            margin: 0;
            padding-left: 0;
            li {
                display: inline-block;
                margin-left: ${props => props.allowMarginLeft ? '20px' : '50px'};
                a {
                    font-size: 0.8rem;
                    color: hsl(229, 31%, 21%);
                    text-decoration: none;
                    text-transform: uppercase;
                    letter-spacing: 0.1rem;
                }
            }
            li:last-child {
                box-shadow: 1px 12px 3px rgba(0, 0, 0, 0.1);
                a {
                    color: #fff;
                    background-color: hsl(0, 94%, 66%);
                    padding: 10px 30px;
                    border-radius: 5px;
                }
            }
        }
    }
`;

export default NavInactive;