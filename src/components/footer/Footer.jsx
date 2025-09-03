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
            <div className='h-[60vh] w-full bg-black pt-2 flex flex-col justify-between'>
                <div className='flex justify-between p-3'>
                    <div className='flex gap-2'>
                        <h1 className='font-[biglaurasana] text-7xl border-2 border-white px-8 rounded-full pt-1 hover:text-[#D3FD50] hover:border-[#D3FD50] cursor-pointer'>FB</h1>
                        <h1 className='font-[biglaurasana] text-7xl border-2 border-white px-8 rounded-full pt-1 hover:text-[#D3FD50] hover:border-[#D3FD50] cursor-pointer'>IG</h1>
                        <h1 className='font-[biglaurasana] text-7xl border-2 border-white px-8 rounded-full pt-1 hover:text-[#D3FD50] hover:border-[#D3FD50] cursor-pointer'>IN</h1>
                        <h1 className='font-[biglaurasana] text-7xl border-2 border-white px-8 rounded-full pt-1 hover:text-[#D3FD50] hover:border-[#D3FD50] cursor-pointer'>BE</h1>
                    </div>
                    <div>
                        <h1 className='font-[biglaurasana] text-7xl border-2 border-white px-8 rounded-full pt-1 hover:text-[#D3FD50] hover:border-[#D3FD50] cursor-pointer uppercase'>Contact</h1>
                    </div>
                </div>
                <div className="flex justify-between items-center px-6 py-3 text-sm border-t border-white/20">
                    {/* Left */}
                    <div className="flex items-center gap-1 font-[laurasana] text-2xl hover:text-[#D3FD50]">
                        🌍 <span>MONTREAL_{time}</span>
                    </div>

                    {/* Center */}
                    <div className="flex gap-6 font-[laurasana] text-[15px]">
                        <a href="#" className='hover:text-[#D3FD50]'>POLITIQUE DE CONFIDENTIALITÉ</a>
                        <a href="#" className='hover:text-[#D3FD50]'>AVIS DE CONFIDENTIALITÉ</a>
                        <a href="#" className='hover:text-[#D3FD50]'>RAPPORT ÉTHIQUE</a>
                        <a href="#" className='hover:text-[#D3FD50]'>OPTIONS DE CONSENTEMENT</a>
                    </div>

                    {/* Right */}
                    <a href="#" className="font-bold font-[laurasana] text-2xl hover:text-[#D3FD50]">
                        RETOUR EN HAUT
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer