import {useEffect, useState} from "react";
import {GoArrowSmallDown,GoArrowSmallUp} from "react-icons/go";

function Table({data, config}) {

    const [tableData,setTableData] = useState(data);
    const [sortOrder,setSortOrder] = useState(null);
    //order types: null, 'asc','dsc'
    const [selectedHeader, setSelectedHeader] = useState(null);
    let sortedTable = [...data];

    function handleClick(index) {
        if (!('sortValue' in config[index])) return;  // "color" is not sortable
        if (index !== selectedHeader) {  // first time to select header
            setSelectedHeader(index);
            setSortOrder('asc');
            return;
        }
        if (sortOrder === null) {
            setSortOrder('asc');
            return;
        }
        if (sortOrder === 'asc') {
            setSortOrder('dsc');
            return;
        }
        if (sortOrder === 'dsc') {
            setSortOrder(null);
            return;
        }
    }

    function getSortFn() {
        let sortingOrderOperator = 1;
        if (sortOrder === 'dsc') {
            sortingOrderOperator = -1;
        }
        const {sortValue} = config[selectedHeader];

        const sortFn = (a,b)=> {
            if (typeof sortValue(a) === 'string') {
                return sortValue(a).localeCompare(sortValue(b)) * sortingOrderOperator
            } else {
                return (sortValue(a) - sortValue(b)) * sortingOrderOperator
            }
        }
        return sortFn;
    }

    const keyFn = (item)=> {
        return item.name;  // user must define appropriate key property
    }


    function getIcon(index) {
        if (!('sortValue' in config[index])) return;
        if (index !== selectedHeader) {
            return <div>
                <GoArrowSmallUp/>
                <GoArrowSmallDown/>
            </div>;
        }
        if (sortOrder === null) {
            return <div>
                <GoArrowSmallUp/>
                <GoArrowSmallDown/>
            </div>;
        }
        if (sortOrder === 'asc' ) {
            return <div>
                <GoArrowSmallUp/>
            </div>;
        }
        if (sortOrder === 'dsc' ) {
            return <div>
                <GoArrowSmallDown/>
            </div>;
        }
    }

    useEffect(()=>{
        if (selectedHeader!==null) {
            if (sortOrder === null) {
                setTableData(data);
            } else {
                setTableData(sortedTable.sort(getSortFn()));
            }
        }
    }, [sortOrder, selectedHeader]);

    const tableHeaders = config.map((header,index)=>{
        return <th className="cursor-point hover:bg-gray-100" key={header.label} onClick={()=>{handleClick(index)}}>
            <div className="flex items-center">
                {getIcon(index)}
                {header.label}
            </div>

        </th>;
    });

    const tableRows = tableData.map((rowData)=> {
        return (
            <tr className="border-b" key={keyFn(rowData)}>
                {config.map((header)=> {
                    return <td className="p-3" key={header.label}>{header.render(rowData)}</td>;
                })}
            </tr>
        )
    });

    return (
        <div>
            <table className="table-auto border-spacing-2">
                <thead>
                    <tr className="border-b-2">
                        {tableHeaders}
                    </tr>
                </thead>
                <tbody>
                        {tableRows}
                </tbody>
            </table>
        </div>
    )
}
export default Table;