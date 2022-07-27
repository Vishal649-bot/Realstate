import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
        'x-rapidapi-host': 'bayut.p.rapidapi.com',
        'x-rapidapi-key': '598a7f2e25mshaa720f8d2dbffa9p1740e9jsnd4f8c16af277'
    },
  });
    
  return data;
}


