import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/4523f31c-1348-48df-877a-c7689235b23c" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact Me</p>
            </div>
            <input className='bg-gray-500 p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-gray-500' type="email" placeholder='Email' name='email' />
            <textarea className='bg-gray-500 p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-8 py-2 my-8 mx-auto flex items-center justify-center'>Send</button>
        </form>
    </div>
  )
}

export default Contact