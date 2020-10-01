import React from 'react';
import EmojiDisplay from './EmojiDisplay';
import emojiList from '../emojiList.js';

const EmojiGet = ({ group }) => {

    const Listemoji = emojiList.map(emoji => {
        if (emoji.group === group) {
            return (
                < EmojiDisplay key={emoji.slug} name={emoji.slug} info={emoji.unicodeName} character={emoji.character} />
            )
        }
    })
    return (

        <div className='emoji'>
            {Listemoji}
        </div>

    );
};

export default EmojiGet;