import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// District images
import anakapalliImg from "../assets/anakapalli.jpg";
import anantapurImg from "../assets/anantapur.jpg";
import annamayyaImg from "../assets/annamayya.jpg";
import bapatlaImg from "../assets/bapatla.jpg";
import chittoorImg from "../assets/chittoor.jpg";
import eastGodavariImg from "../assets/east_godavari.jpg";
import eluruImg from "../assets/eluru.jpg";
import gunturImg from "../assets/guntur.jpg";
import kakinadaImg from "../assets/kakinada.jpg";
import konaseemaImg from "../assets/konaseema.jpg";
import krishnaImg from "../assets/krishna.jpg";
import kurnoolImg from "../assets/kurnool.jpg";
import nandyalImg from "../assets/nandyal.jpg";
import ntrImg from "../assets/ntr.jpg";
import nelloreImg from "../assets/nellore.jpg";
import palnaduImg from "../assets/palnadu.jpg";
import prakasamImg from "../assets/prakasam.jpg";
import srikakulamImg from "../assets/srikakulam.jpg";
import srisathyasaiImg from "../assets/srisathyasai.jpg";
import tirupatiImg from "../assets/tirupati.jpg";
import visakhapatnamImg from "../assets/visakhapatnam.jpg";
import vizianagaramImg from "../assets/vizianagaram.jpg";
import westGodavariImg from "../assets/west_godavari.jpg";
import ysrKadapaImg from "../assets/ysr_kadapa.jpg";

const districts = [
  { name: "Anakapalli", image: anakapalliImg, desc: "Known for Bojjana Konda caves and scenic hills." },
  { name: "Anantapur", image: anantapurImg, desc: "Famous for Lepakshi Temple and Penukonda Fort." },
  { name: "Annamayya", image: annamayyaImg, desc: "Hills and waterfalls offering serene beauty." },
  { name: "Bapatla", image: bapatlaImg, desc: "Coastal town with beaches and lighthouse." },
  { name: "Chittoor", image: chittoorImg, desc: "Rich in temples and wildlife sanctuaries." },
  { name: "EastGodavari", image: eastGodavariImg, desc: "Famous for Coringa Wildlife Sanctuary & Rajahmundry." },
  { name: "Eluru", image: eluruImg, desc: "Home to Kolleru Lake and ancient caves." },
  { name: "Guntur", image: gunturImg, desc: "Historic forts and bird sanctuaries." },
  { name: "Kakinada", image: kakinadaImg, desc: "Beaches and scenic islands await visitors." },
  { name: "Konaseema", image: konaseemaImg, desc: "Lush greenery, temples, and rivers." },
  { name: "Krishna", image: krishnaImg, desc: "Beaches and cultural heritage sites." },
  { name: "Kurnool", image: kurnoolImg, desc: "Belum caves and historical forts." },
  { name: "Nandyal", image: nandyalImg, desc: "Famous for temples and Nallamala forest." },
  { name: "NTR", image: ntrImg, desc: "Prakasam Barrage and scenic rivers." },
  { name: "Nellore", image: nelloreImg, desc: "Coastal beauty with beaches and lakes." },
  { name: "Palnadu", image: palnaduImg, desc: "Hills, forts, and waterfalls." },
  { name: "Prakasam", image: prakasamImg, desc: "Beaches and historical spots." },
  { name: "Srikakulam", image: srikakulamImg, desc: "Temples, beaches, and ancient sites." },
  { name: "SriSathyasai", image: srisathyasaiImg, desc: "Spiritual hub with famous ashrams." },
  { name: "Tirupati", image: tirupatiImg, desc: "Renowned for Tirumala temple & forts." },
  { name: "Visakhapatnam", image: visakhapatnamImg, desc: "Beaches, hills, and scenic valleys." },
  { name: "Vizianagaram", image: vizianagaramImg, desc: "Historic forts and reservoirs." },
  { name: "WestGodavari", image: westGodavariImg, desc: "Lakes, beaches, and temples." },
  { name: "YSRKadapa", image: ysrKadapaImg, desc: "Gandikota and ancient temples." },
];

function Districts() {
  const navigate = useNavigate();

  const handleClick = (districtName) => {
    navigate(`/places/${districtName}`);
  };

  return (
    <motion.div
      className="districts-page"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6 }}
    >
      <h1>Explore Districts</h1>
      <div className="district-grid">
        {districts.map((district, index) => (
          <div
            key={index}
            className="district-card"
            onClick={() => handleClick(district.name)}
          >
            <img
              src={district.image}
              alt={district.name}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                borderRadius: "10px",
                marginBottom: "12px",
              }}
            />
            <h2>{district.name}</h2>
            <p>{district.desc}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Districts;
