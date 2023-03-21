import axios from 'axios';

export const getPagination = async (page) =>{

    const respone = await axios.get(`https://swapi.dev/api/starships/?page=${page}`);
    const dataDetail = respone.data.results;
    console.log(dataDetail)
    return dataDetail;

}