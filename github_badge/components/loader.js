import React from 'react'

const Loader = () => {
  return (
    <div className='w-full flex grow mx-auto items-center flex-col justify-center gap-2'>
        <img src='./loader.gif' className='object-contain object-center w-1/2 flex' />
        <h2 className=' text-white/80 font-bold text-2xl'>Searching...</h2>
    </div>
  )
}

export default Loader;