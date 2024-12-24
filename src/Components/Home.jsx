import profile from '../assets/profile.webp'
import Button from './Button'

const Home = () => {
	return (
		<header
			id="home"
			className="px-4 min-h-[calc(100vh-80px)] flex flex-col items-center pt-20 lg:justify-center lg:pt-4 2xl:pt-0">
			{/* Profile */}
			<div className="w-52 h-52  rounded-full overflow-clip border-4 border-second border-solid mb-6 2xl:mb-10">
				<img src={profile} alt="Foto Profil" className="w-full" />
			</div>
			<p className="text-body-large text-center mb-6 2xl:mb-10">
				Hai, Aku
				<br />
				Dimas Adi Putra.
			</p>
			<h1 className="text-title-mobile md:text-title-desktop font-medium text-center mb-20 lg:mb-10 2xl:mb-32 max-w-80 md:max-w-lg">
				Bekerja sama dengan saya untuk membuat Website anda tidak termakan
				waktu.
			</h1>
			{/* Button CTA */}
			<Button text="Hubungi Saya" />
		</header>
	)
}

export default Home
