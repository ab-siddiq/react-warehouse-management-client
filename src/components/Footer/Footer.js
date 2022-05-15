import React from 'react';

const Footer = () => {
    return (
        <div className='bg-black text-white d-flex justify-content-center py-2 text-center'>
            <div>
                <p className='m-0'> &copy; copyright {new Date().getFullYear()}</p>
                <p className='m-0'>Developer by Md. Abu Bakkar Siddiq</p>
            </div>
        </div>
    );
};

export default Footer;