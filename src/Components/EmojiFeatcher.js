import React from 'react';
import EmojiDisplay from './EmojiDisplay';
import emojiList from '../emojiList.js';
// import axios from 'axios';

function EmojiFeatcher() {

    // const axios = require("axios");


    // axios({
    //     "method": "GET",
    //     "url": `https://emoji-api.com/emojis?search=computer&access_key=de58cea33ff00693fadd9c06e60d2dcf1f59c105`,


    // })
    //     .then((response) => {
    //         console.log(response.data)
    //         const emoji = response.data;
    //         console.log(emoji);


    //     })
    //     .catch((error) => {
    //         console.log(error)
    //     })

    const allemojiData = emojiList.map(emoji => < EmojiDisplay key={emoji.slug} name={emoji.slug} info={emoji.unicodeName} character={emoji.character} />)
    const smileemoji = emojiList.map(smile => {
        if (smile.group === 'smileys-emotion') {
            return (
                < EmojiDisplay key={smile.slug} name={smile.slug} info={smile.unicodeName} character={smile.character} />
            )
        }
    })
    const peoplebodyemoji = emojiList.map(body => {
        if (body.group === 'people-body') {
            return (
                < EmojiDisplay key={body.slug} name={body.slug} info={body.unicodeName} character={body.character} />
            )
        }
    })

    const animalemoji = emojiList.map(animal => {
        if (animal.group === 'animals-nature') {
            return (
                < EmojiDisplay key={animal.slug} name={animal.slug} info={animal.unicodeName} character={animal.character} />
            )
        }
    })

    const travelemoji = emojiList.map(travel => {
        if (travel.group === 'travel-places') {
            return (
                < EmojiDisplay key={travel.slug} name={travel.slug} info={travel.unicodeName} character={travel.character} />
            )
        }
    })

    const activitesmoji = emojiList.map(activities => {
        if (activities.group === 'activities') {
            return (
                < EmojiDisplay key={activities.slug} name={activities.slug} info={activities.unicodeName} character={activities.character} />
            )
        }
    })
    const objectsesmoji = emojiList.map(objects => {
        if (objects.group === 'objects') {
            return (
                < EmojiDisplay key={objects.slug} name={objects.slug} info={objects.unicodeName} character={objects.character} />
            )
        }
    })
    const flagsesmoji = emojiList.map(flags => {
        if (flags.group === 'flags') {
            return (
                < EmojiDisplay key={flags.slug} name={flags.slug} info={flags.unicodeName} character={flags.character} />
            )
        }
    })



    return (
        <>
            <div className='emoji'>
                {allemojiData}
            </div>
            <div className="emoji">
                {smileemoji}
            </div>
            <div className="emoji">
                {peoplebodyemoji}
            </div>
            <div className="emoji">
                {animalemoji}
            </div>
            <div className="emoji">
                {travelemoji}
            </div>
            <div className="emoji">
                {activitesmoji}
            </div>
            <div className="emoji">
                {objectsesmoji}
            </div>
            <div className="emoji">
                {flagsesmoji}
            </div>

        </>
    )
}

export default EmojiFeatcher;