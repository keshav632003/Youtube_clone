import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
const options = {
    url: BASE_URL,
    params: {maxResults :'50'},
    headers: {
      'X-RapidAPI-Key': 'f0932c6876msh04b312f681244ecp1709c7jsn2778c5fcf5fd',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI = async(url) =>{
    const {data} = await axios.get(`${BASE_URL}/${url}`, options)
    
    return data
  }