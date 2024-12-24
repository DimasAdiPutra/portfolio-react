import PropTypes from 'prop-types'

const CardServices = ({ srcImg, altImg, cardTitle, cardBody }) => {
	return (
		<div className="text-main bg-second px-4 py-7 rounded-lg min-h-40 max-h-60 min-w-64 max-w-80 text-center flex flex-col items-center gap-3 w-full">
			<h3 className="text-main text-heading-h3 ">{cardTitle}</h3>
			<div className="w-6 order-first">
				<img src={srcImg} alt={altImg} className="w-full" />
			</div>
			<p className="text-main text-body-small">{cardBody}</p>
		</div>
	)
}

CardServices.propTypes = {
	srcImg: PropTypes.string.isRequired,
	altImg: PropTypes.string,
	cardTitle: PropTypes.string.isRequired,
	cardBody: PropTypes.string.isRequired,
}

export default CardServices
