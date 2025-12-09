"use client";
import React from "react";
import data from "./6e.json";

interface Oeuvre {
  AUTEURS: string | null;
  TITRE: string;
  EDITEUR: string;
  ENJEU: string;
  DETAIL: string;
  GENRE: string;
  NIVEAU: string | null;
}

export default function SixiemePage() {
  const oeuvres: Oeuvre[] = data;
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-blue-700">Oeuvres 6e</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-xl shadow bg-white">
          <thead className="bg-blue-200">
            <tr>
              <th className="px-4 py-3 text-left text-blue-900 font-semibold border-b border-gray-300">Titre</th>
              <th className="px-4 py-3 text-left text-blue-900 font-semibold border-b border-gray-300">Auteurs</th>
              <th className="px-4 py-3 text-left text-blue-900 font-semibold border-b border-gray-300">Éditeur</th>
              <th className="px-4 py-3 text-left text-blue-900 font-semibold border-b border-gray-300">Enjeu</th>
              <th className="px-4 py-3 text-left text-blue-900 font-semibold border-b border-gray-300">Détail</th>
              <th className="px-4 py-3 text-left text-blue-900 font-semibold border-b border-gray-300">Genre</th>
              <th className="px-4 py-3 text-left text-blue-900 font-semibold border-b border-gray-300">Niveau</th>
            </tr>
          </thead>
          <tbody>
            {oeuvres.map((o, idx) => (
              <tr key={o.TITRE + o.AUTEURS + idx} className={idx % 2 === 0 ? "bg-white" : "bg-blue-50"}>
                <td className="px-4 py-3 font-semibold text-blue-900 border-b border-gray-200 align-top">{o.TITRE}</td>
                <td className="px-4 py-3 text-gray-900 border-b border-gray-200 align-top">{o.AUTEURS || <span className="italic text-gray-400">—</span>}</td>
                <td className="px-4 py-3 text-gray-900 border-b border-gray-200 align-top">{o.EDITEUR}</td>
                <td className="px-4 py-3 text-gray-900 border-b border-gray-200 align-top">{o.ENJEU}</td>
                <td className="px-4 py-3 text-gray-900 border-b border-gray-200 align-top">{o.DETAIL}</td>
                <td className="px-4 py-3 text-gray-900 border-b border-gray-200 align-top">{o.GENRE}</td>
                <td className="px-4 py-3 text-gray-900 border-b border-gray-200 align-top">{o.NIVEAU || <span className='italic text-gray-400'>—</span>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
