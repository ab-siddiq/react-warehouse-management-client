import React from 'react';

const Blogs = () => {
    return (
        <div className='container my-5'>
            <ol>
                <li>Difference between javascript and nodejs

                    <ul>
                        <li>JavaScript is a programming language which is used to write script for browsers. Node.js is a runtime environment for JavaScript.</li>
                        <li>JavaScript runs on the browser. Node.js helps javascript to run outside of the browser.</li>
                        <li>JavaScript run in the client side where node.js run on the server side.</li>
                        <li>JavaScript has capability to add HTML where node.js doesnot have the capability to add HTML.</li>
                        <li></li>
                    </ul>
                </li>
                <li>When should you use nodejs and when should you use mongodb
                <ul>
                    <li>nodejs is a runtime environment which helps javascript to run in the server. It is used to create servers which response to request from web browsers. </li>
                    <li>mongodb is a database engine. Application or server use mongodb to store/fetch data in a database. mongodb offers api library which runs in a nodejs application to give programmatic access to mongodb which helps to add, delete, update data from database. </li>
                </ul>
                </li>
                <li>Differences between sql and nosql databases.

                    <ul>
                        <li>SQL is a relational database. NoSQL is a non relational or distributed database.</li>
                        <li>SQL data has static or predefine schema where NoSQL do not have any static or predefined schema. It is dynamic.</li>
                        <li>We can not use SQL if we need hierarchical data storage. On the other hand nosql is perfect for hierarchical data storage.</li>
                    </ul>
                </li>
                <li>What is the purpose of jwt and how does it work

                    <ul>
                        <li>JWT is a standard transmitting data securely between parties. JWT is token based stateless authentication mechanism.   </li>
                        <li></li>
                    </ul>
                </li>
            </ol>
        </div>
    );
};

export default Blogs;