import React from 'react';
import Dale from './Dale.png';
import './Header.css'

const Header = () => {
    return (
        <div className='flex justify-between flex-nowrap flex-row'>
            <div className='w-20 h-20 pa4'>
                <a className="dim" href="https://www.linkedin.com/in/dale-hamilton-2119b5141/" title="About me">
                    <img src={Dale} className="dib w3 h3 br-100" alt="About me" />
                </a>
            </div>
            <div className='w-20 h-20 white title'>
                <h1 className="f1">
                    Finite Words
                    </h1>
                <h5>...a simple art project & study aid</h5>

            </div>
            <div className='w-20'>
                
            </div>

        </div>




    );

}


export default Header;