import './header.css';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from "react-router-dom";
import Fuse from 'fuse.js';
import { apartmany } from '../../naviac/fuzzy/fuzzy'


import { useState, useRef, useMemo, useEffect } from 'react';


import { useContext } from "react";
import { GlobalContext } from '../reactcontext/reactcontext'

import Bodky from './bodky/bodky'
import Ikony from './ikony/ikony'
import Ukazovatelko from '../ukazovatelko/ukazovatelko'
import Nahlad from '../nahlad/nahlad'
import Hodnotenie from '../hodnotenie/hodnotenie'
import Oznamenie from '../oznamenie/oznamenie'


import Textyheader from '../textyheader/textyheader'
import { RiShoppingBasket2Line } from "react-icons/ri";


import Input from '../../naviac/fuzzy/input'
import { use } from 'react';
const Header = ({otvorenie,setOtvorenie,hoverheader,sethoverheader,inputRef,farba,setFarba,setQuery,query,setDomov,pojdeme,poslednyref
}) => {
   

    
     const { pocetOblubene, setPocetOblubene, filter, setFilter,teraz, seTeraz } = useContext(GlobalContext);

       
    const [darkMode, setDarkMode] = useState(false);
    const[hover,setHover] = useState(false)

    const[nahlad,setNahlad] = useState(null)

    const klik = (apartman) =>  {
        navigate('/StrankaProjekt', { state: apartman });
          setOtvorenie(false);
       setFarba(false)
      setQuery("");
    };
      

       const navigate = useNavigate();

        // const fuse = useMemo(() => new Fuse(apartmany, { keys: ['krajina', 'kraj','location'], threshold: 0.3 }), []);


       const results = useMemo(() => {
    if (!query || query.trim() === "") return [];
    
    const queryWords = query.trim().split(" "); // napr. "slovensko bra" -> ["slovensko", "bra"]
    
    // Začneme s celým apartmany
    let filtered = apartmany;

    queryWords.forEach(word => {
        const fuseSearch = new Fuse(filtered, { keys: ['krajina', 'kraj','location'], threshold: 0.4 });
        filtered = fuseSearch.search(word).map(r => r.item);
                });

                return filtered;
            }, [query]);
        // const results = query ? fuse.search(query).map(r => r.item): apartmany;

        const lejkova = () => {
             setOtvorenie(false);
       setFarba(false)
      setQuery("");
        }
      const handleClick = () => {



          setOtvorenie(prev => {
    const novaHodnota = !prev;

    if (!novaHodnota) {
      // tu sa vykoná niečo, keď bude false
    setFarba(false)
      console.log("Teraz je false!");
      setQuery("");
    } else {
      // tu sa vykoná niečo, keď bude true
             setFarba(true)
      console.log("Teraz je true!");
      inputRef.current.focus(); 
    }

    return novaHodnota;


    
  });
    


  };
 
  return (
<>
<div className='hornyheader' style={{"--deninujem": teraz ? "red" : "blue"}}>
    <div className='vnutorooo33'
    onClick={() => seTeraz(true)}
    >
        <div className='lenitambudeikona'><i class='ikonografia bx bx-search'
          ></i></div>
     <input
  type="text"
  placeholder="Začni vyhľadávať"
  inputMode="text"
  autoComplete="off"
  aria-label="Vyhľadávanie"
  className='inputetkkke'
    


  value={query}                    // 🔌 prepojenie so stavom
  onChange={(e) => setQuery(e.target.value)}   // 🔥 fuzzy search pri písaní
/>


        </div>
        {results.length > 0 && (
  <div className='zobrazeneeinputu'>
    {results.map(item => (
      <div key={item.id} onClick={() => klik(item)}>
        {item.name} - {item.location}
      </div>
    ))}
  </div>
)}
</div>


  <motion.div
  className="Header"
  initial={{ y: -50, opacity: 0, width:60 }}
  animate={{ y: 0, opacity: 1, width: otvorenie ? 210 : 62 }}
  transition={{ duration: 0.5 }}
>



        <div className='HeaderUp'>
            <div className='HeaderBodky'
            >
                <Bodky style={{ 
                    backgroundColor: "var(--farba-cervena)",
                     
                     }}></Bodky>
                <Bodky 
                style={{ backgroundColor: "var(  --farba-zlta)" }}
                setOtvorenie ={setOtvorenie}
                  onClick={() => {
                    setFarba(false);
                    console.log("Teraz je false!");
                    inputRef.current.value = "";
                    setOtvorenie(false);
                    }}
                ></Bodky>
                <Bodky style={{ backgroundColor: "var(--farba-zelena)" }}
                onClick={() =>{
                    setOtvorenie(true);
                              setFarba(true);
                                console.log("Teraz je true!");
                                inputRef.current.focus();
                }}
                ></Bodky>
            
            </div>


            <div className='HeaderIkony'>
                <div className='horehore'>
                    <div className='Logo'>
                        <div className='logocelocek'>
                            <div className='logoLOgo'>
                                <p style={{
                                    color:"var( --farba-main)",
                                    fontWeight:"900",
                                    fontSize:"25px"
                                    }}>L</p>
                            </div>
                        <div className='todlasie'>
                            <p style={{
                                    color:"var( --farba-main)",
                                    fontWeight:"900",

                                    fontSize:"25px"
                                    }}>LOGO</p>
                        
                        </div>
                      </div>


                        <Ukazovatelko
                        onClick = {() =>   handleClick()}
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                         style={{
                            backgroundColor: hover ? "var(--farba-mainhover)":"var( --farba-main)",
                            position: "absolute",
                            top: "50%",
                            right:"-30px",
                            transform: "translateY(-50%)"
                            }}
                        >
                            {otvorenie  ? (
                                <i className='bx bx-chevron-left' ></i>): (
                                <i className='bx bx-chevron-right' ></i>
                            )}
                            </Ukazovatelko>
                    </div>
                    <div className='Logo'>
                        <div className='logoLOgo2'
                   
                        >
                            <div className='inputieklogo'
                           onClick={() => {
                                    setOtvorenie(true);
                                    setFarba(true);
                                    console.log("Teraz je true!");
                                    inputRef.current.focus();
                            }}>
                            <i class='ikona bx bx-search'  
                        
                        onMouseEnter={() => sethoverheader(12)}
                        onMouseLeave={() => sethoverheader(false)}
                        style={{ 
                            transition:"var( --transition)",
                            cursor:"pointer",
                            color: farba === true 
                                ? 'var(--farba-main)' 
                                : (hoverheader === 12 ? 'var(--farba-main)' : 'var(--farba-cierna')

                    }}
                        
                        ></i></div>

                        <Input
                            farba={farba}
                            inputRef={inputRef}
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            />

                          

                        </div>
                      
                          {results.length > 0 && (
                              <div className='zobrazeneeinputu'
                               onMouseLeave={() => setNahlad(null)}
                                >
                                <AnimatePresence>
                                
                                            <motion.ul
                                            className="listocek"
                                            initial={{ opacity: 0, y: 0 }}   // štart: neviditeľné a posunuté hore
                                            animate={{ opacity: 1, y: 0 }}     // animácia: úplne viditeľné a na správnej pozícii
                                            exit={{ opacity: 0, y: 20 }}      // pri odchode: zmizne a posunie sa hore
                                            transition={{ duration: 0.3 }}     // dĺžka animácie
                                            >
                                                <motion.div className='wrapperlistok'>
                                            {results.map((item, i) => (
                                                <motion.li 
                                                onMouseEnter={() => setNahlad(item)}
                                                // onMouseLeave={() => setNahlad(null)}
                                                className="polozka" 
                                   
                                                onClick={() => klik(item)}
                                                key={i}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.2, delay: i * 0.03 }} // malé oneskorenie pre každý riadok
                                                >
                                                <p style={{ whiteSpace: 'nowrap' ,fontSize:"var(--font-size-base)",color:"var(--farba-cierna)"}}>{item.name}</p> 
                                                       <div style={{
                                                        width:"100%",
                                                      justifyContent:"space-between",
                                                        display:"flex",
                                                        // backgroundColor:"red"
                                                       }}>
                                                         <p style={{ whiteSpace: 'nowrap' ,fontSize:"var(  --font-size-base2)",color:"var(--farba-sivaText)"}}>{item.location}</p>  
                                                         <Hodnotenie
                                                         text = {item.hodnotenie}
                                                        
                                                         >
                                                         </Hodnotenie>
                                                        

                                                       </div>
                                           
                                                </motion.li>
                                                
                                            ))}
                                            </motion.div>
                                            
                                            </motion.ul>
                                            
                              

                                </AnimatePresence>
                           
                                <div className='tu'>
                                     <AnimatePresence>
                                    {nahlad && (
                                        <Nahlad 
                                         kontrola = {true}
                                        nazov={nahlad.name}
                                            location={nahlad.location}
                                            hodnotenie={nahlad.hodnotenie}
                                            krajina = {nahlad.krajina}
                                            fotky = {nahlad.fotky}
                                             apartman={nahlad}

                                             setOtvorenie = {setOtvorenie}
                                             setFarba = {setFarba}
                                             setQuery = {setQuery}
                                             otvorenie = {otvorenie}
                                        >
                                            
                                        </Nahlad>
                                    )}
                                    </AnimatePresence>
                                </div>
                            
                    
                        </div>
                )}


                
                

                    </div>

                </div>
               
                 

                <div className='texticek'></div>
{/* jsjknsjknsajkvnsajkcnsdajkcnasjdkcnsdakdcnsajkcnsajkcnsajkcnsajkc */}

                  <div style={{position:"relative",width:"auto",height:"auto" ,}}>
                             <AnimatePresence>
                                                    {!otvorenie && hoverheader === 3 && (
                                           <Textyheader   >Domov</Textyheader>
                                                    )}
                                                </AnimatePresence>
                            <Ikony
                                slova = "Domov"
                                ref={poslednyref}
                                onClick={() =>     {
                                    navigate("/");
                                    lejkova()
                                    setDomov("domov")
                                    // setFilter(false)
                                }}
                            onMouseEnter={() => sethoverheader(3)}
                            onMouseLeave={() => sethoverheader(false)}

                                style={{ backgroundColor: hoverheader === 3? 'var(--farba-main2)' :"transparent", }}
                
                            
                                ikona={<i className='ikona bx bx-home-alt' ></i>}
                            ></Ikony>
                      </div>
{/* jsjknsjknsajkvnsajkcnsdajkcnasjdkcnsdakdcnsajkcnsajkcnsajkcnsajkc */}

                        <div style={{position:"relative",width:"auto",height:"auto"}}>
                            <AnimatePresence>
                    <Oznamenie></Oznamenie>
                    </AnimatePresence>
                                            <AnimatePresence>
                                                    {!otvorenie && hoverheader === 4 && (
                                           <Textyheader >Rezervácie</Textyheader>
                                                    )}
                                                </AnimatePresence>


                            <Ikony
                                slova = "Moje rezervácie"
                                onClick={() =>     {
                                    navigate("/Rezervacie")
                                     lejkova()
                                      setFilter(false)
                                }}
                            onMouseEnter={() => sethoverheader(4)}
                            onMouseLeave={() => sethoverheader(false)}

                                style={{ backgroundColor: hoverheader === 4 ? 'var(--farba-main2)' :"transparent", }}
                
                            
                                ikona={<RiShoppingBasket2Line className='ikona' />}
                            ></Ikony>

                            </div>
{/* jsjknsjknsajkvnsajkcnsdajkcnasjdkcnsdakdcnsajkcnsajkcnsajkcnsajkc */}

<div style={{position:"relative",width:"auto",height:"auto"}}>
                                           <AnimatePresence>
                                                    {!otvorenie && hoverheader === 5 && (
                                           <Textyheader  >Konverzácia</Textyheader>
                                                    )}
                                                </AnimatePresence>
                <Ikony
                     slova = "Konverzácia"
                       onClick={() =>    { navigate("/Konverzacie");
                         lejkova();
                          setFilter(false)

                       }}
                 onMouseEnter={() => sethoverheader(5)}
                onMouseLeave={() => sethoverheader(false)}

                     style={{ backgroundColor: hoverheader === 5 ? 'var(--farba-main2)' :"transparent", }}
      
                   
                    ikona={<i class='ikona bx bx-chat'></i>}
                ></Ikony>
                 </div>
{/* jsjknsjknsajkvnsajkcnsdajkcnasjdkcnsdakdcnsajkcnsajkcnsajkcnsajkc */}

                 <div style={{position:"relative",width:"auto",height:"auto"}}>

                    <AnimatePresence>
                        {pocetOblubene > 0 && <Oznamenie>{pocetOblubene}</Oznamenie>}
                    
                    </AnimatePresence>
                                           <AnimatePresence>
                                                    {!otvorenie && hoverheader === 6 && (
                                           <Textyheader >Obľúbené</Textyheader>
                                                    )}
                                                </AnimatePresence>
                <Ikony
                     slova = "Obľúbené"
                       onClick={() =>     {navigate("/Upozornenia"); 
                        lejkova();
                        setFilter(false)
                    }}
                 onMouseEnter={() => sethoverheader(6)}
                onMouseLeave={() => sethoverheader(false)}

                     style={{ backgroundColor: hoverheader === 6 ? 'var(--farba-main2)' :"transparent", }}
      
                   
                    ikona={<i class='ikona bx bx-heart' ></i>}
                ></Ikony>
                   </div>
{/* jsjknsjknsajkvnsajkcnsdajkcnasjdkcnsdakdcnsajkcnsajkcnsajkcnsajkc */}

                 <div style={{position:"relative",width:"auto",height:"auto"}}>
                                            <AnimatePresence>
                                                    {!otvorenie && hoverheader === 7 && (
                                           <Textyheader >Profil</Textyheader>
                                                    )}
                                                </AnimatePresence>
                <Ikony
                     slova = "Profil"
                       onClick={() =>     {
                        navigate("/Profil"),
                         lejkova(),
                         setFilter(false)
                        }}
                 onMouseEnter={() => sethoverheader(7)}
                onMouseLeave={() => sethoverheader(false)}

                     style={{ backgroundColor: hoverheader === 7 ? 'var(--farba-main2)' :"transparent", }}
      
                   
                    ikona={<i class='ikona bx bx-user' ></i>}
                >
                    <div></div>
                </Ikony>
                
                 </div>
             
           

            </div>
        </div>
        <div className='HeaderDown'>
            <div className='HeaderIkony2'>
                <div style={{
                    // backgroundColor:"red",
                    width:"100%",
                    flexDirection:"column",
                    display:"flex",
                    height:"fit-content",
                    gap:"5px"
                }}>

                  <div style={{position:"relative",width:"auto",height:"auto"}}>
                             <AnimatePresence>
                                                    {!otvorenie && hoverheader === 8 && (
                                           <Textyheader>Filter</Textyheader>
                                                    )}
                                                </AnimatePresence>
                            <Ikony
                            ref = {pojdeme}
                                slova = "Filter"
                                 onClick={() =>     {setFilter(prev => prev === "otovrene" ? "false" : "otovrene"); lejkova()}}
                            onMouseEnter={() => sethoverheader(8)}
                            onMouseLeave={() => sethoverheader(false)}

                                style={{ backgroundColor: hoverheader === 8? 'var(--farba-main2)' :"transparent", }}
                
                            
                                ikona={<i class='ikona bx bx-cog' ></i>}
                            ></Ikony>
                      </div>
{/* jsjknsjknsajkvnsajkcnsdajkcnasjdkcnsdakdcnsajkcnsajkcnsajkcnsajkc */}

                  <div style={{position:"relative",width:"auto",height:"auto"}}>
                             <AnimatePresence>
                                                    {!otvorenie && hoverheader === 9 && (
                                           <Textyheader  >Informácie</Textyheader>
                                                    )}
                                                </AnimatePresence>
                            <Ikony
                                slova = "Informácie"
                                 onClick={() =>     {navigate("/Informacie"); 
                                    lejkova();
                                    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
                                     
                                }}
                            onMouseEnter={() => sethoverheader(9)}
                            onMouseLeave={() => sethoverheader(false)}

                                style={{ backgroundColor: hoverheader === 9? 'var(--farba-main2)' :"transparent", }}
                
                            
                                ikona={<i class='ikona bx bx-info-circle' ></i>}
                            ></Ikony>
                      </div>

{/* jsjknsjknsajkvnsajkcnsdajkcnasjdkcnsdakdcnsajkcnsajkcnsajkcnsajkc */}



            </div>

             <div style={{
                    // backgroundColor:"red",
                    width:"100%",
                    flexDirection:"column",
                    justifyContent:"end",
                    display:"flex",
                    height:"fit-content",
                    
                    gap:"15px"
                }}>
                    {/*  */}
                    <div style={{position:"relative",width:"auto",height:"auto"}}>
                        
                            <AnimatePresence>
  {!otvorenie && hoverheader === 10 && (
    <Textyheader
    
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      {darkMode ? 'Tmavý' : 'Svetlý'}
    </Textyheader>
  )}
</AnimatePresence>
                            <Ikony
                                slova = 
                                {darkMode ? (
"Tmavý"
                                ): (
                                    "Svetlý"
                                )}
                                onClick = {() => setDarkMode(!darkMode)}
                            onMouseEnter={() => sethoverheader(10)}
                            onMouseLeave={() => sethoverheader(false)}

                                style={{ backgroundColor: hoverheader === 10? 'var(--farba-main2)' :"transparent", }}
                
                            
            ikona={
  darkMode ? (
    <i className='ikona bx bx-moon'></i>
  ) : (
    <i className='ikona bx bx-sun'></i>
  )
}
                            ></Ikony>
                      </div>
                    


                    {/*  */}
     
                   <div className='upozorenie'>

                    
                            <div className='fotkaHeader'>
                                <img className = "foteckaaa"src="muz.jpg" alt="" />
                            </div>
                            <div className='textHeaderspodok'>
                            <p style={{ fontSize: "var(--font-size-base2)", whiteSpace: "nowrap" }}>Leo Fudaly</p>

                                <p  className='textEmail' >Leo.fudaly@gmail.com</p>
                            </div>
                            <div className='ikonaHeaderodhlasenie'>
                                <i class='ikona2  bx bx-log-in' 
                                style=
                                {{
                                    cursor:"pointer",
                                   color: hoverheader === 11? 'var( --farba-main)' :"var(--farba-cierna)",


                                }}
                                onMouseEnter={() => sethoverheader(11)}
                                onMouseLeave={() => sethoverheader(false)}
                                ></i>
                            </div>
                       
                       
                            
                           
                    
                    
                   </div>
                   
                   

                 




            </div>
            </div>



        </div>
      
    </motion.div>
 
    </>
  )
}

export default Header
