import PropTypes from 'prop-types'

const CardProject = ({ srcImg, altImg, cardTitle, cardBody }) => {
	return (
		<div className="bg-second max-w-64 min-w-60 min-h-60 max-h-96 flex flex-col gap-3 px-4 py-6 rounded-lg cursor-pointer hover:scale-110 hover:shadow-xl transition">
			<div className="w-full max-h-32 overflow-clip flex justify-center items-center rounded-lg">
				<img src={srcImg} alt={altImg} className="w-full" />
			</div>
			<h3 className="text-main text-heading-h3">{cardTitle}</h3>
			<p className="text-main text-body-small">{cardBody}</p>
		</div>
	)
}

CardProject.propTypes = {
	srcImg: PropTypes.string.isRequired,
	altImg: PropTypes.string,
	cardTitle: PropTypes.string.isRequired,
	cardBody: PropTypes.string.isRequired,
}

export default CardProject
