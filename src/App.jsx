import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import { useEffect } from "react";




export default function App() {
  useEffect(()=>{
    document.title="Sakara Hive"
  })
   
  return (
    <div>
      <Navbar/>
      <Hero/>
      
    
    </div>
  )
}
