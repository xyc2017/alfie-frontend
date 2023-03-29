import React, { useState } from "react";
import httpClient from "../httpClient";

const Signup=()=>{
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const [first_name, setFirstName]=useState("")

    const signupUser=async()=>{
        try{
            const resp=await httpClient.post("/signup", {
                email,
                password,
                first_name,
            })
            window.location.href="/"
        }catch(error){
            if(error.response.status===401){
                alert("Invalid Credentials")
            }
        }
    }
    return (
        <div>
            <h1> Create An Account</h1>
            <form>
                <div>
                    <label>Email: </label>
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} id=""/>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} id="" />
                </div>
                <div>
                    <label>First Name: </label>
                    <input type="text" value={first_name} onChange={(e)=>setFirstName(e.target.value)} id="" />
                </div>
                <button type="button" onClick={signupUser}>Sign Up</button>
            </form>
        </div>
    )
}

export default Signup