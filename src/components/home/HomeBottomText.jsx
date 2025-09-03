import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
    return (
        <div className='font-[biglaurasana] flex items-center justify-center gap-2 '>
            <p className='absolute lg:w-[20vw] w-72 lg:right-10 right-0 lg:bottom-45 bottom-24 font-[laurasana] leading-tight lg:text-lg text-sm'>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.</p>
            <div className='hover:border-[#D3FD50] hover:text-[#D3FD50] border-3 lg:h-30 flex items-center lg:px-10 px-3 border-white rounded-full uppercase'>
                <Link className='text-[6vw] lg:mt-6' to='/projets'>Projets</Link>
            </div>
            <div className='hover:border-[#D3FD50] hover:text-[#D3FD50] border-3 lg:h-30 flex items-center lg:px-10 px-3 border-white rounded-full uppercase'>
                <Link className='text-[6vw] lg:mt-6' to='/agence'>Agence</Link>
            </div>
        </div>
    )
}

export default HomeBottomText