import React from 'react'

const Contact = () => {
  return (
    <>
        <section id='contact'>
            <h1>Contact Me</h1>
            <div className='card flex flex-col w-[70%]'>
                <input type="email" name="" id="" placeholder='your email' className='outline-none border-none rounded-xl p-3 font-black'/>
                <textarea placeholder='your message' className='outline-none border-none rounded-xl p-3 mt-3 h-40 font-black'></textarea>
                <button type="submit" className='button mt-3 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300'>Send</button>
            </div>
        </section>
    </>
    )
}

export default Contact