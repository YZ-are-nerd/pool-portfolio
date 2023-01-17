'use client'

import Card from "../BlockComponents/Improving/Card"
export type CardDetails = {
    id: number
    src: string
    title: string
    description: string
}
const ImprovingBlock = () => {
    const cards: CardDetails[] = [
        {
            id: 1,
            src: '/skills/next-js.svg',
            title: 'Next JS',
            description: 'I really like Next js, if it were possible, I made all my projects on next, but not everywhere it is necessary.'
        },
        {
            id: 2,
            src: '/skills/react.svg',
            title: 'React',
            description: "The first framework I met was React, at first it didn't seem very clear to me, but after a few days of studying everything turned out to be very clear, I also tried Angular, but I didn't stay on it for a long time and returned to React"
        },
        {
            id: 3,
            src: '/skills/ts.svg',
            title: 'TypeScript',
            description: 'If I could, I would start my study of js right away with typescript, it is very convenient to develop, you always know what type you transmit and receive.'
        },
    ] 
    return (
        <div className='w-full max-w-7xl h-[60vh] mx-auto grid grid-cols-3 grid-rows-2 gap-1'>
            {
                cards.map((card) =>
                <Card key={card.id} details={card} />
                )
            }
        </div>
    )
}

export default ImprovingBlock