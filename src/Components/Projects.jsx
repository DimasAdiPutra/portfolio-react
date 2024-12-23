import CardProject from './CardProject'

// import images
import ProjectImg from '../assets/project1.webp'

const Projects = () => {
	return (
		<section className="px-4 min-h-screen w-full flex flex-col pt-40 md:pt-0 lg:px-10 xl:min-h-fit lg:pt-40 items-center md:justify-center max-w-screen-xl">
			<h1 className="text-heading-h2 text-center mb-10 max-w-72  md:mb-20 xl:max-w-none">
				Masih belum yakin? Mari lihat pekerjaan saya!
			</h1>
			<div className="w-full flex flex-col items-center gap-8 md:flex-row md:flex-wrap md:justify-center md:items-stretch lg:justify-evenly">
				<CardProject
					srcImg={ProjectImg}
					altImg="Project 1"
					cardTitle="Project 1"
					cardBody="Figma ipsum component variant main layer. Line main star hand device component. Variant overflow inspect rotate strikethrough frame select."
				/>
				<CardProject
					srcImg={ProjectImg}
					altImg="Project 2"
					cardTitle="Project 2"
					cardBody="Figma ipsum component variant main layer. Line main star hand device component. "
				/>
				<CardProject
					srcImg={ProjectImg}
					altImg="Project 3"
					cardTitle="Project 3"
					cardBody="Figma ipsum component variant main layer. Line main star hand device component. Variant overflow inspect rotate strikethrough frame select."
				/>
			</div>
		</section>
	)
}

export default Projects
