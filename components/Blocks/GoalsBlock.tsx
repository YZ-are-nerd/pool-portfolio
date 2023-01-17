'use client'
import { animated, useInView, useSpring } from '@react-spring/web'
import React, { useState } from 'react'

const GoalsBlock = () => {
  const [ref, inView] = useInView()
  const [wideMode, setWideMode] = useState<boolean>(false)
  const springs = useSpring({
    from: { y: 100, scaleY: .7, opacity: 0 },
    to: async (next, cancel) => {
      if (inView) await next({ y: 0, scaleY: 1, opacity: 1 })
    },
    config: { tension: 120, friction: 14 }
  })
  return (
      <animated.div ref={ref} style={{ ...springs }} onMouseEnter={() => setWideMode(true)} onMouseLeave={() => setWideMode(false)}
      className={`w-full h-fit max-w-7xl mx-auto flex flex-col gap-2 rounded-xl bg-gradient-to-b from-purple-500 via-purple-500 to-fuchsia-500`}>
          <div className="w-full max-w-7xl h-fit mx-auto flex flex-col gap-2 p-8">
            <h1 className='font-semibold text-5xl text-neutral-100 text-opacity-90'>My guidelines when creating applications</h1>
            <p className='text-4xl leading-tight font-medium text-neutral-200 text-opacity-80'>When creating an application, I look 
            towards the scalability of a beautiful and user-friendly design. I really like to create components that are almost like a 
            separate application</p>
          </div>
      </animated.div>
  )
}

export default GoalsBlock