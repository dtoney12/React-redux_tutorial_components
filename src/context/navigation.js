import {createContext, useEffect, useState} from 'react';

const NavigationContext = createContext();

function NavigationProvider({children}) {

    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    const valuesToShare = {
        navigate,
        currentPath,
    }

    function navigate(to) {
        setCurrentPath(to);
        window.history.pushState({}, '', to);
    }

    useEffect(()=>{
        const handler = () => {
            console.log("Pop: I'm at ", window.location.pathname);
            setCurrentPath(window.location.pathname);
        }

        window.addEventListener('popstate', handler );

        return ()=>{
            window.removeEventListener('popstate', handler);
        }
    }, [])

    return <NavigationContext.Provider value={valuesToShare}>
        {children}
    </NavigationContext.Provider>
}

export { NavigationProvider };
export default NavigationContext;
