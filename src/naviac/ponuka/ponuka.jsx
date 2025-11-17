import { 
  FaParking, 
  FaWifi, 
  FaTv, 
  FaSnowflake, 
  FaUtensils, 
  FaMicrophone, 
  FaHotTub, 
  FaPlug, 

FaCalendarAlt,
  // FaStove, 
  FaGlassCheers, 
  FaCookie 
} from "react-icons/fa";
import { PiCoatHangerBold } from "react-icons/pi";
import { PiWashingMachineBold } from "react-icons/pi";
import { MdMicrowave } from "react-icons/md";
import { FaMattressPillow } from "react-icons/fa6";
import { BiCabinet } from "react-icons/bi";

export const ikonyPonuk = {
  parkovanie: { ikona: FaParking, popis: "Parkovanie" },
  kuchyna: { ikona: FaUtensils, popis: "Kuchyňa" },
  WiFi: { ikona: FaWifi, popis: "WiFi" },
  klimatizacia: { ikona: FaSnowflake, popis: "Klimatizácia" },
  televizia: { ikona: FaTv, popis: "Televízia" },
  mikrovlnna_rura: { ikona: MdMicrowave, popis: "Mikrovlnná rúra" },
  chladnicka: { ikona: FaSnowflake, popis: "Chladnička" }, // nahradené
  pracka: { ikona: PiWashingMachineBold, popis: "Práčka" },
  tepla_voda: { ikona: FaHotTub, popis: "Teplá voda" },
  hostitel: { ikona: FaMicrophone, popis: "Privíta vás hostiteľ" },
  bezplatne_parkovanie_na_ulici: { ikona: FaParking, popis: "Bezplatné parkovanie na ulici" },
  umyvacka_riadu: { ikona: FaSnowflake, popis: "Umývačka riadu" }, // môžeš nahradiť vhodnou
  // indukcny_sporak: { ikona: FaStove, popis: "Indukčný sporák" },
  // klasicka_rura: { ikona: FaStove, popis: "Klasická rúra" },
  rychlovarna_kanvica: { ikona: FaPlug, popis: "Rýchlovarná kanvica" },
  pohare_na_vino: { ikona: FaGlassCheers, popis: "Poháre na víno" },
  plech_napecenie: { ikona: FaCookie, popis: "Plech na pečenie" },
  jedalensky_stol: { ikona: FaUtensils, popis: "Jedálenský stôl" },
  pobyt:{ikona:FaCalendarAlt ,popis:"Dlhodobé pobyty povolené"},
  vesiak:{ikona:PiCoatHangerBold ,popis:"Vešiaky"},
  vankus:{ikona:FaMattressPillow ,popis:"Ďalšie vankúše a prikrývky"},
  priestor:{ikona:BiCabinet ,popis:"Úložný priestor na oblečenie"}
};
