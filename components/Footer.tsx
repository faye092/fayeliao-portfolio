"use client";

import React, { useState }  from 'react';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import { TypewriterEffectSmooth } from './ui/typewriter-effect';
import { FlipWords } from './ui/flip-words';
import { socialMedia } from '@/data';
import Link from 'next/link';


const Footer = () => {
    const words = [
      {
        text: "Ready",
      },
      {
        text: "to",
      },
      {
        text: "contact",
      },
      {
        text: "me?",
        className: "text-purple dark:text-purple",
      },
    ];
    const reach = [
      "Reach out to me today and let's discuss how I can help you achieve your goals.",
    ];

  return (
    <footer className="relative pb-2 mb-5 " id="contact">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center justify-center">
          <TypewriterEffectSmooth words={words} />
        </div>
        <FlipWords words={reach} />
        <a href="mailto:liaofei167@gmail.com">
          <div className="mt-10">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </div>
        </a>
        
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Faye Liao
        </p>
        <div className="flex items-center md:gap-3 lg:gap-6 mt-5">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Link href={profile.link} key={profile.id} passHref>
                <img
                  src={profile.img}
                  alt="icons"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
