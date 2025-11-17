import './otazky.css'
import React, { useState } from 'react'
import Hybemkomponent from '../hybemkomponent/hybemkomponent'

const Otazky = () => {
  const [aktualnyIndex, setAktualnyIndex] = useState(1) // index rozbalenej komponenty

  const klikHandler = (index) => {
    setAktualnyIndex(index);
  }

  return (
    <div className='Otazky'>
      <Hybemkomponent
      aktualnyIndex = {aktualnyIndex}
      odpoved = "Áno, sú tu vstavané skrine aj menšia komora."
      texthore = "Je v byte dostatok úložného priestoru?"
        index={1}
        zvacseny={aktualnyIndex === 1}
        onClick={() => klikHandler(1)}
      />
      <Hybemkomponent
       odpoved = "Približne 3 minúty chôdze od vchodu."
          texthore = "Ako ďaleko je najbližšia zastávka MHD?"
        index={2}
        zvacseny={aktualnyIndex === 2}
        onClick={() => klikHandler(2)}
      />
      <Hybemkomponent
       odpoved = "Áno, obývačka a kuchyňa sú orientované na juh."
          texthore = "Je byt orientovaný na slnečnú stranu?"
        index={3}
        zvacseny={aktualnyIndex === 3}
        onClick={() => klikHandler(3)}
      />
      <Hybemkomponent
       odpoved = "Áno, moderný a pravidelne servisovaný."
          texthore = "Je v dome výťah?"
        index={4}
        zvacseny={aktualnyIndex === 4}
        onClick={() => klikHandler(4)}
      />
      <Hybemkomponent
       odpoved = "V budove je optika, rýchlosť až 1 Gbps."
          texthore = "Ako rýchlo sa dá pripojiť internet?"
        index={5}
        zvacseny={aktualnyIndex === 5}
        onClick={() => klikHandler(5)}
      />
      
    </div>
  )
}

export default Otazky
