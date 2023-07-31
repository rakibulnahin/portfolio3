import Image from 'next/image'
import React, { useState, forwardRef, ForwardedRef } from 'react'

const Portfolio = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {


    const [pics, setPics] = useState([
        "/projects/todo.png", 
        "/projects/balibaba.png", 
        "/projects/car_showroom.png",
        "/projects/barikoi.png",
        "/projects/foodpanda.png",
    ])

    const changePic = (flag:number) => {
        let x = []
        if(flag == 0){
            for (let index = 1; index <= pics.length; index++) {
                x.push(pics[index%pics.length])
                
            }
            setPics(x)
        }
        else{
            x.push(pics[pics.length-1])
            for (let index = 0; index < pics.length-1; index++) {
                x.push(pics[index])
                
            }
            setPics(x)
        }
        
    }

    return (
        <div ref={ref} id='portfolio' className='px-10 flexCol gap-7'>
            <span className='flexRowCenter my-3 text-3xl font-semibold text-white underline'>
                Portfolio
            </span>

            <div className='relative w-full h-96 flexRowCenter '>
                <div className='w-full h-full flexRow'>
                    {/* <span className='w-1/4 bg-red-400'>asdfasdf</span>
                    <span className='w-1/2 bg-green-300'>adsfasdf</span>
                    <span className='w-1/4 bg-blue-300'>asdfasdf</span> */}

                    <div className='absolute w-full h-full flexRowCenter gap-1 text-black transition-all'>
                        <span className='w-40 h-48 flexRowCenter blur-sm'
                            onClick={()=>changePic(0)}
                        >
                            <Image alt='image' width={1000} height={1000} 
                                className='p-1 w-full h-full rounded-lg object-fill' 
                                src={pics[0]} 
                            />
                        </span>

                        <span className='w-64 h-64 flexRowCenter '>
                            <Image alt='image' width={1500} height={1500} 
                                className='z-10 p-1 w-64 h-64 hover:absolute hover:w-100 hover:h-100 
                                    rounded-lg object-fill duration-300 ease-in-out' 
                                    src={pics[1]} 
                            />

                        </span>

                        <span className='w-40 h-48 flexRowCenter blur-sm'
                            onClick={()=>changePic(1)}
                        >
                            <Image alt='image' width={1000} height={1000} 
                                className='p-1 w-full h-full rounded-lg object-fill' 
                                src={pics[2]} 
                            />
                        </span>
                    </div>
                </div>
            </div>

        </div>
    )
})

export default Portfolio