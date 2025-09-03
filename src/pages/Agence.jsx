import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'
import Footer from '../components/footer/Footer'

const Agence = () => {
  const imageDevRef = useRef(null)
  const imageRef = useRef(null)

  const imageArray = [
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
  ]

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    let ctx = gsap.context(() => {
      gsap.to(imageDevRef.current, {
        scrollTrigger: {
          trigger: imageDevRef.current,
          // markers: true,
          start: "top 23.2%",
          end: "top -138%",
          pin: true,
          scrub: true,
          onUpdate: (self) => {
            let imageIndex = Math.floor(self.progress * (imageArray.length - 1));
            imageRef.current.src = imageArray[imageIndex];
          }
        }
      })
    });

    return () => ctx.revert(); // cleanup GSAP context
  });

  return (
    <div className=''>
      <div className='section1'>
        <div ref={imageDevRef} className='h-[20vw] overflow-hidden rounded-3xl w-[15vw] top-45 absolute left-[30vw] '>
          <img ref={imageRef} className='h-full w-full object-cover' src={imageArray[0]} alt="" />
        </div>
        <div className='mt-[55vh] relative font-[biglaurasana]'>
          <h1 className='text-[19vw] uppercase leading-[17vw] text-center text-black'>
            Soixan7e <br /> Douze
          </h1>
        </div>
        <div className='pl-[40%] relative mt-20 font-[biglaurasana]'>
          <p className='text-6xl text-black'>
            Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.
          </p>
        </div>
      </div>
      <div className='h-[20vh] w-full '></div>
      <Footer />
    </div>
  )
}

export default Agence
