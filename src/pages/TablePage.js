import Table from '../components/Table';
import {useState} from "react";

function TablePage() {


    const tableData = [
        {name:'Orange', color: 'bg-orange-600', score: 4},
        {name:'Apple', color: 'bg-red-600', score: 3},
        {name:'Banana', color: 'bg-yellow-300', score: 5},
        {name:'Lime', color: 'bg-green-600', score: 8},
        {name:'Grapes', color: 'bg-purple-800', score: 2},
    ];

    const tableConfig = [
        {
            label: "Fruits",
            render: (item)=> item.name,
            sortValue: (item)=> item.name
        },
        {
            label: "Color",
            render: (item) => <div className={`p-2 m-3 ${item.color}`} />,
        },
        {
            label: "Score",
            render: (item) => item.score,
            sortValue: (item) => item.score,
        }
    ]



    return (
        <Table data={tableData} config={tableConfig}></Table>
    )
}

export default TablePage;