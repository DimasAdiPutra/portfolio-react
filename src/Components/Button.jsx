import PropTypes from 'prop-types'

const Button = ({ text, className = '' }) => {
	return (
		<button
			className={`bg-second hover:bg-black text-main text-body-base-bold px-5 py-4 min-w-24 rounded-full shadow-md transition-colors ${className}`}>
			{text}
		</button>
	)
}

Button.propTypes = {
	text: PropTypes.string.isRequired,
	className: PropTypes.string,
}

export default Button
