import React, {forwardRef, ForwardedRef } from 'react'

const About = forwardRef((props, ref:ForwardedRef<HTMLDivElement>) => {
  return (
    <div ref={ref} id='about' className=' flex flex-col'>
        <span className='my-3 flexRowCenter text-4xl font-semibold text-white underline'>
            About
        </span>

        <span className='my-10'>
            Being a tech-savy person I have always concerned with the new technologies and ways
            these can be used and improvised for human interaction. During my days of undergradate
            studies, I was introduced to the exciting field of 
            <span className='font-bold text-white'> Machine learning</span> where I have learned
            how real-time data can be used to make machines think like humans and through curiosity
            and passion I have concentrated on field of HCI, Machine Vision and NLP. Also I have connected
            with peers on various ML projects (Deep Learning, OpenCV-YOLO, Tensorflow, Text classification,
            and signal-sentiment analysis).
            <br />
            <br />
            In the mean time I also loved working in Development field of computer science, building
            websites and apps was a very hard but also satisfing, problem solving and finding 
            solutions. Thus I have concentrated my development sector as a 
            <span className='font-bold text-white'> MERN stack Developer</span>  along with 
            <span className='font-bold text-white'> React Native development</span>.
            Currently my strong point is in Front-End Development using 
            <span className='font-bold text-white'> React JS / Next JS. </span> 
            Moreover I also have basic understanding of Back-End Development and also developing more
            knowledge on backend system using
            <span className='font-bold text-white'> NodeJS & REST API Integration </span>.
            Overall, I am confident in my knowledge and problem solving skill and I am very much 
            excited and eager to join in the industry to make a good contribution to 
            the development industry of Computer science.

        </span>
    </div>
  )
})

About.displayName = "About"

export default About