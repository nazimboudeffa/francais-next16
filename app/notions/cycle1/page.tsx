"use client";
import React from "react";
import data from "./cycle1.json";

interface Oeuvre {
  AUTEURS: string | null;
  ILLUSTRATEURS: string | null;
  TITRE: string;
  EDITEUR: string;
  NIVEAUX: string | number;
  THEME: string;
}

export default function Cycle1Page() {
  const oeuvres: Oeuvre[] = data;
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-blue-700 dark:text-blue-300">Liste de lecture du Cycle 1</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-xl shadow bg-white">
          <thead className="bg-blue-200">
            <tr>
              <th className="px-4 py-3 text-left text-blue-900 font-semibold border-b border-gray-300">Titre</th>
              <th className="px-4 py-3 text-left text-blue-900 font-semibold border-b border-gray-300">Auteurs</th>
              <th className="px-4 py-3 text-left text-blue-900 font-semibold border-b border-gray-300">Illustrateurs</th>
              <th className="px-4 py-3 text-left text-blue-900 font-semibold border-b border-gray-300">Éditeur</th>
              <th className="px-4 py-3 text-left text-blue-900 font-semibold border-b border-gray-300">Niveau</th>
              <th className="px-4 py-3 text-left text-blue-900 font-semibold border-b border-gray-300">Thème</th>
            </tr>
          </thead>
          <tbody>
            {oeuvres.map((o, idx) => (
              <tr key={o.TITRE + o.AUTEURS + idx} className={idx % 2 === 0 ? "bg-white" : "bg-blue-50"}>
                <td className="px-4 py-3 font-semibold text-blue-900 border-b border-gray-200 align-top">
                  <a
                    href={`https://www.google.com/search?q=${encodeURIComponent(o.TITRE + (o.AUTEURS ? ' ' + o.AUTEURS : ''))}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 underline hover:text-blue-900 hover:underline font-semibold transition-colors"
                  >
                    {o.TITRE}
                  </a>
                </td>
                <td className="px-4 py-3 text-gray-900 border-b border-gray-200 align-top">{o.AUTEURS || <span className="italic text-gray-400">—</span>}</td>
                <td className="px-4 py-3 text-gray-900 border-b border-gray-200 align-top">{o.ILLUSTRATEURS || <span className="italic text-gray-400">—</span>}</td>
                <td className="px-4 py-3 text-gray-900 border-b border-gray-200 align-top">{o.EDITEUR}</td>
                <td className="px-4 py-3 text-gray-900 border-b border-gray-200 align-top">{o.NIVEAUX}</td>
                <td className="px-4 py-3 text-gray-900 border-b border-gray-200 align-top">{o.THEME}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
