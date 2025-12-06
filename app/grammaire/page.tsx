
// Fonction pour lire le JSON côté serveur

import Navbar from '../components/Navbar';
import grammaireData from './grammaire.json';
import React from 'react';

type Theory = {
	title: string;
	content: string;
};

type Example = {
	sentence: string;
	explanation: string;
};

type Grammaire = {
	id: string;
	slug: string;
	title: string;
	level: string[];
	category: string;
	objectives: string[];
	theory: Theory[];
	examples: Example[];
};

export default function GrammairePage() {
	const grammaire: Grammaire = grammaireData[0];
	return (
		<>
		<Navbar />
		<main className="max-w-3xl mx-auto p-6">
			<h1 className="text-3xl font-bold mb-2">{grammaire.title}</h1>
			<div className="mb-4 flex gap-2 flex-wrap">
				{grammaire.level.map((lvl) => (
					<span
						key={lvl}
						className="inline-block px-2 py-1 text-xs font-semibold rounded bg-green-100 text-green-700 border border-green-300"
					>
						{lvl}
					</span>
				))}
				<span
					className="inline-block px-2 py-1 text-xs font-semibold rounded bg-gray-100 text-gray-700 border border-gray-300"
				>
					{grammaire.category}
				</span>
			</div>
			<section className="mb-6">
				<h2 className="text-xl font-semibold mb-2">Objectifs</h2>
				<ul className="list-disc list-inside">
					{grammaire.objectives.map((obj) => (
						<li key={obj}>{obj}</li>
					))}
				</ul>
			</section>
			<section className="mb-6">
				<h2 className="text-xl font-semibold mb-2">Théorie</h2>
				{grammaire.theory.map((t) => (
					<div key={t.title} className="mb-4">
						<h3 className="font-bold mb-1">{t.title}</h3>
						<p>{t.content}</p>
					</div>
				))}
			</section>
			<section>
				<h2 className="text-xl font-semibold mb-2">Exemples</h2>
				{grammaire.examples.map((ex) => (
					<div key={ex.sentence} className="mb-3 p-3 border rounded bg-blue-700">
						<p className="font-mono text-lg">{ex.sentence}</p>
						<p className="text-gray-50">{ex.explanation}</p>
					</div>
				))}
			</section>
		</main>
		</>
	);
}
