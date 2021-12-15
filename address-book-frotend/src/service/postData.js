import axios from 'axios';

export default async function postData(info) {
  try {
    const result = await axios.post('http://localhost:3001/person/create', info);
    console.log(result)
  } catch (err) {
    console.log(err);
  }
}