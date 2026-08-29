import InfoBox from './InfoBox'
import SearchBox from './SearchBox'

import { useState } from 'react';


const WeatherApp = () => {
    let [data, setData] = useState({});

    let handleSetData = (result)=>{
        setData(result);
    }
 
  return (
    <div style={{textAlign:"center"}}>
        <SearchBox handleSetData={handleSetData}/>
        <hr />
        <h1>{Date().split(" ").slice(0,4).join("-")}</h1>
            <div style={{display:"flex", justifyContent:"center"}}>
              <InfoBox info={data}/>
            </div>
    </div>
  )
}

export default WeatherApp