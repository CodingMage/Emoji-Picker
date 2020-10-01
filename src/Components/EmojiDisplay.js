import React from 'react';

const EmojiDisplay = ({ name, character, info }) => {
    return (
        <div className='emojidisplay'>
            {/* <p>{name}</p> */}
            <span>{character}</span>
            {/* <p>{info}</p> */}
        </div>
    );
};

export default EmojiDisplay;