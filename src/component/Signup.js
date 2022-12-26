import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Signup(){
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[confirmpassword,setConfirmPassword]=useState("")
    const[technologies,setTechnologies]=useState("")
    const[boolean,setBoolean]=useState(false)
    const navigate=useNavigate()
    
    function checkcondition(){
        if(name===""){
            setBoolean(false)
            alert("name is empty")
        }
        
        else if(name.length<=5 || name.length>=15){
            setBoolean(false)
            alert("name is invalid length must be alteast 5")
        }

        else if(email===""){
            setBoolean(false)
            alert("email is invalid")
        }

        else if(password===""){
            setBoolean(false)
            alert("password is empty") 
        }

        else if(confirmpassword===""){
            setBoolean(false)
            alert("confirm password is empty")
        }
        else if(password !== confirmpassword){
            setBoolean(false)
            alert("confirm password is not match")
        }

        else if(name.length<=5 || name.length>=15){
            setBoolean(true)
        }
        else if(password===confirmpassword){
            setBoolean(true)
        }

        else if(name!=="" && email!=="" && password!=="" && confirmpassword!=="" & password==confirmpassword){
            setBoolean(true)
            navigate("/Dashboard")
        }
    }
    return(
        <div id="signupbox">
            <h1>Signup</h1><hr></hr><br></br><br></br>
            <div id="inputs">

            <label>Name</label><input id="name" type="text" placeholder="User Name" onChange={(e)=>
            setName(e.target.value)}/><br></br><br></br>

            <label>Email</label><input id="email" type="email" placeholder="Email" onChange={(e)=>
            setEmail(e.target.email)}/><br></br><br></br>

            <label>Password</label><input id="password" type="password" placeholder="Password" onChange={(e)=>
            setPassword(e.target.password)}/><br></br><br></br>

            <label>ConfirmPassword</label><input id="confirmpassword" type="confirmpassword" placeholder="confirmpassword"
            onChange={(e)=>setConfirmPassword(e.target.confirmpassword)}/><br></br><br></br>
            <table>
            <td>Technologies</td><select id="technologies" type="option">
            <option>JavaScript</option>
            <option>Java</option>
            <option>Python</option>
            <option>Scala</option>
            <option>Spark</option>
            </select>
            </table><br></br><br></br>
            <button id="submit" onClick={()=>{
                checkcondition()
             {boolean ? navigate("/Dashboard") :<Signup/>}}}><b>Submit</b></button>
            </div>
        </div>
    )
}


