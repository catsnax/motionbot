'use client'
import React, {useState, useEffect} from 'react'



async function createAccount(data) {
  console.log(data)
  const response = await fetch("http://127.0.0.1:8000/accounts/", {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin", 
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow", 
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });
  return response.json(); 
}

export default function page() {

  const [formData, setFormData] = useState({
    username: "",
    email_address: "",
    password: "",
    verified: "false"

  })

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name] : event.target.value
    })
    
  }

  const handleSubmit = (event) => {
    createAccount(formData)
  }


  return (
    <main className = "flex justify-center  ">
        <form className = "flex justify-center h-auto rounded-md w-[100vw]" onSubmit = {handleSubmit}>
          <div className = "flex flex-col w-screen items-center gap-6 mt-4 ">
            <h1 className = "m-4 text-xl self-center"> Create Admin Account</h1>
            <div className = "self-center">
              <h5 className = "text-md"> Username</h5>
              <input className = "inputBox" name = "username" onChange = {handleChange} value = {formData.username}></input>
            </div>
            <div className = "self-center ">
            <h5 className = ""> Email Address</h5>
            <input className = "inputBox" name = "email_address" onChange = {handleChange} value = {formData.email_address}></input>
            </div>
              <div className = "">
                <h5> Password</h5>
                <input type = "password" className = "inputBox " name = "password" onChange = {handleChange} value = {formData.password}></input>
              </div>
              <div className = "">
                <h5> Confirm Password</h5>
                <input type = "password"className = "inputBox"></input>
              </div>
            
            <button className = "lg:w-64 w-48 self-center bg-primary text-white h-10 rounded-lg"> Sign Up</button>
          </div>
        </form>

    </main>
  )
}
