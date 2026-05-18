import { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [note, setNote] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();

    const copyNote = [...note]

    copyNote.push({ title, details })

    setNote(copyNote)

    setTitle("")
    setDetails('')
  }
  const Heading = (e) => {
    setTitle(e.target.value)
  }
  const Details = (e) => {
    setDetails(e.target.value)
  }
  const Delete = (index) => {
    const deleteTask = [...note]

    deleteTask.splice(index,1)

    setNote(deleteTask)
  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={submitHandler} className='flex lg:w-1/2 flex-col p-5 gap-5'>
        <h1 className='text-4xl text-white font-bold py-5'>Add Notes</h1>

        <input onChange={Heading} className='font-medium px-5 py-5 w-full border-2 outline-none rounded-2xl'
          type="text"
          placeholder='Enter Notes Heading'
          value={title}
        />
        <textarea onChange={Details} className='font-medium h-40 px-5 py-5 border-2 w-full outline-none rounded-2xl'
          name="notes"
          id="notes"
          placeholder='Write details'
          value={details}
        />
        <button className='font-bold text-2xl px-5 py-2 border-2 w-full  bg-white text-black rounded-3xl'>Add Note</button>

      </form>
      <div className='bg-gray-900 lg:w-1/2 lg:border-l-2 p-5 h-screen overflow-auto'>
        <h1 className='font-bold text-4xl p-5'>Recent Notes</h1>
        <div className='flex flex-wrap gap-5 mt-5 justify-start items-start'>
          {note.map((elem,index) => {

            return <div key={index} className='flex flex-col justify-between items-start relative  py-3 px-2 w-45 h-55 text-black  bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7w-Fy6ulGqfBnT06rZKtzA78vXPMenQpi-Q&s)] rounded-3xl' >
              <div className=''>
                <h3 className='font-bold leading-tight pt-3 text-xl'>{elem.title}</h3>
                <p className='font-semibold mt-3 text-sm leading-tight text-gray-500'>{elem.details}</p>
              </div>
              <button onClick={Delete} className='w-full cursor-pointer active:scale-95 bg-red-400 px-4 rounded-full'>Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App