import React, { useState } from "react"
import Form from "./component/Form"
import Table from "./component/Table"

function App() {
    const initialformData = {
        name: "",
        email: ""
    }
    const [formData, setformData] = useState(initialformData)
    const [tableData, settableData] = useState([])
    const [editIndex, seteditIndex] = useState(null)

    const handleChange = (key, value) => {
        setformData({ ...formData, [key]: value })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        if (editIndex === null) {
            settableData([...tableData, formData])
            setformData(initialformData)
        } else {
            tableData[editIndex] = formData
            settableData(tableData)
            setformData(initialformData)
            seteditIndex(null)
        }
        console.log("Form Submitted", formData)
    }
    const handleEdit = (index) => {
        console.log("Edit clicked on row", index)
        const clickedItem = tableData[index]
        setformData(clickedItem)
        seteditIndex(index)
    }
    const handleDelete = (index) => {
        tableData.splice(index, 1)
        settableData([...tableData])
    }

    return (<div className="p-5 mx-auto max-w-2xl">
        <Form formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} editIndex={editIndex}></Form>
        {tableData.length > 0 && <Table tableData={tableData} handleEdit={handleEdit} handleDelete={handleDelete}></Table>}
    </div>)
}

export default App