import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useContext } from 'react'
import { useRef } from 'react'
import { NavbarContext } from '../../context/NavContext'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';


const FullScreenNav = () => {
    const fullNavLinksRef = useRef(null)
    const fullScreenRef = useRef(null)
    const [navOpen, setNavOpen] = useContext(NavbarContext)
    const navigate = useNavigate();
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

    function gsapAnimation() {
        const tl = gsap.timeline()
        tl.to('.fullscreennav', {
            display: 'block'
        })
        tl.to('.stairing', {
            delay: 0.2,
            height: '100%',
            stagger: {
                amount: -0.3
            }
        })
        tl.to('.navlink', {
            opacity: 1
        })
        tl.to('.link', {
            opacity: 1,
            rotateX: 0,
            stagger: {
                amount: 0.3
            }
        })
        tl.to('.bottom', {
            opacity: 1
        })
    }
    function gsapAnimationReverse() {
        const tl = gsap.timeline()
        tl.to('.bottom', {
            opacity: 0,
        })
        tl.to('.link', {
            opacity: 0,
            rotateX: 90,
            stagger: {
                amount: 0.3
            }
        })
        tl.to('.stairing', {
            height: 0,
            stagger: {
                amount: 0.3
            }
        })
        tl.to('.navlink', {
            opacity: 0
        })
        tl.to('.fullscreennav', {
            display: 'none',
        })
    }

    useGSAP(() => {
        if (navOpen) {
            document.body.style.overflow = "hidden"; // scroll lock
            gsap.to('.fullscreennav', { display: 'block' })
            gsapAnimation()
        } else {
            document.body.style.overflow = "auto"; // scroll unlock
            gsapAnimationReverse()
        }
    }, [navOpen])


    return (
        <div ref={fullScreenRef} className='fullscreennav hidden text-white h-screen w-full fixed top-0 left-0 z-[9999] overflow-hidden flex flex-col justify-start  pt-0'>
            <div className='h-screen w-full fixed top-0'>
                <div className="h-full w-full flex">
                    <div className="stairing h-full w-1/5 bg-black"></div>
                    <div className="stairing h-full w-1/5 bg-black"></div>
                    <div className="stairing h-full w-1/5 bg-black"></div>
                    <div className="stairing h-full w-1/5 bg-black"></div>
                    <div className="stairing h-full w-1/5 bg-black"></div>
                </div>
            </div>
            <div>
                <div ref={fullNavLinksRef} className='relative flex justify-between flex-col'>
                    <div>
                        <div className="navlink flex w-full justify-between lg:p-5 p-2 items-start">
                            <div>
                                <div className='w-28 cursor-pointer'
                                    onClick={() => {
                                        navigate('/');
                                        setNavOpen(false);
                                    }}
                                >
                                    <svg className='w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
                                        <path fill='white' fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className='p-3'>
                                <div
                                    onClick={() => setNavOpen(false)}
                                    className="w-20 h-20 lg:w-25 lg:h-25 relative cursor-pointer group">
                                    {/* Left diagonal bar */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="block w-0.5 h-full bg-[#D3FD50] transform rotate-45 transition-transform duration-300 group-hover:scale-110"></span>
                                    </div>

                                    {/* Right diagonal bar */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="block w-0.5 h-full bg-[#D3FD50] transform -rotate-45 transition-transform duration-300 group-hover:scale-110"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='py-35 lg:py-2 sm:items-center overflow-hidden'>
                            <div className='link origin-top relative  border-t-1 border-white cursor-pointer'
                                onClick={() => {
                                    navigate('/projets');
                                    setNavOpen(false); // close the fullscreen nav
                                }}
                            >
                                <h1 className='font-[biglaurasana] lg:text-[8vw] text-[15vw] leading-[0.8] lg:pt-5 pt-2 uppercase text-center'>Projets</h1>
                                <div className='moveLink lg:visible invisible absolute flex text-black bg-[#D3FD50] top-0'>
                                    <div className='moveX flex items-center'>
                                        <h2 className='whitespace-nowrap font-[biglaurasana] text-[8vw] leading-[0.8] pt-5 uppercase text-center'>Pour Tout Vior</h2>
                                        <img className='h-27 w-96 shrink-0 rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                        <h2 className='whitespace-nowrap font-[biglaurasana] text-[8vw] leading-[0.8] pt-5 uppercase text-center'>Pour Tout Vior</h2>
                                        <img className='h-27 w-96 shrink-0 rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                                    </div>
                                    <div className='moveX flex items-center'>
                                        <h2 className='whitespace-nowrap font-[biglaurasana] text-[8vw] leading-[0.8] pt-5 uppercase text-center'>Pour Tout Vior</h2>
                                        <img className='h-27 w-96 shrink-0 rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                        <h2 className='whitespace-nowrap font-[biglaurasana] text-[8vw] leading-[0.8] pt-5 uppercase text-center'>Pour Tout Vior</h2>
                                        <img className='h-27 w-96 shrink-0 rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className='link origin-top  relative  border-t-1 border-white cursor-pointer'
                                onClick={() => {
                                    navigate('/agence');
                                    setNavOpen(false);
                                }}
                            >
                                <h1 className='font-[biglaurasana] lg:text-[8vw] text-[15vw] leading-[0.8] lg:pt-5 pt-2 uppercase text-center'>Agence</h1>
                                <div className='moveLink lg:visible invisible  absolute flex text-black bg-[#D3FD50] top-0'>
                                    <div className='moveX flex items-center'>
                                        <h2 className='whitespace-nowrap font-[biglaurasana] text-[8vw] leading-[0.8] pt-5 uppercase text-center'>Pour Tout Savior</h2>
                                        <img className='h-27 w-96 shrink-0 rounded-full object-cover' src="https://k72.ca/uploads/teamMembers/blank_copie_2-640x290.jpg" alt="" />
                                        <h2 className='whitespace-nowrap font-[biglaurasana] text-[8vw] leading-[0.8] pt-5 uppercase text-center'>Pour Tout Savior</h2>
                                        <img className='h-27 w-96 shrink-0 rounded-full object-cover' src="https://k72.ca/uploads/teamMembers/Claire_640X290-640x290.jpg" alt="" />
                                    </div>
                                    <div className='moveX flex items-center'>
                                        <h2 className='whitespace-nowrap font-[biglaurasana] text-[8vw] leading-[0.8] pt-5 uppercase text-center'>Pour Tout Savior</h2>
                                        <img className='h-27 w-96 shrink-0 rounded-full object-cover' src="https://k72.ca/uploads/teamMembers/blank_copie_2-640x290.jpg" alt="" />
                                        <h2 className='whitespace-nowrap font-[biglaurasana] text-[8vw] leading-[0.8] pt-5 uppercase text-center'>Pour Tout Savior</h2>
                                        <img className='h-27 w-96 shrink-0 rounded-full object-cover' src="https://k72.ca/uploads/teamMembers/Claire_640X290-640x290.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className='link origin-top relative  border-t-1 border-white cursor-pointer'
                                onClick={() => {
                                    navigate('/contact');
                                    setNavOpen(false);
                                }}
                            >
                                <h1 className='font-[biglaurasana] lg:text-[8vw] text-[15vw] leading-[0.8] lg:pt-5 pt-2 uppercase text-center'>Contact</h1>
                                <div className='moveLink lg:visible invisible absolute flex text-black bg-[#D3FD50] top-0'>
                                    <div className='moveX flex items-center'>
                                        <h2 className='whitespace-nowrap font-[biglaurasana] text-[8vw] leading-[0.8] pt-5 uppercase text-center'>Pour envoyer un fax</h2>
                                        <img className='h-27 w-30 shrink-0 rounded-full object-contain' src="https://imgs.search.brave.com/PIPQvpINzxUCKhjIEJRuUGPdIUBFte0qEfR_z6GUScE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3Ivc2V0LWhlYXJ0/cy1sb3ZlLXdoaXRl/LWJhY2tncm91bmQt/b2xkLXZlY3Rvci1p/bGx1c3RyYXRpb24t/ZmxhdC1zdHlsZV8x/MDg5MDI2LTIyMzEu/anBnP3NlbXQ9YWlz/X2h5YnJpZCZ3PTc0/MA" alt="" />
                                        <h2 className='whitespace-nowrap font-[biglaurasana] text-[8vw] leading-[0.8] pt-5 uppercase text-center'>Pour envoyer un fax</h2>
                                        <img className='h-27 w-30 shrink-0 rounded-full object-contain' src="https://imgs.search.brave.com/PIPQvpINzxUCKhjIEJRuUGPdIUBFte0qEfR_z6GUScE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3Ivc2V0LWhlYXJ0/cy1sb3ZlLXdoaXRl/LWJhY2tncm91bmQt/b2xkLXZlY3Rvci1p/bGx1c3RyYXRpb24t/ZmxhdC1zdHlsZV8x/MDg5MDI2LTIyMzEu/anBnP3NlbXQ9YWlz/X2h5YnJpZCZ3PTc0/MA" alt="" />
                                    </div>
                                    <div className='moveX flex items-center'>
                                        <h2 className='whitespace-nowrap font-[biglaurasana] text-[8vw] leading-[0.8] pt-5 uppercase text-center'>Pour envoyer un fax</h2>
                                        <img className='h-27 w-30 shrink-0 rounded-full object-contain' src="https://imgs.search.brave.com/PIPQvpINzxUCKhjIEJRuUGPdIUBFte0qEfR_z6GUScE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3Ivc2V0LWhlYXJ0/cy1sb3ZlLXdoaXRl/LWJhY2tncm91bmQt/b2xkLXZlY3Rvci1p/bGx1c3RyYXRpb24t/ZmxhdC1zdHlsZV8x/MDg5MDI2LTIyMzEu/anBnP3NlbXQ9YWlz/X2h5YnJpZCZ3PTc0/MA" alt="" />
                                        <h2 className='whitespace-nowrap font-[biglaurasana] text-[8vw] leading-[0.8] pt-5 uppercase text-center'>Pour envoyer un fax</h2>
                                        <img className='h-27 w-30 shrink-0 rounded-full object-contain' src="https://imgs.search.brave.com/PIPQvpINzxUCKhjIEJRuUGPdIUBFte0qEfR_z6GUScE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3Ivc2V0LWhlYXJ0/cy1sb3ZlLXdoaXRl/LWJhY2tncm91bmQt/b2xkLXZlY3Rvci1p/bGx1c3RyYXRpb24t/ZmxhdC1zdHlsZV8x/MDg5MDI2LTIyMzEu/anBnP3NlbXQ9YWlz/X2h5YnJpZCZ3PTc0/MA" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className='link origin-top relative  border-y-1 border-white cursor-pointer'
                                onClick={() => {
                                    navigate('/blog');
                                    setNavOpen(false);
                                }}
                            >
                                <h1 className='font-[biglaurasana] lg:text-[8vw] text-[15vw] leading-[0.8] lg:pt-5 pt-2 uppercase text-center'>Blogue</h1>
                                <div className='moveLink lg:visible invisible absolute flex text-black bg-[#D3FD50] top-0'>
                                    <div className='moveX flex items-center'>
                                        <h2 className='whitespace-nowrap font-[biglaurasana] text-[8vw] leading-[0.8] pt-5 uppercase text-center'>Lire les articles</h2>
                                        <img className='h-27 w-96 shrink-0 rounded-full object-cover' src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif" alt="" />
                                        <h2 className='whitespace-nowrap font-[biglaurasana] text-[8vw] leading-[0.8] pt-5 uppercase text-center'>Lire les articles</h2>
                                        <img className='h-27 w-96 shrink-0 rounded-full object-cover' src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png" alt="" />
                                    </div>
                                    <div className='moveX flex items-center'>
                                        <h2 className='whitespace-nowrap font-[biglaurasana] text-[8vw] leading-[0.8] pt-5 uppercase text-center'>Lire les articles</h2>
                                        <img className='h-27 w-96 shrink-0 rounded-full object-cover' src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif" alt="" />
                                        <h2 className='whitespace-nowrap font-[biglaurasana] text-[8vw] leading-[0.8] pt-5 uppercase text-center'>Lire les articles</h2>
                                        <img className='h-27 w-96 shrink-0 rounded-full object-cover' src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bottom opacity-0 flex justify-between items-center px-3 py-3 text-sm'>
                        <div className="flex items-center gap-1 font-[laurasana] text-2xl hover:text-[#D3FD50]">
                            🌍 <span>MONTREAL_{time}</span>
                        </div>
                        <div className="flex gap-6 font-[laurasana] text-[13px]">
                            <a href="#" className='hover:text-[#D3FD50]'>POLITIQUE DE CONFIDENTIALITÉ</a>
                            <a href="#" className='hover:text-[#D3FD50]'>AVIS DE CONFIDENTIALITÉ</a>
                            <a href="#" className='hover:text-[#D3FD50]'>RAPPORT ÉTHIQUE</a>
                            <a href="#" className='hover:text-[#D3FD50]'>OPTIONS DE CONSENTEMENT</a>
                        </div>
                        <div className='flex gap-2'>
                            <h1 className='font-[biglaurasana] text-3xl border-2 border-white px-4 rounded-full pt-1 hover:text-[#D3FD50] hover:border-[#D3FD50] cursor-pointer'>FB</h1>
                            <h1 className='font-[biglaurasana] text-3xl border-2 border-white px-4 rounded-full pt-1 hover:text-[#D3FD50] hover:border-[#D3FD50] cursor-pointer'>IG</h1>
                            <h1 className='font-[biglaurasana] text-3xl border-2 border-white px-4 rounded-full pt-1 hover:text-[#D3FD50] hover:border-[#D3FD50] cursor-pointer'>IN</h1>
                            <h1 className='font-[biglaurasana] text-3xl border-2 border-white px-4 rounded-full pt-1 hover:text-[#D3FD50] hover:border-[#D3FD50] cursor-pointer'>BE</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullScreenNav