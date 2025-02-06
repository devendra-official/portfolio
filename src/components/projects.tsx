import { project_list } from '@/utils/data'
import React from 'react'

const projects = () => {
  return (
    <section id='projects' className='scroll-mt-28 mb-28'>
        <h1>My Projects</h1>
        <div className='flex flex-wrap justify-center items-center'>
        {
          project_list.map((e,index)=>{
            return <div className='card mb-6 m-4' key={index}>
            <div>
              <h2>{e.title}</h2>
              <div className='flex items-center'>
                <p className='font-bold text-gray-400'>Made with: </p>
                {
                  e.made.map((value,ind) => {
                    return  <img key={ind} src={value} alt="" className='mr-3 text-2xl' height={38} width={38} />
                  })
                }
              </div>
              <div className='mb-4'>
                {e.details}
              </div>
              <div className='button flex p-3 items-center justify-around'>
                <img src="github.svg" alt="" height={36} width={36}/>
                <a href={e.github}><button>GitHub</button></a>
              </div>
            </div>
          </div>
          })
        }
      </div>
    </section>
  )
}

export default projects
