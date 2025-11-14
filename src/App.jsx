import { useState } from 'react'
import Header from './components/Header'
import { Footer } from './components/Footer'
import { TaskCard } from './components/TaskCard'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <TaskCard></TaskCard>
      <Footer />
    </>
  )
}

export default App
