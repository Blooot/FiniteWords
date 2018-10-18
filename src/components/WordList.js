import React from 'react';
import Word from './Word';

const WordList = ({ shuffleKanji }) => {
    return (
        <div>
            {
                shuffleKanji.map((card, i) => {
                    return <
                        Word key={i}
                        New={shuffleKanji[i].New}
                        Radical={shuffleKanji[i].Radical}
                        Readings={shuffleKanji[i].Readings}
                        English={shuffleKanji[i].English}
                    />
                })
            }
        </div>
    );
}
export default WordList;