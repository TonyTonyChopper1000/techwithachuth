import React from 'react'
import { Route , Routes} from "react-router-dom"
import { fromJSON } from 'postcss'
import LandingPage from './pages/LandingPage'
import ComingSoonPage from './pages/ComingSoonPage'

const App = () => {
  return (
    <div>
       <Routes>
        <Route path="/"element={<LandingPage />} />
        <Route path='/comingsoon' element={<ComingSoonPage />} />
        </Routes> 
    </div>
  )
}

export default App