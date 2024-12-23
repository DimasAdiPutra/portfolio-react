import { useState } from 'react'

const Navbar = () => {
	// State untuk menentukan apakah tombol dalam kondisi aktif
	const [isActive, setIsActive] = useState(false)

	// Event handler untuk toggle state
	const hamburgerMenu = () => {
		setIsActive(!isActive) // Mengubah nilai state
	}

	return (
		<nav className="bg-second h-20 w-screen px-4 shadow-md sticky md:px-10 flex justify-center">
			<div className="flex w-full h-full items-center justify-between relative max-w-screen-xl">
				{/* Logo */}
				<a href="#" className="text-logo font-logo text-main relative z-50">
					AdiPutra
				</a>

				{/* Hamburger Menu */}
				<button
					className={`w-8 h-7 flex flex-col justify-between relative z-50 ${
						isActive ? 'active' : 'not-active'
					} md:hidden`}
					onClick={hamburgerMenu}>
					<span className="block w-full h-1 relative rounded-md bg-main"></span>
					<span className="block w-full h-1 relative rounded-md bg-main"></span>
					<span className="block w-full h-1 relative rounded-md bg-main"></span>
				</button>

				{/* Link Menu */}
				<ul
					className={`fixed bg-second text-main w-screen h-screen top-0 ${
						isActive ? 'right-0' : '-right-full'
					} flex flex-col items-center justify-center gap-4 transition-all duration-300 md:relative md:w-min md:h-min md:right-0 md:flex-row md:bg-transparent md:gap-6`}>
					<li className="h-min">
						<a
							href="#"
							className="text-body-large text-main hover:opacity-70 transition-opacity md:text-body-base">
							Home
						</a>
					</li>
					<li className="h-min">
						<a
							href="#"
							className="text-body-large text-main hover:opacity-70 transition-opacity md:text-body-base">
							About
						</a>
					</li>
					<li className="h-min">
						<a
							href="#"
							className="text-body-large text-main hover:opacity-70 transition-opacity md:text-body-base">
							Services
						</a>
					</li>
					<li className="h-min">
						<a
							href="#"
							className="text-body-large text-main hover:opacity-70 transition-opacity md:text-body-base">
							Projects
						</a>
					</li>
					<li className="h-min">
						<a
							href="#"
							className="text-body-large text-main hover:opacity-70 transition-opacity md:text-body-base">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
