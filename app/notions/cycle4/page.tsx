"use client";
import React from "react";
import data from "./cycle4.json";

interface Oeuvre {
	AUTEURS: string;
	TITRE: string;
	EDITEUR: string;
	CLASSE: string;
	ENJEU: string;
	DETAIL: string;
	GENRE: string;
	NIVEAUX?: string;
}

export default function Cycle4Page() {
	const [classe, setClasse] = React.useState<string>("");
	const oeuvres: Oeuvre[] = (data as Oeuvre[])
		.filter((o: Oeuvre) => o.AUTEURS && o.TITRE && o.EDITEUR && o.CLASSE && o.ENJEU && o.DETAIL && o.GENRE)
		.map((o: Oeuvre) => ({
			...o,
			AUTEURS: o.AUTEURS ?? "",
			TITRE: o.TITRE ?? "",
			EDITEUR: o.EDITEUR ?? "",
			CLASSE: o.CLASSE ?? "",
			ENJEU: o.ENJEU ?? "",
			DETAIL: o.DETAIL ?? "",
			GENRE: o.GENRE ?? "",
			NIVEAUX: o.NIVEAUX ?? "",
		}));
	const classes = Array.from(new Set(oeuvres.map(o => o.CLASSE).filter(c => c !== "")));
	const oeuvresFiltered = classe ? oeuvres.filter(o => o.CLASSE === classe) : oeuvres;
	return (
		<main className="max-w-6xl mx-auto p-6">
			<h1 className="text-2xl sm:text-3xl font-bold mb-6 text-blue-700 dark:text-blue-300">Liste de lecture du Cycle 4</h1>
			<div className="mb-4 flex items-center gap-4">
				<label htmlFor="classe-select" className="font-medium text-blue-700 dark:text-blue-300">Filtrer par classe :</label>
				<select
					id="classe-select"
					value={classe}
					onChange={e => setClasse(e.target.value)}
					className="px-3 py-1 rounded border border-blue-300 bg-white dark:bg-zinc-900 text-blue-700 dark:text-blue-200 focus:outline-none"
				>
					<option value="">Toutes</option>
					{classes.map((c, i) => (
						<option key={String(c) + '-' + i} value={c}>{c}</option>
					))}
				</select>
			</div>
			<div className="overflow-x-auto">
				<table className="min-w-full border border-gray-300 rounded-xl shadow bg-white">
					<thead className="bg-blue-200">
						<tr>
							<th className="px-4 py-3 text-left text-blue-900 font-semibold border-b border-gray-300">Titre</th>
							<th className="px-4 py-3 text-left text-blue-900 font-semibold border-b border-gray-300">Auteurs</th>
							<th className="px-4 py-3 text-left text-blue-900 font-semibold border-b border-gray-300">Éditeur</th>
							<th className="px-4 py-3 text-left text-blue-900 font-semibold border-b border-gray-300">Classe</th>
							<th className="px-4 py-3 text-left text-blue-900 font-semibold border-b border-gray-300">Genre</th>
							<th className="px-4 py-3 text-left text-blue-900 font-semibold border-b border-gray-300">Niveaux</th>
							<th className="px-4 py-3 text-left text-blue-900 font-semibold border-b border-gray-300">Enjeu</th>
							<th className="px-4 py-3 text-left text-blue-900 font-semibold border-b border-gray-300">Détail</th>
						</tr>
					</thead>
					<tbody>
						{oeuvresFiltered.map((o, idx) => (
							<tr key={o.TITRE + o.AUTEURS + idx} className={idx % 2 === 0 ? "bg-white" : "bg-blue-50"}>
								<td className="px-4 py-3 font-semibold text-blue-900 border-b border-gray-200 align-top">
									<a
										href={`https://www.google.com/search?q=${encodeURIComponent((o.TITRE || "") + (o.AUTEURS ? ' ' + o.AUTEURS : ''))}`}
										target="_blank"
										rel="noopener noreferrer"
										className="text-blue-700 underline hover:text-blue-900 hover:underline font-semibold transition-colors"
									>
										{o.TITRE}
									</a>
								</td>
								<td className="px-4 py-3 text-gray-900 border-b border-gray-200 align-top">{o.AUTEURS}</td>
								<td className="px-4 py-3 text-gray-900 border-b border-gray-200 align-top">{o.EDITEUR}</td>
								<td className="px-4 py-3 text-gray-900 border-b border-gray-200 align-top">{o.CLASSE}</td>
								<td className="px-4 py-3 text-gray-900 border-b border-gray-200 align-top">{o.GENRE}</td>
								<td className="px-4 py-3 text-gray-900 border-b border-gray-200 align-top">{o.NIVEAUX}</td>
								<td className="px-4 py-3 text-gray-900 border-b border-gray-200 align-top">{o.ENJEU}</td>
								<td className="px-4 py-3 text-gray-900 border-b border-gray-200 align-top">{o.DETAIL}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</main>
	);
}
