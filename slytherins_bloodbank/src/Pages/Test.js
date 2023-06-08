import React, { Component } from 'react';

class Test extends Component {
    render() {
        return (
            <div className='bg-red-500'>
                <h1>Test page</h1>
                <div className='justify-center item-center'>
                    <form method='POST' >
                    <input type={"text"} name="name" />
                    <br />
                    <input type={"tel"} name="phone" />
                    <button type='submit'>click</button>
                    </form>

                </div>
            </div>
        );
    }
}

export default Test;
