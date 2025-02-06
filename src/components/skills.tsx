import {skill_value} from '@/utils/data'
import React from 'react'

export const Skills = () => {
  return (
    <section id='skills'>
        <h1>My Skills</h1>
        <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
          {
            skill_value.map((e,index) => {
              return <li key={index} className='flex flex-col items-center px-4 py-3'><img className='skill-img' src={e.image} alt="" /><span>{e.title}</span></li>
            })
          }
        </ul>
    </section>
  )
}
