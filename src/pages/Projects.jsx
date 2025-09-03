import React from 'react'
import ProjectCard from '../components/projects/ProjectCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import Footer from '../components/footer/Footer'

const Projects = () => {

  const projects = [
    {
      image1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg'
    },
    {
      image1: 'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/Opto_Reseau_Brand/opto_thumbnail2-1280x960.jpg'
    },
    {
      image1: 'https://k72.ca/uploads/caseStudies/COUP_FUMANT/CF_thumbnail-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg'
    },
    {
      image1: 'https://k72.ca/uploads/caseStudies/BEST/BEST_site_menu_Thumbnail-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/A_table/thumbnailimage_atable2-1280x960.jpg'
    },
    {
      image1: 'https://k72.ca/uploads/caseStudies/SollioAg/thumbnailimage_SollioAg-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg'
    },
    {
      image1: 'https://k72.ca/uploads/caseStudies/OSM/thumbnail_OSM_1280-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail-1280x960.jpg'
    },
    {
      image1: 'https://k72.ca/uploads/caseStudies/CRISIS24/crisis24_behance_1920X1200_cartes-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg'
    },
    {
      image1: 'https://k72.ca/uploads/caseStudies/PME-MTL/PME-MTL_Thumbnail-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/FRUITE/Fruite_thumbnail_bbq-1280x960.jpg'
    }
  ]

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    gsap.from('.hero', {
      height: '50px',
      scrollTrigger: {
        trigger: '.lol',
        start: 'top 100%',
        end: 'top -150%',
        scrub: true,
        stagger: {
          amount: 0.4
        },
      }
    })
  })

  return (
    <div className='h-screen w-full  '>
      <div className='px-2 sm:px-2 lg:px-4'>
        <div className='pt-[30vh] sm:pt-[35vh] '>
          <h2 className='font-[biglaurasana] text-[20vw] sm:text-[20vw] lg:text-[15vw] uppercase text-black '>Projets</h2>
        </div>
        <div className='-lg:mt-12 lol'>
          {projects.map(function (elem, idx) {
            return (
              <div key={idx} className='hero w-full h-auto lg:mb-4 mb-1 flex flex-col lg:flex-row gap-1 lg:gap-2'>
                <ProjectCard image1={elem.image1} image2={elem.image2} />
              </div>
            )
          })}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Projects
