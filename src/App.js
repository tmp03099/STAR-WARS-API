import { getAllStarships } from './sevices/sw-api';
import { useState, useEffect } from 'react';
import StarShipCard from './components/StarshipCard';
// import  Button  from 'react-bootstrap/Button';
import './App.css';
// import { getPagination } from './sevices/pagination-api';
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

  // const button1 = async() => {
  //   const data = await getPagination(1);
  //   setStarship(data);
  // }

  // const button2 = async() => {
  //   const data = await getPagination(2);
  //   setStarship(data);
  // }

  // const button3 = async() => {
  //   const data = await getPagination(3);
  //   setStarship(data);
  // }

  // const button4 = async() => {
  //   const data = await getPagination(4);
  //   setStarship(data);
  // }

  return (
    <div className="App">
      <h1 className="">STAR WARS STARSHIPS</h1>
      <div className="d-flex flex-lg-row flex-wrap align-item-center mb-5">
        {starship.map((item,idx)=>(
          <StarShipCard starship={item} key={idx}/>
        ))}

      </div>
      
      <PaginationList setStarship={setStarship}/>
      {/* <Button onClick={button1}> Page 1 </Button>
      <Button onClick={button2}> Page 2 </Button>
      <Button onClick={button3}> Page 3 </Button>
      <Button onClick={button4}> Page 4 </Button> */}

      
    </div>
  );
}

export default App;
