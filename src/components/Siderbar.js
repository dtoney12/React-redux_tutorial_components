import Link from './Link';

function Sidebar() {
    const links = [
        { label: 'Dropdown', path: '/dropdown'},
        { label: 'Button', path: '/button'},
        { label: 'Modal', path: '/modal'},
        { label: 'Table', path: '/table'},
        { label: 'Counter', path: '/counter'}
    ]
    return (
        <div className={"sticky top-0 overflow-y-scroll flex flex-col items-start"}>
            {links.map((link) => {
            return <Link to={link.path} key={link.label} className="mb-3" activeClassName="font-bold border-l-4 border-blue-500 pl-2">
                {link.label}
            </Link>
        })}
        </div>
    )
}

export default Sidebar;