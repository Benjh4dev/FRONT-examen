'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_API_URL } from '../config/config';
import Link from 'next/link';

function UserTable() {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BASE_API_URL}/users`);
      const data = response.data;
      setUsers(data);
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    console.log('Eliminando usuario');
    const response = await axios.delete(`${BASE_API_URL}/users/${id}`);
    fetchData();
  };

  return (
    <div className="w-full p-4 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-semibold mb-4">Lista de Usuarios</h1>
      <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left p-2">Name</th>
            <th className="text-left p-2">Email</th>
            <th className="text-left p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className="p-2">{user.name}</td>
              <td className="p-2">{user.email}</td>
              <td className="p-2 space-x-2">
                <button className="text-red-500 hover:text-red-700" onClick={() => handleDelete(user.id)}>
                  Eliminar
                </button>
                <Link href={`/bookings/${user.id}`}>Ver Reservas</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
