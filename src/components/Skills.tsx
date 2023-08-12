import React, { ForwardedRef, forwardRef } from 'react'

const Skills = forwardRef((props, ref:ForwardedRef<HTMLDivElement>) => {

    type skillType = {
        "section": String,
        "subsection"?: String[],
        "skills": String[],
    }

    const skills: skillType[] = [
        {
            "section": "Programming Languages",
            "subsection": [
                "Proficient in data structure & algorithms.",
                "Greedy approach and Graph Based Problems."
            ],
            "skills": ["Python", "Javascript", "Java"]
        },

        {
            "section": "Artificial Intelligence proficiency & Tools",
            "subsection": [
                "Currently Researching on NLP (Transformers and LLMs.) and Bioinformatics",
                "Worked with Attention, Self-Attention and Encoder-Decoder Systems of NLP.",
                "Have good grasp of Deep Neural Networks with mathmatical approach\
                 specially in (ANN, CNN RNN, LSTM, GNN).",
                "Traditional Machine Learning Techniques such\
                 (Regression, KNN, SVM, Random Forest).",
                "Working experience with Signal Processing and Human-Computer Interface \
                for classification and Recognition System.",
                "Data Collection, pre-processing and visualization for raw and image data.",
                "Familiar with Computer Vision using Tensorflow, OpenCV, YOLO"

            ],
            "skills": [
                "Tensorflow", "Scikit-Learn", "Pandas", "Numpy",
                "Matplotlib", "Seaborn", "OpenCV", "Scipy",
                "NLTK", "Spacy", "Beautiful Soup", "Tableau"
            ]
        },

        {
            "section": "Mern Stack Frameworks & Tools",
            "subsection": [
                "Currently up-skilling myself in both Front-End and Backend.",
                "Working in NextJS Framework along with basic REST API \
                    integration using NodeJS and ExpressJS as a backend Server & Database.",
                "Experienced with both MySQL and NoSQL (MongoDB).",
                "Have Knowledge on basig Github use and SDLC concepts",
                "Familiar with use of Figma."
            ],
            "skills": [
                "ReactJS/NextJS", "Typescript", "HTML", "CSS", "Tailwind CSS",
                "Redux-Toolkit", "Ant-Design",
                "NodeJS", "ExpressJS", "REST API", "MySQL", "MongoDB"
            ]
        }
    ]


    return (
        <div ref={ref} id='skills' className='flex flex-col pb-10 gap-7'>
            <span className='flexRowCenter my-3 text-3xl font-semibold text-white underline'>
                Skills
            </span>

            {
                skills.map((value, index) => (
                    <div
                        key={index}
                        className='flexCol max-sm:items-center sm:flexRow rounded-lg
                        px-6 py-5 gap-10 text-sm hover:bg-white/10
                        group transition-all'
                    >

                        <div className='hidden sm:flexCol w-44 min-h-full items-center'>

                            <span className=' w-0.5 h-full bg-slate-400 group-hover:bg-white'></span>
                            <span className=' w-3 h-3 bg-slate-400 group-hover:bg-white rounded-full'></span>

                        </div>

                        <div className='w-full flex flex-col gap-5 items-start'>
                            <span className="items-center text-lg font-medium text-white group-hover:text-neon-blue duration-500 ease-in-out">
                                {value.section}
                            </span>

                            <span className='flex flex-col'>
                                {
                                    value.subsection ?
                                        value.subsection.map((sub, index2) => (
                                            <span key={"sub" + index2} className='group-hover:text-slate-200 duration-500 ease-in-out'>{sub}</span>
                                        ))
                                        : null
                                }
                            </span>



                            <span className='flex flex-row flex-wrap gap-4'>
                                {
                                    value.skills.map((skill, index2) => (
                                        <span key={"skill" + index2} className='bg-neon-blue/70 group-hover:bg-neon-blue text-white px-3 py-2 rounded-lg duration-500 ease-in-out'>{skill}</span>
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

export default Skills