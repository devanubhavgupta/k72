import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useLocation } from 'react-router-dom'

const Loader = (props) => {
    const currentPath = useLocation().pathname
    const stairParentRef = useRef(null)
    const pageRef = useRef(null)

    useGSAP(() => {
        // Timeline har path change pe recreate hoga
        const tl = gsap.timeline()

        tl.set(stairParentRef.current, { autoAlpha: 1 })
        // ❌ Pehle parent permanently hide ho jata tha
        // ✅ Fix: Har nayi animation pe visible karna hoga
        tl.from(".stair", {
            height: 0,
            stagger: { amount: -0.3 }, // ❌ pehle -0.3 tha
            duration: 0.6,
            ease: "power2.out",
        })
        tl.to(".stair", {
            y: '100%',
            stagger: { amount: -0.3 }, // ❌ pehle negative tha
            duration: 0.6,
            ease: "power2.in",
        })
        // ❌ Pehle "display:none" ki wajah se reset kabhi dikhta nahi tha
        // ✅ Fix: autoAlpha se hide + reset
        tl.set(stairParentRef.current, { autoAlpha: 0 })
        tl.set(".stair", { y: '0%' })

        gsap.from(pageRef.current, {
            opacity: 0,
            delay: 1,
        })
    }, [currentPath]) // ✅ path change pe animation re-run

    return (
        <div>
            <div ref={stairParentRef} className="h-screen w-full fixed z-20 top-0">
                <div className="h-full w-full flex">
                    <div className="stair h-screen w-1/5 bg-black"></div>
                    <div className="stair h-screen w-1/5 bg-black"></div>
                    <div className="stair h-screen w-1/5 bg-black"></div>
                    <div className="stair h-screen w-1/5 bg-black"></div>
                    <div className="stair h-screen w-1/5 bg-black"></div>
                </div>
            </div>
            <div ref={pageRef}>
                {props.children}
            </div>
        </div>
    )
}

export default Loader
