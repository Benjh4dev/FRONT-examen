'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_API_URL } from '../config/config';


function BookingTable({ userId }) {
    const [bookings, setBookings] = useState([]);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [filteredBookings, setFilteredBookings] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          let response;
          if (userId) {
            
            response = await axios.get(`${BASE_API_URL}/bookings/${userId}`);
          } else {
            
            response = await axios.get(`${BASE_API_URL}/bookings`);
          }
          
          const all = response.data;
          setBookings(all);
          setFilteredBookings(all);
        } catch (error) {
          console.error('Error al obtener las reservas:', error);
        }
      };
  
      fetchData();
  }, [userId]);

  useEffect(() => {
    if (startDate && endDate) {
      const filtered = bookings.filter((booking) => {
        const bookingDate = new Date(booking.fecha_in);
        return bookingDate >= new Date(startDate) && bookingDate <= new Date(endDate);
      });
      setFilteredBookings(filtered);
    } else {
      setFilteredBookings(bookings);
    }
  }, [startDate, endDate, bookings]);

    const handleDelete = async (id) => {
        console.log('Eliminando reserva');
        const response = await axios.delete(`${BASE_API_URL}/bookings/${id}`);
        console.log(response.data);
        const newBookings = bookings.filter((booking) => booking.id !== id);
        setBookings(newBookings);
        setFilteredBookings(newBookings);
    };
    



  return (
    <div className="w-full">
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex space-x-4">
          <div className="flex-grow">
            <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
              Fecha de Inicio:
            </label>
            <input
              type="date"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
            />
          </div>
          <div className="flex-grow">
            <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
              Fecha de Fin:
            </label>
            <input
              type="date"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="text-left">Tipo</th>
              <th className="text-left">User ID</th>
              <th className="text-left">FECHA INICIO</th>
              <th className="text-left">FECHA TERMINO</th>
              <th className="text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.map((booking) => (
              <tr key={booking.id}>
                <td className="py-2">{booking.type}</td>
                <td className="py-2">{booking.user_id}</td>
                <td className="py-2">{booking.fecha_in}</td>
                <td className="py-2">{booking.fecha_fin}</td>
                <td className="py-2 space-x-2">
                  
                  <button onClick={()=> handleDelete} className="px-3 py-1 bg-red-500 text-white rounded-lg">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BookingTable;
