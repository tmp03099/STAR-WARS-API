import { getAllStarships } from './sevices/sw-api';
import { useState, useEffect } from 'react';
import StarShipCard from './components/StarshipCard';
import StarShipDetail from './components/StarShipDetail';
import './App.css';

function App() {
  //store starships data
  const [starship, setStarship] = useState([]);

  const [ detail, setDetail ] = useState({});

  useEffect(() => {
    const axiosData = async() =>{
      const data = await getAllStarships();
      setStarship(data);
      console.log(data);
    }
    axiosData();
    
  },[])

  return (
    <div className="App">
      <h1>STAR WARS STARSHIPS</h1>
      {starship.map((item,idx)=>(
        <StarShipCard starship={item} key={idx} idx={idx} setDetail={setDetail}/>
      ))}
      <StarShipDetail detail={detail} />
    </div>
  );
}

export default App;
