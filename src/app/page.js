import Image from 'next/image'
import { BASE_API_URL } from './config/config'
import axios from "axios"

export default async function Home() {
  try {
    const url = BASE_API_URL + 'users';
    const response = await axios.get(url);
    if (response.status == 200) {
      console.log("status 200")

    }
    const users = response.data;
  } catch (error) {
    console.log(error)
  }



  return (
    <h1 className='flex justify-center items-center mt-4'> Examen:   </h1>
  )
}
