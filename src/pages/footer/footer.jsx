import './footer.css'

import React, { useState } from 'react'
import  Ukazovatelko from '../../naviac/ukazovatelko/ukazovatelko'
import Linka from '../../naviac/linka/linka'
import { use } from 'react'
const Footer = () => {

  const[hover,setHover] = useState(null)
 const farba = {
  fontSize: '20px',
  color: 'var(--farba-cierna)',
  whiteSpace: 'nowrap', // pridane
}

const text = {
  fontSize: 'var(--font-size-base4)',
  color: 'var(--farba-cierna)',
  whiteSpace: 'nowrap', // pridane
}

  return (
    <div className='footer'>
      <div style={{padding:"20px 0px"}}>
      <Linka></Linka>
      </div>
      <div className='obsahfooter'>
        <div className='horecekook'>
          <div className='celokcekokok'>
            <div className='tabulka'>
              <span style={text}>Hlavné stránky webu</span>
              <div className='odkazisaem'>
                <p className='textsposokfooter'>Domov</p>
                <p className='textsposokfooter'>Moje rezervácie</p>
                <p className='textsposokfooter'>Konverzácia</p>
                <p className='textsposokfooter'>Oblúbené</p>
                <p className='textsposokfooter'>profil</p>
              </div>
            </div>

            


            <div className='tabulka2'>
              <span style={text}>Kategórie</span>
              <div className='odkazisaem'>
                <div className='odkazisaem'>
                <p className='textsposokfooter'>Bývanie na západe Slovenska</p>
                <p className='textsposokfooter'>Bývanie v strede Slovenska</p>
                <p className='textsposokfooter'>Bývanie v východe Slovenska</p>
              
              </div>
              </div>
            </div>


             <div className='tabulka'>
            <span style={text}>Kontakty</span>
            <div className='odkazisaem'>
              <div className='odkazisaem'>
      
              <p className='textsposokfooter'>Leo.fudaly@gamil.com</p>
              
      
                 
              {/* <p className='textsposokfooter'>Po - Pia: od 8:00 do 15:00</p> */}
       
               
              <p className='textsposokfooter'>+421 908 836 584</p>
         
              {/* <p className='textsposokfooter'>Domov</p> */}
              
             
            </div>
            </div>
          </div>

           <div  className='celkonwesletter'>
            <p style={text}>Prihlás sa na odber noviniek</p>
            <span className='textsposokfooter2'>Získaj darček a prvý pohľad na špeciálne ponuky a nové apartmány. Žiadny spam, len inšpiráciu na tvoje cesty.</span>

           <form 
    onSubmit={(e) => {
      e.preventDefault();
      alert("Ďakujeme za prihlásenie!"); // tu bude tvoja logika
    }}
  >
    <input 
      type="email" 
      className='inputeekcekc'
      placeholder="Zadaj svoj e-mail" 
      required
    style={{ 
    padding: '10px',
    borderRadius: 'var(--border-radius-maly)', 
    border: '1px solid #ccc', 
    width: "200px", 
    height: "40px",
    outline: 'none',        // vypne modrý focus outline
    boxShadow: 'none'       // vypne akýkoľvek shadow pri focus
  }}
    />
    <button 
      type="submit" 
      style={{ padding: '10px 20px', borderRadius: 'var( --border-radius-maly)', backgroundColor: 'var(--farba-main)', color: 'white', border: 'none', cursor: 'pointer', marginLeft: '8px', height:"40px" }}
    >
      Prihlásiť sa
    </button>
  </form>
           </div>
          </div>

         
       

        </div>
        <div className='linka'></div>
        <div className='spodok'>
          <div style={{
            color:"var(--farba-sivaText",
            // backgroundColor:"red",
            display:"flex",
            alignItems:"center",
            gap:"var(  --gap-male)"

            }}>
            <span style={{
              fontSize:"var(--font-size-base)"
            }}>© 2025 Logo</span> 
            <span
            onMouseEnter={() => setHover(10)}
            onMouseLeave={() => setHover(null)}
            style={{
                 fontSize:"var(--font-size-base2)",
              cursor:"pointer",
              transition:"var(--transition)",
              color:hover === 10 ? "var(--farba-cierna)" : "var(--farba-sivaText)"
            }}
            >Súkromie</span>

             <span
             onMouseEnter={() => setHover(11)}
            onMouseLeave={() => setHover(null)}
            style={{
              cursor:"pointer",
               fontSize:"var(--font-size-base2)",
              transition:"var(--transition)",
              color:hover === 11 ? "var(--farba-cierna)" : "var(--farba-sivaText)"
            }}
             >Podmienky</span>
             
          </div>
          <div style={{display:"flex",flexDirection:"row",gap:"var( --gap-male)"}}>
        <Ukazovatelko
            onMouseEnter={() => setHover(1)}
            onMouseLeave={() => setHover(null)}
            style={{
              backgroundColor: hover === 1 ? "var(--farba-biela)" : "var(--farba-main2)"
            }}
          >
            <i style={farba} className='bx bxl-instagram'></i>
          </Ukazovatelko>

          <Ukazovatelko
            onMouseEnter={() => setHover(2)}
            onMouseLeave={() => setHover(null)}
            style={{
              backgroundColor: hover === 2 ? "var(--farba-biela)" : "var(--farba-main2)"
            }}
          >
            <i style={farba} className='bx bxl-twitter'></i>
          </Ukazovatelko>

          <Ukazovatelko
            onMouseEnter={() => setHover(3)}
            onMouseLeave={() => setHover(null)}
            style={{
              backgroundColor: hover === 3 ? "var(--farba-biela)" : "var(--farba-main2)"
            }}
          >
            <i style={farba} className='bx bxl-facebook'></i>
          </Ukazovatelko>

          <Ukazovatelko
            onMouseEnter={() => setHover(4)}
            onMouseLeave={() => setHover(null)}
            style={{
              backgroundColor: hover === 4 ? "var(--farba-biela)" : "var(--farba-main2)"
            }}
          >
            <i style={farba} className='bx bxl-pinterest'></i>
          </Ukazovatelko>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
