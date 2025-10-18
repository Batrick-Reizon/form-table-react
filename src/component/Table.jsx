import React from "react"

function Table({ tableData, handleEdit, handleDelete }) {
    return (<table className="mt-10 border border-black w-full">
        <thead>
            <tr className="bg-gray-200">
                <th className="border border-black p-2 text-center">Name</th>
                <th className="border border-black p-2 text-center">Email</th>
                <th className="border border-black p-2 text-center">Action</th>
            </tr>
        </thead>
        <tbody>
            {tableData.map((data, index) => {
                return (
                    <tr key={index}>
                        <td className="border border-black p-2 text-center">{data.name}</td>
                        <td className="border border-black p-2 text-center">{data.email}</td>
                        <td className="border border-black p-2 text-center">
                            <button className="mx-3 bg-blue-600 text-white py-1 px-3 rounded" onClick={() => handleEdit(index)}>Edit</button>
                            <button className="mx-3 bg-red-600 text-white py-1 px-3 rounded" onClick={() => handleDelete(index)}>Delete</button>
                        </td>
                    </tr>
                )
            })}
        </tbody>
    </table>)
}

export default Table