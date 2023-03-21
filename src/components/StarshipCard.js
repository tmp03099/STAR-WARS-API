import  Button  from 'react-bootstrap/Button';
import { useState } from 'react';
import StarShipDetail from './StarShipDetail';

function StarShipCard({starship}){

    const [showDetails, setDetails] = useState(false);

    const handleClick = () =>{
        if (showDetails === false) {
            setDetails(true);
        } else {
            setDetails(false);
        }
        
    }

    return (
        <div className="col-2 m-5">
            <div className="container w-100 h-100 py-4 ">
                <Button onClick={handleClick} variant="light" className="bg-transparent border border-0 border-bottom text-white text-bolder fs-5">{starship.name}</Button>
                {showDetails && <StarShipDetail starship={starship}/>}
            </div>
            
        </div>
    )
}
export default StarShipCard;