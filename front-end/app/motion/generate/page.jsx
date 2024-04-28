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
      motionFormat: formData.get('motionFormat')
    }
    setMotionFormat(rawFormData.motionFormat)
    fetchMotion(rawFormData).then((response) => {
        if (response){
            if(rawFormData.motionFormat == 'British Parliamentary'){
                console.log(response)
                setMotionName(response.motionName)
                setMotionInfoSlide(response.infoSlide)
            }
            else if (rawFormData.motionFormat == 'Asian Parliamentary'){
                console.log(response)
                setMotionAsian(response)
        

            }
            
           
        }
        else{
            setMotionName("")
            setMotionInfoSlide("")
        }
    })
  }


  const [motionName, setMotionName] = useState('')
  const [motionInfoSlide, setMotionInfoSlide] = useState('')
  const [motionFormat, setMotionFormat] = useState('')
  const [motionAsian, setMotionAsian] = useState([])

  return (
    <main>

<main className = "flex justify-center">
        <form className = "border-solid flex flex-col gap-3 items-center h-auto rounded-md border-2 w-9/12" action = {handleGenerate}>
            <div className = "flex flex-col gap-6  w-7/12 mt-10 ">
            <h1 className = "m-1 text-xl self-center"> Motion Generator</h1>

            {motionFormat == 'British Parliamentary' ?  <>
            {motionInfoSlide != "" ? <div><h5 className = "text-md font-semibold"> Infoslide</h5> <div className = "text-justify"> {motionInfoSlide}</div> </div> : <></>}
            {motionName != "" ? <div><h5 className = "text-md font-semibold"> Motion</h5> <div className = "text-justify"> {motionName}</div> </div> : <></>} </>
            :<>
            {(motionAsian.length != []) ? <> 
            
            <h4 className = "text-md font-semibold"> Infoslide</h4> 
            {motionAsian.map((motion, index) => {
                if(motion.infoSlide != ""){
                    return <span className = "text-justify" key = {motion}> Motion {index + 1}: {motion.infoSlide} </span>
                }
            })
            }
            <h4 className = "text-md font-semibold"> Motion</h4>
            {motionAsian.map((motion, index) => {
                return <div key = {motion} className = "text-justify"> Motion {index + 1}: {motion.motionName}</div>
            })
            }



            </> : <></>}
           
            

            
            
            </>}


            
            <div className = "flex  gap-2 ">

            <div className = "w-5/12">
                <h5> Format</h5>
                <select className = "inputBox w-full" name = "motionFormat">
                    <option> British Parliamentary</option>
                    <option> Asian Parliamentary</option>
                
                </select>
              </div>
                
              <dix className = "w-6/12">
                <h5> Theme</h5>
                <select className = "inputBox w-full" name = "motionTheme">
                <option> Any</option>
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
              <div className = "w-1/3">
                <h5> Difficulty</h5>
                <select className = "inputBox w-full" name = "motionDifficulty">
                    <option> Any</option>
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
