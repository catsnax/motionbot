'use client'

import React, {useState,useEffect} from 'react'

export default function Finish () {


    const [answers, setAnswers] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const storedAnswers = [];
        for (let i = 0; i < 10; i++) {
            const storedItem = JSON.parse(localStorage.getItem(i));
            if (storedItem) {
                storedAnswers.push(storedItem);
            }
            console.log(storedItem);
        }
        setAnswers(storedAnswers)
        
        setIsLoading(true)
    }, [])


  return (
    <main className = "flex justify-center" >
          <div>
            <h1 className = "text-center text-4xl"> Exercise Results</h1>   
            {(isLoading) ?
            answers.map((item, i) =>(
            <div className = "mx-auto w-10/12 mb-10">
                <p> {i + 1}.</p> <h2 className = "mb-1 font-normal"> {answers[i].infoSlide}</h2> <h2> {answers[i].motion}</h2>

                <div>
                <h1> Problem</h1>
                <p key = {i}> {answers[i].problem} </p>
                <h1> Comparatives</h1>
                <p> Government: {answers[i].govComparative}</p>
                <p className = "mb-6"> Opposition: {answers[i].oppComparative}</p>

                <p> comments</p>
                <textArea className = "p-3 w-11/12 h-10/12"/>

                </div>

            </div>
            
            )) :
            <></>
            }   

        

          </div>

          
        
        

    </main>
  )
}
