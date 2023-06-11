import React, { Component } from 'react';

function Home(props){
        return (
        <div className='flex flex-col justify-center items-center h-screen w-screen bg-gray-600'>
            <div>Hello world</div>
            <h1><a href='/test'>test</a></h1>
            <a href = "/user/login">Login</a>
        </div>
    );
}

export default Home;
