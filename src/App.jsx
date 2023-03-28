import React,{useState} from 'react'
import Modal from './Modal'
import './App.css'

const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='app-wrapper'>
      <div className="button-wrapper">
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
      </div>
      <div className='others'>Other Content</div>
      <Modal isOpen={isOpen} onClose={()=>setIsOpen(false)}/>
    </div>
  )
}

export default App