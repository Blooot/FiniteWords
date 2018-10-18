import React from 'react';

const Word = ({ New, Radical, Readings, English }) => {
    return (
            <div className='inline-flex justify-around w-33 pa5'>
            <div className=' f3 grow hide-child tc bg-light-blue-40 br4 shadow-5 mv3'>
                    <h1>{New}</h1>
                    <div className='mt0 f5 child bg-light-blue-40 dark-blue  fw3'>
                        <p>{Radical}</p>
                        <p>{Readings}</p>
                        <p>{English}</p>
                    </div>
                </div>
            </div>
    );
}

export default Word;