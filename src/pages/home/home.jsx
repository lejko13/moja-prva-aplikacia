import React, { useRef, useEffect, useState } from 'react'
import './home.css'
import Templatepage from '../tempaltepage/templatepage'


import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Hodnotenie from '../../naviac/hodnotenie/hodnotenie'
import Ukazovatelko from '../../naviac/ukazovatelko/ukazovatelko'
import Nahlad  from '../../naviac/nahlad/nahlad'
import Footer from '../footer/footer'
import Maincast from '../../naviac/maincast/maincast'
import Card from '../../naviac/portalpop/portalpop';


import {apartmany} from '../../naviac/fuzzy/fuzzy'

const Home = () => {
   
 

  return (
    
    
    <motion.div className='Main'
     initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }} 
      
    >
      <Card
      nadpis="Pridané do obľúbených"
      ikona ={ <i className="bx bx-heart"></i>}
      ></Card>
     
      <div className='vrch'>
        <Maincast  
        text= 'Lukratívne bývanie na Slovensku'  
        malytext = "Objavte moderné apartmány, vily a rezidencie v najžiadanejších lokalitách Slovenska." 
         data={apartmany.filter(a => 
    ["4BZH","5BZV","1ZDK","5ZR","3ZR","3NL","2NZ","2NZM","4ZM","5ZC","1TBB","3TPD","2PPD","5BLU","3BBY"].includes(a.id))} ></Maincast>
        <Maincast  
        text= 'Vyhľadávané bývanie v Bratislave'  
         malytext = "Bratislava ponúka širokú škálu nehnuteľností, ktoré spájajú moderný dizajn, komfort a výbornú dostupnosť." 
         data = {apartmany.filter(a => a.location === "Bratislava")} ></Maincast>
        <Maincast  
        text= 'Populárne lokality na bývanie pod Tatrami' 
         malytext = "Pod Tatrami nájdete miesta, ktoré spájajú pokojné bývanie v prírode s dobrou dostupnosťou do okolitých miest." 
         data={apartmany.filter(a => a.location === "Poprad" || a.location === "Kežmarok")} ></Maincast>
        <Maincast 
        text= 'Obľúbené lokality na strednom Slovensku'  
         malytext = "Stredné Slovensko ponúka kombináciu pokojného bývania, dobrých pracovných príležitostí a krásnej prírody." 
        data={apartmany.filter(a => a.location === "Banská Bystrica" || a.location === "Žiar nad Hronom")}></Maincast>
      <Maincast 
      text='Exkluzívne bývanie na západnom Slovensku' 
       malytext = "Západné Slovensko ponúka prémiové nehnuteľnosti pre tých, ktorí hľadajú kombináciu komfortu, moderného dizajnu a strategickej polohy." 
      data={apartmany.filter(a => a.location === "Trnava" || a.location === "Nitra")} ></Maincast>
      <Maincast text='Atraktívne rezidencie v Košickom kraji' 
       malytext = "Košický kraj ponúka moderné a atraktívne rezidenčné projekty pre všetkých, ktorí hľadajú komfortné bývanie v spojení s prírodou a dobrou občianskou vybavenosťou." 
      data={apartmany.filter(a => a.location === "Košice" || a.location === "Michalovce")} ></Maincast>

        
      </div>
      <div className='dalsie'>
         {/* <Maincast></Maincast>
         <Maincast></Maincast>
         <Maincast></Maincast> */}
      </div>
      <div style={{display:"flex",padding:"0px 40px 0px 0px"}}>
    
     <Footer></Footer>
     </div>




    
    </motion.div>
  )
}

export default Home
