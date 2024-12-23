import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'
import Services from './Components/Services'

function App() {
	return (
		<>
			{/* Navbar */}
			<Navbar />
			{/* Container */}
			<div className="flex flex-col items-center">
				{/* Home */}
				<Home />
				{/* About */}
				<About />
				{/* Services */}
				<Services />
				{/* Projects */}
				<Projects />
				{/* Contact */}
				<Contact />
			</div>
			{/* Footer */}
			<Footer />
		</>
	)
}

export default App
