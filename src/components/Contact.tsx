import Link from 'next/link'
import React, {forwardRef, ForwardedRef } from 'react'

import { ImLinkedin, ImGithub, ImMail2, ImPhone } from "react-icons/im"
import { BsSend } from "react-icons/bs"


const Contact = forwardRef((props, ref:ForwardedRef<HTMLDivElement> ) => {
    return (
        <div ref={ref} id='contact' className='px-10 flexCol gap-7'>
            <span className='flexRowCenter my-3 text-3xl font-semibold text-white underline'>
                Contact
            </span>

            <div className='flexCol md:flexRow gap-6'>

                <div className='w-full flexCol gap-4'>
                    <Link href={"/"} className='group flex flex-row items-center gap-4 cursor-pointer transition-all '>
                        <span className='flex text-2xl text-slate-400 group-hover:text-neon-blue duration-500 ease-in-out'><ImMail2 /></span>
                        <span
                            className='p-2 bg-white/10 rounded-lg 
                    text-sm group-hover:text-white 
                    border-2 border-white/10 group-hover:border-neon-blue
                    duration-500 ease-in-out'

                        >
                            rakibulnahin@gmail.com
                        </span>
                    </Link>

                    <Link href={"/"} className='group flex flex-row items-center gap-4 cursor-pointer transition-all '>
                        <span className='flex text-2xl text-slate-400 group-hover:text-neon-blue duration-500 ease-in-out'><ImGithub /></span>
                        <span
                            className='p-2 bg-white/10 rounded-lg 
                    text-sm group-hover:text-white 
                    border-2 border-white/10 group-hover:border-neon-blue
                    duration-500 ease-in-out'

                        >
                            https://github.com/rakibulnahin
                        </span>
                    </Link>

                    <Link href={"/"} className='group flex flex-row items-center gap-4 cursor-pointer transition-all '>
                        <span className='flex text-2xl text-slate-400 group-hover:text-neon-blue duration-500 ease-in-out'><ImLinkedin /></span>
                        <span
                            className='p-2 bg-white/10 rounded-lg 
                    text-sm group-hover:text-white 
                    border-2 border-white/10 group-hover:border-neon-blue
                    duration-500 ease-in-out'

                        >
                            https://www.linkedin.com/in/rakibul-alam-99b3761b0/

                        </span>
                    </Link>

                    <span className='group flex flex-row items-center gap-4 cursor-pointer transition-all '>
                        <span className='flex text-2xl text-slate-400 group-hover:text-neon-blue duration-500 ease-in-out'><ImPhone /></span>
                        <span
                            className='p-2 bg-white/10 rounded-lg 
                    text-sm group-hover:text-white 
                    border-2 border-white/10 group-hover:border-neon-blue
                    duration-500 ease-in-out'

                        >
                            +8801401549873
                        </span>
                    </span>
                </div>

                <div className='w-full flexCol pb-24 gap-5'>

                    {/* <span className='text-slate-300'>Send a message</span> */}

                    <input 
                        className='pl-3 w-full h-12 bg-slate-600 border-2 text-base \
                         rounded-lg text-white border-neon-blue focus:outline-none' 
                        type="text" 
                        placeholder='Your Name'
                    />

                    <textarea 
                        className='p-3 w-full h-24 bg-slate-600 border-2 text-sm \
                        rounded-lg text-white border-neon-blue focus:outline-none'
                        placeholder='Your message'
                    ></textarea>

                    <span
                        className='px-3 py-2 flexRowCenter bg-neon-blue/70 hover:bg-neon-blue \
                        gap-3 text-white rounded-lg duration-500 ease-in-out cursor-pointer'
                    >Send a message <BsSend /></span>

                </div>
            </div>


        </div>
    )
})

export default Contact