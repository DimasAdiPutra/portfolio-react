import SocialMediaIcons from './SocialMediaIcons'
import Welcome from '../assets/Welcome.svg'

const About = () => {
	return (
		<main className="px-4 min-h-screen flex flex-col justify-center md:px-10 lg:min-h-fit lg:pt-10 max-w-screen-2xl ">
			<h1 className="text-heading-h2 text-center px-5 mb-10">
				Mari berkenalan dengan saya!
			</h1>
			<div className="flex justify-between items-center gap-6 2xl:gap-20">
				<p className="text-body-base text-justify mb-6 lg:mb-0">
					Hi! I&apos;m <span>Dimas Adi Putra</span>, a passionate self-taught{' '}
					<span>Web Developer</span> with a love for creating intuitive and
					responsive websites. Meskipun saya belum memiliki pengalaman
					profesional, saya telah membangun beberapa proyek pribadi yang
					menunjukkan kemampuan saya dalam pembuatan website profesional.
					<br />
					Saya percaya bahwa teknologi adalah alat untuk memecahkan masalah dan
					mempermudah hidup. Setiap hari, saya terus belajar dan memperdalam
					pengetahuan saya agar dapat memberikan hasil yang berkualitas.
				</p>
				<img src={Welcome} alt="Welcome SVG" className="hidden lg:block" />
			</div>
			<SocialMediaIcons />
		</main>
	)
}

export default About
