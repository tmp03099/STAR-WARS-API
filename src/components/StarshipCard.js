import { Button } from 'react-bootstrap';
import { getPagination } from '../sevices/pagination-api';

function StarShipCard({starship, setDetail}){

    const handleClick = async() =>{
        const data = await getPagination(starship);
        setDetail(data);
        return data;
    }

    return (
        <div>
            <Button onClick={handleClick}>{starship.name}</Button>
        </div>
    )
}
export default StarShipCard;