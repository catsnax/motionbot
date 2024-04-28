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
    password: ""

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
    <main className = "flex justify-center ">
        <form className = "border-solid flex justify-center h-auto rounded-md border-2 w-10/12" onSubmit = {handleSubmit}>
          <div className = "flex flex-col items-center gap-6 w-full mt-10 ">
            <h1 className = "m-8 text-xl self-center"> Create Admin Account</h1>
            <div className = "self-center w-1/2 ml-64">
              <h5 className = "text-md"> Username</h5>
              <input className = "inputBox w-6/12" name = "username" onChange = {handleChange} value = {formData.username}></input>
            </div>
            <div className = "self-center w-1/2 ml-64 ">
            <h5 className = ""> Email Address</h5>
            <input className = "inputBox w-6/12" name = "email_address" onChange = {handleChange} value = {formData.email_address}></input>
            </div>
            <div className = "flex gap-2 self-center w-1/2 ml-64">
              <dix className = "w-3/12">
                <h5> Password</h5>
                <input type = "password" className = "inputBox w-10/12" name = "password" onChange = {handleChange} value = {formData.password}></input>
              </dix>
              <div className = "w-3/12">
                <h5> Confirm Password</h5>
                <input type = "password"className = "inputBox w-10/12"></input>
              </div>
            </div>
            <button className = "w-6/12 bg-primary text-white h-10 rounded-lg"> Sign Up</button>
          </div>
        </form>

    </main>
  )
}
