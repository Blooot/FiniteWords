import React from 'react';
import Word from './Word';

const WordList = ({ shuffleKanji }) => {
    return (
        <div>
            {
                shuffleKanji.map((card, i) => {
                    return <
                        Word key={i}
                        kanji={shuffleKanji[i].kanji}
                        kana={shuffleKanji[i].kana}
                        primary={shuffleKanji[i].primary}
                        secondary={shuffleKanji[i].secondary}
                        pos={shuffleKanji[i].pos}
                    />
                })
            }
        </div>
    );
}
export default WordList;