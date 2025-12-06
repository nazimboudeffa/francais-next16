import Navbar from '../components/Navbar';
import React from 'react';

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="max-w-2xl mx-auto p-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Vocabulaire</h1>
        <p className="text-lg text-gray-600">Cette page est en cours de développement.</p>
      </main>
    </>
  );
}
