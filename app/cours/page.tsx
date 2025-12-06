"use client";
import coursData from './cours.json';
import Link from 'next/link';
import React from 'react';

interface Cours {
  id: string;
  slug: string;
  title: string;
  level: string[];
  category: string;
  objectives: string[];
}

export default function CoursTablePage() {
  const cours: Cours[] = coursData;
  const [selectedCategory, setSelectedCategory] = React.useState<string>('');
  const [page, setPage] = React.useState(1);
  const itemsPerPage = 10;
  const categories = Array.from(new Set(cours.map(c => c.category)));
  const filteredCours = selectedCategory ? cours.filter(c => c.category === selectedCategory) : cours;
  const pageCount = Math.ceil(filteredCours.length / itemsPerPage);
  const paginatedCours = filteredCours.slice((page - 1) * itemsPerPage, page * itemsPerPage);
  React.useEffect(() => { setPage(1); }, [selectedCategory]);
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-700 dark:text-blue-300">Liste des cours</h1>
      <div className="mb-4 flex flex-wrap gap-2 items-center">
        <label htmlFor="category" className="font-medium text-blue-700 dark:text-blue-300">Filtrer par catégorie :</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
          className="px-3 py-1 rounded border border-blue-300 bg-white dark:bg-zinc-900 text-blue-700 dark:text-blue-200 focus:outline-none"
        >
          <option value="">Toutes</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-xl shadow bg-zinc-100 dark:bg-zinc-900">
          <thead className="bg-blue-100 dark:bg-blue-900">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-blue-700 dark:text-blue-300">Titre</th>
              <th className="px-4 py-3 text-center font-semibold text-blue-700 dark:text-blue-300">Niveaux</th>
              <th className="px-4 py-3 text-center font-semibold text-blue-700 dark:text-blue-300">Catégorie</th>
              {/* Objectifs column removed */}
            </tr>
          </thead>
          <tbody>
            {paginatedCours.map((c, idx) => (
              <tr
                key={c.id}
                className={`transition-colors rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900 ${idx % 2 === 0 ? 'bg-white dark:bg-zinc-900' : 'bg-blue-50 dark:bg-zinc-800'}`}
              >
                <td className="px-4 py-3 text-left font-semibold text-blue-700 dark:text-blue-300">
                  <Link href={`/cours/${c.slug}`} className="hover:underline hover:text-blue-900 dark:hover:text-blue-100 transition-colors">
                    {c.title}
                  </Link>
                </td>
                <td className="px-4 py-3 text-center">
                  {c.level.map((lvl) => (
                    <span key={lvl} className="inline-block mr-1 mb-1 px-2 py-1 text-xs rounded bg-green-100 text-green-700 border border-green-300 dark:bg-green-900 dark:text-green-200 dark:border-green-700">
                      {lvl}
                    </span>
                  ))}
                </td>
                <td className="px-4 py-3 text-center">
                  <span className="inline-block px-2 py-1 text-xs rounded bg-gray-100 text-gray-700 border border-gray-300 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700">
                    {c.category}
                  </span>
                </td>
                {/* Objectifs cell removed */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination controls */}
      {pageCount > 1 && (
        <div className="flex justify-center items-center gap-2 mt-6">
          <button
            className="px-3 py-1 rounded bg-blue-100 text-blue-700 font-semibold border border-blue-300 hover:bg-blue-200 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            aria-label="Page précédente"
          >
            &lt;
          </button>
          {Array.from({ length: pageCount }, (_, i) => (
            <button
              key={i + 1}
              className={`px-3 py-1 rounded font-semibold border border-blue-300 transition-colors duration-150 ${page === i + 1 ? 'bg-blue-500 text-white' : 'bg-blue-50 text-blue-700 hover:bg-blue-200'}`}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? 'page' : undefined}
            >
              {i + 1}
            </button>
          ))}
          <button
            className="px-3 py-1 rounded bg-blue-100 text-blue-700 font-semibold border border-blue-300 hover:bg-blue-200 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => setPage(page + 1)}
            disabled={page === pageCount}
            aria-label="Page suivante"
          >
            &gt;
          </button>
        </div>
      )}
    </main>
  );
}
