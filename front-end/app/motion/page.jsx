import React from 'react'
import MotionList from './MotionList.jsx'
export default function Motion () {
  return (
    <main>
        <nav>
          <div>
            <h2> Motions</h2>
            <p> <small> currently open motions.</small></p>

            <MotionList/>
          </div>

          
        </nav>
       
        

    </main>
  )
}
