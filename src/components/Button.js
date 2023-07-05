import className from 'classnames';
import PropTypes from 'prop-types';



function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    rounded,
    outline,
    ...rest
    }) {

    const classCSS = className(rest.className, 'flex items-center px-3 py-1.5 border m-2', {
        'bg-blue-500 border-blue-600': primary,
        'bg-gray-500 border-gray-600': secondary,
        'bg-green-500 border-green-600': success,
        'bg-yellow-500 border-yellow-600': warning,
        'bg-red-500 border-red-600': danger,
        'text-white': !outline && (primary || secondary || success || warning || danger),
        'rounded-full': rounded,
        'bg-white': outline,
        'text-blue-500': primary,
        'text-gray-500': outline && secondary,
        'text-green-500': outline && success,
        'text-yellow-500': outline && warning,
        'text-red-500': outline && danger
    });

    return <button {...rest} className={classCSS} >{children}</button>
}

Button.propTypes = {
    validatePropType: ({
        children,
        primary,
        secondary,
        success,
        warning,
        danger,
        rounded,
        outline})=> {
            const propsCount = Number(!!primary)
                + Number(!!secondary)
                + Number(!!success)
                + Number(!!warning)
                + Number(!!danger);
            if (propsCount > 1) {
                return new Error('Only 1 of primary, secondary, success, warning, danger can be true');
            }
        }
}

export default Button;