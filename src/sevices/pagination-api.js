import axios from 'axios';

export const getPagination = async (starship) =>{
    console.log(starship)
    const respone = await axios.get(`${starship.url}?limit=10&offset=2`);
    const dataDetail = respone.data;
    console.log(dataDetail)
    return dataDetail;

}