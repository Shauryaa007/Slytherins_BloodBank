import React, { Component } from 'react';

class Test extends Component {
    constructor(){
        super()
        this.state = {
            name:"",
            phone:""
        }
    }
    submitform = ()=>{
        console.log(this.state.name,this.state.phone)
        fetch("http://127.0.0.1:9000/signup",{
            headers:{
                "Content-Type": "application/json"  
            },
            method:"POST",
            body:JSON.stringify({
                name:this.state.name,
                phone:this.state.phone
            })
        })
        .then(
            res=>{
                console.log(res.status)
            },
            err=>{
                console.error(err)
            }
            )
    }
    render() {
        return (
            <div className='bg-red-500'>
                <h1>Test page</h1>
                <div className='justify-center item-center'>
                    <form method='POST' action='http://127.0.0.1:9000/signup'>
                    <input type={"text"} name="name" onChange={val=>this.setState({name:val.target.value})} />
                    <br />
                    <input type={"tel"} name="phone" onChange={val=>this.setState({phone:val.target.value})} />
                    <button type='button' onClick={this.submitform}  >click</button>
                    </form>

                </div>
            </div>
        );
    }
}

export default Test;
