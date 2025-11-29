import './clovekpage.css';
import { useParams } from "react-router-dom";
// import React, { useState, useRef } from 'react';

import Komponenta from '../../naviac/komponenta/komponenta'
import Templatepage from '../tempaltepage/templatepage'
import { apartmany } from "../../naviac/fuzzy/fuzzy"; // tvoj lokálny zoznam

import { motion, AnimatePresence,  } from "framer-motion";

import Linka from '../../naviac/linka/linka'
import Castosobaswiper from '../../naviac/castosobaswiper/castosobaswiper'
import Footer from '../../pages/footer/footer'
import Textvzorecek from '../../naviac/textvzrorecek/textvzorecek'
import Zobrazenieuctu from '../../naviac/zobrazenieuctu/zobrazenieuctu'
import Ikonypage from '../../naviac/ikonypage/ikonypage'

import { MdOutlineCleaningServices } from "react-icons/md";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoMdTime } from "react-icons/io";
import { RiGraduationCapLine } from "react-icons/ri";
import { FiFileText } from "react-icons/fi";
import { MdOutlineTextsms } from "react-icons/md";
import { FaRegMap } from "react-icons/fa6";
import { PiMoney } from "react-icons/pi";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { GrSecure } from "react-icons/gr";
import Lenkukazka from '../../naviac/lenukazka/lenkukazka'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay,Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {vyhody} from  '../../naviac/vyhody/vyhody'


import Hybesto from '../../naviac/hybesto/hybesto'
import Textcastosoba from '../../naviac/textecastosoba/textcastosoba'
import Owerlap from '../../pages/owerlap/owerlap'
import Ukazkahodnoteie from '../../naviac/ukazkahodnotenie/ukazkahodnotenie'

import Nahlad from '../../naviac/nahlad/nahlad'
import Swiperludia from '../../naviac/swiperludia/swiperludia'
import { color } from 'framer-motion';

import Vyhodyzaklad from '../../naviac/vyhodyzakalad/vyhodyzaklad'

import Hybesa from '../../naviac/hybesa/hybesa'

import React, { useState, useRef,useContext,useEffect, use } from 'react';
import { GlobalContext } from '../../naviac/reactcontext/reactcontext'

import useBreakpoint from '../../naviac/hook/breakpoint'
import Malytexticek from '../../naviac/malytext/malytexticek'
const Clovekpage = () => {
  const toggleRef1 = useRef(null);
  const toggleRef2 = useRef(null);
  const toggleRef3 = useRef(null);
  const premenna = useRef(null)
  const premenna2 = useRef(null)
  const inteligent = useRef(null)
      

    const swiperRef = useRef(null);
   const[hover,setHover] = useState(null)
  const { id } = useParams(); // získame ID z URL
  const apartman = apartmany.find(a => a.id === id); // nájdeme konkrétny objekt

  if (!apartman) return <p>Apartmán nenájdený</p>;

  const vybrate = apartmany.filter(a => apartman.idecka.includes(a.id));

  
   const { pocetOblubene, setPocetOblubene, filter, setFilter,owerlap,seTeraz,teraz ,setInfo,scrollToRef,informacie,hodnotenie,majitel,otazky,
         vidim,setVidim,text2,druha,tretia,akotofunugje,klikanec,objekt1,random,setRandom
      } = useContext(GlobalContext);

      const { isMobile,isTablet,isDesktop } = useBreakpoint();
  return (
    
    <Templatepage header={ 
       <div className="cerveny-box"> 
          <div style={{display:"flex",flexDirection:"column"}}>
                <span className='texticekohlavny'>{`Zoznámte sa s hostiteľom ${apartman.veduci.meno}` }</span>
                <div style={{whiteSpace: 'nowrap', fontSize: "var(--font-size-base2)", color: "var(--farba-sivaText)"}}>
                  <span>{apartman.veduci.zeco} </span>
              
                  
                  </div>
            </div>
            <Ikonypage
            onMouseEnter={() => setHover(10)}
            onMouseLeave={() => setHover(null)}
            onClick={() => {seTeraz(true),

              setRandom(<Form></Form>)
            }}

          style={{
              cursor: "pointer",
      
          backgroundColor: hover === 10 ? "var(--farba-main2)" : "transparent"
          }}
            ikona = {<i class='bx bx-share' ></i>}
            ikonastyle = {{ color: hover === 10 ? "var(--farba-cierna)" : "var(--farba-sivaText)",}}
            text = "Zdieľať"
            textStyle={{
              color: hover === 10 ? "var(--farba-cierna)" : "var(--farba-sivaText)",
            }}
          ></Ikonypage>
             
            </div>}>
      <Owerlap
        style={{backgroundColor:"var(--farba-bielaEfekty)"}}
        >{random}
      </Owerlap>
      <div style={{
        height:"100%",
        width:"100%",
        padding:"0px 40px",
        // backgroundColor:"pink"
      }}>
      
       {/* <div className='headerericeek'>koko</div> */}
        <div className='datatujeme2'>
     
            {/* <div className='datatujeme'></div> */}
            <div>
              <Komponenta
              dizajnicek = {{display: "none"}}
                    nazov = "Zoznámte sa s hostiteľom"
                      stylececek = {{ display: "none" }}
                       desing = {{display: "none" }}
                      zobrazenie = {{ display: "none" }}
               doleziet = {{ display: "none" }}
                    >
                      <div className='zoznamntesaobal'  style={{display:"flex",height:"fit-content",padding:"0px 0px 20px 0px"}}>
                        <div className='totokdejetexoto' style={{width:"400px",height:"100%",backgroundColor:"white",   position: "sticky",top:"100px"}}>
                         
                
                           <Zobrazenieuctu 
                              stylecekk ={{
                                width:"100%",
                                // backgroundColor:"red",
                                display:"flex",
                           alignItems: "center",
                                height:"fit-content",
                              }}
                              velkost = {{
                                // backgroundColor:"red",
                                height:"90px",
                                width:"90px"
                              }}
                                meno={apartman.veduci.meno}
                                priezvisko = {apartman.veduci.priezvisko}
                                fotka = {apartman.veduci.fotka}
                                titul = {apartman.veduci.popisek}
                                >
                                <Ukazkahodnoteie
                                cislo={apartman.info.reference}
                                    co = "Počet hodnotení"
                                ></Ukazkahodnoteie>
                                    <div style={{width:"100%",backgroundColor:"var( --farba-main2)",height:"1px"}}>  </div>
                                <Ukazkahodnoteie
                                ikona = {<i class='bx bxs-heart'></i>}
                                        cislo={apartman.info.hodnotenie}
                                    co = "Ohodnotenie"
                                ></Ukazkahodnoteie>
                                    <div style={{width:"100%",backgroundColor:"var( --farba-main2)",height:"1px"}}> </div>
                                <Ukazkahodnoteie
                                  cislo={apartman.info.reference}
                                    co = "Počet hodnotení"
                                ></Ukazkahodnoteie>

                              </Zobrazenieuctu>
                          <div className='obaltexty'  style={{padding:"5px",width:"100%"}}>


                            <Malytexticek
                            // textstyle = {{fontSize:"17px"}}
                            // textstyel2 = {{fontSize:"17px"}}
                            // ikonastyle = {{fontSize:"25px"}}
                            ikona= {<RiGraduationCapLine />}
                            text = "Moja škola:"
                          
                            text2= {apartman.veduci.skola}
                            ></Malytexticek>

                            <Malytexticek
                            //  textstyle = {{fontSize:"17px"}}
                            // textstyel2 = {{fontSize:"17px"}}
                            //  ikonastyle = {{fontSize:"25px"}}
                            ikona= {<LuBriefcaseBusiness />}
                            text = "Moja práca:"
                          
                            text2= {apartman.veduci.praca}
                            ></Malytexticek>
                          </div>
             
                        
                          </div >
                          

                         

                      
                        <div className='totokdeniejetext' style={{padding:"20px 0px 0px 0px"}}>
                          <Textvzorecek
                          nazov={`${apartman.veduci.meno} je ${apartman.veduci.typ}`}
                         

                           text1 = {apartman.veduci.texticek}
                          
                          ></Textvzorecek>
                          <Textvzorecek
                          nazov="Podrobnosti o hostiteľovi"
                          text = {apartman.veduci.podrobnost1}
                          text2 = {apartman.veduci.podrobnost2}
                          
                          > {apartman?.majitel?.slice(0, 4).map((key) => {
                      const vyhoda = vyhody[key];
                      const Ikona = vyhoda.ikona;

                      return (
                        <Vyhodyzaklad
                          key={key}
                          ikona={<Ikona />}
                          horetext={vyhoda.text}
                          doletext={vyhoda.text2}
                        />
                      );
                    })}

                         <div style={{width:"100%",display:"flex",gap:"10px"}}>
                           <Ikonypage

                           style={{
                            backgroundColor:hover === 100 ? "var(--farba-main2)" : "var(--farba-main)",
                           
                            cursor:"pointer"
                           }}
                           ikonastyle ={{
                            color:hover === 100 ? "var(--farba-sivaText)" : "var(--farba-biela)",

                           }}
                           textStyle
                           ={{
                            color:hover === 100 ? "var(--farba-sivaText)" : "var(--farba-biela)",

                           }}
                           onMouseEnter={() => setHover(100)}
                           onMouseLeave={() => setHover(null)}
                           ikona = {<MdOutlineTextsms/>}
                           text = "Napíšte hostiteľovi"
                            ></Ikonypage>

                           <Ikonypage
                                onMouseEnter={() => setHover(1)}
                                onMouseLeave={() => setHover(null)}
                                style={{
                                  backgroundColor:hover === 1 ? "var(--farba-main)" : "var(--farba-main2)",
                                  cursor: "pointer",
                                  height:"45px"
                                }}
                                textStyle = {{
                                  color:hover === 1 ? "var(--farba-biela)" : "var(--farba-sivaText)",

                                }}
                                ikonastyle = {{
                                    color:hover === 1 ? "var(--farba-biela)" : "var(--farba-sivaText)",
                                }}
                                  onClick={() => {seTeraz(true),

                                                setRandom(<Hybesa>
                                                  <div className='vyhodizobraz'>
                                                    <div style={{fontSize:"var(  --font-size-base4)"}}>{`Prednosti používateľa ${apartman.veduci.meno}`}</div>
                                                    <div style={{fontSize:"var(  --font-size-small)",color:"var(--farba-sivaText)"}}>Používateľ má schopnosť rýchlo sa učiť nové veci, efektívne organizovať úlohy a riešiť problémy. Vie komunikovať jasne a spolupracovať v tíme, je spoľahlivý a flexibilný pri riešení rôznych situácií. Disponuje analytickým myslením, dokáže sa prispôsobiť zmenám a prístupom k výzvam zvyšuje produktivitu a kvalitu práce.</div>
                                                    <div class="my-box">
                                                      {apartman?.majitel?.map((key) => {
                                  const vyhoda = vyhody[key]; // z objektu vyhody
                                  const Ikona = vyhoda.ikona;
                                  // komponent ikony
                                  return (
                                    <>
                                    <Vyhodyzaklad 
                                      key={key}
                                      ikona={<Ikona />}
                                      horetext={vyhoda.text}
                                      doletext={vyhoda.text2}
                                    >
                                    
                                    </Vyhodyzaklad>
                      
                              <div style={{width:"100%",backgroundColor:"var( --farba-main2)",height:"1px"}}> </div>
                                </>
                              );
                            })}


                                      </div>
                                    </div></Hybesa>
                                  )} }
                    // ikona = {<i class='bx bx-flag' ></i>}
                    text = "Zobraziť viac"
                            ></Ikonypage>


                   

                            
                    </div> 
                          </Textvzorecek>
                       
                          
                          

                          

                            <div style={{position:"relative",width:"fit-content"}}>
                            <p className='kliknetexticek'
                            ref={inteligent}
                            onClick={() => setVidim(prev => prev === "ukazka" ? false : "ukazka")}
                          >Túto ponuku spravuje jednotlivec. Viac informácií</p>
                          <AnimatePresence>
                              {vidim === "ukazka" &&
                                    <Lenkukazka
                                    style={{
                                      left:"0px",
                                      top:"30px"
                                    }}
                                    ><span>Túto ponuku spravuje jednotlivec, ktorý sa osobne stará o každý detail, aby bol váš pobyt čo najpríjemnejší. Komunikácia s hostiteľom prebieha priamo a rýchlo, takže všetky vaše otázky a požiadavky sú vybavené promptne. Hostiteľ poskytuje jasné a presné informácie o ubytovaní, vybavení a okolí, a zároveň sa snaží vytvoriť priateľskú a bezpečnú atmosféru. Platby a rezervácie sú zabezpečené cez oficiálny systém, aby ste mali istotu a ochranu pri každej transakcii. Vaša spokojnosť a pohodlie sú prioritou, pričom hostiteľ kladie dôraz na čistotu, pohodlie a kvalitný zážitok počas celej doby pobytu.</span></Lenkukazka>
                              }
                          </AnimatePresence>
                      




                            </div>
                            
                    {/* <Linka ></Linka> */}
                  
{/* 
                      <div  className='malitexcekekhover' style={{display:"flex",gap:"10px",fontSize:"var(  --font-size-small)"}}>
                       <GrSecure />
                            <p >Na ochranu platby posielajte peniaze a komunikujte s hostiteľmi vždy prostredníctvom Airbnb.</p>
                        </div> */}
                          </div>
                      </div>
                    </Komponenta>

            </div>

               {/* <div style={{width:"100%",backgroundColor:"PINK"}}></div> */}
       

           <div style={{padding:"15px 0px"}}><Linka ></Linka> </div>   
              
                 <Castosobaswiper
                cislo = {2}
                    nazov={`Ponuky používateľa ${apartman.veduci.meno}`}
                leletex = {vybrate}
                ></Castosobaswiper>
              
                <div style={{display:"flex",flexDirection:"column",height:"fit-content",gap:"10px"}}>


                    <Ikonypage
                      onMouseEnter={() => setHover(2)}
                    onMouseLeave={() => setHover(null)}
                     style={{
                      backgroundColor:hover === 2 ? "var(--farba-main)" : "var(--farba-BIELA)",
                      cursor: "pointer",
                      height:"45px"
                    }}
                    textStyle = {{
                      color:hover === 2 ? "var(--farba-biela)" : "var(--farba-sivaText)",

                    }}
                    ikonastyle = {{
                        color:hover === 2 ? "var(--farba-biela)" : "var(--farba-sivaText)",
                    }}
                    ikona = {<i class='bx bx-block' ></i>}
                    text = "Zablokovať používateľa Adam"
                    ></Ikonypage>


                    <Ikonypage
                    onMouseEnter={() => setHover(1)}
                    onMouseLeave={() => setHover(null)}
                    style={{
                      backgroundColor:hover === 1 ? "var(--farba-main)" : "var(--farba-BIELA)",
                      cursor: "pointer",
                      height:"45px"
                    }}
                    textStyle = {{
                      color:hover === 1 ? "var(--farba-biela)" : "var(--farba-sivaText)",

                    }}
                    ikonastyle = {{
                        color:hover === 1 ? "var(--farba-biela)" : "var(--farba-sivaText)",
                    }}
                    ikona = {<i class='bx bx-flag' ></i>}
                    text = "Nahlásiť používateľa Adam"
                    ></Ikonypage>
                  </div>



          <div style={{padding:"15px 0px"}}><Linka ></Linka> </div>   
               
                <Swiperludia

               
                 leletex = {apartman.hodnotenie2}
                 nazov={`Hodnotenia používateľa ${apartman.veduci.meno}`}
                   nakliknutie={() => {seTeraz(true),

                                  setRandom(<Hybesa
                                  onClick={() => seTeraz(false)}
                                  >
                                    <Hybesto
                                           
                  

                                    ></Hybesto>


                                  </Hybesa>
                                  )}}


                ></Swiperludia>
             
              
{/* 
              <div style={{padding:"15px 0px"}}><Linka ></Linka> </div>    */}

                 
        </div>
             <Footer></Footer>
        </div>
   
   
    </Templatepage>
  );
};

export default Clovekpage;

