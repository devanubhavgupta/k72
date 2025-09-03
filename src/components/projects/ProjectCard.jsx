import React from 'react'

const ProjectCard = (props) => {
    return (
        <>
            <div className='lg:w-1/2 w-full aspect-[3/2] group transition-all relative rounded-none hover:rounded-[40px] overflow-hidden cursor-pointer'>
                <img className='h-full w-full object-cover' src={props.image1} alt="" />
                <div className='opacity-0 transition-opacity group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/70'>
                    <h2 className='uppercase text-xl sm:text-2xl md:text-3xl font-[laurasana] border-4 pt-2 px-6 sm:px-8 text-white border-white rounded-full '>Voir le projet</h2>
                </div>
            </div>
            <div className='lg:w-1/2 w-full aspect-[3/2] group transition-all relative rounded-none hover:rounded-[40px] overflow-hidden cursor-pointer'>
                <img className='h-full w-full object-cover' src={props.image2} alt="" />
                <div className='opacity-0 transition-opacity group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/70'>
                    <h2 className='uppercase text-xl sm:text-2xl md:text-3xl font-[laurasana] border-4 pt-2 px-6 sm:px-8 text-white border-white rounded-full '>Voir le projet</h2>
                </div>
            </div>
        </>
    )
}

export default ProjectCard
