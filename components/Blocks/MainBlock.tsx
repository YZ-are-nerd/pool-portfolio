import Image from 'next/image'
import React from 'react'
import { BiCopy } from 'react-icons/bi'
const MainBlock = () => {
  return (
    <div className='w-full max-w-7xl h-[70vh] mx-auto flex flex-col gap-8 p-8'>
        <div className="w-full h-10 flex shrink-0 items-end gap-2">
            <div className="w-16 h-full relative">
                <Image src='/logo.svg' className='w-full h-full object-cover' fill alt='logo' />
            </div>
            <div className="w-fit h-fit flex items-center gap-1 p-1 rounded-xl bg-neutral-900">
                <button className="py-1 px-2 rounded-xl text-md text-neutral-400 bg-neutral-800">Проверка</button>
            </div>
        </div>
        <div className="w-full h-full flex flex-col">
            <h2 className='text-5xl leading-tight font-semibold text-neutral-300'>
            I am engaged in frontend development - this is my hobby and my life's work, 
            on which I want to earn. When launching projects, 
            I wanted to release projects under some name, so I came up with a Pool, 
            all the projects that you will see here are released by a Pool.
                
            </h2>
            <div className="w-fit h-fit flex items-center gap-1">
                <h2 className='text-5xl leading-tight font-semibold text-neutral-300'>For communication: </h2>
                <button className='py-1 px-3 rounded-xl flex items-center gap-1 bg-neutral-900'>
                    <span className='text-5xl leading-tight font-semibold text-neutral-300'>pool.dev72@gmail.com</span>
                    <span className='p-1 rounded-xl bg-neutral-800 hover:bg-opacity-60'><BiCopy className='text-neutral-400' size={36} /></span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default MainBlock