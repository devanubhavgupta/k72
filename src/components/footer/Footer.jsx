import React from 'react'
import { useState, useEffect } from 'react';
const Footer = () => {

    const [time, setTime] = useState(getMontrealTime());

    function getMontrealTime() {
        return new Date().toLocaleTimeString('en-CA', {
            timeZone: 'America/Toronto', // Covers Montreal
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        });
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(getMontrealTime());
        }, 1000); // update every second

        return () => clearInterval(interval); // cleanup on unmount
    }, []);


    return (
        <div>
            {/* footer */}
            <div className='lg:h-[60vh] h-[40vh] w-full bg-black pt-2 flex flex-col justify-between'>
                <div className='flex justify-between lg:p-3 p-1'>
                    <div className='flex gap-1'>
                        <h1 className='font-[biglaurasana] lg:text-7xl text-[20px] lg:border-2 border-[2px] border-white lg:px-8 px-2 lg:rounded-full rounded-3xl pt-1 hover:text-[#D3FD50] hover:border-[#D3FD50] cursor-pointer'>FB</h1>
                        <h1 className='font-[biglaurasana] lg:text-7xl text-[20px] lg:border-2 border-[2px] border-white lg:px-8 px-2 lg:rounded-full rounded-3xl pt-1 hover:text-[#D3FD50] hover:border-[#D3FD50] cursor-pointer'>IG</h1>
                        <h1 className='font-[biglaurasana] lg:text-7xl text-[20px] lg:border-2 border-[2px] border-white lg:px-8 px-2 lg:rounded-full rounded-3xl pt-1 hover:text-[#D3FD50] hover:border-[#D3FD50] cursor-pointer'>IN</h1>
                        <h1 className='font-[biglaurasana] lg:text-7xl text-[20px] lg:border-2 border-[2px] border-white lg:px-8 px-2 lg:rounded-full rounded-3xl pt-1 hover:text-[#D3FD50] hover:border-[#D3FD50] cursor-pointer'>BE</h1>
                    </div>
                    <div>
                        <h1 className='font-[biglaurasana] lg:text-7xl text-[20px] lg:border-2 border-[2px] border-white lg:px-8 px-2 lg:rounded-full rounded-3xl pt-1 hover:text-[#D3FD50] hover:border-[#D3FD50] cursor-pointer uppercase'>Contact</h1>
                    </div>
                </div>
                <div className="flex justify-between align-middle flex-col items-center lg:px-6 px-0.5 lg:py-3 py-4 text-sm border-t lg:border-white/20 border-none">
                    {/* Left */}
                    <div className="flex items-center gap-1 font-[laurasana] text-2xl hover:text-[#D3FD50]">
                        <span>MONTREAL_{time}</span>
                    </div>

                    {/* Center */}
                    <div className="flex lg:flex-row flex-col lg:gap-2 font-[laurasana] lg:text-[15px] text-[10px] lg:leading-2 leading-tight">
                        <a href="#" className='hover:text-[#D3FD50]'>POLITIQUE DE CONFIDENTIALITÉ</a>
                        <a href="#" className='hover:text-[#D3FD50]'>AVIS DE CONFIDENTIALITÉ</a>
                        <a href="#" className='hover:text-[#D3FD50]'>RAPPORT ÉTHIQUE</a>
                        <a href="#" className='hover:text-[#D3FD50]'>OPTIONS DE CONSENTEMENT</a>
                    </div>

                    {/* Right */}
                    <a href="#" className="font-bold font-[laurasana] lg:text-2xl text-xl hover:text-[#D3FD50]">
                        RETOUR EN HAUT
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer