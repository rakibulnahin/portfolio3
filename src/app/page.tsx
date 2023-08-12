"use client"
import About from '@/components/About'
import Image from 'next/image'
import Link from 'next/link'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'

import { ImLinkedin, ImGithub, ImMail2, ImDownload } from "react-icons/im"
import { SiKaggle } from 'react-icons/si'
import { useEffect, useRef, useState } from 'react'
import Portfolio from '@/components/Portfolio'
import { Londrina_Outline } from 'next/font/google'
import Education from '@/components/Education'

const londrina_outline = Londrina_Outline({
	subsets: ['latin'],
	weight: '400'
})


export default function Home() {

	const shortScroll = [
		{
			"name": "about",
			"number": 0
		},

		{
			"name": "experience",
			"number": 1
		},

		{
			"name": "education",
			"number": 2
		},

		{
			"name": "skills",
			"number": 3
		},

		{
			"name": "links",
			"number": 4
		},

		{
			"name": "Portfolio",
			"number": 5
		},

	]


	const mainRef = useRef<null | HTMLDivElement>(null)

	const aboutRef = useRef<null | HTMLDivElement>(null)
	const experienceRef = useRef<null | HTMLDivElement>(null)
	const educationRef = useRef<null | HTMLDivElement>(null)
	const skillsRef = useRef<null | HTMLDivElement>(null)
	const contactRef = useRef<null | HTMLDivElement>(null)
	const portfolioRef = useRef<null | HTMLDivElement>(null)

	const [offesets, setOffsets] = useState<{ [key: string]: number }>()
	const [scrollPosition, setScrollPosition] = useState(0)
	const [currentView, setCurrentView] = useState("about")
	const [mousePosition, setMousePosition] = useState({
		x: 0,
		y: 0
	})

	useEffect(() => {
		// Function to handle scroll event and update active section
		const sections = ['about', 'skills', "experience", "education", "contact", "portfolio"];
		const sectionPositions = sections.reduce((positions: { [key: string]: number }, section) => {

			console.log(positions);

			const el = document.getElementById(section);
			if (el) {
				positions[section] = el.offsetTop;
			}
			console.log(positions, section);

			return positions;
		}, {});
		console.log(sectionPositions);
		setOffsets(sectionPositions)

		const handleScroll = () => {
			setScrollPosition(window.scrollY);
		};

		window.addEventListener('scroll', handleScroll);

		// Clean up the event listener on component unmount
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};

	}, []);

	useEffect(() => {
		console.log(scrollPosition);
		if (offesets) {
			if (scrollPosition >= offesets["contact"]) {
				setCurrentView("contact")
			} else if (scrollPosition < offesets["contact"] && scrollPosition >= offesets["portfolio"]) {
				setCurrentView("portfolio")
			} else if (scrollPosition < offesets["portfolio"] && scrollPosition >= offesets["skills"]) {
				setCurrentView("skills")
			} else if (scrollPosition < offesets["skills"] && scrollPosition >= offesets["experience"]) {
				setCurrentView("experience")
			} else {
				setCurrentView("about")
			}
		}
		console.log(currentView);

	}, [scrollPosition])

	useEffect(() => {

		const updateMousePosition = (e: { clientX: any; clientY: any }) => {
			setMousePosition({
				x: e.clientX,
				y: e.clientY
			})

			// console.log(mousePosition);

		}


		window.addEventListener("mousemove", updateMousePosition);

		return () => {
			window.removeEventListener("mousemove", updateMousePosition);

		}
	}, [])

	const scrollToView = (element: number) => {

		switch (element) {
			case 0:
				if (aboutRef.current) {
					aboutRef.current.scrollIntoView({ behavior: 'smooth' });
				}
				break;

			case 1:
				if (experienceRef.current) {
					experienceRef.current.scrollIntoView({ behavior: 'smooth' });
				}
				break;

			case 2:
				if (educationRef.current) {
					educationRef.current.scrollIntoView({ behavior: 'smooth' });
				}
				break;

			case 3:
				if (skillsRef.current) {
					skillsRef.current.scrollIntoView({ behavior: 'smooth' });
				}
				break;

			case 4:
				if (contactRef.current) {
					contactRef.current.scrollIntoView({ behavior: 'smooth' });
				}
				break;

			case 5:

				if (portfolioRef.current) {
					portfolioRef.current.scrollIntoView({ behavior: 'smooth' });
				}
				break;

			default:
				break;
		}

	}




	return (
		<main className="2xl:px-20 mt-8 w-screen flexColCenter justify-between">
			<span className='w-80 h-80 bg-neon-blue/5 rounded-full fixed'
				style={{
					top: mousePosition.y - 160,
					left: mousePosition.x - 160
				}}
			></span>



			<div className='z-10 w-full  flexColCenter flex-col-reverse lg:flexRowCenter lg:p-10 text-blue-100  '>

				<div className='p-5 w-full lg:w-2/3 h-full flexColCenter lg:items-start gap-10'>
					<span className='text-6xl md:text-7xl lg:text-8xl text-neon-blue'><span className={londrina_outline.className}>Rakibul Alam Nahin</span></span>

					<span className="text-white text-3xl sm:4xl md:text-5xl font-semibold">Software Engineer</span>
					<span className="text-white text-sm font-semibold">Junior MERN Stack Developer / Machine Learning Engineer</span>

					<div className='flexRow  justify-start gap-5'>
						<Image className='hidden lg:flex w-96 h-60' alt='developerimg' src={"/projects/developer.png"} height={200} width={200}  />

						<div className='lg:w-48 h-full gap-5 flexRowCenter flex-wrap '>
							<Link href={"https://www.linkedin.com/in/rakibul-alam-99b3761b0/"}><span className='p-3 rounded-full flex text-2xl text-slate-400 hover:text-neon-blue border-2 border-transparent hover:border-neon-blue '><ImLinkedin /></span></Link>
							<Link href={"https://github.com/rakibulnahin"}><span className='p-3 rounded-full flex text-2xl text-slate-400 hover:text-neon-blue border-2 border-transparent hover:border-neon-blue '><ImGithub /></span></Link>
							<a href="mailto:rakibulnahin@gmail.com"
								target="_blank" rel="noopener noreferrer"
							><span className='p-3 rounded-full flex text-2xl text-slate-400 hover:text-neon-blue border-2 border-transparent hover:border-neon-blue '><ImMail2 /></span></a>
							<Link href={"https://www.kaggle.com/rakibulalamnahin"}><span className='p-3 rounded-full flex text-5xl text-slate-400 hover:text-neon-blue border-2 border-transparent hover:border-neon-blue '><SiKaggle /></span></Link>

							<a href='https://github.com/rakibulnahin/resume/blob/main/Nahin-AI.pdf'
								className='px-5 py-3 max-h-14 flexRowCenter rounded-xl gap-3 bg-neon-blue text-white'
								download="Nahin's CV"
								target="_blank"
								rel="noreferrer"
							>
								<span>Resume</span> <ImDownload />
							</a>
						</div>
					</div>
					<span className='flexRow items-center gap-5 text-green-400'>Available For Hire <span className='flexRow w-16 h-0.5 bg-green-400'></span></span>
				</div>

				<Image alt='nahinimg' src={"/projects/nahin.jpg"} height={400} width={400} className='rounded-full max-lg:w-72 max-lg:h-72 border-4 border-neon-blue' />
			</div>


			<div className='z-10 px-10 2xl:px-16 w-full gap-10 relative flexCol lg:flexRow'>

				<div
					className='top-0 lg:sticky w-full lg:w-[700px] h-full flexCol
						text-base font-medium text-slate-400'>
					<span className='text-4xl sm:text-5xl font-bold text-slate-200 drop-shadow-sm hidden lg:flex'>Rakibul Alam Nahin</span>
					<span className='my-4 text-xl font-medium text-slate-300 hidden lg:flex'>Software Engineer/Developer</span>
					<span className=' lg:w-100'>
						Hello, I am Nahin currently working on the exciting field of <span className='font-bold'>Machine Learning </span>
						and have good expertise on the field of <span className='font-bold'>MERN Stack Development</span>.
					</span>

					<div className=' sm:px-10 mt-14 gap-4 w-full flex-wrap flexRow lg:flex-col  text-xs text-slate-400'>

						{
							shortScroll.map((value, index) => (
								<span className='group flexRow items-center gap-4 cursor-pointer transition-all '
									onClick={() => { scrollToView(value.number) }}
								>
									<span
										className='hidden lg:flex w-10 h-[1px] bg-slate-400 group-hover:w-16 group-hover:h-[2px] group-hover:bg-neon-blue  duration-500 ease-in-out'
										style={{
											backgroundColor: currentView == value.name ? "rgb(21, 137, 255)" : "",
											width: currentView == value.name ? "64px" : "",
											height: currentView == value.name ? "2px" : "",
										}}
									></span>
									<span
										className='sm:group-hover:w-14 group-hover:text-neon-blue group-hover:text-sm group-hover:font-semibold duration-500 ease-in-out uppercase max-sm:underline'
										style={{
											color: currentView == value.name ? "rgb(21, 137, 255)" : "",
											fontSize: currentView == value.name ? "14px" : "",
											lineHeight: currentView == value.name ? "20px" : "",
											fontWeight: currentView == value.name ? "600" : "",
										}}
									>
										{value.name}</span>
								</span>

							))
						}

					</div>


				</div>

				<div ref={mainRef} className=' flexColCenter w-full lg:w-4/5 h-full '>
					{/* <span>hello</span> */}
					<div className=' flex flex-col self-end gap-20 w-full  h-full text-base font-medium text-slate-400'>
						<About ref={aboutRef} />
						<Experience ref={experienceRef} />
						<Education ref={educationRef} />
						<Skills ref={skillsRef} />
						<Contact ref={contactRef} />
					</div>
				</div>
			</div>

			<Portfolio ref={portfolioRef} />

		</main>
	)
}
