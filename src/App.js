import { getAllStarships } from './sevices/sw-api';
import { useState, useEffect } from 'react';
import StarShipCard from './components/StarshipCard';
import './App.css';

function App() {
  //store starships data
  const [starship, setStarship] = useState([]);

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
      {starship.map((item,idx)=>(
        <StarShipCard starship={item} key={idx}/>
      ))}
    </div>
  );
}

export default App;
