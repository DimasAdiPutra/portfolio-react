import Instagram from '../assets/mdi_instagram.svg'
import Facebook from '../assets/ri_facebook-fill.svg'
import Linkedin from '../assets/ri_linkedin-fill.svg'
import Github from '../assets/mdi_github.svg'
import Dribbble from '../assets/hugeicons_dribbble.svg'

const SocialMediaIcons = () => {
	return (
		<div className="flex justify-between w-min min-w-44">
			<a href="#">
				<img src={Instagram} alt="Instagram Icon" className="hover:scale-110" />
			</a>
			<a href="#">
				<img src={Facebook} alt="Facebook Icon" className="hover:scale-110" />
			</a>
			<a href="#">
				<img src={Linkedin} alt="Linkedin Icon" className="hover:scale-110" />
			</a>
			<a href="#">
				<img src={Github} alt="Github Icon" className="hover:scale-110" />
			</a>
			<a href="#">
				<img src={Dribbble} alt="Dribbble Icon" className="hover:scale-110" />
			</a>
		</div>
	)
}

export default SocialMediaIcons
