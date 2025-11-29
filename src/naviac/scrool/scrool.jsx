import { useEffect ,useContext} from "react";
import { useLocation } from "react-router-dom";
import { GlobalContext } from '../../naviac/reactcontext/reactcontext'
import React from 'react'

const Scrool = ({zmena,domov}) => {
  const {informacie,hodnotenie,majitel,otazky } = useContext(GlobalContext);
  const { pathname } = useLocation();
    // const referencie = useEffect()

    useEffect(() => {
       
        // window.addEventListener("scroll")
        if (zmena.current) {
             console.log("kar");
    zmena.current.scrollTo({ top: 0, behavior: "auto" });
  }
        

    },[pathname,domov]) 

    
   return null;
}

export default Scrool
