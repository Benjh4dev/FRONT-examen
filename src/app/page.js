import Image from 'next/image'
import { BASE_API_URL } from './config/config'
import axios from "axios"
import BookingTable from './components/BookingsTable'
import UserTable from './components/UserTable'

export default async function Home() {
  

  return (
    <UserTable />
  )
}
