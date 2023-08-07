"use client"
import About from '@/components/About'
import Image from 'next/image'
import Link from 'next/link'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'

import { ImLinkedin, ImGithub, ImPhone, ImDownload } from "react-icons/im"
import { useEffect, useRef, useState } from 'react'
import Portfolio from '@/components/Portfolio'
import { Londrina_Outline } from 'next/font/google'

const londrina_outline = Londrina_Outline({
	subsets: ['latin'],
	weight: '400'
})


export default function Home() {


	const mainRef = useRef<null | HTMLDivElement>(null)

	const aboutRef = useRef<null | HTMLDivElement>(null)
	const experienceRef = useRef<null | HTMLDivElement>(null)
	const skillsRef = useRef<null | HTMLDivElement>(null)
	const contactRef = useRef<null | HTMLDivElement>(null)
	const portfolioRef = useRef<null | HTMLDivElement>(null)

	const [offesets, setOffsets] = useState<{ [key: string]: number }>()
	const [scrollPosition, setScrollPosition] = useState(0)
	const [currentView, setCurrentView] = useState("about")

	useEffect(() => {
		// Function to handle scroll event and update active section
		const sections = ['about', 'skills', "experience", "portfolio", "contact"];
		const sectionPositions = sections.reduce((positions: { [key: string]: number }, section) => {

			console.log(positions);

			const el = document.getElementById(section);
			if (el) {
				positions[section] = el.offsetTop - 400;
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
				if (skillsRef.current) {
					skillsRef.current.scrollIntoView({ behavior: 'smooth' });
				}
				break;

			case 3:
				if (portfolioRef.current) {
					portfolioRef.current.scrollIntoView({ behavior: 'smooth' });
				}
				break;

			case 4:
				if (contactRef.current) {
					contactRef.current.scrollIntoView({ behavior: 'smooth' });
				}
				break;

			default:
				break;
		}

	}


	return (
		<main className="xl:px-24  w-screen flexCol items-center justify-between">

			<div className='flexColCenter lg:flexRowCenter p-10 text-blue-100 w-full h-screen'>

				<div className='flexCol justify-center p-5 w-2/3 gap-10 h-full'>
					<span className='text-8xl text-neon-blue'><span className={londrina_outline.className}>Rakibul Alam Nahin</span></span>

					<span className="text-white text-5xl font-semibold">Software Engineer</span>

					<div className='flexRow justify-start items-end gap-5'>
						<Image alt='developerimg' src={"/projects/developer.png"} height={200} width={200} />

						<div className='gap-5 flexRow items-center'>
							<Link href={"/"}><span className='p-3 rounded-full flex text-2xl text-slate-400 hover:text-neon-blue hover:border-2 hover:border-neon-blue duration-200 ease-in-out'><ImLinkedin /></span></Link>
							<Link href={"/"}><span className='p-3 rounded-full flex text-2xl text-slate-400 hover:text-neon-blue hover:border-2 hover:border-neon-blue duration-200 ease-in-out'><ImGithub /></span></Link>
							<Link href={"/"}><span className='p-3 rounded-full flex text-2xl text-slate-400 hover:text-neon-blue hover:border-2 hover:border-neon-blue duration-200 ease-in-out'><ImPhone /></span></Link>
							<a href='https://github.com/rakibulnahin/resume/blob/main/Nahin-AI.pdf'
								className='px-5 py-3 flexRowCenter rounded-xl gap-3 bg-neon-blue text-white'
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

				<Image alt='nahinimg' src={"/projects/nahin.jpg"} height={400} width={400} className='rounded-full border-4 border-neon-blue' />
			</div>

			<div className='relative flexCol lg:flexRow gap-20'>
				<div className='py-11 xl:py-24 pl-10 xl:pl-24 top-0 lg:sticky lg:w-[700px] h-full flexCol text-base font-medium text-slate-400'>
					<span className='text-4xl sm:text-5xl font-bold text-slate-200 drop-shadow-sm'>Rakibul Alam Nahin</span>
					<span className='my-4 text-xl font-medium text-slate-300'>Software Engineer/Developer</span>
					<span className=' lg:w-100'>
						Hello, I am Nahin currently working on the exciting field of <span className='font-bold'>Machine Learning </span>
						and very much passionate on the field of <span className='font-bold'>MERN Stack Development</span>.
					</span>

					<div className='mt-14 flex flex-col w-40 gap-4 text-xs text-slate-400'>
						<span className='group flex flex-row items-center gap-4 cursor-pointer transition-all '
							onClick={() => { scrollToView(0) }}
						>
							<span
								className='flex w-10 h-[1px] bg-slate-400 group-hover:w-16 group-hover:h-[2px] group-hover:bg-neon-blue  duration-500 ease-in-out'
								style={{
									backgroundColor: currentView == "about" ? "rgb(21, 137, 255)" : "",
									width: currentView == "about" ? "64px" : "",
									height: currentView == "about" ? "2px" : "",
								}}
							></span>
							<span
								className='group-hover:w-14 group-hover:text-neon-blue group-hover:text-sm group-hover:font-semibold duration-500 ease-in-out'
								style={{
									color: currentView == "about" ? "rgb(21, 137, 255)" : "",
									fontSize: currentView == "about" ? "14px" : "",
									lineHeight: currentView == "about" ? "20px" : "",
									fontWeight: currentView == "about" ? "600" : "",
								}}
							>
								ABOUT</span>
						</span>




						<span className='group flex flex-row items-center gap-4 cursor-pointer transition-all '
							onClick={() => { scrollToView(1) }}
						>
							<span className='flex w-10 h-[1px] bg-slate-400 group-hover:w-16 group-hover:h-[2px] group-hover:bg-neon-blue  duration-500 ease-in-out'
								style={{
									backgroundColor: currentView == "experience" ? "rgb(21, 137, 255)" : "",
									width: currentView == "experience" ? "64px" : "",
									height: currentView == "experience" ? "2px" : "",
								}}
							></span>
							<span className='group-hover:w-14 group-hover:text-neon-blue group-hover:text-sm group-hover:font-semibold duration-500 ease-in-out'
								style={{
									color: currentView == "experience" ? "rgb(21, 137, 255)" : "",
									fontSize: currentView == "experience" ? "14px" : "",
									lineHeight: currentView == "experience" ? "20px" : "",
									fontWeight: currentView == "experience" ? "600" : "",
								}}
							>EXPERIENCE</span>
						</span>




						<span className='group flex flex-row items-center gap-4 cursor-pointer transition-all '
							onClick={() => { scrollToView(2) }}

						>
							<span className='flex w-10 h-[1px] bg-slate-400 group-hover:w-16 group-hover:h-[2px] group-hover:bg-neon-blue  duration-500 ease-in-out'
								style={{
									backgroundColor: currentView == "skills" ? "rgb(21, 137, 255)" : "",
									width: currentView == "skills" ? "64px" : "",
									height: currentView == "skills" ? "2px" : "",
								}}
							></span>
							<span className='group-hover:w-14 group-hover:text-neon-blue group-hover:text-sm group-hover:font-semibold duration-500 ease-in-out'
								style={{
									color: currentView == "skills" ? "rgb(21, 137, 255)" : "",
									fontSize: currentView == "skills" ? "14px" : "",
									lineHeight: currentView == "skills" ? "20px" : "",
									fontWeight: currentView == "skills" ? "600" : "",
								}}
							>SKILLS</span>
						</span>



						<span className='group flex flex-row items-center gap-4 cursor-pointer transition-all '
							onClick={() => { scrollToView(3) }}

						>
							<span className='flex w-10 h-[1px] bg-slate-400 group-hover:w-16 group-hover:h-[2px] group-hover:bg-neon-blue  duration-500 ease-in-out'
								style={{
									backgroundColor: currentView == "portfolio" ? "rgb(21, 137, 255)" : "",
									width: currentView == "portfolio" ? "64px" : "",
									height: currentView == "portfolio" ? "2px" : "",
								}}
							></span>
							<span className='group-hover:w-14 group-hover:text-neon-blue group-hover:text-sm group-hover:font-semibold duration-500 ease-in-out'
								style={{
									color: currentView == "portfolio" ? "rgb(21, 137, 255)" : "",
									fontSize: currentView == "portfolio" ? "14px" : "",
									lineHeight: currentView == "portfolio" ? "20px" : "",
									fontWeight: currentView == "portfolio" ? "600" : "",
								}}
							>PORTFOLIO</span>
						</span>




						<span className='group flex flex-row items-center gap-4 cursor-pointer transition-all '
							onClick={() => { scrollToView(4) }}

						>
							<span className='flex w-10 h-[1px] bg-slate-400 group-hover:w-16 group-hover:h-[2px] group-hover:bg-neon-blue  duration-500 ease-in-out'
								style={{
									backgroundColor: currentView == "contacts" ? "rgb(21, 137, 255)" : "",
									width: currentView == "contact" ? "64px" : "",
									height: currentView == "contact" ? "2px" : "",
								}}
							></span>
							<span className='group-hover:w-14 group-hover:text-neon-blue group-hover:text-sm group-hover:font-semibold duration-500 ease-in-out'
								style={{
									color: currentView == "contact" ? "rgb(21, 137, 255)" : "",
									fontSize: currentView == "contact" ? "14px" : "",
									lineHeight: currentView == "contact" ? "20px" : "",
									fontWeight: currentView == "contact" ? "600" : "",
								}}
							>CONTACTS</span>
						</span>



					</div>


				</div>

				<div ref={mainRef} className='flexCol py-11 xl:py-24 w-2/3 h-full '>
					{/* <span>hello</span> */}
					<div className=' flex flex-col self-end gap-20  h-full text-base font-medium text-slate-400'>
						<About ref={aboutRef} />
						<Experience ref={experienceRef} />
						<Skills ref={skillsRef} />
						<Portfolio ref={portfolioRef} />
						<Contact ref={contactRef} />
					</div>
				</div>
			</div>

		</main>
	)
}
