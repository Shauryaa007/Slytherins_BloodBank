import React , {useState} from 'react';

function UserSignup(props){
    const [formdata, setformdata] = useState(
        {
            name:"",
            phone:"",
            email:"",
            dob:"",
            adhaar:"",
            address:"",
        })
    const [showmsg, setshowmsg] = useState(false);
            
    function editformdata(key,val){
        let temp = formdata
        temp[key] = val
        setformdata(temp)
        console.log(formdata)
    }
    let submitform = ()=>{
        let temp = formdata
        console.log(temp)
        fetch("http://127.0.0.1:9000/signup",{
            headers:{
                "Content-Type": "application/json"  
            },
            method:"POST",
            body:JSON.stringify(temp)
        })
        .then(
            res=>{
                console.log(res.status)
                if(res.status == 200){
                    setshowmsg(true)
                    
                }
            },
            err=>{
                console.error(err)
                
            }
        )
    }
    return (
        <div class="bg-white font-family-karla h-screen">

            <div class="w-full h-screen flex flex-wrap">

                <div class="w-full h-screen md:w-1/2 flex flex-col overflow-y-scroll [&::-webkit-scrollbar]:hidden">

                    <div class="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-12">
                        <a href="#" class="bg-black text-white font-bold text-xl p-4" alt="Logo">Logo</a>
                    </div>

                    <div class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
                        <p class="text-center text-3xl">Join Us.</p>
                        <form class="flex flex-col pt-3 md:pt-8" onsubmit="event.preventDefault();">
                            <div class="flex flex-col pt-4">
                                <label for="name" class="text-lg">Name</label>
                                <input type="text" id="name" name='name' placeholder="John Smith" onChange={el=>editformdata("name",el.target.value)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>

                            <div class="flex flex-col pt-4">
                                <label for="email" class="text-lg">Email</label>
                                <input type="email" id="email" name='email' placeholder="your@email.com" onChange={el=>editformdata("email",el.target.value)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>

                            <div class="flex flex-col pt-4">
                                <label for="phone" class="text-lg">Phone</label>
                                <input type="tel" id="phone" name='phone' placeholder="+91XXXXXX1234" onChange={el=>editformdata("phone",el.target.value)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>

                            <div class="flex flex-col pt-4">
                                <label for="phone" class="text-lg">Adhaar</label>
                                <input type="number" id="adhar" name='adhaar' placeholder="945XXXXXX1233" onChange={el=>editformdata("adhaar",el.target.value)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>

                            <div class="flex flex-col pt-4">
                                <label for="phone" class="text-lg">Date of Birth</label>
                                <input type={"date"} id="dob" name='dob' placeholder=""  onChange={el=>editformdata("dob",el.target.value)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>

                            <div class="flex flex-col pt-4">
                                <label for="phone" class="text-lg">Address</label>
                                <textarea type={"date"} id="address" name='address' placeholder=""  onChange={el=>editformdata("address",el.target.value)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                                
                            <div class="flex flex-col pt-4">
                                <label for="password" class="text-lg">Password</label>
                                <input type="password" id="password" name='password' placeholder="Password"  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>

                            <div class="flex flex-col pt-4">
                                <label for="confirm-password" class="text-lg">Confirm Password</label>
                                <input type="password" id="confirm-password" placeholder="Password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
            
                            <button type="button" value="Register" onClick={submitform} class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8" >Register</button>
                        </form>
                        <div class="text-center pt-12 pb-12">
                            <p>Already have an account? <a href="/user/login" class="underline font-semibold">Log in here.</a></p>
                        </div>
                    </div>

                </div>

                
                <div class="w-1/2 shadow-2xl">
                    <img class="object-cover w-full h-screen hidden md:block" src="https://source.unsplash.com/IXUM4cJynP0" alt="Background" />
                </div>
            </div>
        </div>

    );
}

export default UserSignup;
