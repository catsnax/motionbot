'use client'
import React, {useState, useEffect} from 'react'

async function fetchMotion(data) {
    console.log(data)
    const response = await fetch("http://127.0.0.1:8000/motions/", {
      method: "PUT",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin", 
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow", 
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    })
    return response.json(); 
  }

 
  


export default function generate() {
  async function handleGenerate (formData) {
 
    const rawFormData = {
      motionTheme: formData.get('motionTheme'),
      motionDifficulty: formData.get('motionDifficulty'),
    }
    //console.log(JSON.stringify(rawFormData))
    fetchMotion(rawFormData)
  }


  const [motionTheme, setMotionTheme] = useState('')
  const [motionDifficulty, setMotionDifficulty] = useState('')

  return (
    <main>

<main className = "">
        <form className = "border-solid flex flex-col gap-6 ml-52 items-center h-auto rounded-md border-2 w-8/12" action = {handleGenerate}>
            <div className = "flex flex-col gap-6  w-7/12 mt-10 ">
            <h1 className = "m-1 text-xl self-center"> Generate Motion</h1>

            <div>
            <h5 className = ""> Infoslide</h5>
            </div>
            
            <div>
              <h5 className = "text-md"> Motion </h5>
            </div>
            
            <div className = "flex  gap-2 ">
              <dix className = "w-1/2 border">
                <h5> Motion Theme</h5>
                <select className = "inputBox w-full" name = "motionTheme">
                <option> Any</option>
                <option> Feminism</option>
                <option> International Relations</option>
                <option> Economics</option>
                <option> Media</option>
                <option> LGBTQ+</option>
                <option> Environment</option>
                <option> Philosophy</option>
                <option> Education</option>
                <option> Technology</option>
                </select>
              </dix>
              <div className = "w-1/2">
                <h5> Motion Difficulty</h5>
                <select className = "inputBox w-full" name = "motionDifficulty">
                    <option> N/A</option>
                    <option> Easy</option>
                    <option> Average</option>
                    <option> Difficult</option>
                </select>
              </div>
            </div>
            <button className = "w-full bg-primary text-white h-10 rounded-lg self-center"> Generate Motion</button>
            </div>
        </form>
        

    </main>

        
    </main>
  )
}