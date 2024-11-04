import React from 'react'
import { TypewriterEffectSmooth } from './ui/typewriter-effect';

function Clients() {
    const words = [
        {
            text:"Satisfied",
            className:"text-white dark:text-white"
        },
        {
            text:"clients.",
            className:"text-purple dark:text-purple"
        },
    ];
      
  return (
    <div className='py-20' id="projects">
      <div className='flex flex-col items-center justify-center'>
        <TypewriterEffectSmooth words={words} />
      </div>
    </div>
  )
}

export default Clients
