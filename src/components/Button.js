import PropTypes from "react"

const Button = ({ kindClasses, text, onClick }) => {
    return <button className={kindClasses} onClick={onClick}>{text}</button>
}

Button.defaultProps = {
    kindClasses: 'btn',
    text: 'button'
}

Button.propTypes = {
    kindClasses: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func
}

export default Button
