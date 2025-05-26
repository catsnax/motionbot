import React from 'react'
//import type {NextApiRequest, NextApiResponse} from 'next';

async function createMotion(data) {
    console.log(data)
    const response = await fetch("https://motionbot.onrender.com/motions/", {
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
    })
    return response.json(); 
  }


export default function add() {
  async function handleSubmit (formData) {
    'use server'
 
    const rawFormData = {
      motionName: formData.get('motion'),
      infoSlide: formData.get('infoSlide'),
      motionTheme: formData.get('motionTheme'),
      motionDifficulty: formData.get('motionDifficulty'),
    }
    //console.log(JSON.stringify(rawFormData))
    createMotion(rawFormData)
 
  }
  return (
    <>

<main className = "flex justify-center">
        <form className = "border-solid flex flex-col items-center h-auto rounded-md border-2 w-screen" action = {handleSubmit}>
            <div className = "flex flex-col gap-2  w-7/12 mt-10 ">
            <h1 className = "m-1 text-xl self-center"> Add A Motion</h1>

            <div>
              <h5 className = "text-md"> Motion </h5>
              <textarea col = "0" className = "inputBox w-full" name = "motion" type = "text"  ></textarea>
            </div>
            <div>
            <h5 className = ""> Infoslide (Optional)</h5>
            <textarea className = "inputBox w-full"  name = "infoSlide" type = "text"></textarea>
            </div>
              <dix className = "">
                <h5> Motion Theme</h5>
                <select className = "inputBox w-full" name = "motionTheme"  >
                <option> Feminism</option>
                <option> Relationships</option>
                <option> International Relations</option>
                <option> Economics</option>
                <option> Politics</option>
                <option> Media</option>
                <option> LGBTQ+</option>
                <option> Environment</option>
                <option> Philosophy</option>
                <option> Education</option>
                <option> Technology</option>
                <option> Religion</option>
                <option> Narratives</option>
                </select>
              </dix>
              <div className = "">
                <h5> Motion Difficulty</h5>
                <select className = "inputBox w-full" name = "motionDifficulty">
                    <option> N/A</option>
                    <option> Easy</option>
                    <option> Average</option>
                    <option> Difficult</option>
                </select>
              </div>
            <button className = "w-full bg-primary text-white h-10 rounded-lg self-center mt-2"> Add Motion</button>
            </div>
        </form>
        

    </main>

        
    </>
  )
}
