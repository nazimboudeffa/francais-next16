"use client";
import Navbar from '../components/Navbar';
import references from './references.json';
import React from 'react';

interface Reference {
  oeuvre: string;
  auteur: string;
}

export default function ReferencesPage() {
  const refs: Reference[] = references;
  const [selectedAuteur, setSelectedAuteur] = React.useState<string>('');
  const auteurs = Array.from(new Set(refs.map(r => r.auteur))).sort((a, b) => a.localeCompare(b));
  const filteredRefs = selectedAuteur ? refs.filter(r => r.auteur === selectedAuteur) : refs;
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-blue-700 dark:text-blue-300">Toutes les références</h1>
        <div className="mb-4 flex flex-wrap gap-2 items-center">
          <label htmlFor="auteur" className="font-medium text-blue-700 dark:text-blue-300">Filtrer par auteur :</label>
          <select
            id="auteur"
            value={selectedAuteur}
            onChange={e => setSelectedAuteur(e.target.value)}
            className="px-3 py-1 rounded border border-blue-300 bg-white dark:bg-zinc-900 text-blue-700 dark:text-blue-200 focus:outline-none"
          >
            <option value="">Tous</option>
            {auteurs.map(a => (
              <option key={a} value={a}>{a}</option>
            ))}
          </select>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-zinc-900 rounded-lg shadow">
          {filteredRefs.map((ref, idx) => (
            <li key={ref.oeuvre + ref.auteur} className={`flex flex-col md:flex-row md:items-center justify-between px-4 py-3 ${idx % 2 === 0 ? 'bg-white dark:bg-zinc-900' : 'bg-blue-50 dark:bg-zinc-800'}`}>
              <span className="font-semibold text-blue-900 dark:text-blue-200">{ref.oeuvre}</span>
              <span className="italic text-gray-700 dark:text-gray-300">{ref.auteur}</span>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
