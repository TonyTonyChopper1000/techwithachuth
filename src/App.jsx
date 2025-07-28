import React from "react"
import LandingPage from "./pages/LandingPage"
import Works from "./pages/Works"
import { Routes, Route } from "react-router-dom"

const App = () => {
  return(
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/works" element={<Works />}/>
      </Routes>
    </div>
  )
}

export default App;