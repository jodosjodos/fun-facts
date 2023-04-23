
import './App.css'
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import { useState } from 'react'
function App() {
  const [dark,setDark]=useState(false)
   const toggleDarkMode=()=>{
    setDark((prev)=>{
      return !prev
    })
   }
return(
  <div className="container">
            <Navbar 
            darkMode={ dark&&"white"}
            toggleDarkMode={toggleDarkMode} 
            />
            <Main 
            darkMode={ dark&&"white"}
          
             />
        </div>
)
  
}

export default App
