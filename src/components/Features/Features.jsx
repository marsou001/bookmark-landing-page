import styled from 'styled-components';
import Text from '../../utils/Text';
import { useState } from 'react';
import Tabs from './Tabs/Tabs.jsx';
import Main from './Main/Main.jsx';

// const header = 'Bookmark in one click';
// const paragraph = `Organise your bookmarks however you like.
//                    Our simple drag-and-drop interface gives you complete
//                    control over how you manage your favourite sites.`;

const headers = {
    header1: 'Bookmark in one click',
    header2: 'Intelligent search',
    header3: 'Share your bookmarks Easily',
}

const paragraphs = {
    paragraph1: `Organise your bookmarks however you like.
                 Our simple drag-and-drop interface gives you complete
                 control over how you manage your favourite sites.`,
    paragraph2: `Our powerful search feature will help you find saved sites in no time at all. 
                 No need to trawl through all of your bookmarks.`,
    paragraph3: `Share your bookmarks and collections with others. 
                 Create a shareable link that you can send at the click of a button.`,
}

function fetchHeaderAndParagraph(selectedTab) {
    switch(selectedTab) {
        case 'Simple Bookmarking':
            return ({ 
                header: headers.header1,
                paragraph: paragraphs.paragraph1
            });
        case 'Speedy Searching':
            return ({ 
                header: headers.header2,
                paragraph: paragraphs.paragraph2
            });
        case 'Easy Sharing':
            return ({ 
                header: headers.header3,
                paragraph: paragraphs.paragraph3
            });
        default:
            return ({ 
                header: headers.header1,
                paragraph: paragraphs.paragraph1
            });
    }
}

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

    const handleClick = (e) => {
        e.target.nodeName === 'SPAN' && setSelectedTab(e.target.textContent);
    };    

    return (
        <>
            <Tabs selectedTab={selectedTab} handleClick={handleClick} />
            <TabsContent>
                <Main selectedTab={selectedTab} />
                <Text isInsideTab={true} header={fetchHeaderAndParagraph(selectedTab).header} paragraph={fetchHeaderAndParagraph(selectedTab).paragraph} />
            </TabsContent>
        </>
    )
}

export default Features;