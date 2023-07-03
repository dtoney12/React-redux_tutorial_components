import {useEffect, useRef, useState} from "react";
import Panel from './Panel';


function Dropdown({options, onSelect, selection}) {
    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef();

    function handleClick() {
        setIsOpen((currentIsOpen)=> {
            return !currentIsOpen;
        });
    }

    function handleOptionClick(option) {
        onSelect(option);
        setIsOpen(false);
    }



    const renderedOptions = options.map((option) => {
        return <div onClick={()=>{handleOptionClick(option)}} key={option.value}>{option.label}</div>
    })

    useEffect(()=>{
        const handler = (event)=> {
            if (!divEl.current) {
                return;
            }
            if (!divEl.current.contains(event.target)) {
                setIsOpen(false);
            };
        }
        document.addEventListener('click', handler, true);
        return ()=> {
            document.removeEventListener('click', handler);
        }

    },[])

    return (
        <div ref={divEl} className="w-48 relative">
            <Panel
                className="flex justify-between items-center cursor-pointer"
                onClick={handleClick}>
                    {selection?.label || 'Select...'}
            </Panel>
            {isOpen &&
                <Panel
                    className="absolute top-full">
                        {renderedOptions}
                </Panel>
            }
        </div>

    )
}

export default Dropdown;