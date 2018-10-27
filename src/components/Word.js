import React from 'react';

const Word = ({ kanji, kana, primary, secondary, pos  }) => {
    return (
            <div className='inline-flex justify-around w-33 pa5'>
            <div className=' f3 grow hide-child tc bg-light-blue-40 br4 shadow-4 mv3'>
                    <h1>{kanji}</h1>
                    <div className='mt0 f5 child bg-light-blue-40 dark-blue  fw3'>
                        <p>{kana}</p>
                        <p>{primary}</p>
                        <p>{secondary}</p>
                        <p>{pos}</p>
                    </div>
                </div>
            </div>
    );
}

export default Word;