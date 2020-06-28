import axios from 'axios';

const fetchData = async () => {
    const response =  await  axios.get('http://localhost:5000/petitions', {
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Access-Control-Allow-Credentials': 'true'
        }
    });
    
    return response.data;
}
export { fetchData };