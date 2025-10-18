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
                        <td className="border border-black flex flex-wrap justify-center items-center gap-3 sm:gap-5 p-2">
                            <button className="bg-blue-600 text-white text-sm sm:text-base px-1 py-1 sm:py-1 sm:px-3 rounded" onClick={() => handleEdit(index)}>Edit</button>
                            <button className="bg-red-600 text-white text-sm sm:text-base px-1 py-1 sm:py-1 sm:px-3 rounded" onClick={() => handleDelete(index)}>Delete</button>
                        </td>
                    </tr>
                )
            })}
        </tbody>
    </table>)
}

export default Table