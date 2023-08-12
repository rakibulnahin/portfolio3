import Image from 'next/image'
import React, { useState, forwardRef, ForwardedRef } from 'react'

const Portfolio = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {


    const projects = [
        {
            name: "Balibaba E-Commerce",
            description: "This is balibaba my project ecommerce site using MERN stack JWT and Redux\
            I am developing it has my demo ecommerce page for skill development in mern stack",
            image_path: "/projects/balibaba.png"
        },

        {
            name: "Car Showroom",
            description: "This is car rental website I build for my univeristy project using MERN stack\
            this site has the capability to rent car and hold all details of rentals, users and complete rentals system setting\
            including admin privilages.",
            image_path: "/projects/car_showroom.png"
        },

        {
            name: "Location Tracking app",
            description: "This app was created using React Native Expo \
             used to test Barikoi API for tracking distances,\
            time and real-time GPS tracking from one place to another.",
            image_path: "/projects/barikoi.png"
        },

        {
            name: "Food Panda",
            description: "Beginner Level project created using React Native Expo for cloning UI of Food-Panda app.",
            image_path: "/projects/foodpanda.png"
        },

        {
            name: "Lazy Reminder",
            description: "This simple but handy was buit using React Native Expo to track daily routines and give reminder\
            about daily works and arrange works based on time limit and importance using color code.",
            image_path: "/projects/todo1.png"
        },


    ]


    return (
        <div ref={ref} id='portfolio' className='px-5 sm:px-24 pb-10 flexColCenter w-full'>
            <span className='flexRowCenter my-3 text-3xl font-semibold text-white underline'>
                MERN Stack Portfolio
            </span>



            <div className='hidden md:flexCol gap-16 transition-all '>
                {
                    projects.map((project, index) => (
                        <div key={index} className='p-0.5 relative flexRowCenter gap-10 text-slate-300 rounded-lg object-cover'
                            style={
                                {flexDirection : index%2 == 1 ? "row-reverse": "row"}
                            }
                            
                        >
                            <span className='flexCol w-1/3 gap-5'>
                                <span className='text-xl font-semibold underline'>{project.name}</span>
                                <span>{project.description}</span>

                            </span>
                            <Image src={project.image_path}
                                className='w-60 h-60 rounded-lg'
                                alt="portfolio image"
                                width={350} height={350}
                            />
                        </div>
                    ))
                }
            </div>

            <div className='flexCol md:hidden gap-16 transition-all '>
                {
                    projects.map((project, index) => (
                        <div key={index} className='p-0.5 relative flexColCenter md:flexRowCenter gap-10 text-slate-300 rounded-lg object-cover' 
                        >
                            <span className='flexColCenter w-full gap-5'>
                                <span className='text-xl font-semibold underline'>{project.name}</span>
                                <span>{project.description}</span>

                            </span>
                            <Image src={project.image_path}
                                className='w-60 h-60 rounded-lg'
                                alt="portfolio image"
                                width={350} height={350}
                            />
                        </div>
                    ))
                }
            </div>



        </div>
    )
})
Portfolio.displayName = "Portfolio"
export default Portfolio