import SocialMediaIcons from './SocialMediaIcons'

const Footer = () => {
	return (
		<footer className="bg-second flex flex-col w-full h-52 justify-between items-center">
			<div className="px-4 md:px-10 w-full max-w-screen-xl flex justify-between items-center h-[calc(100%-80px)]">
				<div>
					<p className="text-main">My Email :</p>
					<p className="text-main">test@test.com</p>
				</div>
				<SocialMediaIcons light />
			</div>
			<div className="w-full h-20 bg-black flex justify-center items-center">
				<p className=" text-main">Copyright © dmsadputr at 2024</p>
			</div>
		</footer>
	)
}

export default Footer
