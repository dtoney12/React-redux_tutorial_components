import classNames from "classnames";
import useNavigation from "../hooks/useNavigation";

function Link({to, children, className, activeClassName}) {
    const {navigate, currentPath} = useNavigation();

    let classes = classNames('text-blue-500', className);

    if (currentPath === to) {
        classes = classNames(classes, activeClassName);
    }

    const handleClick = (event)=> {
        if (event.metaKey || event.ctrlKey) return;
        event.preventDefault();
        navigate(to);
    }

    return (
            <a className={classes} onClick={handleClick} href={to}>{children}</a>
    )
}

export default Link;