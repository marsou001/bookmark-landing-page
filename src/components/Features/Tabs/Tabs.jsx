import styled from 'styled-components';
import Text from '../../../utils/Text'

const header = 'Features';
const paragraph = `Our aim is to make it quick and easy for you to access your favourite websites.
                    Your bookmarks sync between your devices so you can access them on the go.`

const TabsContainer = styled.div`
    text-align: center;
`;
const TabsList = styled.ul`
    list-style: none;
    margin-top: 40px;
    margin-bottom: 60px;
    padding-left: 0;    
`;

const TabsItem = styled.li`
    color: ${props => props.isSelected ? '#2B2E3D' : '#72727A'};
    border-bottom: 1px solid #DDE0E7;        
    transition-property: border-bottom;
    transition-duration: 0.1s;
    &:first-child {
        border-top: 1px solid #DDE0E7;    
        @media (min-width: 768px) {
            border-top: none;       
        }            
    }
    @media (min-width: 768px) {
        display: inline-block;        
        border-bottom: ${props => props.isSelected ? '3px solid hsl(0, 94%, 66%)' : '1px solid #DDE0E7'};                
    }
    span {
        display: inline-block;
        padding: 15px;         
        cursor: pointer;        
        transition-property: color;
        transition-duration: 0.1s;
        @media (min-width: 768px) {
            padding: 30px 45px;    
            &:hover {
                color: hsl(0, 94%, 66%);
            }             
        }       
    }
    `;
    
const Hr = styled.hr`
    background-color: hsl(0, 94%, 66%);
    width: 80%;
    height: 3px;
    margin: 0 auto;
    opacity: ${props => props.isSelected ? '1' : '0'};
    transform: translateY(17px);
    @media (min-width: 768px) {      
        display: none; 
        width: 120%; 
        transform: translate(-7%, 32px);
    }    
`;

function Tabs({ selectedTab, handleClick }) {
    const tabs = [
        {
            id: 1,
            text: 'Simple Bookmarking'            
        },
        {
            id: 2,
            text: 'Speedy Searching'            
        },
        {
            id: 3,
            text: 'Easy Sharing'            
        },
    ];
        
    return (
        <>
            <Text header={header} paragraph={paragraph} />   
            <TabsContainer onClick={handleClick}>
                <TabsList>
                    {tabs.map(tab => (
                        <TabsItem key={tab.id} isSelected={selectedTab === tab.text}>
                            <span>
                                {tab.text}
                                <Hr isSelected={selectedTab === tab.text} />
                            </span>
                        </TabsItem>
                    ))}
                </TabsList>
            </TabsContainer>
        </>
    )
}

export default Tabs;

