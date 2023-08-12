import React, { forwardRef, ForwardedRef } from 'react'

const Education = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {

    type experinceType = {
        "organization": String,
        "major": String,
        "startdate": String,
        "enddate": String,
        "description": String,
    }

    const experince: experinceType[] = [

        {
            "organization": "BRAC University",
            "major": "Bachelor in Computer Science",
            "startdate": "SPRING 2019",
            "enddate": "SUMMER 2022",
            "description": "Finished all courses and Thesis with a GPA-3.56 / 4",
        },

        {
            "organization": "Cherry Blossoms International School",
            "major": "O-Levels",
            "startdate": "JULY 2016",
            "enddate": "JULY 2017",
            "description": "GPA - 4.7 / 5",
        },

        {
            "organization": "Cherry Blossoms International School",
            "major": "A-Levels",
            "startdate": "JULY 2017",
            "enddate": "JULY 2018",
            "description": "GPA - 3.67 / 5",
        }
    ]

    return (
        <div ref={ref} id="education" className='flexCol pb-10 gap-7'>
            <span className='flexRowCenter my-3 text-3xl font-semibold text-white underline'>
                Education
            </span>

            {
                experince.map((value, index) => (
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
                                {value.organization}
                                <span> , </span>
                                {value.major}
                            </span>

                            <span className='group-hover:text-slate-200 duration-500 ease-in-out'>{value.description}</span>

                        </div>

                    </div>
                ))
            }

        </div>
    )
})

Education.displayName = "Education"

export default Education