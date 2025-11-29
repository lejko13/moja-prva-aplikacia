import { createContext, useState,useRef,useContext, useEffect } from "react";

// vytvorenie kontextu
export const GlobalContext = createContext();

// provider, ktorý obalí celý projekt
export const GlobalProvider = ({ children,zmena }) => {

  


  // const[presun,setPresun] = useState([])

  const[presun ,setPresun] = useState(() => {
    const navrat = localStorage.getItem('nova')
      return navrat ? JSON.parse(navrat) : []; 

  })
 
  useEffect(() => {
    localStorage.setItem('nova',JSON.stringify(presun))

  },[presun])

  const [pocetOblubene, setPocetOblubene] = useState(0);
  const[filter,setFilter]  = useState(false)
const[teraz,seTeraz] = useState(false)

const informacie = useRef(null)
const[info,setInfo] = useState(null)
const doplnok = useRef(null);
 const[vidim,setVidim] = useState(false)

const[ceny,setCeny] =useState(false)

const[dospeli,setDospeli] = useState(1)
const[deti,setDeti] = useState(0)
const[batolata,setBatolata] = useState(0)


const objekt1 = useRef(null)


const[random,setRandom] = useState(null)




// useEffect(() => {
//    zmena.current.scrollTo({ top: informacie, behavior: "smooth" });


// },[info])


const hodnotenie = useRef(null)
const majitel = useRef(null)
const otazky = useRef(null)


const klikanec = useRef(null)
const[popokno,setPopokno] =  useState(false)

const scrollToRef = (ref, offset = 0) => {
  if (ref.current && zmena.current) {
    const top = ref.current.offsetTop; // vzdialenosť od vrchu scroll kontajnera
    zmena.current.scrollTo({ top: top - offset, behavior: "smooth" });
  }
};

  return (
    <GlobalContext.Provider value={{ pocetOblubene,setPocetOblubene,filter,setFilter,teraz,seTeraz,popokno,setPopokno,informacie,hodnotenie,setInfo,scrollToRef,
      majitel,otazky,ceny,setCeny,doplnok,
      dospeli,setDospeli,deti,setDeti,batolata,setBatolata,setPresun,presun,objekt1,
      vidim,setVidim,klikanec,random,setRandom

     }}>
      {children}
    </GlobalContext.Provider>
  );
};