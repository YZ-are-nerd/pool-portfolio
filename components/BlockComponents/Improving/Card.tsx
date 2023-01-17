'use client'
import { CardDetails } from '@/components/Blocks/ImprovingBlock'
import { useSpring, animated } from '@react-spring/web'
import Image from 'next/image'
import React, { useRef } from 'react'
type Props = {
  details: CardDetails
}
const Card: React.FC<Props> = ({details}) => {
    const cardRef = useRef<HTMLDivElement>(null!)
    const [{ xys }, api] = useSpring(() => ({ xys: [0, 0, 1], config: {
        mass: 1,
        tension: 70,
        friction: 26,
        clamp: false,
        precision: 0.01,
        velocity: 0,
    } }), [])
    const handleMouseLeave = () =>
    api.start({
      xys: [0, 0, 1],
    })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = cardRef.current.getBoundingClientRect()
    api.start({
      xys: calc(e.clientX, e.clientY, rect),
    })
  }
    const calc = (x: number, y: number, rect: any) => [
        -(y - rect.top - rect.height / 2) / 5,
        (x - rect.left - rect.width / 2) / 5,
        1.4,
      ]
      
    const trans = (x: number, y: number, s: number) =>
    `perspective(600px) rotateX(${x / 12}deg) rotateY(${y / 12}deg) scale(${1})`
    return (
        <animated.div ref={cardRef} 
        style={{ transform: xys.to(trans) }}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        className="w-full h-full rounded-xl cursor-pointer flex flex-col p-4 gap-4 bg-white bg-opacity-90 backdrop-blur">
          <div className="w-12 h-12 relative">
          <Image src={details.src} fill alt='logo-skill' />
          </div>
          <div className="w-full h-fit flex flex-col">
            <h1 className='text-3xl font-semibold text-neutral-800'>{details.title}</h1>
            <h2 className='text-xl font-medium text-neutral-500'>{details.description}</h2>
          </div>
        </animated.div>
    )
}

export default Card