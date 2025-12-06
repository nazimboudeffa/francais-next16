"use client";

// Fonction pour lire le JSON côté serveur
import { useParams } from "next/navigation";
import Navbar from '../../components/Navbar';
import cours from '../cours.json';
import React from 'react';

export default function CoursePage() {
	const params = useParams();
	const coursData = cours.find(t => t.slug === params.slug);
	if (!coursData) {
		return <main className="p-8">Cours introuvable.</main>;
	}
	return (
		<>
		<Navbar />
		<main className="max-w-3xl mx-auto p-6">
			<h1 className="text-3xl font-bold mb-2">{coursData.title}</h1>
			<div className="mb-4 flex gap-2 flex-wrap">
				{coursData.level.map((lvl) => (
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
					{coursData.category}
				</span>
			</div>
			<section className="mb-6">
				<h2 className="text-xl font-semibold mb-2">Objectifs</h2>
				<ul className="list-disc list-inside">
					{coursData.objectives.map((obj) => (
						<li key={obj}>{obj}</li>
					))}
				</ul>
			</section>
			<section className="mb-6">
				<h2 className="text-xl font-semibold mb-2">Théorie</h2>
				{coursData.theory.map((t) => (
					<div key={t.title} className="mb-3 p-3 bg-purple-300 text-blue-700">
						<h3 className="font-bold mb-1">{t.title}</h3>
						<p>{t.content}</p>
					</div>
				))}
			</section>
			<section>
				<h2 className="text-xl font-semibold mb-2">Exemples</h2>
				{coursData.examples.map((ex) => (
					<div key={ex.sentence} className="mb-3 p-3 border rounded bg-blue-300 text-blue-700">
						<p className="text-lg">{ex.sentence}</p>
						<p className="text-blue-900">{ex.explanation}</p>
					</div>
				))}
			</section>
		</main>
		</>
	);
}
