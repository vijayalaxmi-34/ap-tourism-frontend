import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

// --- Import all images ---
import bojjanaKonda from "../assets/bojjana_konda.jpg";
import kasimkotaFort from "../assets/kasimkota_fort.jpg";
import narsipatnamHills from "../assets/narsipatnam_hills.jpg";

import lepakshiTemple from "../assets/lepakshi_temple.jpg";
import penukondaFort from "../assets/penukonda_fort.jpg";
import puttaparthi from "../assets/puttaparthi.jpg";

import talakonaWaterfalls from "../assets/talakona_waterfalls.jpg";
import horsleyHills from "../assets/horsley_hills.jpg";
import madanapalle from "../assets/madanapalle.jpg";

import suryalankaBeach from "../assets/suryalanka_beach.jpg";
import bapatlaLighthouse from "../assets/bapatla_lighthouse.jpg";
import bhavanarayanaTemple from "../assets/bhavanarayana_temple.jpg";

import tiruttani from "../assets/tiruttani.jpg";
import kaundinyaSanctuary from "../assets/kaundinya_sanctuary.jpg";
import nagariHills from "../assets/nagari_hills.jpg";

import coringaSanctuary from "../assets/coringa_sanctuary.jpg";
import rajahmundry from "../assets/rajahmundry.jpg";
import papikondalu from "../assets/papikondalu.jpg";

import kolleruLake from "../assets/kolleru_lake.jpg";
import dwarakaTirumala from "../assets/dwaraka_tirumala.jpg";
import guntupalliCaves from "../assets/guntupalli_caves.jpg";

import amaravati from "../assets/amaravati.jpg";
import uppalapaduBirdSanctuary from "../assets/uppalapadu_sanctuary.jpg";
import kondaveeduFort from "../assets/kondaveedu_fort.jpg";

import hopeIsland from "../assets/hope_island.jpg";
import coringaKakinada from "../assets/coringa_kakinada.jpg";
import uppadaBeach from "../assets/uppada_beach.jpg";

import antarvediBeach from "../assets/antarvedi_beach.jpg";
import draksharamam from "../assets/draksharamam.jpg";
import ryaliTemple from "../assets/ryali_temple.jpg";

import machilipatnamBeach from "../assets/machilipatnam_beach.jpg";
import manginapudiBeach from "../assets/manginapudi_beach.jpg";
import ghantasala from "../assets/ghantasala.jpg";

import belumCaves from "../assets/belum_caves.jpg";
import oravakalluGarden from "../assets/oravakallu_garden.jpg";
import kondaReddyFort from "../assets/konda_reddy_fort.jpg";

import mahanandiTemple from "../assets/mahanandi_temple.jpg";
import ahobilam from "../assets/ahobilam.jpg";
import nallamalaForest from "../assets/nallamala_forest.jpg";

import prakasamBarrage from "../assets/prakasam_barrage.jpg";
import bhavaniIsland from "../assets/bhavani_island.jpg";
import kanakaDurgaTemple from "../assets/kanaka_durga_temple.jpg";

import mypaduBeach from "../assets/mypadu_beach.jpg";
import pulicatLake from "../assets/pulicat_lake.jpg";
import ranganathaTemple from "../assets/ranganatha_temple.jpg";

import nagarjunaSagar from "../assets/nagarjuna_sagar.jpg";
import ethipothalaFalls from "../assets/ethipothala_falls.jpg";
import macharla from "../assets/macharla.jpg";

import chandavaram from "../assets/chandavaram.jpg";
import kothapatnamBeach from "../assets/kothapatnam_beach.jpg";
import bhavanasiLake from "../assets/bhavanasi_lake.jpg";

import arasavalliTemple from "../assets/arasavalli_temple.jpg";
import baruvaBeach from "../assets/baruva_beach.jpg";
import kalingapatnam from "../assets/kalingapatnam.jpg";

import puttaparthiS from "../assets/puttaparthi_s.jpg";
import penukondaS from "../assets/penukonda_s.jpg";
import lepakshiS from "../assets/lepakshi_s.jpg";

import tirumalaTemple from "../assets/tirumala_temple.jpg";
import talakonaTirupati from "../assets/talakona_tirupati.jpg";
import chandragiriFort from "../assets/chandragiri_fort.jpg";

import rkBeach from "../assets/rk_beach.jpg";
import kailasagiri from "../assets/kailasagiri.jpg";
import arakuValley from "../assets/araku_valley.jpg";

import ramatheertham from "../assets/ramatheertham.jpg";
import vizianagaramFort from "../assets/vizianagaram_fort.jpg";
import tatipudiReservoir from "../assets/tatipudi_reservoir.jpg";

import dwarakaTirumalaW from "../assets/dwaraka_tirumala_w.jpg";
import perupalemBeach from "../assets/perupalem_beach.jpg";
import kolleruLakeW from "../assets/kolleru_lake_w.jpg";

import gandikota from "../assets/gandikota.jpg";
import ameenPeerDargah from "../assets/ameen_peer_dargah.jpg";
import pushpagiri from "../assets/pushpagiri.jpg";

// --- Full places data with Google Maps links ---
const placesData = {
  Anakapalli: [
    { name: "Bojjana Konda", image: bojjanaKonda, description: "Historic Buddhist site",
       mapUrl: "https://www.google.com/maps/search/Bojjana+Konda+Andhra+Pradesh" },
    { name: "Kasimkota Fort", image: kasimkotaFort, description: "Ancient fort", 
      mapUrl: "https://www.google.com/maps/search/Kasimkota+Fort+Andhra+Pradesh" },
    { name: "Narsipatnam Hills", image: narsipatnamHills, description: "Beautiful hills", 
      mapUrl: "https://www.google.com/maps/search/Narsipatnam+Hills+Andhra+Pradesh" },
  ],
  Anantapur: [
    { name: "Lepakshi Temple", image: lepakshiTemple, description: "Famous temple", 
      mapUrl: "https://www.google.com/maps/search/Lepakshi+Temple+Andhra+Pradesh" },
    { name: "Penukonda Fort", image: penukondaFort, description: "Historic fort", 
      mapUrl: "https://www.google.com/maps/search/Penukonda+Fort+Andhra+Pradesh" },
    { name: "Puttaparthi", image: puttaparthi, description: "Spiritual town", 
      mapUrl: "https://www.google.com/maps/search/Puttaparthi+Andhra+Pradesh" },
  ],
  Annamayya: [
    { name: "Talakona Waterfalls", image: talakonaWaterfalls, description: "Scenic waterfall",
       mapUrl: "https://www.google.com/maps/search/Talakona+Waterfalls+Andhra+Pradesh" },
    { name: "Horsley Hills", image: horsleyHills, description: "Hill station", 
      mapUrl: "https://www.google.com/maps/search/Horsley+Hills+Andhra+Pradesh" },
    { name: "Madanapalle", image: madanapalle, description: "Town area",
       mapUrl: "https://www.google.com/maps/search/Madanapalle+Andhra+Pradesh" },
  ],
  Bapatla: [
    { name: "Suryalanka Beach", image: suryalankaBeach, description: "Famous beach", 
      mapUrl: "https://www.google.com/maps/search/Suryalanka+Beach+Andhra+Pradesh" },
    { name: "Bapatla Lighthouse", image: bapatlaLighthouse, description: "Historic lighthouse",
       mapUrl: "https://www.google.com/maps/search/Bapatla+Lighthouse+Andhra+Pradesh" },
    { name: "Bhavanarayana Temple", image: bhavanarayanaTemple, description: "Ancient temple", 
      mapUrl: "https://www.google.com/maps/search/Bhavanarayana+Temple+Andhra+Pradesh" },
  ],
  Chittoor: [
    { name: "Tiruttani", image: tiruttani, description: "Historic town",
       mapUrl: "https://www.google.com/maps/search/Tiruttani+Andhra+Pradesh" },
    { name: "Kaundinya Wildlife Sanctuary", image: kaundinyaSanctuary, description: "Wildlife reserve", 
      mapUrl: "https://www.google.com/maps/search/Kaundinya+Wildlife+Sanctuary+Andhra+Pradesh" },
    { name: "Nagari Hills", image: nagariHills, description: "Scenic hills", 
      mapUrl: "https://www.google.com/maps/search/Nagari+Hills+Andhra+Pradesh" },
  ],
  EastGodavari: [
    { name: "Coringa Wildlife Sanctuary", image: coringaSanctuary, description: "Nature reserve",
       mapUrl: "https://www.google.com/maps/search/Coringa+Wildlife+Sanctuary+Andhra+Pradesh" },
    { name: "Rajahmundry", image: rajahmundry, description: "Cultural city",
       mapUrl: "https://www.google.com/maps/search/Rajahmundry+Andhra+Pradesh" },
    { name: "Papikondalu", image: papikondalu, description: "River hills", 
      mapUrl: "https://www.google.com/maps/search/Papikondalu+Andhra+Pradesh" },
  ],
  Eluru: [
    { name: "Kolleru Lake", image: kolleruLake, description: "Bird sanctuary", 
      mapUrl: "https://www.google.com/maps/search/Kolleru+Lake+Andhra+Pradesh" },
    { name: "Dwaraka Tirumala", image: dwarakaTirumala, description: "Temple town",
       mapUrl: "https://www.google.com/maps/search/Dwaraka+Tirumala+Andhra+Pradesh" },
    { name: "Guntupalli Caves", image: guntupalliCaves, description: "Ancient caves",
       mapUrl: "https://www.google.com/maps/search/Guntupalli+Caves+Andhra+Pradesh" },
  ],
  Guntur: [
    { name: "Amaravati", image: amaravati, description: "Historic capital", 
      mapUrl: "https://www.google.com/maps/search/Amaravati+Andhra+Pradesh" },
    { name: "Uppalapadu Bird Sanctuary", image: uppalapaduBirdSanctuary, description: "Bird watching", 
      mapUrl: "https://www.google.com/maps/search/Uppalapadu+Bird+Sanctuary+Andhra+Pradesh" },
    { name: "Kondaveedu Fort", image: kondaveeduFort, description: "Historic fort",
       mapUrl: "https://www.google.com/maps/search/Kondaveedu+Fort+Andhra+Pradesh" },
  ],
  Kakinada: [
    { name: "Hope Island", image: hopeIsland, description: "Island view",
       mapUrl: "https://www.google.com.maps/search/Hope+Island+Andhra+Pradesh" },
    { name: "Coringa Sanctuary", image: coringaKakinada, description: "Wildlife sanctuary",
       mapUrl: "https://www.google.com/maps/search/Coringa+Sanctuary+Andhra+Pradesh" },
    { name: "Uppada Beach", image: uppadaBeach, description: "Beach destination", 
      mapUrl: "https://www.google.com/maps/search/Uppada+Beach+Andhra+Pradesh" },
  ],
  Konaseema: [
    { name: "Antarvedi Beach", image: antarvediBeach, description: "Coastal beauty",
       mapUrl: "https://www.google.com/maps/search/Antarvedi+Beach+Andhra+Pradesh" },
    { name: "Draksharamam", image: draksharamam, description: "Historic temple",
       mapUrl: "https://www.google.com/maps/search/Draksharamam+Andhra+Pradesh" },
    { name: "Ryali Temple", image: ryaliTemple, description: "Famous temple",
       mapUrl: "https://www.google.com/maps/search/Ryali+Temple+Andhra+Pradesh" },
  ],
  Krishna: [
    { name: "Machilipatnam Beach", image: machilipatnamBeach, description: "Beach town",
       mapUrl: "https://www.google.com/maps/search/Machilipatnam+Beach+Andhra+Pradesh" },
    { name: "Manginapudi Beach", image: manginapudiBeach, description: "Sandy beach", 
      mapUrl: "https://www.google.com/maps/search/Manginapudi+Beach+Andhara+Pradesh" },
    { name: "Ghantasala", image: ghantasala, description: "Cultural village", 
      mapUrl: "https://www.google.com/maps/search/Ghantasala+Andhra+Pradesh" },
  ],
  Kurnool: [
    { name: "Belum Caves", image: belumCaves, description: "Cave system", 
      mapUrl: "https://www.google.com/maps/search/Belum+Caves+Andhra+Pradesh" },
    { name: "Oravakallu Rock Garden", image: oravakalluGarden, description: "Rock formations",
       mapUrl: "https://www.google.com/maps/search/Oravakallu+Rock+Garden+Andhra+Pradesh" },
    { name: "Konda Reddy Fort", image: kondaReddyFort, description: "Historic fort",
       mapUrl: "https://www.google.com/maps/search/Konda+Reddy+Fort+Andhra+Pradesh" },
  ],
  Nandyal: [
    { name: "Mahanandi Temple", image: mahanandiTemple, description: "Famous temple", mapUrl: "https://www.google.com/maps/search/Mahanandi+Temple+Andhra+Pradesh" },
    { name: "Ahobilam", image: ahobilam, description: "Temple complex", mapUrl: "https://www.google.com/maps/search/Ahobilam+Andhra+Pradesh" },
    { name: "Nallamala Forest", image: nallamalaForest, description: "Dense forest", mapUrl: "https://www.google.com/maps/search/Nallamala+Forest+Andhra+Pradesh" },
  ],
  NTR: [
    { name: "Prakasam Barrage", image: prakasamBarrage, description: "Water reservoir", mapUrl: "https://www.google.com/maps/search/Prakasam+Barrage+Andhra+Pradesh" },
    { name: "Bhavani Island", image: bhavaniIsland, description: "River island", mapUrl: "https://www.google.com.maps/search/Bhavani+Island+Andhra+Pradesh" },
    { name: "Kanaka Durga Temple", image: kanakaDurgaTemple, description: "Famous temple", mapUrl: "https://www.google.com/maps/search/Kanaka+Durga+Temple+Andhra+Pradesh" },
  ],
  Nellore: [
    { name: "Mypadu Beach", image: mypaduBeach, description: "Sunny beach", mapUrl: "https://www.google.com/maps/search/Mypadu+Beach+Andhra+Pradesh" },
    { name: "Pulicat Lake", image: pulicatLake, description: "Bird sanctuary", mapUrl: "https://www.google.com.maps/search/Pulicat+Lake+Andhra+Pradesh" },
    { name: "Ranganatha Temple", image: ranganathaTemple, description: "Historic temple", mapUrl: "https://www.google.com/maps/search/Ranganatha+Temple+Andhra+Pradesh" },
  ],
  Palnadu: [
    { name: "Nagarjuna Sagar", image: nagarjunaSagar, description: "Dam & reservoir", mapUrl: "https://www.google.com/maps/search/Nagarjuna+Sagar+Andhra+Pradesh" },
    { name: "Ethipothala Falls", image: ethipothalaFalls, description: "Waterfall", mapUrl: "https://www.google.com/maps/search/Ethipothala+Falls+Andhra+Pradesh" },
    { name: "Macharla", image: macharla, description: "Small village", mapUrl: "https://www.google.com.maps/search/Macharla+Andhra+Pradesh" },
  ],
  Prakasam: [
    { name: "Chandavaram", image: chandavaram, description: "Historic site", mapUrl: "https://www.google.com.maps/search/Chandavaram+Andhra+Pradesh" },
    { name: "Kothapatnam Beach", image: kothapatnamBeach, description: "Coastal beach", mapUrl: "https://www.google.com.maps/search/Kothapatnam+Beach+Andhra+Pradesh" },
    { name: "Bhavanasi Lake", image: bhavanasiLake, description: "Scenic lake", mapUrl: "https://www.google.com.maps/search/Bhavanasi+Lake+Andhra+Pradesh" },
  ],
  Srikakulam: [
    { name: "Arasavalli Temple", image: arasavalliTemple, description: "Ancient temple", mapUrl: "https://www.google.com.maps/search/Arasavalli+Temple+Andhra+Pradesh" },
    { name: "Baruva Beach", image: baruvaBeach, description: "Coastal beach", mapUrl: "https://www.google.com.maps/search/Baruva+Beach+Andhra+Pradesh" },
    { name: "Kalingapatnam", image: kalingapatnam, description: "Historic port", mapUrl: "https://www.google.com.maps/search/Kalingapatnam+Andhra+Pradesh" },
  ],
  SriSathyasai: [
    { name: "Puttaparthi", image: puttaparthiS, description: "Spiritual town", mapUrl: "https://www.google.com/maps/search/Puttaparthi+Andhra+Pradesh" },
    { name: "Penukonda", image: penukondaS, description: "Fort town", mapUrl: "https://www.google.com.maps/search/Penukonda+Andhra+Pradesh" },
    { name: "Lepakshi", image: lepakshiS, description: "Temple town", mapUrl: "https://www.google.com.maps/search/Lepakshi+Andhra+Pradesh" },
  ],
  Tirupati: [
    { name: "Tirumala Temple", image: tirumalaTemple, description: "Famous temple", mapUrl: "https://www.google.com.maps/search/Tirumala+Temple+Andhra+Pradesh" },
    { name: "Talakona Waterfalls", image: talakonaTirupati, description: "Waterfall spot", mapUrl: "https://www.google.com.maps/search/Talakona+Waterfalls+Andhra+Pradesh" },
    { name: "Chandragiri Fort", image: chandragiriFort, description: "Historic fort", mapUrl: "https://www.google.com.maps/search/Chandragiri+Fort+Andhra+Pradesh" },
  ],
  Visakhapatnam: [
    { name: "RK Beach", image: rkBeach, description: "Popular beach", mapUrl: "https://www.google.com/maps/search/RK+Beach+Visakhapatnam+Andhra+Pradesh" },
    { name: "Kailasagiri", image: kailasagiri, description: "Hilltop park", mapUrl: "https://www.google.com/maps/search/Kailasagiri+Visakhapatnam+Andhra+Pradesh" },
    { name: "Araku Valley", image: arakuValley, description: "Valley resort", mapUrl: "https://www.google.com.maps/search/Araku+Valley+Andhra+Pradesh" },
  ],
  Vizianagaram: [
    { name: "Ramatheertham", image: ramatheertham, description: "Temple site", mapUrl: "https://www.google.com.maps/search/Ramatheertham+Andhra+Pradesh" },
    { name: "Vizianagaram Fort", image: vizianagaramFort, description: "Historic fort", mapUrl: "https://www.google.com.maps/search/Vizianagaram+Fort+Andhra+Pradesh" },
    { name: "Tatipudi Reservoir", image: tatipudiReservoir, description: "Water reservoir", mapUrl: "https://www.google.com.maps/search/Tatipudi+Reservoir+Andhra+Pradesh" },
  ],
  WestGodavari: [
    { name: "Dwaraka Tirumala", image: dwarakaTirumalaW, description: "Temple town", mapUrl: "https://www.google.com/maps/search/Dwaraka+Tirumala+Andhra+Pradesh" },
    { name: "Perupalem Beach", image: perupalemBeach, description: "Beach destination", mapUrl: "https://www.google.com.maps/search/Perupalem+Beach+Andhra+Pradesh" },
    { name: "Kolleru Lake", image: kolleruLakeW, description: "Bird sanctuary", mapUrl: "https://www.google.com.maps/search/Kolleru+Lake+Andhra+Pradesh" },
  ],
  YSRKadapa: [
    { name: "Gandikota", image: gandikota, description: "Fort & canyon", mapUrl: "https://www.google.com/maps/search/Gandikota+Andhra+Pradesh" },
    { name: "Ameen Peer Dargah", image: ameenPeerDargah, description: "Historic dargah", mapUrl: "https://www.google.com/maps/search/Ameen+Peer+Dargah+Andhra+Pradesh" },
    { name: "Pushpagiri", image: pushpagiri, description: "Hill & temple", mapUrl: "https://www.google.com/maps/search/Pushpagiri+Andhra+Pradesh" },
  ],
};

function Places() {
  const { districtName } = useParams();
  const places = placesData[districtName];

  return (
    <motion.div
      className="places-page"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6 }}
    >
      <h1>Famous Places in {districtName}</h1>

      <div className="places-grid">
        {places ? (
          places.map((place, index) => (
            <div key={index} className="place-card">
              <img src={place.image} alt={place.name} />
              <h2>{place.name}</h2>
              <p>{place.description}</p>
              <a
                href={place.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-button"
              >
                View on Map
              </a>
            </div>
          ))
        ) : (
          <p>No places found</p>
        )}
      </div>
    </motion.div>
  );
}

export default Places;
