"use client";
import React from "react";
import data from "./cycle2.json";

interface Oeuvre {
  AUTEURS: string;
  TITRES: string;
  EDITEURS: string;
  NIVEAUX: string | number;
  CATEGORIES: string;
}

export default function Cycle2Page() {
  const oeuvres: Oeuvre[] = (data as Oeuvre[])
    .filter((o: Oeuvre) => o.AUTEURS !== null && o.TITRES !== null && o.EDITEURS !== null && o.NIVEAUX !== null && o.CATEGORIES !== null)
    .map((o: Oeuvre) => ({
      ...o,
      AUTEURS: o.AUTEURS ?? "",
      TITRES: o.TITRES ?? "",
      EDITEURS: o.EDITEURS ?? "",
      NIVEAUX: o.NIVEAUX ?? "",
      CATEGORIES: o.CATEGORIES ?? "",
    }));
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-blue-700">Oeuvres Cycle 2</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-xl shadow bg-white">
          <thead className="bg-blue-200">
            <tr>
              <th className="px-4 py-3 text-left text-blue-900 font-semibold border-b border-gray-300">Titre</th>
              <th className="px-4 py-3 text-left text-blue-900 font-semibold border-b border-gray-300">Auteurs</th>
              <th className="px-4 py-3 text-left text-blue-900 font-semibold border-b border-gray-300">Éditeur</th>
              <th className="px-4 py-3 text-left text-blue-900 font-semibold border-b border-gray-300">Niveau</th>
              <th className="px-4 py-3 text-left text-blue-900 font-semibold border-b border-gray-300">Catégorie</th>
            </tr>
          </thead>
          <tbody>
            {oeuvres.map((o, idx) => (
              <tr key={o.TITRES + o.AUTEURS + idx} className={idx % 2 === 0 ? "bg-white" : "bg-blue-50"}>
                <td className="px-4 py-3 font-semibold text-blue-900 border-b border-gray-200 align-top">{o.TITRES}</td>
                <td className="px-4 py-3 text-gray-900 border-b border-gray-200 align-top">{o.AUTEURS}</td>
                <td className="px-4 py-3 text-gray-900 border-b border-gray-200 align-top">{o.EDITEURS}</td>
                <td className="px-4 py-3 text-gray-900 border-b border-gray-200 align-top">{o.NIVEAUX}</td>
                <td className="px-4 py-3 text-gray-900 border-b border-gray-200 align-top">{o.CATEGORIES}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
