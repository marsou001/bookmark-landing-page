import styled from 'styled-components';

const NavigationLinks = styled.div`
    ul {
        font-size: 1.2rem;
        list-style-type: none;
        padding-left: 0;
        li {
            text-align: center;
            width: 80%;
            margin: auto;
            padding: 20px 0;
            border-top: 1px solid rgba(255, 255, 255, 0.2);
            a {
                color: rgba(255, 255, 255, 0.8);
                text-decoration: none; 
                text-transform: uppercase;     
                letter-spacing: 0.2rem;                                       
            }  
            &:last-child {
                padding: 25px 0;
                a {               
                    color: rgba(255, 255, 255, 1);  
                    font-weight: 500;   
                    display: inline-block;
                    width: 100%;
                    padding: 15px 10px;
                    border: 2px solid #fff;
                    box-sizing: border-box;
                    border-radius: 6px;
                }
            }                    
        }
    }    
`;

export default NavigationLinks;