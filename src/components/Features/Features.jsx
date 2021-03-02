import styled from 'styled-components';
import Text from '../../utils/Text';
import { useState } from 'react';
import Tabs from './Tabs/Tabs.jsx';
import Main from './Main/Main.jsx';

const header = 'Bookmark in one click';
const paragraph = `Organise your bookmarks however you like.
                   Our simple drag-and-drop interface gives you complete
                   control over how you manage your favourite sites.`;

const TabsContent = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`;

function Features() {
    const [selectedTab, setSelectedTab] = useState('Simple Bookmarking');

    const handleClick = (e) => setSelectedTab(e.target.textContent);    

    return (
        <>
            <Tabs selectedTab={selectedTab} handleClick={handleClick} />
            <TabsContent>
                <Main selectedTab={selectedTab} />
                <Text isInsideTab={true} header={header} paragraph={paragraph} />
            </TabsContent>
        </>
    )
}

export default Features;