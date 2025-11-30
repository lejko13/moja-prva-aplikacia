import { useState,useRef,useContext } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import './App.css'
import { motion, AnimatePresence } from 'framer-motion';

import { GlobalProvider} from "./naviac/reactcontext/reactcontext";
import 'boxicons/css/boxicons.min.css';



import  Home from './pages/home/home'
import Rezervacie from './pages/rezervacie/rezervacie'
import Konverzacie from './pages/konverzacie/konverzacie'
import Header from './naviac/header/header'
import Upozornenia from './pages/upozornenia/upozornenia'
import Profil from './pages/profil/profil'  
import Nastavenia from './pages/nastavenia/nastavenia'
import Informacie from './pages/informacie/informacie'
import Maincast from './naviac/maincast/maincast'

import Clovekpage from './pages/clovekpage/clovekpage'
import Navigaciamobil from './naviac/navigaciamobil/navigaciamobil'
import Castcosahyba from './naviac/castcosahybe/castcosahyba'

import Owerlap from './pages/owerlap/owerlap';


import StrankaProjekt from './pages/strankaProjekt/strankaProjekt'

import Card from './naviac/portalpop/portalpop'
import Scrool from './naviac/scrool/scrool'

function App() {
  

  const[otvorenie,setOtvorenie] = useState(false)
  const[hoverheader,sethoverheader] = useState(false)

  const[domov,setDomov] = useState("domov")
  const [query, setQuery] = useState("");

  const inputRef = useRef(null);
        const[farba,setFarba] = useState(false)


          // const { zmena } = useContext(GlobalContext);

           const zmena = useRef(null)

           const rodic = useRef(null)
   const posledny = useRef(null)
    const dva = useRef(null)
    const tri = useRef(null)
    const styri = useRef(null)
    const pat = useRef(null)
    const sest = useRef(null)
    const sedem = useRef(null)
    const domovcek = useRef(null)
    const poslednyref = useRef(null)
     const pojdeme = useRef(null)

const lavasipka = useRef([])
const pravasipka = useRef([])


 

  return (
        <GlobalProvider zmena = {zmena}>  
          
        
          
    <BrowserRouter>
     <Scrool
     domov = {domov}
    zmena = {zmena}
    ></Scrool>
    
 
    
 <Owerlap
    style={{backgroundColor:"var(--farba-bielaEfekty)"}}
    ></Owerlap>
   

 
    <AnimatePresence>
  {otvorenie && (
    <motion.div
      className='velkyzatvarac'
      initial={{ opacity: 0 }}      // začína neviditeľný
      animate={{ opacity: 1 }}      // keď sa otvorí, fade in
      exit={{ opacity: 0 }}         // pri zatváraní fade out
      transition={{ duration: 0.3 }} // čas animácie
      onClick={() => {
        setOtvorenie(false);
        setFarba(false);
        setQuery("");
      }}
    ></motion.div>
  )}
</AnimatePresence>
    
   
          <div className='lentak'>
            <Header  pojdeme = {pojdeme}
            inputRef = {inputRef}
            otvorenie = {otvorenie}
            setOtvorenie = {setOtvorenie}

            hoverheader = {hoverheader}
            sethoverheader = {sethoverheader}

            farba = {farba}
            setFarba = {setFarba}
            setQuery = {setQuery}
            query = {query}
            
            setDomov = {setDomov}
            poslednyref = {poslednyref}
            ></Header>

           <div className='zakladny2'>
            <Castcosahyba  
            lavasipka = {lavasipka}  
            pravasipka = {pravasipka}
            pojdeme = {pojdeme}
            rodic = {rodic}
            posledny = {posledny}
            dva = {dva}
            tri = {tri}
            styri = {styri}
            pat = {pat}
            sest = {sest}
            sedem = {sedem}
            domovcek = {domovcek}
            setDomov = {setDomov}
             poslednyref = {poslednyref}
            domov = {domov}></Castcosahyba>
            
        <div className='zakladny' ref={zmena}>
          
         
        <AnimatePresence>
          <Routes>
                
            <Route path="/" element={<Home domov = {domov}  
            lavasipka = {lavasipka}  
            pravasipka = {pravasipka}  />} />

            <Route path="/Rezervacie" element={<Rezervacie />} />
            <Route path="/Konverzacie" element={<Konverzacie />} />
            <Route path="/Upozornenia" element={<Upozornenia />} />
            <Route path="/Profil" element={<Profil />} />
            <Route path="/Nastavenia" element={<Nastavenia />} />
            <Route path="/Informacie" element={<Informacie />} />
            <Route path="/StrankaProjekt" element={<StrankaProjekt />} />
            <Route path="/Clovekpage/:id" element={<Clovekpage />} />
           

          </Routes>
           </AnimatePresence>
        </div>


        </div>
          


       <Navigaciamobil
       pojdeme = {pojdeme}
            inputRef = {inputRef}
            otvorenie = {otvorenie}
            setOtvorenie = {setOtvorenie}

            hoverheader = {hoverheader}
            sethoverheader = {sethoverheader}

            farba = {farba}
            setFarba = {setFarba}
            setQuery = {setQuery}
            query = {query}
            
            setDomov = {setDomov}
            poslednyref = {poslednyref}
       ></Navigaciamobil>
          </div>

          
    </BrowserRouter>
    

       </GlobalProvider>
       
  )
}

export default App
