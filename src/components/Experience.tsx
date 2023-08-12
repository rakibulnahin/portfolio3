import React, {forwardRef, ForwardedRef} from 'react'

const Experience = forwardRef((props, ref:ForwardedRef<HTMLDivElement>) => {

    type experinceType = {
        "organization":String,
        "position":String,
        "startdate":String,
        "enddate":String,
        "description":String,
        "used": String[]
    }

    const experince:experinceType[] = [
        
        {
            "organization": "BRAC BANK",
            "position": "Software Engineer Intern",
            "startdate": "JULY 2023",
            "enddate": "ONGOING",
            "description": "I am envolved as a software engineer in the Core Banking part of \
                BRAC BANK currenly working \
                Web UI using HTMl, CSS and Javascript DOM along with Tomcat as server-side programming.",
            "used": ["HTML", "CSS", "Javascript", "DOM", "Tomcat"]
        },
        
        {
            "organization": "Shoplover (US-Bangla Group)",
            "position": "React Developer Intern",
            "startdate": "DEC 2022",
            "enddate": "FEB 2023",
            "description": "As a fresher I have learned a lot from here. I have worked in their live \
                web project as a web ecommere developer and helped developing the Front-End using Next JS\
                and Tailwind CSS. I was also involved in building sample UI for a food delivery app using \
                React Native.",
            "used": ["Next JS", "Tailwind CSS", "React Native"]
        }
    ]

    return (
        <div ref={ref} id="experience" className='flexCol pb-10 gap-7'>
            <span className='flexRowCenter my-3 text-3xl font-semibold text-white underline'>
                Experience
            </span>

            {
                experince.map((value, index)=>(
                    <div 
                        key={index}
                        className='flexCol max-sm:items-center sm:flexRow rounded-lg
                        px-6 py-5 gap-10 text-sm hover:bg-white/10
                        group transition-all'
                    >

                        <div className='w-48 min-h-full flexCol items-center'>
                            <span className='flexRowCenter gap-1 text-xs duration-500 group-hover:text-white ease-in-out'>
                                <span>{value.startdate}</span>
                                <span className='w-3 h-0.5 bg-white'></span>
                                <span>{value.enddate}</span>
                            </span>

                            <span className='hidden sm:flex w-0.5 h-full bg-slate-400 group-hover:bg-white'></span>
                            <span className='hidden sm:flex w-3 h-3 bg-slate-400 group-hover:bg-white rounded-full'></span>

                        </div>

                        <div className='w-full flexCol gap-5 items-start'>
                            <span className="items-center text-lg font-medium text-white group-hover:text-neon-blue duration-500 ease-in-out">
                                {value.position}
                                <span> , </span>
                                {value.organization}
                            </span>

                            <span className='group-hover:text-slate-200 duration-500 ease-in-out'>{value.description}</span>
                            <span className='flexRow flex-wrap gap-4'>
                                {
                                    value.used.map((value2, index2)=>(
                                        <span key={index2} className='bg-neon-blue/70 group-hover:bg-neon-blue text-white px-3 py-2 rounded-lg duration-500 ease-in-out'>{value2}</span>
                                    ))
                                }
                            </span>
                        </div>

                    </div>
                ))
            }

        </div>
    )
})

Experience.displayName = "Experience"

export default Experience