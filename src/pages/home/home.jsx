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
import Inyrozmer from '../../naviac/inyrozmer/inyrozmer'

import Maincastoblubene from '../../naviac/maincastoblubene/maincastoblubene'
// import { useBreakpoint } from "../../naviac/hook/breakpoint";
import useBreakpoint from '../../naviac/hook/breakpoint'

const Home = ({domov,lavasipka,pravasipka}) => {
   
 

  return (
    
    <>
    <motion.div className='Main'
     initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }} 
      
    >
      <Card
      nadpis="Pridané do obľúbených"
      ikona ={ <i className="bx bx-heart"></i>}
      ></Card>
     
{domov === "domov" &&   <div className='vrch'>

<Maincastoblubene
        lava={el => lavasipka.current[90] = el} 
  prava={el => pravasipka.current[90] = el} 
 textMobile = "Pridané do obľúbených"
      textTablet = "Pridané do obľúbených"
      textDesktop = "Pridané do obľúbených"
  

      textMobileMALY = "Položka bola uložená do vášho zoznamu."
      textTabletMALY = "Položka bola uložená do vášho zoznamu."
       data = {apartmany.filter(a => a.location === "Bratislava")}
></Maincastoblubene>


        <Maincast 
          lava={el => lavasipka.current[0] = el} 
  prava={el => pravasipka.current[0] = el} 
      textMobile = "Bývanie na Slovensku"
      textTablet = "Lukratívne bývanie na Slovensku"
      textDesktop = "Lukratívne bývanie na Slovensku"

      textMobileMALY = "Moderné apartmány, vily a rezidencie na Slovenska."
      textTabletMALY = "Objavte moderné apartmány, vily a rezidencie v lokalitách Slovenska."
      textDesktopMALY = "Objavte moderné apartmány, vily a rezidencie v najžiadanejších lokalitách Slovenska."
        // text= 'Lukratívne bývanie na Slovensku'  
     
         data={apartmany.filter(a => 
    ["4BZH","5BZV","1ZDK","5ZR","3ZR","3NL","2NZ","2NZM","4ZM","5ZC","1TBB","3TPD","2PPD","5BLU","3BBY"].includes(a.id))} ></Maincast>
        <Maincast  
             lava={el => lavasipka.current[1] = el} 
  prava={el => pravasipka.current[1] = el} 
   textMobile = "Bývanie v Bratislave"
      textTablet = "Bývanie v Bratislave"
      textDesktop = "Vyhľadávané bývanie v Bratislave"

      textMobileMALY = "Bratislava ponúka moderné nehnuteľnosti s výbornou dostupnosťou."
      textTabletMALY = "Bratislava ponúka moderné a komfortné nehnuteľnosti s výbornou dostupnosťou."

      textDesktopMALY = "Bratislava ponúka širokú škálu nehnuteľností, ktoré spájajú moderný dizajn, komfort a výbornú dostupnosť." 
        // text= 'Lukratívne bývanie na Slovensku'  
 
         data = {apartmany.filter(a => a.location === "Bratislava")} ></Maincast>

        <Maincast
          lava={el => lavasipka.current[2] = el} 
  prava={el => pravasipka.current[2] = el} 
  
   textMobile = "Lokality pod Tatrami"
      textTablet = "Lokality na bývanie pod Tatrami"
      textDesktop = 'Populárne lokality na bývanie pod Tatrami' 

      textMobileMALY = "Pod Tatrami nájdete miesta, ktoré spájajú pokojné bývanie v prírode s dobrou dostupnosťou do okolitých miest."
      textTabletMALY = "Pod Tatrami nájdete miesta, ktoré spájajú pokojné bývanie v prírode s dobrou dostupnosťou."
      textDesktopMALY =  "Pod Tatrami nájdete miesta, ktoré spájajú pokojné bývanie v prírode s dobrou dostupnosťou do okolitých miest." 

       
         data={apartmany.filter(a => a.location === "Poprad" || a.location === "Kežmarok")} ></Maincast>
        <Maincast 
            lava={el => lavasipka.current[3] = el} 
  prava={el => pravasipka.current[3] = el}  


   textMobile = "Lokality pod Tatrami"
      textTablet = "Lokality na bývanie pod Tatrami"
      textDesktop = 'Obľúbené lokality na strednom Slovensku' 

      textMobileMALY = "Stredné Slovensko ponúka pokojné bývanie a dobré pracovné príležitostí."
      textTabletMALY = "Stredné Slovensko ponúka pokojné bývanie a dobré pracovné príležitostí."
      textDesktopMALY =  "Stredné Slovensko ponúka kombináciu pokojného bývania, dobrých pracovných príležitostí a krásnej prírody." 

        
        data={apartmany.filter(a => a.location === "Banská Bystrica" || a.location === "Žiar nad Hronom")}></Maincast>

      <Maincast 
          lava={el => lavasipka.current[4] = el} 
  prava={el => pravasipka.current[4] = el}  
  textMobile ='Bývanie na západnom Slovensku' 
      textTablet = 'Bývanie na západnom Slovensku' 
      textDesktop = 'Exkluzívne bývanie na západnom Slovensku' 

      textMobileMALY = "Západné Slovensko ponúka prémiové nehnuteľnosti."
      textTabletMALY =  "Západné Slovensko ponúka prémiové nehnuteľnosti s  kombináciu komfortu a moderného dizajnu."
      textDesktopMALY =  "Západné Slovensko ponúka prémiové nehnuteľnosti pre tých, ktorí hľadajú kombináciu komfortu, moderného dizajnu a strategickej polohy."

     
       malytext = "Západné Slovensko ponúka prémiové nehnuteľnosti pre tých, ktorí hľadajú kombináciu komfortu, moderného dizajnu a strategickej polohy." 
      data={apartmany.filter(a => a.location === "Trnava" || a.location === "Nitra")} ></Maincast>
      <Maincast text='Atraktívne rezidencie v Košickom kraji' 
          lava={el => lavasipka.current[5] = el} 
  prava={el => pravasipka.current[5] = el}  
       malytext = "Košický kraj ponúka moderné a atraktívne rezidenčné projekty pre všetkých, ktorí hľadajú komfortné bývanie v spojení s prírodou a dobrou občianskou vybavenosťou." 
      data={apartmany.filter(a => a.location === "Košice" || a.location === "Michalovce")} ></Maincast>

        
      </div>}



  {domov === "mestke" && <div className='mestke'>
     <Maincast  
         lava={el => lavasipka.current[6] = el} 
  prava={el => pravasipka.current[6] = el}  
        text= 'Exkluzívne mestské bývanie v Bratislave'  
        malytext = "Objavte moderné apartmány, vily a rezidencie v najžiadanejších lokalitách Slovenska." 
data={apartmany.filter(a =>
  a.location === "Bratislava" &&  // najprv podľa mesta
  a.filter === "mesto"             // potom podľa kategórie
)} ></Maincast>
    {/* kokokokokokokokokokokokokokokokokokoooooooo */}


     <Maincast  
         lava={el => lavasipka.current[7] = el} 
  prava={el => pravasipka.current[7] = el}  
        text= 'Prémiové apartmány v Košiciach'  
        malytext = "Objavte moderné apartmány, vily a rezidencie v najžiadanejších lokalitách Slovenska." 
         data={apartmany.filter(a =>
  a.location === "Košice" &&  // najprv podľa mesta
  a.filter === "mesto"             // potom podľa kategórie
)} ></Maincast>
        {/* kokokokokokokokokokokokokokokokokokoooooooo */}
     <Maincast  
         lava={el => lavasipka.current[8] = el} 
  prava={el => pravasipka.current[8] = el}  
        text= 'Moderné bývanie v srdci Prešova'  
        malytext = "Objavte moderné apartmány, vily a rezidencie v najžiadanejších lokalitách Slovenska." 
         data={apartmany.filter(a =>
  a.location === "Prešov" &&  // najprv podľa mesta
  a.filter === "mesto"             // potom podľa kategórie
)} ></Maincast>
        {/* kokokokokokokokokokokokokokokokokokoooooooo */}
     <Maincast  
         lava={el => lavasipka.current[9] = el} 
  prava={el => pravasipka.current[9] = el}  
        text= 'Lukratívne rezidencie v Trnave'  
        malytext = "Objavte moderné apartmány, vily a rezidencie v najžiadanejších lokalitách Slovenska." 
          data={apartmany.filter(a =>
  a.location === "Trnava" &&  // najprv podľa mesta
  a.filter === "mesto"             // potom podľa kategórie
)} ></Maincast>
        {/* kokokokokokokokokokokokokokokokokokoooooooo */}
     <Maincast  
         lava={el => lavasipka.current[10] = el} 
  prava={el => pravasipka.current[10] = el}  
        text= 'Kvalitné a komfortné bývanie v Nitre'  
        malytext = "Objavte moderné apartmány, vily a rezidencie v najžiadanejších lokalitách Slovenska." 
         data={apartmany.filter(a =>
  a.location === "Nitra" &&  // najprv podľa mesta
  a.filter === "mesto"             // potom podľa kategórie
)} ></Maincast>
        {/* kokokokokokokokokokokokokokokokokokoooooooo */}
             <Maincast  
                 lava={el => lavasipka.current[11] = el} 
  prava={el => pravasipka.current[11] = el}  
        text= 'Elegantné a lukratívne bývanie v Poprade'  
        malytext = "Objavte moderné apartmány, vily a rezidencie v najžiadanejších lokalitách Slovenska." 
         data={apartmany.filter(a =>
  a.location === "Poprad" &&  // najprv podľa mesta
  a.filter === "mesto"             // potom podľa kategórie
)} ></Maincast>

   
    
    </div>}
  {domov === "Vidiek" && <div className='Vidiek'>
     <Maincast 
         lava={el => lavasipka.current[12] = el} 
  prava={el => pravasipka.current[12] = el}  
      text='Vidiecke bývanie na západnom Slovensku' 
       malytext = "Vidiecke prostredie s rýchlym dosahom na mestá." 
      data={apartmany.filter(a => a.kraj === "BratislavskýVIDIEK" )} ></Maincast>
      <div className='vymezodvac'></div>
 

     <Maincast 
         lava={el => lavasipka.current[13] = el} 
  prava={el => pravasipka.current[13] = el}  
      text='Vidiecke bývanie na strednom Slovensku' 
       malytext = "Pokojná krajina obklopená horami a čistým vzduchom." 
        data={apartmany.filter(a => a.kraj === "BanskobystrickýVIDIEK")}></Maincast>
         <div className='vymezodvac'></div>
     

     <Maincast 
         lava={el => lavasipka.current[14] = el} 
  prava={el => pravasipka.current[14] = el}  
      text='Vidiecke bývanie na východnom Slovensku' 
       malytext = "Tichý vidiek s tradičnou atmosférou a širokými výhľadmi." 
      data={apartmany.filter(a => a.kraj === "PrešovskýVIDIEKT")} ></Maincast>
         <div className='vymezodvac'></div>
     

  


    </div>}
  {domov === "Pre dvoch" && <div className='dvoch'>
    <Inyrozmer
    text = {"Výber ubytovaní pre dvojice po celom Slovensku"}
    textmaly = {"Dokonalé apartmány pre dvoch útulné, pohodlné a presne pre váš romantický pobyt."}
     data={apartmany.filter(a => a.ideal === "predvoch")}

  ></Inyrozmer></div>}
  {/* {domov === "S výhľadom" && <div className='výhľadom'></div>} */}
  {domov === "Prémiové" && <div className='Prémiové'>
    <Maincast      lava={el => lavasipka.current[15] = el} 
  prava={el => pravasipka.current[15] = el}  
      text='Prémiové bývanie na západe Slovenska' 
       malytext = "Vidiecke prostredie s rýchlym dosahom na mestá." 
      data={apartmany.filter(a => a.kraj === "Bratislavský"  &&   a.premia === "ano" )} ></Maincast>
      <div className='vymezodvac'></div>
 

     <Maincast 
         lava={el => lavasipka.current[16] = el} 
  prava={el => pravasipka.current[16] = el}  
      text='Prémiové bývanie v strede Slovenska' 
       malytext = "Pokojná krajina obklopená horami a čistým vzduchom." 
        data={apartmany.filter(a => a.kraj === "Banskobystrický" &&   a.premia === "ano")}></Maincast>
         <div className='vymezodvac'></div>
     

     <Maincast 
         lava={el => lavasipka.current[17] = el} 
  prava={el => pravasipka.current[17] = el}  
      text='Prémiové bývanie na východe Slovenska' 
       malytext = "Tichý vidiek s tradičnou atmosférou a širokými výhľadmi." 
      data={apartmany.filter(a => a.kraj === "Košický" &&   a.premia === "ano")} ></Maincast>
         <div className='vymezodvac'></div>
    
    </div>}
  {domov === "S bazénom" && <div className='bazénom'>
     <Inyrozmer
    text = {"Ubytovanie s bazénom"}
    textmaly = {"Moderné a komfortné ubytovanie, kde si môžete počas pobytu vychutnať relax pri vlastnom bazéne."}
     data={apartmany.filter(a => a.bazen === "ano")}

  ></Inyrozmer>
    </div>}
  {/* {domov === "S parkovaním" && <div className='parkovaním'></div>} */}
     
      <div className='dalsie'>
         {/* <Maincast></Maincast>
         <Maincast></Maincast>
         <Maincast></Maincast> */}
      </div>
      <div class="flex-footer-wrap">
        <Footer></Footer>
      </div>




    
    </motion.div>
    </>
  )
}

export default Home
