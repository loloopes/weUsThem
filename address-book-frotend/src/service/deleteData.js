import axios from 'axios';

export default async function deleteData(info) {
  try {
    const result = await axios.delete('http://localhost:3001/person/remove', {data: { name: info}});
    console.log(result)
  } catch (err) {
    console.log(err);
  }
}