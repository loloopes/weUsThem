import axios from 'axios';

export default async function postData(info) {
  try {
    const result = await axios.put('http://localhost:3001/person/update', info);
    console.log(result)
  } catch (err) {
    console.log(err);
  }
}