import { projects } from '@/data'
import { div } from 'framer-motion/client'
import React from 'react'
import { TypewriterEffectSmooth } from './ui/typewriter-effect';

function RecentProjects() {
  const words = [
    {
        text:"Recent",
        className:"text-white dark:text-white"
    },
    {
        text:"projects.",
        className:"text-purple dark:text-purple"
    },
  ];

  return (
    <div className='py-20' id="projects">
      <div className='flex flex-col items-center justify-center'>
        <TypewriterEffectSmooth words={words} />
      </div>
      <div className='flex flex-wrap items-center justify-center p-4 gap-16 mt-10'>
        {projects.map(({
            id,
            title,
            des,
            img,
            iconLists,
            link,
        }) =>(
            <div 
              key={id} 
              className='lg:min-h-[32.5rem] h-[25rem] flex 
                         items-center justify-center sm:w-95 w-[80vw]'
            >
                {title}
            </div>
        ))}
      </div>
    </div>
  )
}

export default RecentProjects
