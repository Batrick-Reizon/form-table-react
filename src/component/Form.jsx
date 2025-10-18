import React from "react"

function Form({ formData, handleChange, handleSubmit, editIndex }) {
    return (<div>
        <h1 className="text-2xl font-bold mb-5">Form and Table Example</h1>
        <form className="border border-black rounded p-5" onSubmit={handleSubmit}>
            <input type="text" value={formData.name} onChange={(event) => {
                const { value } = event.target
                handleChange("name", value)
            }} placeholder="Enter Name" required className="border border-black rounded p-2 outline-none w-full mb-3" />
            <input type="email" value={formData.email} onChange={(event) => {
                const { value } = event.target
                handleChange("email", value)
            }} placeholder="Enter Email" required className="border border-black rounded p-2 outline-none w-full mb-3" />
            <button className="bg-blue-600 text-white py-1 px-3 rounded" type="submit">{editIndex === null ? "Add" : "Update"}</button>
        </form>
    </div>)
}

export default Form