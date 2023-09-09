import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Programs from '../pages/Programs'
import Solution from '../pages/Solution'
import CurrentProjects from '../pages/CurrentProjects'
import Contacts from '../pages/Contacts'
import Navbar from '../components/navbar/Navbar'
import NotFoundPage from '../pages/NotFoundPage'



function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/programs' element={<Programs/>}/>
        <Route path='/solution' element={<Solution/>}/>
        <Route path='/current-projects' element={<CurrentProjects/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </>
  )
}

export default App
