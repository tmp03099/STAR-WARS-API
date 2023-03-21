import { getAllStarships } from './sevices/sw-api';
import { useState, useEffect } from 'react';
import StarShipCard from './components/StarshipCard';
import './App.css';
import PaginationList from './components/PaginationList';

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
      <h1 className="">STAR WARS STARSHIPS</h1>
      <div className="d-flex flex-lg-row flex-wrap align-item-center mb-5">
        {starship.map((item,idx)=>(
          <StarShipCard starship={item} key={idx}/>
        ))}

      </div>
      
      <PaginationList setStarship={setStarship}/>

    </div>
  );
}

export default App;
