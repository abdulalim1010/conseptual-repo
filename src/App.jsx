
import { Outlet } from 'react-router'
import './App.css'

function App() {


  return (
    <>
      <h1 className=' m-2 text-4xl font-bold'>navar</h1>
      <button className='btn btn-primary m-2'>text is more</button>
      <h1 className=' m-2 text-4xl font-bold'>footer</h1>
      <Outlet />
    </>
  )
}

export default App
