import React from 'react'
import Text from '../../utils/Text';
import Cards from './Cards/Cards';

const header = 'Download the extension';
const paragraph = `We've got more browsers in the pipeline.
                   Please let us know if you've got a favourite
                   you'd like us to prioritise.`;

function Extensions() {
    return (
        <>
            <Text header={header} paragraph={paragraph} />
            <Cards />
        </>
    )
}

export default Extensions
