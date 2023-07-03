import Dropdown from "../components/Dropdown";
import { useState} from "react";

function DropdownPage() {
    const [selection, setSelection] = useState(null);

    function handleSelect(value) {
        setSelection(value);
    }

    const options = [
        {label: 'Red', value: 'red'},
        {label: 'Blue', value: 'blue'},
        {label: 'Green', value: 'green'}
    ]


    return (
        <div>
            <Dropdown options={options} onSelect={handleSelect} selection={selection}/>
        </div>
    )
}

export default DropdownPage;