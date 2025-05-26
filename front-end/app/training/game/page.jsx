'use client'
import motions from './Debating_Motions.json' assert { type: 'json' };
import react, {useState, useEffect} from 'react';
export default function Game () {
    
  const [isActive, setIsActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isLoaded, setIsLoaded] = useState(false);

  const [problem, setProblem] = useState();
  const [govComparative, setGovComparative] = useState();
  const [oppComparative, setOppComparative] = useState();

  const [iterationCounter, setIterationCounter] = useState(0)

  let randomIndex = (Math.floor(Math.random() * motions.length));
  
  const [generatedMotion, setGeneratedMotion] = useState()
  const [generatedInfoSlide, setGeneratedInfoSlide] = useState()
  
  

  const generateNewMotion = () =>{
    randomIndex = Math.floor(Math.random() * motions.length);
    setGeneratedMotion(motions[randomIndex].Motion)
    setGeneratedInfoSlide(motions[randomIndex].Infoslide);
    setIsLoaded(true)
  }

  useEffect(() => {
    localStorage.clear();
    generateNewMotion()
  }, [])


    useEffect(() => {
        let timer;

        if(iterationCounter == 10){
          window.location.replace("http://localhost:3000/training/finish")
        }

        if (isActive && timeLeft > 0) {
          timer = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
          }, 1000);
        } else if (timeLeft === 0) {
          
          localStorage.setItem(iterationCounter, JSON.stringify({
            problem: problem,
            govComparative: govComparative,
            oppComparative: oppComparative,
            infoSlide: generatedInfoSlide,
            motion: generatedMotion
          }))
          
          const storedItem = JSON.parse(localStorage.getItem(0));       
          console.log(storedItem.problem); // Now this should correctly output the 'problem' value
          setProblem("")
          setGovComparative("")
          setOppComparative("")
          

          setTimeLeft(60)
          generateNewMotion();
          setIterationCounter(iterationCounter + 1);
        }

        

        return () => clearInterval(timer); // Cleanup on component unmount or when timeLeft/isActive changes
      }, [isActive, timeLeft]);

    return (
      <main className = "mb-24" >
            <div>{ isLoaded ?
                <div>
                  { !isActive ?
                    <div className = "text-center">
                      <h1 className = "text-7xl text-center">{timeLeft}</h1>
                      <button onClick={() => setIsActive(true)}>Start</button>
                    </div>
                    :
                    <div className = "w-10/12 mx-auto flex-col gap-2 flex">
                      <h1 className = "text-7xl">{timeLeft}</h1>
                      <p className = "text-md font-light"> {iterationCounter + 1} / 10</p>
                      <p> {generatedInfoSlide}</p>
                      <h2> {generatedMotion}</h2>
                      <button className = "text-left" onClick =  {() => {generateNewMotion(); setTimeLeft(60)}}> skip</button>
                      
                      
                      <h1> PROBLEM </h1> <input value = {problem} onChange = {(event) => setProblem(event.target.value)}className = "p-3 text-lg"/> 
                      <h1> COMPARATIVES</h1>
                      <p> Government</p><input onChange = {(event) => setGovComparative(event.target.value)}  value = {govComparative} className = "p-3 text-lg"/><p>Opposition</p><input onChange = {(event) => setOppComparative(event.target.value)} value = {oppComparative} className = "p-3 text-lg"/>
                      <br></br>
                      <button className = "bg-primary text-white" onClick = {() => setTimeLeft(0)}> next</button>
                      
                    </div>
                  }
                  
            
                </div> : <></>
                  }
  
            </div>
  
            
          
         
          
  
      </main>
    )
  }
  