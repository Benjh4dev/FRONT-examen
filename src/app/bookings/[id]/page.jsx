'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_API_URL } from '@/app/config/config';
import BookingTable from '@/app/components/BookingsTable';

function BookID({ params }) {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = BASE_API_URL + 'bookings/' + params.id;
        const response = await axios.get(url);
        console.log(response.data)
        const data = response.data;
        setBookings(data);
      } catch (error) {
        console.error('Error al obtener las reservas:', error);
      }
    };

    fetchData();
  }, [params.id]);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Reservas del Usuario {params.id}</h1>
      <BookingTable bookings={bookings} userId={params.id} />
    </div>
  );
}

export default BookID;
