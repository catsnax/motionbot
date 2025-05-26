'use client'

import React, {useState,useEffect} from 'react'

export default function Training () {

    const [timer, setTimer] = useState(1)
    const [motionQuantity, setMotionQuantity] = useState(5)

    const handleTimerChange = (event) => {
        setTimer(event.target.value); // Update the state with the selected value
      };

      const handleQuantityChange = (event) => {
        setMotionQuantity(event.target.value); // Update the state with the selected value
      };


  return (
    <main className = "flex justify-center" >
        <nav>
          <div>
            <h1 className = "text-center text-4xl"> Debate Training</h1>    

            <div className = "flex gap-4">
                <h3> Pick how many minutes per motion</h3>  
                <select value = {timer} onChange = {handleTimerChange}> 
                    <option value = "1" > 1</option>
                    <option value = "1.5" > 1 minute and 30 seconds</option>
                    <option value = "2" > 2</option>
                </select>
            </div>
            <div className = "flex gap-4">
                <h3> Pick how many motions</h3>
                <select value = {motionQuantity} onChange = {handleQuantityChange}> 
                    <option value = "5" > 5</option>
                    <option value = "6" > 6</option>
                    <option value = "7" > 7</option>
                    <option value = "8" > 8</option>
                    <option value = "9" > 9</option>
                    <option value = "10" > 10</option>
                </select>
            </div>

            <button className = "align-center"> Start</button>
        

          </div>

          
        </nav>
       
        

    </main>
  )
}
