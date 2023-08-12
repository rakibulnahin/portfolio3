import Link from 'next/link'
import React, { forwardRef, ForwardedRef, useState } from 'react'

import { ImLinkedin, ImGithub, ImMail2, ImPhone } from "react-icons/im"
import { BsSend } from "react-icons/bs"
import { SiKaggle } from 'react-icons/si'



const Contact = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {

    const [gmail, setGmail] = useState("");
    const [validMail, setValidmail] = useState(true)
    const [subject, setSubject] = useState("")
    const [text, setText] = useState("")

    const validateEmail = () => {
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (gmail.match(regex) && gmail != "") {
            setValidmail(true)
        } else {
            setValidmail(false)
        }

    }

    const onSendMessage = () => {
        // console.log(validMail, subject, text);

        
        if (validMail && subject != "" && text != "") {
            var link = "mailto:rakibulnahin@gmail.com"
                + "?subject=" + encodeURIComponent(subject)
                + "&body=" + encodeURIComponent(text)
                ;

            window.location.href = link;
        }else{
            alert("Fill all the fields please!!")
        }
    }


    return (
        <div ref={ref} id='contact' className='sm:px-10 flexCol gap-7'>
            <span className='flexRowCenter my-3 text-3xl font-semibold text-white underline'>
                Contact
            </span>

            <div className='flexCol md:flexRow gap-6'>

                <div className='w-full flexCol gap-4'>
                    <a href="mailto:rakibulnahin@gmail.com" className='group flex flex-row items-center gap-4 transition-all '>
                        <span className='flex text-2xl text-slate-400 group-hover:text-neon-blue duration-500 ease-in-out'><ImMail2 /></span>
                        <span
                            className='p-2 bg-white/10 rounded-lg 
                    text-sm group-hover:text-white 
                    border-2 border-white/10 group-hover:border-neon-blue
                    duration-500 ease-in-out'

                        >
                            rakibulnahin@gmail.com
                        </span>
                    </a>

                    <Link href={"https://github.com/rakibulnahin"} className='group flex flex-row items-center gap-4 transition-all '>
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

                    <Link href={"https://www.linkedin.com/in/rakibul-alam-99b3761b0/"} className='group flex flex-row items-center gap-4 transition-all '>
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

                    <Link href={"https://www.kaggle.com/rakibulalamnahin"} className='group flex flex-row items-center gap-4 transition-all '>
                        <span className='flex text-5xl text-slate-400 group-hover:text-neon-blue duration-500 ease-in-out'><SiKaggle /></span>
                        <span
                            className='p-2 bg-white/10 rounded-lg 
                                        text-sm group-hover:text-white 
                                        border-2 border-white/10 group-hover:border-neon-blue
                                        duration-500 ease-in-out'

                        >
                            https://www.kaggle.com/rakibulalamnahin

                        </span>

                    </Link>

                    <span className='group flex flex-row items-center gap-4 cursor-pointer transition-all '>
                        <span className='flex text-2xl text-slate-400 group-hover:text-neon-blue duration-500 ease-in-out'><ImPhone /></span>
                        <span
                            className='p-2 bg-white/10 rounded-lg 
                    text-sm group-hover:text-white cursor-pointer
                    border-2 border-white/10 group-hover:border-neon-blue
                    duration-500 ease-in-out'

                        >
                            +8801401549873
                        </span>
                    </span>
                </div>

                {/* <span className='text-slate-300'>Send a message</span> */}

                <div className='w-full flexCol pb-24 gap-5'>
                    <input
                        className='pl-3 w-full h-12 bg-slate-600 border-2 text-base \
                         rounded-lg text-white border-neon-blue focus:outline-none'
                        style={{
                            borderColor: validMail ? "#1589FF" : "#ff121a"
                        }}
                        type="email"
                        required
                        placeholder='Your Email'
                        onChange={(event) => {
                            setGmail(event.target.value)
                            validateEmail()
                        }}
                    />

                    <input
                        className='pl-3 w-full h-12 bg-slate-600 border-2 text-base \
                         rounded-lg text-white border-neon-blue focus:outline-none'
                        type="text"
                        required
                        placeholder='Email Subject'
                        onChange={(event)=>{setSubject(event.target.value)}}
                    />

                    <textarea

                        className='p-3 w-full h-24 bg-slate-600 border-2 text-sm \
                        rounded-lg text-white border-neon-blue focus:outline-none'
                        placeholder='Your message'
                        onChange={(event)=>{setText(event.target.value)}}
                        ></textarea>

                    <span
                        className='px-3 py-2 flexRowCenter bg-neon-blue/70 hover:bg-neon-blue \
                        gap-3 text-white rounded-lg duration-500 ease-in-out cursor-pointer'
                        onClick={() => onSendMessage()}
                    >Send a message <BsSend /></span>
                </div>
            </div>


        </div>
    )
})

Contact.displayName = "Contact"

export default Contact