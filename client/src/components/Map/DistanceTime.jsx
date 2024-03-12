import React,{useContext} from 'react'
import DirectionDataContext from "../../context/DirectionDataContext";

const DistanceTIme = () => {
  const { directionData, setDirectionData } = useContext(DirectionDataContext);

  return directionData?.routes&&(
    <div className='p-2 d-flex align-items-center' style={{backgroundColor:'#4b46e8'}}>
      <h2 className='dishead'>
        Distance: <span className='mb-0' style={{color:'black'}}>{(
          directionData?.routes[0]?.distance*0.000621371192
        ).toFixed(2)} Miles </span>
        Duration: <span className='mb-0' style={{color:'black'}}>
          {(directionData?.routes[0]?.duration/60).toFixed(2)} Min
        </span>
      </h2>
    </div>
  )
}

export default DistanceTIme
