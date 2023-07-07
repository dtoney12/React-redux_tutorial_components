// from section 10 of Udemy's "Master React and Redux Toolkit"

import className from 'classnames';
import PropTypes from 'prop-types';


/*
The ...rest feature receives all remaining props unlisted by the props argument list of the component, collecting them into a new object (Actually I'm not sure if ...rest will actually be an object, or a list of each prop as its own object, based on console output).

When passing through the ...rest to the button component, className itself may be a prop that is passed to the component.  The rest.className argument allows concatenation of previously listed className props to other className(s) attribute specifiers specified in the className function.
 */

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

    /*
    ...rest should be listed first so that additional className(s) will concatenate with any previously passed className prop values.
    If className is listed first and then ...rest, the className prop will be overwritten by a className prop passed into the functional component.
    With ...rest placed after className in the <button> component as in the following case, "mb-5" would overwrite 'flex items-center px-3 py-1.5 border m-2' + 'bg-green-500 border-green-600', and all of those additional css attributes would be lost, which is undesirable.
     */

    return <button {...rest} className={classCSS} >{children}</button>
}

/*
We want to ensure that only one of a given prop is passed to Button or return an error.  To do this, we can define a function by defining a parameter object for Component.propTypes within the js file that defines the Component.
 */

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