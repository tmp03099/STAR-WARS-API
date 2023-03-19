import axios from 'axios';

export const getAllStarships = async () =>{
    try{
        const response = await axios.get(`https://swapi.dev/api/starships/`);
        console.log(response);
        //convert data to json obj
        const data = response.data.results;
        return data;
    }catch(error){
        console.error(error);
    }
}
