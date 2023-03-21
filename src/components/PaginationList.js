import Pagination from 'react-bootstrap/Pagination';
import { getPagination } from '../sevices/pagination-api';

function PaginationList({setStarship}){

    const handlePagination = async(number) =>{
        const data = await getPagination(number);
        setStarship(data);
    }

    let active = 1;
    let items = [];
    for (let number = 1; number <= 4 ;number++) {
        items.push(
            <Pagination.Item key={number} active={number === active} onClick={()=> handlePagination(number)}>
            {number}
            </Pagination.Item>
        );
    }


    return(
        <>
            <Pagination>{items}</Pagination>
        </>
    )

}
export default PaginationList;