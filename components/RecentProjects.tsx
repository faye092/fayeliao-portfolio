import { projects } from '@/data'
import { div } from 'framer-motion/client'
import React from 'react'
import { TypewriterEffectSmooth } from './ui/typewriter-effect';
import { PinContainer } from './ui/3d-pin';
import { FaLocationArrow } from 'react-icons/fa';

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
      <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-5'>
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
              className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex 
                         items-center justify-center sm:w-[570px] w-[80vw]'
            >
                <PinContainer title={link} href={link}>
                    <div 
                        className='relative flex items-center justify-center sm:w-[570px]
                                  w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-8'
                    >
                        <div
                            className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'
                        >
                          <img src="/bg.png" alt="bg-img" />  
                        </div>
                        <img 
                            src={img} 
                            alt={title} 
                            className='z-10 absolute bottom-0 w-full h-full object-cover'
                        />
                    </div>
                    <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1 mb-1'>
                        {title}
                    </h1>
                    <p className='font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-sm z-10 line-clamp-2'>
                        {des}
                    </p>
                    <div className='flex items-center justify-between mt-5 mb-1'>
                      <div className='flex items-center'>
                        {iconLists.map((icon,index) => (
                            <div 
                              key={icon}
                              className='border border-white/[0.2] rounded-full bg-black
                                        lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                              style={{ transform:`translateX(-${5 * index * 2}px)`}}
                            >
                                <img
                                    src={icon}
                                    alt={icon}
                                    className='p-2'
                                />
                            </div>
                        ))}
                      </div>
                      <div className='flex justify-center items-center'>
                        <p className='flex lg:text-xl md:text-xs text-sm text-purple'>
                            Check Live Site
                        </p>
                        <FaLocationArrow className='ms-3' color='#cbacf9'/>
                      </div>
                    </div>
                
                </PinContainer>
            </div>
        ))}
      </div>
    </div>
  )
}

export default RecentProjects