import React, {useState} from 'react'

const ProjectForm = ({handleSearch}) => {
  const [form, setForm] = useState("")

  const handleChange = (e) => {
    setForm(e.target.value)
    handleSearch(e.target.value)

  }
  return (
    <>
      <form>
        <input type="text" name='nombre' placeholder='buscar por nombre' value={form} onChange={handleChange}/>
      </form>
    </>
  )
}

export default ProjectForm