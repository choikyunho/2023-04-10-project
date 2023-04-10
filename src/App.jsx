import { useEffect, useState } from "react";
import {
  FaSun,
  FaCloudSun,
  FaCloud,
  FaCloudMeatball,
  FaCloudSunRain,
  FaCloudShowersHeavy,
  FaPooStorm,
  FaSnowflake,
  FaSmog,
} from "react-icons/fa";

const weatherIcon = {
  "01": <FaSun size={96} />,
  "02": <FaCloudSun size={96} />,
  "03": <FaCloud size={96} />,
  "04": <FaCloudMeatball size={96} />,
  "09": <FaCloudSunRain size={96} />,
  10: <FaCloudShowersHeavy size={96} />,
  11: <FaPooStorm size={96} />,
  13: <FaSnowflake size={96} />,
  50: <FaSmog size={96} />,
};

function App() {
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();

  const getGeolocation = async ()=>{
    try{
      navigator.geolocation.getCurrentPosition((position)=>{
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      },()=>{
        alert("위치 정보에 동의 해주셔야 합니다.")
      });

    }catch(error){
    console.error(error);
    }
  };

  useEffect(()=>{
    getGeolocation();
  },[])

  useEffect(()=>console.log(lat),[lat]);
  useEffect(()=>console.log(lon),[lon]);

  return (
    <div className="bg-red-100 min-h-screen flex justify-center items-center"></div>
  );
}

export default App;