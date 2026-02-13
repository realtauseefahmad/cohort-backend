import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

  const [notes, setNotes] = useState([])


  function fetchNotes() {
    axios.get('https://cohort-backend-4-iof5.onrender.com/api/notes')
      .then( res => {
        setNotes(res.data.notes)
      })
  }


  useEffect(() => {
    fetchNotes()
  }, [])

  function handleSubmit(e) {
    e.preventDefault()

    const { title, description } = e.target.elements 

    axios.post('https://cohort-backend-4-iof5.onrender.com/api/notes' , {
      title: title.value,
      description: description.value
    })
      .then(res => {
 
        fetchNotes()

      })

  }

  function handleDeleteNote(noteId){
    axios.delete('https://cohort-backend-4-iof5.onrender.com/api/notes/'+noteId)
    .then(res=>{

      fetchNotes()
      
    })
    
  }

  return (
    <>

      <form className='note-create-form' onSubmit={handleSubmit} >
        <input type="text" placeholder='Enter Title' name='title' />
        <input type="text" placeholder='Enter Description' name="description"/>
        <button type="submit">Create Note</button>
      </form>

      <div className="notes">
        {
          notes.map(note => {
            return <div className="note">
              <h1>{note.title}</h1>
              <p>{note.description}</p>
              <button onClick={()=>{handleDeleteNote(note._id)}}>Delete</button>
            </div>
          })
        }
      </div>
    </>
  )
}

export default App
