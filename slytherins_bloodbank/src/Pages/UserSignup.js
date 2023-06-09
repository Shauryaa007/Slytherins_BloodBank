import React, { Component } from 'react';

class UserSignup extends Component {
    constructor(){
        super()
        this.state = {
            formdata:{
                name:"",
                phone:"",
                email:"",
                dob:"",
                adhaar:"",
                address:"",
            },
            showmsg:false
        }
    }
    editformdata = (key,val)=>{
        let temp = this.state.formdata
        temp[key] = val
        this.setState({formdata:temp})
        console.log(this.state.formdata)
    }
    submitform = ()=>{
        let formdata = this.state.formdata
        console.log(formdata)
        fetch("http://127.0.0.1:9000/signup",{
            headers:{
                "Content-Type": "application/json"  
            },
            method:"POST",
            body:JSON.stringify(formdata)
        })
        .then(
            res=>{
                console.log(res.status)
                if(res.status == 200){
                    this.setState({showmsg:true})
                }
            },
            err=>{
                console.error(err)
            }
            )
    }
    render() {
        return (
            <div>
                <h1>Test page</h1>
                <div className='justify-center item-center'>
                    <form method='POST' action='http://127.0.0.1:9000/signup'>
                    <input type={"text"} name="name" placeholder='name' onChange={val=>this.editformdata("name",val.target.value)} />
                    <br />
                    <input type = {"email"} name = "email" placeholder='email' onChange={val=>this.editformdata("email",val.target.value)}  />
                    <br/>
                    <input type={"date"} name="dob" placeholder='dob' onChange={val=>this.editformdata("dob",val.target.value)}  />
                    <br/>
                    <input type={"number"} name="adhaar" placeholder='adhaar' onChange={val=>this.editformdata("adhaar",val.target.value)}  />
                    <br/>
                    <input type={"tel"} name="phone" placeholder='phone' onChange={val=>this.editformdata("phone",val.target.value)}  />
                    <br/>
                    <textarea name='address' placeholder='address' onChange={val=>this.editformdata("address",val.target.value)} />
                    <br/>
                    <button type='button' onClick={this.submitform}  >click</button>
                    </form>

                </div>
                {this.state.showmsg?
                <h1>Added successfully</h1>
                :
                null
                }

            </div>
        );
    }
}

export default UserSignup;
