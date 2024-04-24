import React from 'react'

async function getMotions(){
    const response = await fetch('http://127.0.0.1:8000/accounts/', {
        next: {
            revalidate: 30
        }
    })
    return response.json()
}


export default async function MotionList() {

    const motions = await getMotions()
    console.log(motions)

  return (
    <div>
    {motions.map((motion) => {
      return (
        <div key={motion.id} className="card"> 
          <h2 className="">{motion.username}</h2>
          <h2>{motion.password}</h2>
        </div>
      );
    })}
  </div>
  )
}
